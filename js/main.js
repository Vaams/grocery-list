const buttonAdd = document.querySelector(".form__add");
const textList = document.querySelector("input");
const buttonResetAll = document.querySelector(".footer__button");
const addIcon = document.querySelectorAll(".card__icon");

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
        const finalContent = document.getElementById("card__list").appendChild(pText);
        addIcon.forEach(iconStyle => iconStyle.style.display = "inline-block");
        finalContent.appendChild(addIcon[0]);
    }
});

buttonResetAll.addEventListener("click", function clearAll() {
    document.getElementById("card__list").innerHTML = "";
});