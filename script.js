document.getElementById('nombre').addEventListener('click', xd);
document.getElementById('estilo1').addEventListener('click', estilo1);
document.getElementById('estilo2').addEventListener('click', estilo2);
document.getElementById('estilo3').addEventListener('click', estilo3);




function xd() {
    alert('Creado por toledo')
}


function estilo1() {
    let link = document.getElementById('estilos')
    link.setAttribute('href', 'estilos1.css');
}

function estilo2() {
    let link = document.getElementById('estilos')
    link.setAttribute('href', 'estilos2.css');
}

function estilo3() {
    let link = document.getElementById('estilos')
    link.setAttribute('href', 'estilos3.css');
}