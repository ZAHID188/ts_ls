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
