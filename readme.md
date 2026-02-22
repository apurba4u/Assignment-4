1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
2. How do you create and insert a new element into the DOM?
3. What is Event Bubbling? And how does it work?
4. What is Event Delegation in JavaScript? Why is it useful?
5. What is the difference between preventDefault() and stopPropagation() methods?

Ans 1 =>
getElementById ==> it's help to get id related stuff
getElementsByClassName ==> it's help to get class related
querySelector ==> its helps to get class, id, tag by use symbol (., #)
querySelectorAll ==> it helps to get all common in a particular segment

Ans 2 =>
let's understand this with example
document.createElement() ==> it's help to create new Element
appendChild() / append() ==> it's help to push data insert the specific element
sample code:

```
const newDiv = document.createElement("div");
newDiv.textContent = "My name is Ovi";
document.getElementById("container").appendChild(newDiv);
```

Ans 3 ==>
Event bubbling means : it goes to the child through parent --> bottom to up
sample code:

```
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked");
});
```

Ans 4 ==>
Event Delegation : I put parent in EventListener to handle child task.
sample code:

```
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

<script>
document.getElementById("list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
</script>
```

Ans 5 ==>
preventDefault() : it stop instant form reload
stopPropagation() : it helps to stop Event Bubbling and Capturing

```
<a href="https://google.com" id="link">Go</a>

<script>
document.getElementById("link").addEventListener("click", function(e) {
  e.preventDefault();      // formally stop
  e.stopPropagation();     // it stop at child
  console.log("Clicked!");
});
</script>
```
