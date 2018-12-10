'use strict';

const fs = require('fs');
const jwt = require('jsonwebtoken')

//private and public key
var privateKey = fs.readFileSync('./private.key', 'utf8');
var publicKey = fs.readFileSync('./public.key', 'utf8');

module.exports = {
    sign: (payload, $Options) => {
        var signOptions = {
            issuer: $Options.issuer,
            subject: $Options.subject,
            audience: $Options.audience,
            expiresIn: "30d",
            algorithm: "RS256"
        };

        return jwt.sign(payload, privateKey, signOptions);
    }
},
    {
        verify: (token, $Option) => {
            var verifyOptions = {
                issuer: $Option.issuer,
                subject: $Option.subject,
                audience: $Option.audience,
                expiresIn: "30d",
                algorithm: ["RS256"]
            };
            try {
                return jwt.verify(token, publicKey, verifyOptions);
            }
            catch (err) {
                return false;
            }
        },

        decode: (token) => {
            return jwt.decode(token, { complete: true });
        }
    }
