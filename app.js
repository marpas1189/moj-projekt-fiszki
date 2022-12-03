// DONE:
// - Zdobyc aktualna liste slow
// - Zdobyc nowe slowo
// - Zapisac na localStorage jako dodatkowy element

// TODO:
// - Zablokowac dodawanie brzydkich slow + alert
// (jakiś 'if' zwracający nic w przypadku zlego slowa)
// - Wyswietlic na kartkach flashcardsach
// (Jakas funkcja która wywoływana jest globalnie po załadowaniu listy słów z naszej Bazy Danych)

// GLOBAL SCOPE VARIABLES
let WORDS_LIST = JSON.parse(localStorage.getItem('wordsList'));
let FORBIDDEN_WORDS = ['pupa', 'middle finger'];

if (!WORDS_LIST) {
  WORDS_LIST = [];
}

// function loadFlashcardsOntoHTLM(){}


function addNewFlashcard() {
  // LOCAL SCOPE
  // Utworz zmienna flashcard (slowo + definicja)
  let flashcard = getFlashcardValues();
  if (WORDS_LIST.includes(FORBIDDEN_WORDS))
  {
    alert("Niedozwolone slowo");
    WORDS_LIST.pop();
  }
  else {
    WORDS_LIST.push(flashcard);
    updateLocalStorage();
  }
}

function removeLastFlashcard() {
  console.log('Czyszczenie');
   WORDS_LIST.pop();
  //WORDS_LIST = WORDS_LIST.filter((obj) => !FORBIDDEN_WORDS.includes(obj.word));
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
  // LOCAL SCOPE
  let WORD = document.querySelector('#add-word').value;
  let DEFINITION = document.querySelector('#add-definition').value;
  // Utworzyc obiekt ze slowem i definicja

  return {
    word: WORD,
    definition: DEFINITION,
  };
}
function addToDivs() {
document.querySelector("#word1").innerHTML="slowo";
}



