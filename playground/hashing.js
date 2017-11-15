const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
}

var token = jwt.sign(data,'abc123');            //abc123 is the secret
console.log(token);         /// token generated encrypts out data.. it contains- Header, Payload and Hash

var decoded = jwt.verify(token, 'abc123');         //Verify the token and secret 
console.log('decoded', decoded);









//-- Just for Playground-- 
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash} `);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash:SHA256(JSON.stringify(data)+ 'somesecret').toString()
// };

// // token.data.id = 5;           Data was changed and thus error displayed
// //token.data.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
// if(resultHash === token.hash) {
//     console.log('Data was not changed');
// }else {
//     console.log('Data was changed and dont trust');
// }