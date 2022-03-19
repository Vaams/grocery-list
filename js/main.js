const buttonAdd = document.querySelector(".button__add");
const textList = document.querySelector("input");
const buttonResetAll = document.querySelector(".footer__button");
const trashIcon = document.querySelector("svg");
const error = document.querySelector("form__error-message");

buttonAdd.addEventListener("click", function addElement() {
    if (textList.value.length < 3 || textList.value.length > 25) {
        document.getElementById("form__error-message").innerHTML = "Niepoprawna liczba znaków (minimum 3, maksymalnie 25)";
        textList.value = "";
    } else {
        const text = textList.value;
        textList.value = "";
        const pText = document.createElement("p");
        const node = document.createTextNode(text);
        pText.appendChild(node);
        document.getElementById("card__list").appendChild(pText);
        document.getElementById("form__error-message").innerHTML = ""; /*?*/
    }
});

function keepContent() {
    var someVarName = localStorage.getItem(card__list);
    console.log(someVarName)
};

buttonResetAll.addEventListener("click", function clearAll() {
    document.getElementById("card__list").innerHTML = "";
});
