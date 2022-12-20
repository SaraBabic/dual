let scrollpos = window.scrollY;

const header = document.querySelector(".header");
const dropdown = document.querySelector(".dropdown-content")
const scrollChange = 1;
console.log(header);

const add_class_on_scroll = () => {
    header.classList.add("header-color");
    dropdown.classList.add("dropdown-color");
}
const remove_class_on_scroll = () => {
    header.classList.remove("header-color");
    dropdown.classList.remove("dropdown-color");
}

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange) {
        add_class_on_scroll();
    }
    else {
        remove_class_on_scroll();
    }
})