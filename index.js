const aluno1 = 5; // <3
const aluno2 = 10;
const aluno3 = 6;

const nomeDoAluno2 = "Helena";

const media = (aluno1 + aluno2 + aluno3)/3

console.log("a média dos 5 alunos é: ", media);
console.log("o nome do aluno de melhor desempenho é: ", nomeDoAluno2); // ${} entre apostrófos = template string

console.log(typeof aluno3); // tipo da variável com "typeof"

if (media > 7) {
    console.log('A nota foi de ${media}. Parabéns');
} else {
    console.log('A média é menor que 5. Revise os conteúdos e prepare-se para a rec.');
}



const idade = 17;

if (idade >= 18) {
    console.log("Você pode entrar.");
} else {
    console.log("Sua idade é menor que 18, retorne quando completar a maioridade.");
}

const pontos = 101;

if (pontos > 100) {
    console.log("Você receberá a bonificação de R$1000,00.");
} else {
    console.log("Conquiste 100 pontos para receber a bonificação.");
}

const entrada = 18;

if (entrada == 18 || entrada > 18) {
     console.log("Você pode entrar.");
} 
else {
    console.log("Sua idade é menor que 18, retorne quando completar a maioridade.");
}

const carla = {
    endereco: "Rua das árvores, 313 - Bairro do Limoeiro",
    notaFinal: 10,
    sala: 39,
    turno: "Manhã"
}
console.log (carla.sala)

// as chaves iniciam e terminam um objeto, já as vírgulas, separarão propriedades e os pontos acessarão as propriedades.

const escola = [
    {
        nome: "ana carla",
        endereco: "Rua das árvores, 313 - Bairro do Limoeiro",
        notaFinal: 10,
        sala: 39,
        turno: "Manhã"},
    {
        nome: "felipe",
        endereco: "Rua das flores, 243 - Bairro do Amor",
        notaFinal: 8,
        sala: 39,
        turno: "Manhã"},
    {
        nome: "alex",
        endereco: "Rua dos espinhos, 336 - Bairro do Barro",
        notaFinal: 7,
        sala: 40,
        turno: "Manhã"},
]

console.log(escola[1].endereco,escola[1].nome)

const lua = [
    {
        nome: "mariazinha",
        corFavorita: "azul",
        gostaDe: "pintar e ler"},
    {
         nome: ""
        }
]





