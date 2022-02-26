```
// type alias

type Combinable = string | number;
type conv_desc = 'as-number' | 'as-text';

function sa(n1: Combinable, n2: Combinable, resconv: conv_desc) {
  let res;
  if (
    (typeof n1 === 'number' && typeof n2 === 'number') ||
    resconv === 'as-number'
  ) {
    res = +n1 + +n2;
  } else {
    res = n1.toString() + n2.toString();
  }

  return res;
}
const summed = sa(10, 91, 'as-number');
console.log(summed);

const combstringages = sa('30', '26', 'as-number');

const combname = sa('zahid ', 'pranta', 'as-text');
console.log(combname);

// literal types

// function sa(
//   n1: string | number,
//   n2: string | number,
//   resconv: 'as-number' | 'as-text'   --literal type
// ) {
//   let res;
//   if (
//     (typeof n1 === 'number' && typeof n2 === 'number') ||
//     resconv === 'as-number'
//   ) {
//     res = +n1 + +n2;
//   } else {
//     res = n1.toString() + n2.toString();
//   }

//   return res;
// }
// const summed = sa(10, 91, 'as-number');
// console.log(summed);

// const combstringages = sa('30', '26', 'as-number');

// const combname = sa('zahid ', 'pranta', 'as-text');
// console.log(combname);


---------basics------------

function add(n1: number, n2: number, print: boolean, ph: string) {
    const ress = n1 + n2;
    if (print) {
      console.log(ph + ress);
    } else {
      return ress;
    }
  }
  const number1 = 5;
  // const number1:number = 5;   --same
  
  const number2 = 2.8;
  const printres = true;
  const phrase = 'result is ';
  const res = add(number1, number2, printres, phrase);
  

  -------------functions---------------

  // fuction inside a function

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
    const res = n1 + n2;
    cb(res);
  }
  
  addAndHandle(10, 20, (res) => {
    console.log(res);
  });
  
  //   function
  
  // function add1(n1: number, n2: number) {
  //   return n1 + n2;
  // }
  
  // function printres2(num: number): void {
  //   console.log('result ' + num);
  // }
  // // let combineValue: ()=>number;
  // let combineValue: (a: number, b: number) => number;
  
  // combineValue = add1;
  // // combineValue=printres2; // here is the error
  
  // console.log(combineValue(5, 3));
  
  // Function in a variable
  
  // function add1(n1: number, n2: number) {
  //     return n1 + n2;
  //   }
  
  //   function printres2(num: number): void {
  //     console.log('result ' + num);
  //   }
  //   let combineValue:Function;
  //   combineValue = add1;
  //   combineValue=printres2;
  
  //   console.log(combineValue(5, 3));
  
  // Function in a variable
  
  // function add1(n1: number, n2: number) {
  //   return n1 + n2;
  // }
  
  // function printres2(num: number): void {
  //   console.log('result ' + num);
  // }
  // let combineValue;
  // combineValue = add1;
  // // combineValue=6;   //it will give us an erro beacause 6 is not a function
  // console.log(combineValue(5, 3));
  
  // Void
  
  // function add1(n1: number, n2: number) {
  //   return n1 + n2;
  // }
  
  // function printres2(num: number): void {
  //   //if we don't use void it's auto void means it actually don't return anything
  //   console.log('result ' + num);
  // }
  // printres2(add1(5, 3));
  
  // Function Types
  
  // function add1(n1: number, n2: number): string {
  //   // return n1 + n2;  //we can't use this
  // }
  // console.log(add1(5, 6));
  
  // Function Types
  
  // function add1(n1: number, n2: number): number {
  //   return n1 + n2;
  // }
  // console.log(add1(5, 6));
  
  
  --------index------------

  function generateError(message: string, code: number) {
  throw { message: message, errorode: code };
}

generateError('an error occured!', 500);

// Unknown intro

// let userinput: unknown;

// let username: string;

// userinput = 5;
// userinput = 'max';
// if(typeof userinput==='string')
// {
//   username=userinput;
// }

// Unknown intro

// let userinput: unknown;

// let username: string;

// userinput = 5;
// userinput = 'max';
// username=userinput; // need to swith userinput to any


------obj-array-enum--------------


// const admin=0;
// const Read_only=1;
// const Author=2;
// const person= {
//   name: 'Zahid',
//   age: 30,
//   role: admin
// };
// if(person.role=== admin){
//   console.log("admin");
// }

// --using enum
enum Role {
    admin,
    readony,
    author,
  }
  const person = {
    name: 'Zahid',
    age: 30,
    role: Role.admin,
  };
  if (person.role === Role.admin) {
    console.log('admin');
  }
  
  // tuple
  
  // const person: {
  //   name: string;
  //   age: number;
  //   role: [string, number];
  // } = {
  //   name: 'Zahid',
  //   age: 30,
  //   role: ['2', 2],
  // };
  
  // person.role.push('zahid');
  // // person.role[1]='name'; -error beacuse we decleared the type
  // console.log(person.role);
  // ----
  
  // const person = {
  //   name: 'Zahid',
  //   age: 30,
  //   role:['2',2, ]
  // };
  
  // person.role.push("zahid");
  // person.role[1]='name';
  // console.log(person.role)
  
  // Array
  
  // const person = {
  //   name: 'Zahid',
  //   age: 30,
  //   hobbies: ['guiter', 'cooking'],
  // };
  
  // // let favouriteACtion: string[];
  // // favouriteACtion=['skating',1]; --gives an error because we took number
  
  // let favouriteACtion: any[];
  // favouriteACtion = ['skating', 1];
  // for (const hb of person.hobbies) {
  //   console.log(hb);
  // }
  
  // object
  
  // const person:{
  //   name:string;
  //   age:number;
  // }={
  //   name:'Zahid',
  //   age:30
  // }
  // console.log(person);
  
  // const person={
  //   name:'Zahid',
  //   age:30
  // }
  // console.log(person.name);
  
```