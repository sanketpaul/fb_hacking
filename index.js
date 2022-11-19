let b = prompt("enter name")
let messages = [
    "invoke_hacktools",
    "try_2_cnnt++_https://www.facebook.com/?name?__:^",
    "connecting to the serverno: ofcrt5",
    "connection denied !!!! ......",
    "Connecting to an another serverno:ofcrt006",
    "connection failed.❌...retrying",
    "connecting to server:2343445",
    "connect successfully✅",
    `username ${b}`,
    "trying bruitforce 📛🛑",
    "3000k passoword trying ‼....",
    "match notfound...retrying ❗...",
    "6000k password trying ‼‼.....",

    "match found ✅",
    "Hack successful"
]
let after = async (sec) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            resolve(true)
        }, sec * 1500);
    })
}
let hacking = async (message) => {
    await after(2.5);
    let text = document.getElementsByClassName('text')
    text[0].innerHTML = text[0].innerHTML + message + '<br>'
    text[1].innerHTML = text[1].innerHTML + message + '<br>'
    text[2].innerHTML = text[2].innerHTML + message + '<br>'
  
}
if (b) {

    (async () => {
        for (let i = 0; i < messages.length; i++) {
            await hacking(messages[i])
        }
    })();
}
