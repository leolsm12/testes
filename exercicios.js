// Questão n2
const botao = document.getElementById("teste");
botao.addEventListener("click", function() {
  console.log("O botão foi clicado!");

  const num = parseInt(document.getElementById("num").value);

  function fibonacci(numero) {
    let anterior = 0;
    let atual = 1;
    
    while (atual <= numero) {
      if (atual === numero) {
        return true;
      }
      let proximo = anterior + atual;
      anterior = atual;
      atual = proximo;
    }
  
    return false;
  }
  
  let numero = num
  
  if (fibonacci(numero)) {
    resposta.innerHTML = `<p>${num} pertence à sequência.</p>`;
  } else {
    resposta.innerHTML = `<p>${num} não pertence à sequência.</p>`;
  }
  document.getElementById("num").value = "";
});

// Questão n3

fetch('/dados.json')
  .then(response => response.json())
  .then(json => {
    let faturamento = json.filter(obj => obj.valor !== 0).map(obj => obj.valor);
    let media = faturamento.reduce((acc, cur) => acc + cur) / faturamento.length;
    let maiorFaturamento = Math.max(...faturamento);
    let menorFaturamento = Math.min(...faturamento);
    let diasAcimaDaMedia = faturamento.filter(valor => valor > media).length;

    const maior = maiorFaturamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const menor = menorFaturamento.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const botaoMaior = document.getElementById("maior");
    botaoMaior.addEventListener("click", function() {ex3.innerHTML = `<h3>Maior faturamento: ${maior}</h3>`});

    const botaoMenor = document.getElementById("menor");
    botaoMenor.addEventListener("click", function() {ex3.innerHTML = `<h3>Menor faturamento: R$${menor}</h3>`});

    const botaoDia = document.getElementById("dias");
    botaoDia.addEventListener("click", function() {ex3.innerHTML = `<h3>Número de dias acima da média: ${diasAcimaDaMedia} dias </h3>`});

  })
  .catch(error => console.error(error));


// Questao 4 
const faturamentoMensal = {
  SP: 67836.43,
  RJ: 36678.66,
  MG: 29229.88,
  ES: 27165.48,
  Outros: 19849.53,
};

const totalFaturamento = Object.values(faturamentoMensal).reduce((acc, cur) => acc + cur, 0);

const percentuais = {};

for (const estado in faturamentoMensal) {
  percentuais[estado] = ((faturamentoMensal[estado] / totalFaturamento) * 100).toFixed(2) + '%';
}

const lista = document.createElement('ul');
for (const estado in percentuais) {
  const item = document.createElement('li');
  item.textContent = `${estado}: ${percentuais[estado]}`;
  lista.appendChild(item);
}
ex4.appendChild(lista);

// Questao 5 
const button = document.getElementById("aplicar");
button.addEventListener("click", function() {

const string = (document.getElementById("string").value);
let stringInvertida = "";

for(let i = string.length - 1; i >= 0; i--) {
  stringInvertida += string[i];
}


resposta2.innerHTML = `<h3>${stringInvertida}</h3>`
document.getElementById("string").value = "";
});
