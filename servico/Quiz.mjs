export const QUIZ_PADRAO = [
  {
    id: 1,
    pergunta: 'Qual foi o tema central do congresso?',
    alternativas: [
      'A repressão da pesquisa acadêmica',
      'Dignidade e reconhecimento das mulheres na ciência',
      'A exclusão de mulheres da educação',
      'O avanço da tecnologia sem ética'
    ],
    correta: 'Dignidade e reconhecimento das mulheres na ciência'
  },
  {
    id: 2,
    pergunta: 'Por que a representatividade feminina na ciência é importante?',
    alternativas: [
      'Porque reduz a quantidade de pesquisas feitas',
      'Porque amplia perspectivas e valoriza conhecimentos historicamente silenciados',
      'Porque elimina todas as dificuldades acadêmicas',
      'Porque torna os cursos mais curtos'
    ],
    correta: 'Porque amplia perspectivas e valoriza conhecimentos historicamente silenciados'
  },
  {
    id: 3,
    pergunta: 'O que o congresso busca destacar?',
    alternativas: [
      'A importância de visibilidade e valorização das mulheres no campo científico',
      'O fim das universidades',
      'A necessidade de somente homens na pesquisa',
      'A criação de novos exames de vestibular'
    ],
    correta: 'A importância de visibilidade e valorização das mulheres no campo científico'
  },
  {
    id: 4,
    pergunta: 'Qual é a relação entre dignidade e ciência, segundo o tema?',
    alternativas: [
      'É irrelevante para a educação',
      'É um fator que impede qualquer avanço',
      'É essencial para reconhecer o papel das mulheres e combater invisibilidades',
      'É apenas uma questão religiosa'
    ],
    correta: 'É essencial para reconhecer o papel das mulheres e combater invisibilidades'
  },
  {
    id: 5,
    pergunta: 'O quiz foi pensado para avaliar:',
    alternativas: [
      'A compreensão da reportagem sobre as mulheres na ciência',
      'A capacidade de decorar todas as regras do HTML',
      'A quantia de fotos do congresso',
      'A frequência da presença em sala'
    ],
    correta: 'A compreensão da reportagem sobre as mulheres na ciência'
  }
];

export class QuizServico {
  constructor(perguntas = QUIZ_PADRAO) {
    this.perguntas = perguntas;
  }

  embaralhar(lista) {
    const copia = [...lista];
    for (let i = copia.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copia[i], copia[j]] = [copia[j], copia[i]];
    }
    return copia;
  }

  montarSequencia() {
    return this.embaralhar(this.perguntas);
  }

  embaralharAlternativas(pergunta) {
    const alternativas = [...pergunta.alternativas];
    for (let i = alternativas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [alternativas[i], alternativas[j]] = [alternativas[j], alternativas[i]];
    }
    return alternativas;
  }
}

