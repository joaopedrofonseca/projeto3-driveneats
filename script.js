var numPedido = Number(0);
let prato_principal;
let bebidas1;
let sobremesa1;
let valorPratoPrincipal;
let valorBebida;
let valorSobremesas;
let valorTotal;
function checkFrango(){
    const checkVerde = document.querySelector(".frango");
    checkVerde.classList.remove("hide");
    const desmarcado1 = document.querySelector(".burguer");
    desmarcado1.classList.add("hide");
    const desmarcado2 = document.querySelector(".pizza");
    desmarcado2.classList.add("hide");
    prato_principal = "Frango Yin Yang";
    valorPratoPrincipal = Number(22.90);
    numPedido++;
}
function checkBurguer(){
    const checkVerde = document.querySelector(".burguer");
    checkVerde.classList.remove("hide");
    const desmarcado1 = document.querySelector(".frango");
    desmarcado1.classList.add("hide");
    const desmarcado2 = document.querySelector(".pizza");
    desmarcado2.classList.add("hide");
    prato_principal = "Burgão de Playboy";
    valorPratoPrincipal = Number(45.9);
    numPedido++;
}
function checkPizza(){
    const checkVerde = document.querySelector(".pizza");
    checkVerde.classList.remove("hide");
    const desmarcado1 = document.querySelector(".frango");
    desmarcado1.classList.add("hide");
    const desmarcado2 = document.querySelector(".burguer");
    desmarcado2.classList.add("hide");
    prato_principal = "Pizza peperoni";
    valorPratoPrincipal = Number(79.90);
    numPedido++;
}
function checkCoca(){
    const checkVerde = document.querySelector(".coca");
    checkVerde.classList.remove("hide");
    const desmarcado1 = document.querySelector(".agua");
    desmarcado1.classList.add("hide");
    const desmarcado2 = document.querySelector(".cerva");
    desmarcado2.classList.add("hide");
    bebidas1 ="Coquinha Geladinha";

    numPedido++;
}
function checkAgua(){
    const checkVerde = document.querySelector(".agua");
    checkVerde.classList.remove("hide");
    const desmarcado1 = document.querySelector(".cerva");
    desmarcado1.classList.add("hide");
    const desmarcado2 = document.querySelector(".coca");
    desmarcado2.classList.add("hide");
    bebidas1 = "Água";
    valorBebida = Number(2.90);
    numPedido++;
}
function checkCerva(){
    const checkVerde = document.querySelector(".cerva");
    checkVerde.classList.remove("hide");
    const desmarcado1 = document.querySelector(".agua");
    desmarcado1.classList.add("hide");
    const desmarcado2 = document.querySelector(".coca");
    desmarcado2.classList.add("hide");
    bebidas1 = "Cerveja Heineken";
    valorBebida = Number(11.90);
    numPedido++;
}
function checkPudim(){
    const checkVerde = document.querySelector(".pudim");
    checkVerde.classList.remove("hide");
    const desmarcado1 = document.querySelector(".petit-gateau");
    desmarcado1.classList.add("hide");
    const desmarcado2 = document.querySelector(".brownie");
    desmarcado2.classList.add("hide");
    sobremesa1 = "Pudim";
    valorSobremesas = Number(7.90);
    numPedido++;

}
function checkPG(){
    const checkVerde = document.querySelector(".petit-gateau");
    checkVerde.classList.remove("hide");
    const desmarcado1 = document.querySelector(".pudim");
    desmarcado1.classList.add("hide");
    const desmarcado2 = document.querySelector(".brownie");
    desmarcado2.classList.add("hide");
    sobremesa1 = "Petit-Gateau";
    valorSobremesas = Number(39.90);
    numPedido++;

}
function checkBrownie(){
    const checkVerde = document.querySelector(".brownie");
    checkVerde.classList.remove("hide");
    const desmarcado1 = document.querySelector(".pudim");
    desmarcado1.classList.add("hide");
    const desmarcado2 = document.querySelector(".petit-gateau");
    desmarcado2.classList.add("hide");
    sobremesa1 = "Brownie";
    valorSobremesas = Number(15.90);
    numPedido++;
}
function fecharPedido (){
    if(numPedido>2){
        const excluirbotaocinza = document.querySelector(".botaoInativo");
        excluirbotaocinza.classList.add("hide");
        const addbotaoverde = document.querySelector(".botaoAtivo");
        addbotaoverde.classList.remove("hide");
        valorTotal = Number(valorPratoPrincipal+valorBebida+valorSobremesas);
        alert(valorTotal);
        alert(prato_principal+bebidas1+sobremesa1);

    }
}

