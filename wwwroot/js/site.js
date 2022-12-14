// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var MainImg = document.getElementById("MainImg");
var smallimg = document.getElementsByClassName("small-img")


smallimg[0].onclick = function () {
    MainImg.src = smallimg[0].src;
}
smallimg[1].onclick = function () {
    MainImg.src = smallimg[1].src;
}
smallimg[2].onclick = function () {
    MainImg.src = smallimg[2].src;
}
smallimg[3].onclick = function () {
    MainImg.src = smallimg[3].src;
}





function closeModal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

//Modal cadastro

function openModalcc(mn) {
    let modalcc = document.getElementById(mn);

    if (typeof modalcc == 'undefined' || modalcc === null)
        return;

    modalcc.style.display = 'Block';
    document.body.style.overflow = 'hidden';

}
function closeModalcc(mn) {
    let modalcc = document.getElementById(mn);

    if (typeof modalcc == 'undefined' || modalcc === null)
        return;

    modalcc.style.display = 'none';
    document.body.style.overflow = 'auto';
}


//modal login

function openModalll(mn) {
    let modalll = document.getElementById(mn);

    if (typeof modalll == 'undefined' || modalll === null)
        return;

    modalll.style.display = 'Block';
    document.body.style.overflow = 'hidden';

}
function closeModalll(mn) {
    let modalll = document.getElementById(mn);

    if (typeof modalll == 'undefined' || modalll === null)
        return;

    modalll.style.display = 'none';
    document.body.style.overflow = 'auto';
}

//modal compra

function openModalco(mn) {
    let modalco = document.getElementById(mn);

    if (typeof modalco == 'undefined' || modalco === null)
        return;

    modalco.style.display = 'Block';
    document.body.style.overflow = 'hidden';
    closeModal('dv-modal')

    var n_camisas = 0;
    n_camisas = document.getElementById('n_de_camisas').value;
    n_camisas = n_camisas * 350;
    document.getElementById('qtd_pagar').innerHTML = "Você pagará: R$ " + n_camisas;

}
function closeModalco(mn) {
    let modalco = document.getElementById(mn);

    if (typeof modalco == 'undefined' || modalco === null)
        return;

    modalco.style.display = 'none';
    document.body.style.overflow = 'auto';


}

// Loucura loucura
function openModalbr(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    
    document.getElementById('MainImg').src = "/imagensCamisas/Brasil/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Brasil/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Brasil/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Brasil/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Brasil/CamisaFeminina2.jpg"
}
function openModalmx(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
 
    document.getElementById('MainImg').src = "/NovaPasta/mexico.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/México/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/México/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/México/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/México/CamisaFeminina2.jpg"
}
function openModalholanda(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Holanda/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Holanda/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Holanda/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Holanda/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Holanda/CamisaFeminina2.jpg"
}
function openModalsengal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Senegal/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Senegal/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Senegal/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Holanda/CamisaMasculina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Holanda/CamisaMasculina2.jpg"
}
function openModalequador(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Equador/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Equador/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Equador/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Equador/CamisaMasculina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Equador/CamisaMasculina2.jpg"
}
function openModalcatar(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Catar/CamisaMaculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Catar/CamisaMaculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Catar/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Catar/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Catar/CamisaFeminina2.jpg"
}
function openModalinglaterra(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Inglaterra/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Inglaterra/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Inglaterra/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Inglaterra/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Inglaterra/CamisaFeminina2.jpg"
}
function openModaleua(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/EUA/CamisaMasculina.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/EUA/CamisaMasculina.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/EUA/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/EUA/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/EUA/CamisaFeminina2.jpg"
}
function openModalira(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Irã/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Irã/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Irã/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Irã/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Irã/CamisaFeminina2.jpg"
}
function openModalgales(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/País de Gales/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/País de Gales/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/País de Gales/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/País de Gales/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/País de Gales/CamisaFeminina2.jpg"
}
function openModalargentina(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Argentina/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Argentina/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Argentina/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Argentina/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Argentina/CamisaFeminina2.jpg"
}
function openModalpolonia(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Polonia/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Polonia/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Polonia/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Polonia/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Polonia/CamisaFeminina2.jpg"
}
function openModalarabia(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Arabia Saudita/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Arabia Saudita/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Arabia Saudita/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Arabia Saudita/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Arabia Saudita/CamisaFeminina2.jpg"
}
function openModalfran(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/França/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/França/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/França/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/França/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/França/CamisaFeminina2.jpg"
}
function openModalaustralia(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Austrália/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Austrália/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Austrália/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Austrália/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Austrália/CamisaFeminina2.jpg"
}

