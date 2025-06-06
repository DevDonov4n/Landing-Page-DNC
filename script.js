let leonardo = window.document.getElementById('leonardo'),
    samantha = window.document.getElementById('samantha'),
    bruna = window.document.getElementById('bruna'),
    setaEsquerda = window.document.getElementById('setaEsquerda'),
    setaDireita = window.document.getElementById('setaDireita');

function rolarDireita(){
    leonardo.style = 'display:none';
    samantha.style = 'display:flex;';
    setaDireita.style = 'display:none';
    setaEsquerda.style = 'display:flex';
    
}

function rolarEsquerda(){
    leonardo.style = 'display:flex';
    samantha.style = 'display:none';
    setaDireita.style = 'display:flex';
    setaEsquerda.style = 'display:none';
}

