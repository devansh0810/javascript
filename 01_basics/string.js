const name = "Devansh"
const num = 50
console.log("hello my name is "+ name+ num)
console.log(`Hello my name is ${name} and my number is ${num}`)
const getname = new String('Deva')
console.log(getname[0])
console.log(getname.__proto__);
console.log(getname.length)
console.log(getname.toUpperCase())
console.log(getname.charAt(0))
console.log(getname.indexOf('e'))

const name1 = new String('KHUSHI')
const newname = name1.substring(0,4)
console.log(name1);

const name2 = new String('Satidevansh')
const newname2 = name2.slice(-8,4)
console.log(`${newname},"   ",${newname2}`)
const var1 = "    devanshhhh     "
console.log(var1.trim())
console.log(var1.replace('d','k'))
console.log(var1.includes('deva'))

const var2 = "abc/def-ghi/jkl"
console.log(var2.split('/'))