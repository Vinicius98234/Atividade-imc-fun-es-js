
/* 07 

	- Mini Desafio: Calculadora de Índice de Massa Corporal (IMC) do Centro Médico ALRN
	- Você foi contratado para desenvolver uma calculadora de Índice de Massa Corporal (IMC) para o nosso centro de saúde da ALRN. 
  - O IMC é calculado usando a fórmula: IMC = peso / (altura * altura).
	- Seu programa deve avaliar dois arrays, um que armazena os pesos (em kg) de um conjunto de 15 pacientes e suas respectivas alturas (em metros) e, em seguida, calcular e exibir seu IMC. 
  - Além disso, o programa deve fornecer uma classificação do IMC de acordo com a tabela abaixo:

		-- IMC < 18.5: Abaixo do peso
		-- 18.5 <= IMC < 25: Peso normal
		-- 25 <= IMC < 30: Sobrepeso
		-- IMC >= 30: Obeso
    
Protótipo do código do array - Proposta 01:

let arrayPesos = [];
let arrayAlturas = [];
let arrayNomes = [];
let arrayIMCs = [];

Protótipo do código do array - Proposta 02:

let arrayCompletos = [
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
[nome, peso, altura, IMC],
...

];
- O programa deverá receber os arrays com os dados dos 15 pacientes, você deve criar estes aarrays com dados simulados;
- Ao final da execução o programa deverá imprimir linha por linha as informações de cada paciente, ou seja, teremos 15 linhas de acordo com o seguinte formato:

saída = 

'Paciente (1): Nome: Johny Cage - Peso: 78 Kg - Altura: 1.80 m - IMC: 24.07 - Diagnóstico: Peso normal'
'Paciente (2): Nome: Scorpion - Peso: 98 Kg - Altura: 1.87 m - IMC: 28.02 - Diagnóstico: Sobrepeso'
'Paciente (3): Nome: Joel Miller - Peso: 50 Kg - Altura: 1.80 m - IMC: 15.43 - Diagnóstico: Abaixo do peso'
...
'Paciente (15): Nome: XXX - Peso: YY Kg - Altura: X.X m - IMC: ZZZZ - Diagnóstico: HHHH'

*/
const calcularIMC = (peso, altura) => peso / (altura * altura);

const classificarIMC = imc => {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc < 25) {
        return "Peso normal";
    } else if (imc < 30) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
};

const arrayCompletos = [
  ["Johny Cage", 78, 1.80],
  ["Scorpion", 98, 1.87],
  ["Joel Miller", 50, 1.80],
  ["Ellie Williams", 55, 1.65],
  ["Geralt of Rivia", 90, 1.88],
  ["Ciri", 65, 1.75],
  ["Aloy", 60, 1.70],
  ["Kratos", 120, 1.90],
  ["Atreus", 40, 1.50],
  ["Ezio Auditore", 75, 1.78],
  ["Bayek", 85, 1.82],
  ["Connor Kenway", 70, 1.75],
  ["Edward Kenway", 80, 1.80],
  ["Altaïr Ibn-La'Ahad", 70, 1.75],
  ["Arno Dorian", 72, 1.76]
];

arrayCompletos.forEach((paciente, index) => {
    const [nome, peso, altura] = paciente;
    const imc = calcularIMC(peso, altura).toFixed(2);
    const diagnostico = classificarIMC(imc);
    
    console.log(`Paciente (${index + 1}): Nome: ${nome} - Peso: ${peso} Kg - Altura: ${altura} m - IMC: ${imc} - Diagnóstico: ${diagnostico}`);
});
