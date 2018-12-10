'use strict';

const fs = require('fs');
const jwt = require('jsonwebtoken')

//payload
var payload = {
    data1: "data 1",
    data2: "data 2",
    data3: "data 3",
    data4: "data 4",
};

//private and public key
var privateKey = fs.readFileSync('./private.key','utf8');
var publicKey = fs.readFileSync('./public.key','utf8');

var i = 'Multisys Corp';  //Issuer
var s = 'some@user.com';  //Subject
var a = 'http://www.multisyscorp.com'; //Audience

//signing option
var signOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: "12h",
    algorithm: "RS256"
};

var token = jwt.sign(payload, privateKey, signOptions);

console.log("Token: " + token);


//verify options
var verifyOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: "12h",
    algorithm: ["RS256"]
};

var legit = jwt.verify(token, publicKey, verifyOptions);

console.log('\nJWT verification result: ' + JSON.stringify(legit));