// module wrapper function  

// (function(exports, require, module, __filename,__dirname){

harry = {
    name : 'Harry',
    favNum : 3,
    developer : true 
}


// console.log(exports, require, module, __filename, __dirname)
console.log(__filename, __dirname)
module.exports = harry;

// })