// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//   let parent = this.parentNode;
//   parent.classList.add("focus");
// }

// function blurFunc() {
//   let parent = this.parentNode;
//   if (this.value == "") {
//     parent.classList.remove("focus");
//   }
// }

// inputs.forEach((input) => {
//   input.addEventListener("focus", focusFunc);
//   input.addEventListener("blur", blurFunc);
// });

let titulo=document.querySelector("h3");
titulo.insertAdjacentHTML("afterbegin","Let's get in touch")

let texto=document.querySelectorAll(".text")[0];
texto.insertAdjacentHTML("afterbegin","Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepedolorum adipisci recusandae praesentium dicta!")

let direccion=document.querySelector(".address");
direccion.insertAdjacentHTML("afterbegin","92 Cherry Drive Uniondale, NY 11553")

let msn=document.querySelector(".message");
msn.insertAdjacentHTML("afterbegin","lorem@ipsum.com")

let tel=document.querySelector(".tel");
tel.insertAdjacentHTML("afterbegin","123-456-789")

let contacto=document.querySelector(".contact");
contacto.insertAdjacentHTML("afterbegin","Connect with us :")


let mapa=document.querySelector(".img1")
mapa.insertAdjacentHTML("afterend","<img src='img/location.png' class='icon' alt='' />")

let bandeja=document.querySelector(".img2")
bandeja.insertAdjacentHTML("afterend","<img src='img/email.png' class='icon' alt='' />")

let teleico=document.querySelector(".img3")
teleico.insertAdjacentHTML("afterend","<img src='img/phone.png' class='icon' alt='' />")

let icono=document.querySelectorAll(".social-icons a i");
icono[0].classList.add("fa-facebook-f")
icono[1].classList.add("fa-twitter")
icono[2].classList.add("fa-instagram")
icono[3].classList.add("fa-linkedin-in")

let contacto2 = document.querySelector(".titulo2")
contacto2.insertAdjacentHTML("afterbegin","Contact us")

let label = document.querySelectorAll("label")
label[0].insertAdjacentHTML("afterbegin","Username")
label[1].insertAdjacentHTML("afterbegin","Email")
label[2].insertAdjacentHTML("afterbegin","Phone")
label[3].insertAdjacentHTML("afterbegin","Message")


let span = document.querySelectorAll("span")
span[3].insertAdjacentHTML("afterbegin","Username")
span[4].insertAdjacentHTML("afterbegin","Email")
span[5].insertAdjacentHTML("afterbegin","Phone")
span[6].insertAdjacentHTML("afterbegin","Message")


