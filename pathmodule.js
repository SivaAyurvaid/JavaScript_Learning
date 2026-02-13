const path = require('path'); 

const filepath = 'C:\\temp\\myfile.html'
const home = path.basename(filepath)
console.log(home)

const namedir = path.dirname(filepath)
console.log(namedir)

const a3 = path.extname(__filename)
console.log(__filename, a3)


console.log(path.parse('C:\\path\\dir\\file.txt'))

// txt_path = path.format({
//     root : '/',
//     name : 'text_file',
//     ext  : 'txt'
// })

// txt_path = path.format({
//     root : '/',
//     base : 'text_file.txt',
//     //ext  : 'txt'
// })

// console.log(txt_path)



// home = path.basename(filepath,'.html')
// console.log(home)

// console.log('PROCESS PATH -> ',process.env.PATH)


// a = process.env.PATH.split(path.delimiter);
// console.log(a)