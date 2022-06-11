const crypto = require("crypto")
const fs = require("fs")

function encryptText (plainText) {
    return crypto.publicEncrypt({
      key: fs.readFileSync('public.pem', 'utf8'),
      padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      oaepHash: 'sha256'
    },
    // We convert the data string to a buffer
    Buffer.from(plainText)
    )
}

enc_text = encryptText("Hello World")
fs.writeFileSync("text.txt", enc_text)