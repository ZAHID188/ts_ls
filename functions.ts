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
  