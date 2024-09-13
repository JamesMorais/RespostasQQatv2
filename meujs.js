/* PRIMEIRA PARTE */
function calcularValorVolume() {
    const r = parseFloat(document.getElementById('r').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultado = document.getElementById('resultado1')

    let volume = 3.14159 * (r * r) * altura;
    resultado.innerHTML = `O valor do volume é ${volume.toFixed(3)}`
}
function calcularQtdL() {
    const tempo = parseFloat(document.getElementById('tempo').value);
    const velocidadeM = parseFloat(document.getElementById('velocidadeM').value);
    const resultado = document.getElementById('resultado2')

    let distancia = tempo * velocidadeM;
    let litros = distancia / 12;


    resultado.innerHTML = `Velocidade Média: ${velocidadeM} <br> Tempo Gasto: ${tempo} <br> Distância: ${distancia.toFixed(2)} km <br> Quantidade de Litros gastos: ${litros} `
}
function calcularPrestacao() {
    const valorInicial = parseFloat(document.getElementById('valorInicial').value);
    const taxa = parseFloat(document.getElementById('taxa').value);
    const tempoD = parseInt(document.getElementById('tempoD').value, 10);
    const resultado = document.getElementById('resultado3');

    if (isNaN(valorInicial) || isNaN(taxa) || isNaN(tempoD)) {
        resultado.innerHTML = 'Digite um valor válido'
    } else {
        let prestacao = valorInicial + (valorInicial * (taxa / 100) * tempoD);

        resultado.innerHTML = `O valor da prestação em atraso é: ${prestacao.toFixed(2)}`
    }
}
function trocarValores() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    const resultado = document.getElementById('resultado4');

    let varAux = a
    a = b
    b = varAux

    resultado.innerHTML = `O valor trocado fica:<br>a: ${a}<br>b: ${b}`
}
/* SEGUNDA PARTE */
function aplicarPropDistributiva() {
    /* FAREI SEM UTILIZAR LISTAS POIS NESSE CONTEXTO AINDA NÃO TENHO TANTA SEGURANÇA SOBRE O ASSUNTO */

    const a = parseFloat(document.getElementById('valorA').value);
    const b = parseFloat(document.getElementById('valorB').value);
    const c = parseFloat(document.getElementById('valorC').value);
    const d = parseFloat(document.getElementById('valorD').value);

    const resultado = document.getElementById('resultado5');

    const somaAB = a + b;
    const somaAC = a + c;
    const somaAD = a + d;
    const somaBC = b + c;
    const somaBD = b + d;
    const somaCD = c + d;

    const multAB = a * b;
    const multAC = a * c;
    const multAD = a * d;
    const multBC = b * c;
    const multBD = b * d;
    const multCD = c * d;


    resultado.innerHTML = `<p>Somas:</p>A+B: ${somaAB} <br> A+C: ${somaAC} <br> A+D: ${somaAD}<br>B+C: ${somaBC}<br>B+D: ${somaBD}<br>C+D: ${somaCD}<p>Multiplicações:</p>A*B: ${multAB}<br>A*C: ${multAC}<br>A*D: ${multAD}<br>B*C: ${multBC}<br>B*D: ${multBD}<br>C*D: ${multCD}`;

}
function calcularVolumeCaixa() {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const h = parseFloat(document.getElementById('h').value);

    const resultado = document.getElementById('resultado6');

    let volume = (comprimento * largura * h);

    resultado.innerHTML = `Volume da caixa: ${volume}`;
}
function calcularQuadradoNmr() {
    const nmr = parseInt(document.getElementById('nmr').value);

    const resultado = document.getElementById('resultado7');

    /* vou utilizar math.Pow porque lembrei dele e é mais simples*/

    resultado.innerHTML = `Resultado: ${Math.pow(nmr, 2)}`;

}
function calcularQD() {
    const a1 = parseInt(document.getElementById('a1').value);
    const b2 = parseInt(document.getElementById('b2').value);

    const resultado = document.getElementById('resultado8');
    let diferenca = a1 - b2;
    let quadrado = Math.pow(diferenca, 2);

    resultado.innerHTML = `Resultado: ${quadrado}`;

}
/* TERCEIRA PARTE */
function conversao(tipo) {
    if (tipo === 1) {
        const cotDolar = parseFloat(document.getElementById('cotDolar1').value);
        const qtd = parseFloat(document.getElementById('qtd1').value);
        const resultado = document.getElementById('resultado9');
        if (isNaN(cotDolar) || isNaN(qtd) || cotDolar < 0 || qtd < 0) {
            resultado.innerHTML = `Digite um valor válido`
        } else {
            let valorEmReal = qtd * cotDolar;
            resultado.innerHTML = `Resultado conversão dolar para real: ${valorEmReal.toFixed(2)}`
        }
    } else if (tipo === 2) {
        const cotDolar = parseFloat(document.getElementById('cotDolar2').value);
        const qtd = parseFloat(document.getElementById('qtd2').value);
        const resultado = document.getElementById('resultado10');

        if (isNaN(cotDolar) || isNaN(qtd) || cotDolar < 0 || qtd < 0) {
            resultado.innerHTML = `Digite um valor válido`
        } else {
            let valorEmDolar = qtd / cotDolar;
            resultado.innerHTML = `Resultado conversão real para dolar: ${valorEmDolar.toFixed(2)}`
        }
    }
}
function calcularSomaQT(){
    const a = parseFloat(document.getElementById('vA1').value);
    const b = parseFloat(document.getElementById('vB1').value);
    const c = parseFloat(document.getElementById('vC1').value);
    const resultado = document.getElementById('resultado11');

    let soma = (Math.pow(a,2))+(Math.pow(b,2))+(Math.pow(c,2))

    resultado.innerHTML = `Resultado: ${soma}`

}
function calcularQuadradoSoma(){
    const a = parseFloat(document.getElementById('vA2').value);
    const b = parseFloat(document.getElementById('vB2').value);
    const c = parseFloat(document.getElementById('vC2').value);
    const resultado = document.getElementById('resultado12');

    let soma = a+b+c;
    let quadrado = Math.pow(soma,2)

    resultado.innerHTML=`Resultado: ${quadrado}`
}