
let par2 = document.getElementById("par2");
par2.addEventListener("click", paragraph2);
function paragraph2() {
    document.getElementById("par2").textContent = document.getElementById("par1").textContent;
}

let par3 = document.getElementById("par3");
par3.addEventListener("click", paragraph3);
function paragraph3() {
    document.getElementById("par3").textContent = document.getElementById("par2").textContent;
}

let par4 = document.getElementById("par4");
par4.addEventListener("click", paragraph4);
function paragraph4() {
    document.getElementById("par4").textContent = document.getElementById("par3").textContent;
}

let par5 = document.getElementById("par5");
par5.addEventListener("click", paragraph5);
function paragraph5() {
    document.getElementById("par5").textContent = document.getElementById("par4").textContent;
}

let par6 = document.getElementById("par6");
par6.addEventListener("click", paragraph6);
function paragraph6() {
    document.getElementById("par6").textContent = document.getElementById("par5").textContent;
}