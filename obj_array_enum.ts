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
  