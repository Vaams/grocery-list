const buttonAdd = document.querySelector(".form__add");
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
        const finalContent = document.getElementById("card__list");
        const icons = '<i class="fa-solid fa-trash-can card__icon"></i>' + '<i class="fa-solid fa-pen-to-square card__icon"></i>';
        finalContent.innerHTML += `<p>${text}` + `${icons}</p>`;
        for (let i = 1; i < finalContent.childNodes.length; i++) {
            finalContent.insertBefore(finalContent.childNodes[i], finalContent.firstChild);
        }
    }
});

buttonResetAll.addEventListener("click", function clearAll() {
    document.getElementById("card__list").innerHTML = "";
});