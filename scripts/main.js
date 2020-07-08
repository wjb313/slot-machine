// Define constants for manipulating the DOM
const playBtn = document.querySelector("button");
const roll11 = document.querySelector("#no11");
const roll12 = document.querySelector("#no12");
const roll13 = document.querySelector("#no13");
const roll14 = document.querySelector("#no14");
const roll15 = document.querySelector("#no15");
const roll16 = document.querySelector("#no16");
const roll17 = document.querySelector("#no17");
const roll18 = document.querySelector("#no18");
const roll19 = document.querySelector("#no19");
const roll21 = document.querySelector("#no21");
const roll22 = document.querySelector("#no22");
const roll23 = document.querySelector("#no23");
const roll24 = document.querySelector("#no24");
const roll25 = document.querySelector("#no25");
const roll26 = document.querySelector("#no26");
const roll27 = document.querySelector("#no27");
const roll28 = document.querySelector("#no28");
const roll29 = document.querySelector("#no29");
const roll31 = document.querySelector("#no31");
const roll32 = document.querySelector("#no32");
const roll33 = document.querySelector("#no33");
const roll34 = document.querySelector("#no34");
const roll35 = document.querySelector("#no35");
const roll36 = document.querySelector("#no36");
const roll37 = document.querySelector("#no37");
const roll38 = document.querySelector("#no38");
const roll39 = document.querySelector("#no39");
const html = document.querySelector("html");
const slotWindow1 = document.querySelector(".slotWindow1");
const slotWindow2 = document.querySelector(".slotWindow2");
const slotWindow3 = document.querySelector(".slotWindow3");
const gameStart = document.querySelector(".gameStart");
const rollerViewWinner = document.querySelector("body > div");
const winnerWord = document.querySelector(".winnerWord");
const svgRoller1 = document.querySelector(".svgRollers1");

const no1 = document.createElement("h2");
const no2 = document.createElement("h2");
const no3 = document.createElement("h2");
// const roll1Array = {
//   1: "roll1One",
//   2: "roll1Two",
//   3: "roll1Three",
//   4: "roll1Four",
//   5: "roll1Five",
//   6: "roll1Six",
//   7: "roll1Seven",
//   8: "roll1Eight",
//   9: "roll1Nine",
// };
// const roll2Array = [
//   "roll2One",
//   "roll2Two",
//   "roll2Three",
//   "roll2Four",
//   "roll2Five",
//   "roll2Six",
//   "roll2Seven",
//   "roll2Eight",
//   "roll2Nine",
// ];
// const roll3Array = [
//   "roll3One",
//   "roll3Two",
//   "roll3Three",
//   "roll3Four",
//   "roll3Five",
//   "roll3Six",
//   "roll3Seven",
//   "roll3Eight",
//   "roll3Nine",
// ];

const randoNo = function () {
  return Math.floor(Math.random() * (9 - 7) + 7);
};

playBtn.addEventListener("click", function () {
  gameStart.style.display = "none";
  for (let i = 0; i < 20; i++) {
    task(i);
  }
  winner();
});
//   // let no1Text = randoNo();
//   // let no2Text = randoNo();
//   // let no3Text = randoNo();

//   // no1.textContent = no1Text;
//   // no2.textContent = no2Text;
//   // no3.textContent = no3Text;

//   // slotWindow1.appendChild(no1);
//   // slotWindow2.appendChild(no2);
//   // slotWindow3.appendChild(no3);

//   // if (no1Text === no2Text && no2Text === no3Text) {
//   //   html.style.backgroundColor = "red";
//   // }
// });

function task(i) {
  setTimeout(function () {
    let no1Text = randoNo();
    let no2Text = randoNo();
    let no3Text = randoNo();

    no1.textContent = no1Text;
    no2.textContent = no2Text;
    no3.textContent = no3Text;

    slotWindow1.appendChild(no1);
    slotWindow2.appendChild(no2);
    slotWindow3.appendChild(no3);
  }, 40 * i);
}

function showTheWin() {
  rollerViewWinner.classList.remove("rollerView");
  rollerViewWinner.classList.add("rollerViewWin");
  playBtn.disabled = true;
  playBtn.textContent = "WINNER!!!";
  winnerWord.style.display = "block";
  setTimeout(function () {
    playBtn.disabled = false;
    playBtn.textContent = "Let's Play!";
    rollerViewWinner.classList.remove("rollerViewWin");
    rollerViewWinner.classList.add("rollerView");
    winnerWord.style.display = "none";
  }, 2000);
}

function winner() {
  setTimeout(function () {
    if (
      slotWindow1.textContent === slotWindow2.textContent &&
      slotWindow2.textContent === slotWindow3.textContent
    ) {
      showTheWin();
    }
  }, 1000);
}
