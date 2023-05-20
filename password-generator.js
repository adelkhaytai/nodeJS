
password =()=>{
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    var string_length = 8;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    randomstring += chars.substring(rnum,rnum+1);
}
return randomstring
}
console.log(password())


// var generator = require('generate-password');

// var password = generator.generate({
// 	length: 10,
// 	numbers: true
// });

// // 'uEyMTw32v9'
// console.log(password);





