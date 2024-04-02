const secoes = [
    {
      id: 1,
      titulo: 'Insira alguns dados básicos',
      entradaTexto: [
        {
          id: 1,
          label: 'Nome',
          placeholder: 'Digite seu nome completo'
        },
        {
          id: 2,
          label: 'Email',
          placeholder: 'Digite seu email'
        },
      ],
      checkbox: []
    },
    {
      id: 2,
      titulo: 'Agora, mais alguns dados sobre você:',
      entradaTexto: [
        {
          id: 1,
          label: 'CEP',
          placeholder: 'Digite seu CEP'
        }
      ],
      checkbox: []
    },
    {
      id:3,
      titulo: ' Para finalizar, qual dos grupos você faz parte ?',
      entradaTexto: [],
      checkbox: [
        {
          id: 1,
          value: 'Unattimo'
        },
        {
          id: 2,
          value: 'Pintura express'
        }
      ]
    }
]

    
export { secoes }