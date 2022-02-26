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
  