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
  const word = document.querySelector('#add-word').value;
  const definition = document.querySelector('#add-definition').value;
  //Utworzyc obiekt ze slowem i definicja
  let obj = {
    word:word,
    definition:definition
  }
  return obj;
}
//Utworz zmienna flashcard (slowo + definicja)
//let flashcard = getFlashcardValues();

//Utworz localStorage
// word is not defined at addToLocalStorage at HTMLButtonElement.onclick 
function addToLocalStorage() {
localStorage.setItem('word',JSON.stringify(word));
localStorage.setItem('definition',JSON.stringify(definition));
}



