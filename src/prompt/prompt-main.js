const mainPrompt = [
    {
        name: "select",
        description: "Selecione uma ferramenta (1- QR Code | 2- PASSWORD)",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas 1 ou 2",
        required: true
    }
]

export default mainPrompt