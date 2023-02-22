let randomNumber1 = Math.floor((Math.random() * 6) + 1);
let randomNumber2 = Math.floor((Math.random() * 6) + 1);
document.querySelectorAll("img")[0].src = `images/dice${randomNumber1}.png`;
document.querySelectorAll("img")[1].src = `images/dice${randomNumber2}.png`;

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "🚩First Palyer Won"
} else if(randomNumber2 > randomNumber1) {
    document.querySelector(".container h1").innerHTML = "Second Palyer Won🚩"
} else {
    document.querySelector(".container h1").innerHTML = "Draw"
}