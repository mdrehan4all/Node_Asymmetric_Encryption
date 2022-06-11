const crypto = require("crypto")
const fs = require("fs")

public_key = fs.readFileSync('public.pem', 'utf8')
console.log(public_key)
private_key = fs.readFileSync('private.pem', 'utf8')
console.log(private_key)