let inputAdultosAlcool = document.getElementById("adultosAlcool");
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");
    
    let adultosAlcool = inputAdultosAlcool.value;
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let carne = carnePP(duracao);
    let cerveja = cervejaPP(duracao);
    let bebidas = bebidasPP(duracao);


    let adultosTotais = JSON.parse(adultos) + JSON.parse(adultosAlcool);

    let qtdTotalCarne = adultosTotais * carne + (carne/2 * criancas);
    let qtdTotalCerveja = adultosAlcool * cerveja;
    let qtdTotalBebidas = adultos * bebidas + (bebidas/2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de Carne<p>`;
    resultado.innerHTML += `<p>${qtdTotalCerveja/1000}L de cerveja (${Math.ceil(qtdTotalCerveja/355)} latas de 355ml)<p>`;
    resultado.innerHTML += `<p>${qtdTotalBebidas/1000}L de bebidas não alcoólicas<p>`; 

    console.log(adultosTotais);

}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
