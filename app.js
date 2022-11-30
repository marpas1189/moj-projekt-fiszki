// - Zdobyc aktualna liste slow
// - Wyswietlic na kartkach flashcardsach
// - Zdobyc nowe slowo
// - Zapisac na localStorage jako dodatkowy element

// GLOBAL SCOPE
let WORDS_LIST = JSON.parse(localStorage.getItem('wordsList'));
let FORBIDDEN_WORDS = ['pupa', 'middle finger'];

if (!WORDS_LIST) {
  WORDS_LIST = [];
}

function addNewFlashcard() {
  // LOCAL SCOPE
  // Utworz zmienna flashcard (slowo + definicja)
  let flashcard = getFlashcardValues();
  WORDS_LIST.push(flashcard);
  updateLocalStorage();
}

function removeLastFlashcard() {
  console.log('Czyszczenie');
  // WORDS_LIST.pop();
  WORDS_LIST = WORDS_LIST.filter((obj) => !FORBIDDEN_WORDS.includes(obj.word));
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem('wordsList', JSON.stringify(WORDS_LIST));
}

function editFlashcard() {
  console.log('Edytowanie');
}

//Pobrac slowo i definicje
function getFlashcardValues() {
  // Sprawdzic z ciekawosci trzeci lokalny scope i kolejnosc wywolywania
  thirdScope();
  // LOCAL SCOPE
  let WORD = document.querySelector('#add-word').value;
  let DEFINITION = document.querySelector('#add-definition').value;
  // Utworzyc obiekt ze slowem i definicja

  return {
    word: WORD,
    definition: DEFINITION,
  };
}

function thirdScope() {
  console.log('Trzeci scope lokalny, wywolywanie');
}


