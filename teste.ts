function calcularRetangulo (largura: number, comprimento: number): number {
    const area = largura * comprimento;
    return area;
};
const resultado = calcularRetangulo (308, 400);
console.log(resultado);

function saudacao(nome: string,): string {
    return `Olá ${nome}`;
};
const seuNome = "Diego";
const saudacaoSeuNome = saudacao(seuNome);
console.log(saudacaoSeuNome);