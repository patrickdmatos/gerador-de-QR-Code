import prompt from "prompt"
import qrcodePrompt from "../../prompt/prompt-qrcode.js"
import handler from "./handle.js"
async function createQRCode() {
    prompt.get(qrcodePrompt, handler)
}

export default createQRCode