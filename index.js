
const prompt = require("prompt-sync")({ sigint: true });

let consultas = [];
while (true) {
console.log(`
//     //     === Menu de Cadastro de consultas ===
//     //     1. Adicionar uma nova consulta.
//     //     2. Listar todas as consultas.
//     //     3. Atualizar uma consulta ja existente.
//     //     0. Cancelar


// `)
while (true) {
console.log(`
//     //     === Menu de Cadastro de consultas ===
//     //     1. Adicionar uma nova consulta.
//     //     2. Listar todas as consultas.
//     //     3. Atualizar uma consulta ja existente.
//     //     4. Cancelar
//     //     5. Sair


// `)

let opcao = prompt("Escolha uma opção: ");
if (opcao === "1") {
let paciente = prompt("Nome do paciente: ");
let medico = prompt("Nome do medico: ");
let data = prompt("Data: ");
let hora = prompt("Hora: ");

consultas.push({ paciente, medico, data, hora })
console.log("Consulta adicionada com sucesso!", consultas);

} else if (opcao === "2") {
if (consultas.length === 0) {
console.log("Nenhuma consulta agendada.");
break;


} else {
consultas.forEach((consultas, index) => {
console.log(`${index + 1}. ${consultas.paciente} - ${consultas.medico} 
- ${consultas.data} - ${consultas.hora}`
);
});
}

} else if (opcao === "3") {
let nome = prompt(" Qual é o nome do paciente? ");
consultas.forEach((consultas, index) => {
if (nome === consultas.paciente) {
consultas.length
})

} else if (opcao === "4") {
consultas.forEach((consultas, index) => {
console.log(`${index + 1}. ${consultas.paciente} - ${consultas.medico} 
- ${consultas.data} - ${consultas.hora}`
);
});
let cancelar = (" Qual voce desja cancelar? ");
consultas.splice(opcao1)
break;


} else if (opcao === "0") {
console.log("Saindo do sistema. Até logo!");
break;
} else {
console.log("Opção inválida. Tente novamente.");
break;
}
}}