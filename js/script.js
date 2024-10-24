let part1 = document.querySelector('.part-1');
let part2 = document.querySelector('.part-2');
let part3 = document.querySelector('.part-3');
let btnContinuar = document.querySelector('.btn-continuar');
let btnContinuar2 = document.querySelector('.btn-continuar2');

let cpfInput = document.querySelector('.cpf');
let nomeInput = document.querySelector('.nome');
let nascInput = document.querySelector('.nasc');
let tipoInput = document.querySelector('.tipo');


let cpfText = document.querySelector('#cpfText');
let nomeText = document.querySelector('#nomeText');
let nascText = document.querySelector('#dataText');
let tipoText = document.querySelector('#tipoText');


let precoEmissao = document.querySelector("#preco-emissao");

let checkoutBtn = document.querySelector('.checkoutBtn');

part2.style.display = "none";
part3.style.display = "none";

btnContinuar.addEventListener('click', () => {
    part1.style.display = "none";
    part2.style.display = "block";
});

btnContinuar2.addEventListener('click', () => {
    part2.style.display = "none";
    cpfText.innerHTML = cpfInput.value;
    nomeText.innerHTML = nomeInput.value;
    nascText.innerHTML = nascInput.value;
    const selectedLicense = document.querySelector('input[name="licenseType"]:checked').value;
    if (selectedLicense == 'desembarcada') {
    precoEmissao.innerHTML = "R$20,00";
      checkoutBtn.addEventListener('click', () => {
  window.location.href = "";
});
    } else {
    precoEmissao.innerHTML = "R$60,00";
      checkoutBtn.addEventListener('click', () => {
  window.location.href = "";
});
    }
    tipoText.innerHTML = selectedLicense;

    part3.style.display = "block";
});



cpfInput.addEventListener(onfocus, validarCPF);

function validarCPF(e) {
  if (e.key !== "Backspace" && e.key !== "Delete") {
    var cpf = cpfInput.value.match(/\w/g) ?? "";
    if (cpf.length >= 3) cpf.splice(3, 0, ".");
    if (cpf.length >= 7) cpf.splice(7, 0, ".");
    if (cpf.length >= 11) cpf.splice(11, 0, "-");
    cpfInput.value = cpf.join("");
  }
}

cpfInput.addEventListener("keyup", validarCPF);