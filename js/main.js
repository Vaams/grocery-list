/*
1. Ogarnać klasy według metodyki BEM
2. "Skrócić" kod JS na bardziej wydajny i przejrzysty
3. Po odświeżeniu strony (f5, ikonka refresh, ctrl + f5 itp.) nie jest usuwana zawartość listy jedynie usuwa się po kliknieciu przycisku na dole listy
4. Naprawić Gita: remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.
+ wrzucić kod na githuba
5. Ikony kosza obok dodanego elementu aby usunać pojedyńczo wybraną rzecz
6. Przenieść pliki z branch master na main
7. Dodawanie produktów przy pomocy entera
*/
const buttonAdd = document.querySelector(".button__add");
const textList = document.querySelector("input");
const buttonResetAll = document.querySelector(".footer__button");

buttonAdd.addEventListener("click", function addElement() {
    if (textList.value.length < 3 || textList.value.length > 25) {
        document.getElementById("card__error-message").innerHTML = "Incorrect number of characters (minimum 3, maximum 25)";
        textList.value = "";
    } else {
        const text = textList.value;
        document.getElementById("card__error-message").innerHTML = "";
        textList.value = "";
        const pText = document.createElement("p");
        const node = document.createTextNode(text);
        pText.appendChild(node);
        document.getElementById("card__list").appendChild(pText);
    
    }
});

/*function keepContent() {
    var someVarName = localStorage.getItem(card__list);
    console.log(someVarName)
};


buttonAdd.addEventListener("click", function addIcon() {
    //document.getElementById("card__list").classList.add("show");
});*/


buttonResetAll.addEventListener("click", function clearAll() {
    document.getElementById("card__list").innerHTML = "";
});