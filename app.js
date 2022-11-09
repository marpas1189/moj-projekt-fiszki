// - Wyswietlic na kartkach flashcardsach
// - Bierzemy wartoci uzytkownika
// - Zebrac i dodac do obiektu
// - Zdobyc aktualna liste slow
// - Ten obiekt musimy dodac do listy slow
// - Ta liste zapisac na localStorage

setFlashcardValues(getFromStorage());

// function showAvailableFlashcards() {
//   let flashcard = localStorage.getItem('word');
//   flashcard = JSON.parse(flashcard);
//   console.log('Z localStorage: ', flashcard.word, flashcard.definition);
// }

function setFlashcardsValues(flashcards) {
  // TODO: Zamienic wszystkie obiekty z listy na fiszki
  document.getElementById('word1').innerHTML = flashcard.word;
  document.getElementById('def1').innerHTML = flashcard.definition;
}

function addToLocalStorage() {
  // - Bierzemy wartoci uzytkownika
  let flashcard = getFlashcardValues();
  // - zapisac na localStorage

  // TODO: Kiedy inicjowac liste? Ma pochodzic z localStorage
  let wordsList = [];
  wordsList.push(flashcard);

  localStorage.setItem('wordsList', JSON.stringify(wordsList));

  // TODO: Dodac pojedynczy obiekt do listy czyli zrobic update istniejacej
}

function getFlashcardValues() {
  const word = document.getElementById('add-word').value;
  const definition = document.getElementById('add-definition').value;
  // - zebrac i dodac do obiektu
  return {
    word: word,
    definition: definition,
  };
}

function getFromStorage() {
  let flashcard = localStorage.getItem('wordsList');
  flashcardsList = JSON.parse(flashcard);

  console.log(flashcardsList[0].word, flashcardsList[0].definition);
  return flashcardsList;
}
