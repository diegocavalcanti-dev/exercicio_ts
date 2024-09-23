"use strict";
function calcularRetangulo(largura, comprimento) {
    const area = largura * comprimento;
    return area;
}
;
const resultado = calcularRetangulo(308, 400);
console.log(resultado);
function saudacao(nome) {
    return `Olá ${nome}`;
}
;
const seuNome = "Diego";
const saudacaoSeuNome = saudacao(seuNome);
console.log(saudacaoSeuNome);
