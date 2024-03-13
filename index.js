const aluno1 = 5; // <3
const aluno2 = 10;
const aluno3 = 6;

const nomeDoAluno2 = "Helena";

const media = (aluno1 + aluno2 + aluno3)/3

console.log("a média dos 5 alunos é: ", media);
console.log("o nome do aluno de melhor desempenho é: ", nomeDoAluno2); // ${} entre apostrófos = template string

console.log(typeof aluno3); // tipo da variável com "typeof"

if (media > 7) {
    console.log('A nota foi de ${media}. Parabéns')
} else {
    console.log('A média é menor que 5. Revise os conteúdos e prepare-se para a rec.')
}




