const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = process.env.PORT || 5000;

const pool = new Pool({
  connectionString: process.env.DB_URL,
});

app.post("/videos/:id/viewed", async (req, res) => {
  const videoId = parseInt(req.params.id);
  await pool.query(
    `INSERT INTO view_history (video_id, view_count)
     VALUES ($1, 1)
     ON CONFLICT (video_id)
     DO UPDATE SET view_count = view_history.view_count + 1`,
    [videoId]
  );
  res.json({ videoId, message: "View recorded" });
});

app.get("/videos/:id/views", async (req, res) => {
  const videoId = parseInt(req.params.id);
  const result = await pool.query(
    "SELECT view_count FROM view_history WHERE video_id = $1",
    [videoId]
  );
  const views = result.rows.length > 0 ? result.rows[0].view_count : 0;
  res.json({ videoId, views });
});

app.listen(port, () => {
  console.log(`History service listening on port ${port}`);
});
