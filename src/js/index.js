const imagens = document.querySelectorAll('.imagem-carrossel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
const btnSaibaMais = document.getElementById('btn-saiba-mais')
let titulo = document.getElementById('titulo')
let imagemAtual = 0

function esconderImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('mostrar')
    })
}

function mostrarImagem(){    
    imagens[imagemAtual].classList.add('mostrar')
}

function desabilitarSeta(seta){
    seta.classList.add('desabilitar')
}

function habilitarSeta(seta){
    seta.classList.remove('desabilitar')
}

function corBotao(imagem){
    switch (imagem){
        case 0:
            btnSaibaMais.classList.remove('color4');
            btnSaibaMais.classList.remove('color3');
            btnSaibaMais.classList.remove('color2');
            btnSaibaMais.classList.add('color1');
            break;
        case 1:
            btnSaibaMais.classList.remove('color4');
            btnSaibaMais.classList.remove('color3');
            btnSaibaMais.classList.remove('color1');
            btnSaibaMais.classList.add('color2');
            break;
        case 2:
            btnSaibaMais.classList.remove('color4');
            btnSaibaMais.classList.remove('color2');
            btnSaibaMais.classList.remove('color1');
            btnSaibaMais.classList.add('color3');
            break;
        case 3:
            btnSaibaMais.classList.remove('color3');
            btnSaibaMais.classList.add('color4');
            break;
        default:
            btnSaibaMais.classList.add('color1');
    }
}

function inserirTitulo(imagem){
    titulo.innerHTML =`Título imagem ${imagem + 1}`
}

setaAvancar.addEventListener('click', function () {
    if(imagemAtual !== imagens.length - 1) {
        habilitarSeta(setaVoltar)
        imagemAtual++       
    }else if(imagemAtual === imagens.length - 1)
        desabilitarSeta(setaAvancar)

    esconderImagens()
    inserirTitulo(imagemAtual)
    mostrarImagem()
    corBotao(imagemAtual)
})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--
        habilitarSeta(setaVoltar)
    }else if(imagemAtual === 0)
        desabilitarSeta(setaVoltar)
        habilitarSeta(setaAvancar)

    esconderImagens()
    inserirTitulo(imagemAtual)
    mostrarImagem()
    corBotao(imagemAtual)
})