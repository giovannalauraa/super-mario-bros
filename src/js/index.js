/*
Objetivo 1 - quando o usuário clicar no botão de ver trailer, deve-se abrir a modal com o vídeo do trailer.

Objetivo 2 - Quando o usuário clicar no x a modal deve-se fechar

*/

const botaoTrailer = document.querySelector(".botao-trailer");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;
const botaoFecharModal = document.querySelector(".fechar-modal");

function alternarModal(){
 modal.classList.toggle("aberto");

}
// identificando quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    //console.log("clicou no botão veja o trailer");
    // abrindo a modal na tela
    // modal.classList.add("aberto"); 
    //modal.classList.toggle("aberto");
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

// identificando quando o usuário clicar no botão 
botaoFecharModal.addEventListener("click", () => {
    // fechando a modal
    // modal.classList.remove("aberto");
    //modal.classList.toggle("aberto");
    alternarModal();
    video.setAttribute("src", "");
});

