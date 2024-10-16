import qr from "qrcode-terminal"
async function handler(err, result) {
  if (err) {
      console.error("Error at aplication")
      return;
    }
    
    const isSmall = true
    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log("QR Code gera com sucesso: \n") 
        console.log(qrcode);
    })
    
}

export default handler