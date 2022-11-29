// - Wyswietlic na kartkach flashcardsach

// - Zdobyc aktualna liste slow
// - Ten obiekt musimy dodac do listy slow
// - Ta liste zapisac na localStorage


// - Wyswietlic na kartkach flashcardsach


// - Zdobyc aktualna liste slow
// - Ten obiekt musimy dodac do listy slow
// - Ta liste zapisac na localStorage


//Pobrac slowo i definicje
function getFlashcardValues() {
  word = document.querySelector('#add-word').value;
  definition = document.querySelector('#add-definition').value;
  //Utworzyc obiekt ze slowem i definicja
  obj = {
    word:word,
    definition:definition
  };
  console.log(obj.word);
  console.log(obj.definition);
  return obj;
}

//Utworz zmienna flashcard (slowo + definicja)
let flashcard = getFlashcardValues();

//Utworz liste flashcards
let wordsList = [];
wordsList.push(obj.word);

//Utworz localStorage
function addToLocalStorage() {
  localStorage.setItem('wordsList',JSON.stringify(wordsList));
  }


//Utworz localStorage
//Nie dziala 
/*
function addToLocalStorage() {
localStorage.setItem('word',JSON.stringify(obj));
localStorage.setItem('definition',JSON.stringify(obj));
}
*/


