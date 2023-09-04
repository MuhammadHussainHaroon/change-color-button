

const div = document.querySelector('div')
const body = document.querySelector('body')
const array = ["red", "green", "blue", "pink" , 'yellow' , 'purple' , 'white'];
for(i = 0; i < array.length; i++){
div.innerHTML += `<button onclick="changecolors(${i})">${array[i]}</button>`
}
  function changecolors(i) {
    body.style.backgroundColor = `${array[i]}`;
}
