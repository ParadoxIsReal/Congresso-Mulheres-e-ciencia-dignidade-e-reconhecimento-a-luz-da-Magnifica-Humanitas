export const QUIZ_PADRAO = [
  {
    pergunta: "De acordo com o texto, qual era a estimativa de mulheres executadas durante o movimento de caça às bruxas na Idade Média, e qual era a principal justificativa da Igreja Católica?",
    correta: "Cerca de 100 mil mulheres; tudo o que divergia do estabelecido pela Igreja era apontado como bruxaria.",
    incorretas: [
      "Cerca de 50 mil mulheres; foram condenadas por heresia ao tentarem acessar direitos políticos e econômicos.",
      "Cerca de 100 mil mulheres; foram acusadas de praticar medicina sem a devida autorização do patriarca da casa.",
      "Cerca de 200 mil mulheres; eram apontadas como bruxas por se recusarem a casar e servir aos propósitos do lar."
    ]
  },
  {
    pergunta: "Florence Nightingale, fundadora da Enfermagem moderna, ganhou destaque por sua atuação em qual conflito histórico e em qual período?",
    correta: "Guerra da Crimeia, entre os anos de 1853 e 1856.",
    incorretas: [
      "Primeira Guerra Mundial, entre os anos de 1914 e 1918.",
      "Guerra dos Cem Anos, liderando expedições médicas em 1429.",
      "Guerra Franco-Prussiana, durante os anos de 1870 a 1871."
    ]
  },
  {
    pergunta: "Marie Curie foi pioneira no campo da radioatividade. Quais foram os dois elementos químicos descobertos por ela e qual foi o seu feito inédito no Prêmio Nobel?",
    correta: "Polônio e Rádio; foi a primeira mulher a ganhar um Nobel e a única a ganhar dois prêmios em áreas diferentes (Física e Química).",
    incorretas: [
      "Urânio e Rádio; foi a única pessoa a ganhar dois Prêmios Nobel na área de Física.",
      "Polônio e Tório; foi a primeira mulher a ser reconhecida pelas áreas de Medicina e Química.",
      "Plutônio e Rádio; descobriu a radioterapia e ganhou prêmios em Medicina e Física."
    ]
  },
  {
    pergunta: "Joana d'Arc afirmava receber orientações divinas que a instruíram a apoiar o delfim Carlos. Quem eram as figuras religiosas citadas em seus relatos?",
    correta: "São Miguel Arcanjo, Santa Catarina de Alexandria e Santa Margarida de Antioquia.",
    incorretas: [
      "São Gabriel Arcanjo, Santa Joana de Chantal e Santa Maria Madalena.",
      "São Miguel Arcanjo, Santa Clara de Assis e Santa Margarida de Cortona.",
      "São Pedro, Santa Catarina de Siena e Nossa Senhora."
    ]
  },
  {
    pergunta: "Em 23 de maio de 1430, Joana d'Arc foi capturada. Quem a capturou, a quem ela foi entregue e qual foi a condenação que a levou à fogueira aos 19 anos?",
    correta: "Capturada pelos borguinhões, entregue ao tribunal do bispo Pierre Cauchon e condenada por heresia.",
    incorretas: [
      "Capturada pelos ingleses, entregue ao Rei Carlos VII e condenada por alta traição militar.",
      "Capturada pelos franceses desertores, entregue ao Papa e condenada por feitiçaria e bruxaria.",
      "Capturada pelos borguinhões, entregue ao cerco de Paris e condenada por conspiração política."
    ]
  },
  {
    pergunta: "A história de Joana d'Arc passou por uma grande revisão após sua morte. Em quais anos ocorreram, respectivamente, a anulação de sua condenação, sua beatificação e sua canonização?",
    correta: "Anulação em 1456; Beatificação em 1909; Canonização em 1920.",
    incorretas: [
      "Anulação em 1431; Beatificação em 1456; Canonização em 1909.",
      "Anulação em 1500; Beatificação em 1856; Canonização em 1920.",
      "Anulação em 1456; Beatificação em 1920; Canonização em 1909."
    ]
  }
];

export class QuizServico {
  constructor(perguntas) {
    this.perguntas = perguntas;
  }

  embaralharAlternativas(pergunta) {
    const alternativas = [pergunta.correta, ...pergunta.incorretas];
    for (let i = alternativas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [alternativas[i], alternativas[j]] = [alternativas[j], alternativas[i]];
    }
    return alternativas;
  }

  montarSequencia() {
    const copiaPerguntas = [...this.perguntas];
    for (let i = copiaPerguntas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copiaPerguntas[i], copiaPerguntas[j]] = [copiaPerguntas[j], copiaPerguntas[i]];
    }
    return copiaPerguntas;
  }
}