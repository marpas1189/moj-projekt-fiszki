function getFlashcardValues() {
  const word = document.getElementById('add-word').value;
  const definition = document.getElementById('add-definition').value;

  console.log(word);
  console.log(definition);

  // - zebrac i dodac do obiektu
  let obj = {
    word: word,
    definition: definition,
  };

  console.log(obj);

  return obj;
}

function storeInLocalStorage() {
  // - Bierzemy wartoci uzytkownika
  let flashcard = getFlashcardValues();

  // - zapisac na localStorage
  localStorage.setItem('word', JSON.stringify(flashcard));
}

function showStorage() {
  let flashcard = localStorage.getItem('word');
  flashcard = JSON.parse(flashcard);

  console.log(flashcard.word, flashcard.definition);
}

// - Wyswietlic na kartkach flashcardsach
