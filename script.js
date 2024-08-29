const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a alta produtividade na colheita influencia a segurança alimentar: é positiva ou negativa para a sustentabilidade agrícola?",
        alternativas: [
            {
                texto: "Negativa",
                afirmacao: "negativa... "
            },
            {
                texto: "Positiva",
                afirmacao: "positiva..."
            }
        ]
    },
    {
        enunciado: "Como a alta produtividade na colheita influencia os preços dos alimentos: é benéfica ou prejudicial para os consumidores?",
        alternativas: [
            {
                texto: "benéfica",
                afirmacao: "benéfica..."
            },
            {
                texto: "prejudicial",
                afirmacao: "prejudicial..."
            }
        ]
    },
    {
        enunciado: "Como a alta produtividade na colheita influencia a competitividade dos agricultores locais: é vantajosa ou desvantajosa para a economia regional?",
        alternativas: [
            {
                texto: "vantajosa",
                afirmacao: "vantajosa..."
            },
            {
                texto: "desvantajosa",
                afirmacao: "desvantajosa..."
            }
        ]
    },
    {
        enunciado: "A alta produtividade na colheita é vantajosa para incentivar o investimento em tecnologia agrícola?",
        alternativas: [
            {
                texto: "vantajosa",
                afirmacao: "vantajosa..."
            },
            {
                texto: "benéfica",
                afirmacao: "benéfica..."
            }
        ]
    },
    {
        enunciado: "A alta produtividade na colheita é vantajosa para aumentar a competitividade dos produtos agrícolas locais nos mercados internacionais?",
        alternativas: [
            {
                texto: "benéfica",
                afirmacao: "benéfica..."
            },
            {
                texto: "desvantajosa",
                afirmacao: "desvantajosa..."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Até 2049, a produtividade agrícola tem potencial para ser vantajosa com avanços tecnológicos contínuos e práticas sustentáveis, respondendo à crescente demanda por alimentos e mitigando os impactos das mudanças climáticas.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
