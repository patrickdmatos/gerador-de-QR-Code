# Gerador de QR Code

Este é um projeto simples de **geração de códigos QR** utilizando **Node.js** desenvolvido durante o curso de certificação NODE da DIO. Ele foi desenvolvido como uma ferramenta auxiliar para e-commerce, podendo ser usado para gerar códigos QR para compartilhar links de produtos, páginas promocionais ou informações de pagamento diretamente no terminal.

## Funcionalidades

- Geração de códigos QR a partir de links, textos ou dados personalizados.
- Exibição do código QR diretamente no terminal.
- Captura de entrada de dados interativa via terminal.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [prompt](https://www.npmjs.com/package/prompt) — para captura de dados do usuário no terminal.
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal) — para geração e exibição de QR Codes no terminal.

## Pré-requisitos

Antes de começar, certifique-se de ter o **Node.js** instalado na sua máquina. Você pode baixá-lo [aqui](https://nodejs.org/).

## Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/gerador-de-qr-code.git
Navegue até o diretório do projeto:

bash
Copiar código
cd gerador-de-qr-code
Instale as dependências:

bash
Copiar código
npm install
Uso
Crie um arquivo .env na raiz do projeto (caso seja necessário, dependendo da configuração).

Para iniciar o projeto, execute o seguinte comando:

bash
Copiar código
npm start
O programa solicitará a entrada de dados no terminal (exemplo: URL ou texto) para gerar o QR Code.

O código QR gerado será exibido diretamente no terminal.

Exemplo
Ao executar o programa, você verá algo assim:

> Digite o link ou texto para gerar o QR Code:
Depois de fornecer o link ou texto, o QR Code será exibido:

Desenvolvido por Patrick de matos.

Esse `README.md` fornece uma visão clara do que o projeto faz, como instalá-lo e usá-lo, além de um exemplo para facilitar a compreensão dos usuários.****
