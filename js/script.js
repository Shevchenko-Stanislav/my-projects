const list = document.querySelector(".tablist");
const itemsDescriptions = document.querySelectorAll(".tabitem__description");
const itemsNames = document.querySelectorAll(".tabitem__name");
const itemsShowButtons = document.querySelectorAll(".tabitem__btn");

function toggleDescriptionVisibility (index) {
    itemsDescriptions[index].classList.toggle("tabitem__description_show");
    itemsNames[index].classList.toggle("tabitem__name_active");
    itemsShowButtons[index].classList.toggle("tabitem__btn_exit");
}

list.addEventListener("click", (event) => {
    const target = event.target;

    if(target.classList.contains("tabitem__btn")) {
        itemsShowButtons.forEach((item, index) => {
            if(target === item) {
                toggleDescriptionVisibility(index);
            }
        });
    } else if(target.classList.contains("tabitem__name")) {
        itemsNames.forEach((item, index) => {
            if(target === item) {
                toggleDescriptionVisibility(index);
            }
        });
    }
});