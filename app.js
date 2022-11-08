//create element
const word = document.createElement('word');

//add class
word.className='collection-item';

//add attribute
word.setAttribute('title', 'New Item');

//Create text node and append

word.appendChild(document.createTextNode('test'))

//Append
document.querySelector()

//set local storage item

window.localStorage.setItem("word","word");
let word = localStorage.getItem('word');
console.log(word);