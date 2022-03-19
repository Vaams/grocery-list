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
