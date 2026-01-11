# Activity 3: Learning Express 
The goal of this activity is to get experience building an API with Express.js.

## Activity 3.1 - Create Hello World Express App

**Todo 1:** Initialize your project.

`npm init –y`

**Todo 2:** Install express.

`npm i express`

**Todo 3:** Create a server.js file. This is the entrypoint into your API. Note this could be called whatever you want. 

**Todo 4:** Install nodemon as a dev dependency. Installing it as a dev dependency means it won't get built into the project when you go to deploy it. Nodemon makes our lives much easier by enabling live reloading during development. 

`npm i --save-dev nodemon`

**Todo 5:** Add a script to package.json so that you can easily run your project using nodemon. 

```JSON
{
  "name": "activity3",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "express": "^5.2.1"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}
```

**Todo 6:** In `server.js` create an express app and return Hello World! when people hit the `/` endpoint. You should serve your api at port 3000.

<details>
  <summary>Reveal Answer</summary>

```JS
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port)
```
</details>
<br>

## Activity 3.2 - Create Products Endpoint 