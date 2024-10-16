import handler from "./handle.js";

async function createPassword() {
    console.log('Password: \n');
    const password = await handler()
    return console.log(password);
}

export default createPassword