const btnDelete = document.querySelectorAll(".eliminar-productos");
const btnProducts = document.querySelector("#btn-productos")
const btnUsers = document.querySelector("#btn-usuario")
const sectionProducts = document.querySelector("#lista-productos")
const sectionUsers = document.querySelector("#lista-usuarios")
const text = document.querySelector(".div-btns h1");


btnProducts.addEventListener("click", e => {
    sectionUsers.classList.add("d-none")
    sectionProducts.classList.remove("d-none")
    text.innerText = `Productos`
})

btnUsers.addEventListener("click", e => {
    sectionProducts.classList.add("d-none")
    sectionUsers.classList.remove("d-none")
    text.innerText = `Usuarios`
})


btnDelete.forEach(element => {
    element.addEventListener("click", e => {
       const card = element.parentElement.parentElement;
       card.remove();
    })
});