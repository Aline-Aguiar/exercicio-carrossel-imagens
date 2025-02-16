const imagens = document.querySelectorAll('.imagem-carrossel')
const setaVoltar = document.getElementById('btn-voltar')
const setaAvancar = document.getElementById('btn-avancar')
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

setaAvancar.addEventListener('click', function () {
    if(imagemAtual !== imagens.length - 1) {
        habilitarSeta(setaVoltar)
        imagemAtual++       
    }else if(imagemAtual === imagens.length - 1)
        desabilitarSeta(setaAvancar)

    esconderImagens()
    mostrarImagem()
})

setaVoltar.addEventListener('click', function () {
    if (imagemAtual !== 0) {
        imagemAtual--
        habilitarSeta(setaVoltar)
    }else if(imagemAtual === 0)
        desabilitarSeta(setaVoltar)
        habilitarSeta(setaAvancar)

    esconderImagens()
    mostrarImagem()
})