const input = document.querySelector("input");
const lists = document.querySelector("ul");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const listAdd = input.value;
    input.value = "";

    const list = document.createElement("li");
    const listContent = document.createElement("span");
    const listDelete = document.createElement("button");

    list.appendChild(listContent);
    listContent.textContent = listAdd;
    list.appendChild(listDelete);
    listDelete.textContent = "Delete";

    lists.appendChild(list);

    listDelete.addEventListener("click", () => {
        lists.removeChild(list);
    })

    input.focus();

})