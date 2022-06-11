const crypto = require("crypto")
const fs = require("fs")

function decryptText(encryptedText, private_key_file = 'private.pem',) {
    return crypto.privateDecrypt(
      {
        key: fs.readFileSync(private_key_file, 'utf8'),
        // In order to decrypt the data, we need to specify the
        // same hashing function and padding scheme that we used to
        // encrypt the data in the previous step
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: 'sha256'
      },
      encryptedText
    )
}

enc_text = fs.readFileSync("text.txt")
dec_text = decryptText(enc_text).toString()
console.log(dec_text)