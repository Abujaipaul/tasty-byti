const menu = document.querySelector("#menu")
const closeMenu = document.querySelector("#closemenu")
const menuBox = document.querySelector(".menubox")


console.log(menu)
//open the menu
menu.addEventListener("click", (event) => {
    menuBox.style.display = "block"
})

//close the menu
closeMenu.addEventListener("click", () => {
    menuBox.style.display = "none"
})
//click on background to close
menuBox.addEventListener("click", (event) => {
    if(event.target === menuBox){
        console.log(event)
        menuBox.style.display = "none"
    }
})
















// const modal = document.getElementById("modal")

// function showModal(){
//     // alert("u clicked me!1")
//     modal.style.display = "block"
// }

// function removeModal(){
//     modal.style.display = "none"
// }

// modal.addEventListener("click", (event) => {
//     if(event.target === modal){
//         removeModal()
//     }
// })
