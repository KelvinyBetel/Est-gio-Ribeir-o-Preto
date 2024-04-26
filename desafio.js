//Desafio.js

Questão 01:

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

/*No código acima, a variável `INDICE` é 13, `SOMA` é inicializada como 0 e `K` também é inicializada como 0. O código então entra em um loop while que continua enquanto `K` for menor que `INDICE`. Dentro do loop, `K` é incrementada em 1 a cada iteração e esse valor é adicionado à `SOMA`.*/

let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA); // O resultado impresso será 91

//Portanto, ao final do processamento, o valor da variável `SOMA` será 91.


Questão 02

function isFibonacci(number) {
    let a = 0;
    let b = 1;
    
    while (a <= number) {
        if (a === number) {
            return true; // O número pertence à sequência de Fibonacci
        }
        
        let temp = a;
        a = b;
        b = temp + b;
    }

    return false; // O número não pertence à sequência de Fibonacci
}

// Exemplo de uso
let userInput = parseInt(prompt("Informe um número para verificar se pertence à sequência de Fibonacci:"));

if (isFibonacci(userInput)) {
    console.log(`${userInput} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${userInput} não pertence à sequência de Fibonacci.`);
}


Questão 03 

3) Descubra a lógica e complete o próximo elemento:

a) 1, 3, 5, 7, 9

b) 2, 4, 8, 16, 32, 64, 128

c) 0, 1, 4, 9, 16, 25, 36, 49

d) 4, 16, 36, 64, 100

e) 1, 1, 2, 3, 5, 8, 13

f) 2,10, 12, 16, 17, 18, 19, 200

Questão 04

/*Na primeira ida, eu ligaria o primeiro interruptor por alguns minutos e depois desligaria. Em seguida, ligaria o segundo interruptor e entraria na sala das lâmpadas.
Ao entrar na sala das lâmpadas, se eu encontrasse uma lâmpada acesa, saberia que o primeiro interruptor controla essa lâmpada. 
Se a lâmpada estivesse apagada, mas ainda quente, isso indicaria que o segundo interruptor controla essa lâmpada. 
E se a lâmpada estivesse apagada e com temperatura ambiente, então o terceiro interruptor controlaria essa lâmpada.*/

Questão 05

function inverterString(str) {
    let novaString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

// Exemplo de uso:
const minhaString = 'Olá, mundo!';
const stringInvertida = inverterString(minhaString);
console.log(stringInvertida); // Saída: '!odnum ,álO'

//Neste código, a função inverterString recebe uma string como argumento e, em seguida, itera sobre ela de trás para frente, construindo uma nova string com os caracteres na ordem inversa. A nova string é então retornada pela função.