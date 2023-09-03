

const div = document.querySelector('ul')
const body = document.querySelector('body')
const array = ["red", "green", "blue", "pink"];
div.innerHTML += `<button onclick="changecolors()">${array[0]}</button>
<button onclick="changecolors1()">${array[1]}</button>
 <button onclick="changecolors2()">${array[2]}</button>
  <button onclick="changecolors3()">${array[3]}</button>`
  function changecolors() {
    body.style.backgroundColor = "red";
}
function changecolors1() {
  body.style.backgroundColor = "green";
}
function changecolors2() {
  body.style.backgroundColor = "blue";
}
function changecolors3() {
  body.style.backgroundColor = "pink";
}