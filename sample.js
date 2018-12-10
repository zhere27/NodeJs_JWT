'use strict';


var jwt = require('./modules/jwt');

//payload
var payload = {
    data1: "data 1",
    data2: "data 2",
    data3: "data 3",
    data4: "data 4",
};

var i = 'Multisys Corp';  //Issuer
var s = 'some@user.com';  //Subject
var a = 'http://www.multisyscorp.com'; //Audience

var signOptions = {
    issuer: i,
    subject: s,
    audience: a,
    expiresIn: "12h",
    algorithm: "RS256"
};

var sign = jwt.sign(payload, signOptions);
console.log('Signed payload: ' + sign);


