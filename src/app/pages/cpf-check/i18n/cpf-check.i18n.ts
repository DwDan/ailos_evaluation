export const cpfCheckI18n = {
  pt: {
    page: 'Nova Admissão Cooperado',
    breadcrumb: ['Cadastro', 'Admissão do Cooperado', 'Nova Admissão'],
    title: 'Informe o CPF do futuro cooperado (a)',
    subtitleLine1:
      'Se necessário, você poderá duplicar uma conta existente ou pausar e retomar este cadastro futuramente.',
    subtitleLine2: 'Digite apenas os números (sem pontos ou traços).',
    label: 'CPF',
    placeholder: '000.000.000-00',
    button: 'Consultar por CPF',
    resultTitle: 'Situação cadastral do CPF',
    resultSubtitle: 'Consulta na Receita Federal',
    resultNameLabel: 'Nome',
    resultStatusLabel: 'Situação do CPF',
    steps: ['Início', 'Documentos', 'Dados cadastrais', 'Admissão'],
    footer: {
      buttons: [
        {
          text: 'Dicas para abertura da conta',
          class: 'btn-outline-primary',
        },
      ],
    },
  },
  en: {
    page: 'New Member Admission',
    breadcrumb: ['Registration', 'Member Admission', 'New Admission'],
    title: 'Enter the CPF of the future member',
    subtitleLine1:
      'If necessary, you can duplicate an existing account or pause and resume this registration later.',
    subtitleLine2: 'Enter only the numbers (no dots or dashes).',
    label: 'CPF',
    placeholder: '000.000.000-00',
    button: 'Check by CPF',
    resultTitle: 'CPF registration status',
    resultSubtitle: 'Check with the Federal Revenue',
    resultNameLabel: 'Name',
    resultStatusLabel: 'CPF Status',
    steps: ['Start', 'Documents', 'Personal data', 'Admission'],
    footer: {
      buttons: [
        {
          text: 'Tips for account opening',
          class: 'btn-outline-primary',
        },
      ],
    },
  },
} as const;
