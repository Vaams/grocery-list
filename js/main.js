/*
1. Ogarnać klasy według metodyki BEM
2. "Skrócić" kod JS na bardziej wydajny i przejrzysty
3. Komunikat z błędem
4. Po odświeżeniu strony (f5, ikonka refresh, ctrl + f5 itp.) nie jest usuwana zawartość listy jedynie usuwa się po kliknieciu przycisku na dole listy 
*/
const buttonAdd = document.querySelector(".button__add");
const textList = document.querySelector("input");
const buttonResetAll = document.querySelector(".footer__button");

buttonAdd.addEventListener("click", function addElement() {
    if (textList.value.length < 3 || textList.value.length > 25) {
        console.log("Niepoprawna liczba znaków (minimum 3, maksymalnie)");
        textList.value = "";
    } else {
        const text = textList.value;
        textList.value = "";
        const pText = document.createElement("p");
        const node = document.createTextNode(text);
        pText.appendChild(node);
        document.getElementById("card__list").appendChild(pText);
    }
});

buttonResetAll.addEventListener("click", function clearAll() {
    document.getElementById("card__list").innerHTML = "";
});