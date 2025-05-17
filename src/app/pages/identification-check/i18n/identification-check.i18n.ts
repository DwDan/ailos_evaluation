export const identificationCheckI18n = {
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
    cpfErrorValidation: 'CPF inválido. Por favor, verifique e tente novamente.',
    steps: ['Início', 'Documentos', 'Dados cadastrais', 'Admissão'],
    footer: {
      tipButton: {
        text: 'Dicas para abertura da conta',
        class: 'btn-outline-primary',
      },

      newAdmission: {
        text: 'Iniciar nova admission',
        class: 'btn-primary',
      },

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
    title: 'Enter the SSN of the future member',
    subtitleLine1:
      'If necessary, you can duplicate an existing account or pause and resume this registration later.',
    subtitleLine2: 'Enter only the numbers (no dots or dashes).',
    label: 'SSN',
    placeholder: '000.000.000-00',
    button: 'Check by SSN',
    resultTitle: 'SSN registration status',
    resultSubtitle: 'Check with the Federal Revenue',
    resultNameLabel: 'Name',
    resultStatusLabel: 'SSN Status',
    cpfErrorValidation: 'Invalid CPF. Please check and try again.',
    steps: ['Start', 'Documents', 'Personal data', 'Admission'],
    footer: {
      tipButton: {
        text: 'Tips for account opening',
        class: 'btn-outline-primary',
      },
      newAdmission: {
        text: 'Start new admission',
        class: 'btn-primary',
      },
    },
  },
} as const;
