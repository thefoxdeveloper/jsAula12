// 1. Crie um objeto em JavaScript para colocar dois atributos de um
// produto. Atribua o preço e descrição do produto com o valor “90” e a
// descrição com o valor “Mouse”. Mostre no console o valor dos dois
// atributos.
// let produto = {
//   preco: 90,
//   descricao: "Mouse",
// };
// document.write(`Produto ${produto.descricao} Valor: ${produto.preco}`);

// 2. Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console,
// exatamente como está na atividade.
// let notebook = {
//   Processador: "i7",
//   Memoria: "16GB",
//   Preco: 5000,
//   Hd: "1TB",
//   Ssd: "256GB",
// };

// for (let itens in notebook) {
//   document.write(` ${itens}: ${notebook[itens]}<br>`);
// }
// 3. Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

// let primeiroAluno = {
//   Nome: "Cleusa",
//   Nota1: 9,
//   Nota2: 8,
// };

// let segundoAluno = {
//   Nome: "Juninho",
//   Nota1: 7,
//   Nota2: 7,
// };

// for (let inf in primeiroAluno) {
//   console.log(`${inf}: ${primeiroAluno[inf]}`);
// }

// console.log(
//   `Média primeiro aluno: ` + (primeiroAluno.Nota1 + primeiroAluno.Nota2) / 2
// );
// console.log("-----------------------");
// for (let inf in segundoAluno) {
//   console.log(`${inf}: ${segundoAluno[inf]}`);
// }

// console.log(
//   `Média segundo aluno: ` + (segundoAluno.Nota1 + segundoAluno.Nota2) / 2
// );
// console.log("-----------------------");
// console.log(
//   `Média da turma: ` +
//     (primeiroAluno.Nota1 +
//       primeiroAluno.Nota2 +
//       segundoAluno.Nota1 +
//       segundoAluno.Nota2) /
//       4
// );

// 4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando

// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// // Nome: Alessandro, Idade: 28, Salário: 3000
// const pessoas = [];
// let continuar = true;

// while (continuar) {
//   let trabalhando = true;
//   let salario = 0;
//   const nome = prompt("Digite o nome da pessoa:");
//   const idade = Number(prompt("Digite a idade da pessoa:"));

//   trabalhando = confirm("Você está trabalhando?");

//   if (trabalhando == true) {
//     salario = Number(prompt("Digite o salario da pessoa:"));
//     const pessoa = {
//       nome,
//       idade,
//       trabalhando,
//       salario,
//     };
//     pessoas.push(pessoa);
//   } else {
//     const pessoa = {
//       nome,
//       idade,
//       trabalhando,
//       salario,
//     };
//     pessoas.push(pessoa);
//   }
//   continuar = confirm("Você gostaria de adicionar outra pessoa?");
// }
// console.log("Pessoas desempregadas:");
// pessoas.forEach((p) => {
//   if (p.trabalhando == false) {
//     console.log(`Nome: ${p.nome}, Idade: ${p.idade}, Salário: ${p.salario}`);
//   }
// });
// console.log("Pessoas empregadas com salários menores que 2500");
// pessoas.forEach((p) => {
//   if (p.trabalhando == true && p.salario < 2500) {
//     console.log(`Nome: ${p.nome}, Idade: ${p.idade}, Salário: ${p.salario}`);
//   }
// });
// console.log("Pessoas empregadas com salários maiores que 2500:");
// pessoas.forEach((p) => {
//   if (p.trabalhando == true && p.salario > 2500) {
//     console.log(`Nome: ${p.nome}, Idade: ${p.idade}, Salário: ${p.salario}`);
//   }
// });
