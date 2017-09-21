// boolean
// ok
let isCompleted: boolean = false


// ok
let isCompletedByBooleanValue: boolean = Boolean(1)

console.log(isCompleted, isCompletedByBooleanValue)
// false true

// warning
// let isCompletedByBoolean: boolean = new Boolean(1)
// console.log(isCompletedByBoolean)
// [Boolean: true]


// number
let dec: number = 17
let hex: number = 0x11
let bin: number = 0b10001

// ES6 oct
let oct: number = 0o21

console.log(dec, hex, bin, oct)
// 17 17 17 17 


// string
let myName: string = 'dragon'
let slogan: string = `${myName}to be an excellent engineer`

console.log(myName, slogan)


// undefined
let u: undefined = undefined 

// null
let n: null = null

console.log(u, n)
//  undefined null

// void  special for ts, only can set null | undefined, dont use for var
let voidUndefined: void = undefined
let voidNull: void = null
console.log(voidUndefined, voidNull)
//  undefined null

// void for function return void like C++
function alertName(): void {
  console.log('no return value')
}


// any 
// can change type
let anyThing: any = 'dragon'
anyThing = 17
anyThing = null

// default type in ts
let something;
something = 'dragon'
something = 17

// cant change type in another type
// let myNumber: number = 7
// myNumber = 'seven'

// union type
let myNumberByUnion: string | number = 7
console.log(myNumberByUnion)
// 7

myNumberByUnion = 'seven'
console.log(myNumberByUnion)
// seven

