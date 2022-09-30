let btnSobreMim = document.getElementById("sobre-mim");

let btnMinhasRedes = document.getElementById("minhas-redes");

let textoSobreMim = document.getElementsByClassName("content");

let linksParaMinhasRedes = document.getElementsByClassName("links");
console.log(linksParaMinhasRedes);

btnMinhasRedes.addEventListener("click", function () {
	btnMinhasRedes.classList.add("active");
	btnSobreMim.classList.remove("active");
	textoSobreMim[0].classList.replace("selected", "inactive");
	linksParaMinhasRedes[0].classList.replace("inactive", "selected");
});

btnSobreMim.addEventListener("click", function () {
	btnMinhasRedes.classList.remove("active");
	btnSobreMim.classList.add("active");
	linksParaMinhasRedes[0].classList.replace("selected", "inactive");
	textoSobreMim[0].classList.replace("inactive", "selected");
});
