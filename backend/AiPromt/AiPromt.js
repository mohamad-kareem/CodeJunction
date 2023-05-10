exports.analyzeCodePrompt = (code) => {
    return `
    Please check ${code} and return a score which range between -2 and 4 ,check if code have errors then score below 0 but score above 0 if the code works finally if the code is too short then score must be not more than 1 if it have no errors(act like a teacher!!).
    `
  };
  
  exports.adviceCodePrompt = (code) => {
    return `
      Please check ${code} and return an advice to improve the code or if the code have an error how to fix it (as if you are an programming adviser!!)
    `;
  };
  exports.autoCorrectPrompt = (code,outputValue) =>{
    return `
      please check ${code} and ${outputValue} and return 
       corrected version of the code so that it can be excuted (you can add constants or any thing needed) so that the result have no error.
      `
  };
  