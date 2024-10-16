async function handler() {
    let characteres = []
    let password = ""

    if (process.env.UPPERCAS_LETTER === "true") {
        characteres.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ")
    }
    if (process.env.LOWER_LETTER === "true") {
        characteres.push(..."abcdefghijklmnopqrstuvwxyz")
    }
    if (process.env.NUMBERS === "true") {
        characteres.push(..."1234567890")
    }
    if (process.env.SPECIAL_CHARACTERS === "true") {
      characteres.push(..."!@#$%¨&*()-_=+[{]}]~^/|?;:,<>.");
    }

    const passwordLenght = process.env.PASSWORD_LENGHT;

    for (let i = 0; i < passwordLenght; i++) {
      const index = Math.floor(Math.random() * characteres.length);
      password += characteres[index];
    }
    return password;
}

export default handler