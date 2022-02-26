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
