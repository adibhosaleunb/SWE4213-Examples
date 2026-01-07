# Activity 1: Learning HTML, CSS, and JS 
The goal of this activity is to get experience with HTML, CSS, and JS. 

**Todo 1:** In `index.html` wrap the img and p tags in a div so they are bounded by the same container.

<details>
  <summary>Reveal Answer</summary>

```HTML
<div class="photo-container">
    <img id="photo" src="https://picsum.photos/600/400" alt="A random placeholder image" />
    
    <p>
    This is a simple webpage made with HTML (structure) and CSS (style). The
    image above is loaded from a URL.
    </p>
    
    <p class="p-red" id="demo">
    Demonstrating that I can update a certain class.
    </p>
</div>
```
</details>
<br>

**Todo 2:** In `styling.css` center everything horizontally on the screen (including text).

<details>
  <summary>Reveal Answer</summary>

```CSS
body {
    background-color: gray;

    /* Center Content Horizontally */
    /* Children laid out in Flexbox layout system */
    display: flex;
    /* Stacks chidlren vertically */
    flex-direction: column; 
    /* Centers chidlren along horizontal axis */
    align-items: center;

    /* Center all text */
    text-align: center;
}
```
</details>
<br>

**Todo 3:** In `styling.css` add style for the div you created above so that the text and image are the same width. Hint: This should only take one attribute.

<details>
  <summary>Reveal Answer</summary>

```CSS
.photo-container {
    max-width: 400px;
}

```
</details>
<br>

**Todo 4:** In `script.js` create a reference to the imageCountLabel.

<details>
  <summary>Reveal Answer</summary>

```js
const label = document.getElementById("imageCountLabel");
```
</details>
<br>

**Todo 5:** In `script.js` update the image count and the label with the count variable.

<details>
  <summary>Reveal Answer</summary>

```js
btn.addEventListener("click", () => {
  // Add a unique query string to avoid cached images
  img.src = `https://picsum.photos/600/400?random=${Date.now()}`;

  // Update the image count and update the label
  imageCount++;
  label.textContent = `Number of Images Shown: ${imageCount}`;
});
```
</details>
<br>