const randomAnimalsNames = [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Ant",
    "Butterfly",
    "Camel",
    "Chimpanzee",
    "Cobra",
    "Cockroach",
    "Cod",
    "Crocodile",
    "Dugong",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Giraffe",
    "Gnat",
    "Gnu",
    "Goat",
    "Goldfinch",
    "Goldfish",
    "Goose",
    "Gorilla",
    "Goshawk",
    "Mandrill",
    "Mantis",
    "Marten",
    "Meerkat",
    "Mink",
    "Mosquito",
    "Mouse",
    "Mule",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum",
    "Oryx",
    "Ostrich",
    "Otter",
    "Owl",
    "Oyster",
    "Pig",
    "Pigeon",
    "Quelea",
    "Quetzal",
    "Rabbit",
    "Starling",
    "Stingray",
    "Stinkbug",
    "Stork",
    "Swallow",
    "Swan",
    "Tapir",
    "Tiger",
    "Turkey",
    "Turtle",
    "Viper",
    "Vulture",
    "Wallaby",
    "Walrus",
    "Woodpecker",
    "Worm",
    "Wren",
    "Yak",
    "Zebra",
  ];
  
  //intilizing chances
  let totalChances = 0;
  
  const hangStandChildren = document.querySelector(".hangstand").children;
  
  //making count
  for (let index = 0; index < hangStandChildren.length; index++) {
    const element = hangStandChildren[index];
    element.classList.add("display-none");
  }
  
  //intial value in blank
  let randomAnimalName = null;
  
  //any random animal name  from array
  function getRandomNumber(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
  }
  
  /* function creates buttons for each letter of the alphabet and appends them to an element with
   the class "buttons-parent" */
  function giveMeButtonsOnScreen() {
    const rootEl = document.querySelector(".buttons-parent");
    let buttonsDataArray = Array(26).fill(null);
    let i = 65;
    buttonsDataArray = buttonsDataArray.map((value) => {
      return String.fromCharCode(i++);
    });
  
    buttonsDataArray.forEach((el) => {
      const btn = document.createElement("button");
      btn.textContent = el;
      rootEl.appendChild(btn);
    });
  }
  
  /* function selects a random animal name from the randomAnimalsNames array and displays it 
  on the screen as a series of blank spaces.*/
  function chooseRandomAnimalName() {
    const blankParentEl = document.querySelector(".blanks_parent");
    const randomNumber = getRandomNumber(0, randomAnimalsNames.length);
    randomAnimalName = randomAnimalsNames[randomNumber].toUpperCase();
  
    for (let index = 0; index < randomAnimalName.length; index++) {
      const letter = randomAnimalName[index];
      const alpha = document.createElement("p");
      const para = document.createElement("span");
      para.textContent = letter;
      alpha.appendChild(para);
      blankParentEl.appendChild(alpha);
    }
  }
  
  giveMeButtonsOnScreen();
  chooseRandomAnimalName();
  
  const buttonsParentEl = document.querySelector(".buttons-parent");
  
  let checkStatusGlobal = 0;

  /* When a button is clicked, it checks if the clicked letter matches any letter in the random 
  animal name it prints otherwise decrement the chances
   */
  const buttonParentClickFunction = function (e) {
    let checkStatus = 0;
    if (e.target.textContent.length === 1) {
      const letterClicked = e.target.textContent;
      console.log(randomAnimalName);
  
      const allLettersEls = document.getElementsByTagName("span");
  
      for (let index = 0; index < allLettersEls.length; index++) {
        const spanEl = allLettersEls[index];
  
        if (letterClicked == spanEl.textContent) {
          spanEl.parentElement.textContent = letterClicked;
  
          checkStatus++;
          checkStatusGlobal++;
        }
      }
  
      if (checkStatus != 0) {
        e.target.classList.add("greenBtn");
      } else {
        totalChances++;
        const elementToRemoveClass = document.querySelector(
          `.class-${totalChances}`
        );
        elementToRemoveClass.classList.remove("display-none");
        e.target.classList.add("redBtn");
      }
  
      e.target.setAttribute("disabled", "disabled");
    }
    

    //show popup of game result
    if (totalChances == 10) {
      alert("You Lost the Game");
      location.reload();
    }
  
    if (checkStatusGlobal == randomAnimalName.length) {
      alert("You won the Game");
      location.reload();
    }
  };
  
  buttonsParentEl.addEventListener("click", buttonParentClickFunction);