function openModaltunisia(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Tunísia/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Tunísia/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Tunísia/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Tunísia/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Tunísia/CamisaFeminina2.jpg"
}

function openModaldinamarca(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Dinamarca/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Dinamarca/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Dinamarca/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Dinamarca/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Dinamarca/CamisaFeminina2.jpg"
}

function openModalespanha(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Espanha/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Espanha/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Espanha/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Espanha/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Espanha/CamisaFeminina2.jpg"
}

function openModaljapao(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Japão/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Japão/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Japão/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Japão/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Japão/CamisaFeminina2.jpg"
}

function openModalcosta(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Costa Rica/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Costa Rica/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Costa Rica/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Costa Rica/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Costa Rica/CamisaFeminina2.jpg"
}

function openModalalemanha(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Alemanha/1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Alemanha/1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Alemanha/2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Alemanha/3.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Alemanha/4.jpg"
}

function openModalcroacia(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Croácia/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Croácia/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Croácia/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Croácia/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Croácia/CamisaFeminina2.jpg"
}

function openModalmarrocos(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Marrocos/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Marrocos/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Marrocos/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Marrocos/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Marrocos/CamisaFeminina2.jpg"
}

function openModalbelgica(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Bélgica/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Bélgica/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Bélgica/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Bélgica/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Bélgica/CamisaFeminina2.jpg"
}

function openModalcanada(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Canadá/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Canadá/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Canadá/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Canadá/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Canadá/CamisaFeminina2.jpg"
}

function openModalsuica(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Suiça/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Suiça/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Suiça/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Suiça/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Suiça/CamisaFeminina2.jpg"
}

function openModalcamaroes(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Camarões/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Camarões/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Camarões/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Camarões/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Camarões/CamisaFeminina2.jpg"
}

function openModalservia(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Sérvia/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Sérvia/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Sérvia/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Sérvia/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Sérvia/CamisaFeminina2.jpg"
}

function openModalportugal(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Portugal/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Portugal/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Portugal/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Portugal/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Portugal/CamisaFeminina2.jpg"
}

function openModalgana(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Gana/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Gana/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Gana/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Gana/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Gana/CamisaFeminina2.jpg"
}

function openModalcoreia(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Coreia do Sul/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Coreia do Sul/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Coreia do Sul/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Coreia do Sul/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Coreia do Sul/CamisaFeminina2.jpg"
}

function openModaluruguai(mn) {
    let modal = document.getElementById(mn);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';

    document.getElementById('MainImg').src = "/imagensCamisas/Uruguai/CamisaMasculina1.jpg"
    document.getElementById('img_um').src = "/imagensCamisas/Uruguai/CamisaMasculina1.jpg"
    document.getElementById('img_dois').src = "/imagensCamisas/Uruguai/CamisaMasculina2.jpg"
    document.getElementById('img_tres').src = "/imagensCamisas/Uruguai/CamisaFeminina1.jpg"
    document.getElementById('img_quatro').src = "/imagensCamisas/Uruguai/CamisaFeminina2.jpg"
}



//variável que retorna data
let data = new Date();

let ano = data.getFullYear();


//Função para limpar o formulário
const limparFormulario = (endereco) => {
    document.getElementById('endereco').value = '';
  
    document.getElementById('cidade').value = '';

}

//Função para  o formulário
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
  
    document.getElementById('cidade').value = endereco.localidade;
 

}
//valida os números do cep
const eNumero = (numero) => /^[0-9]+$/.test(numero)
/* ^ : primeiro valor tem que ser número
   0-9: algortimos de 0 a 9
   +: os número podem se repetir
   $: tem que terminar com número
*/
// 
const cepValido = (cep) => cep.length == 8 && eNumero(cep);


// o cep que for digitado será passado pela api
const pesquisarCep = async () => {
    limparFormulario()
    const cep = document.getElementById('cep').value
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')) {
            document.getElementById('endereco').value = 'CEP não encontrado'
        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('endereco').value = 'CEP incorreto.';
    }

}
//event listenner fica esperando um evento acontecer

document.getElementById('cep').addEventListener('focusout', pesquisarCep);