// initializing variables 
const body = document.querySelector("body");
const span = document.getElementById("hexideciaml-code");
const btn = document.getElementById("bg-btn");


//upgrade this project so this app generate six numbers randomly
// then display the result on the screen
// hex values = 0 1 2 3 4 5 6 7 8 9 [10 11 12 13 14 15 = A B C D E F]


function generateRandomHex() {
    let finalHex = "#";
    let randomHex = 0;
    for (let i = 0; i < 6; i++) {
        randomHex = Math.floor(Math.random() * 15);

        switch (randomHex) {
            case 10:
                randomHex = "A";
                break;
            case 11:
                randomHex = "B";
                break;
            case 12:
                randomHex = "C";
                break;
            case 13:
                randomHex = "D";
                break;
            case 14:
                randomHex = "E";
                break;
            case 15:
                randomHex = "F";
                break;
        }
        finalHex += randomHex;
    }
    body.style.background = finalHex;
    span.innerText = finalHex;

}
btn.onclick = generateRandomHex;