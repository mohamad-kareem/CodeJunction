exports.analyzeCodePrompt = (code) => {
    return `

      Please assign a score between 0 and 4 points for the this code   ${code} php code where 0 indicates poor quality and 4 indicates excellent quality 
      depending on the following criteria:
         
          error:if any error in the code then the score is equal 0.
  
          Syntax: the code must use correct syntax and formatting Is it easy to read and understand if not then a low score will be assigned.
  
          Structure:the code must be organized in a logical and clear manner and the functions, loops, and conditionals used appropriately if not low score as well.
          
          Functionality: the code must correctly perform its intended task and there must be clear from bugs or errors if not low score else high score
         
          Readability: the code must be easy to read and comprehend and the variable names and comments descriptive and helpful if yes hight score else low score.
          
         Please get attention if the  Length of the code is short  (less than 4 words then score will be one) else you decide.
        
         Finally the response must be Just the score without any more word for example score:1 or score:2 or score:3 or score:4!!
    `;
  };
  
  exports.adviceCodePrompt = (code) => {
    return `
    Please provide advice to improve the following PHP code  ${code} based on the criteria below:

    Error: If there are any errors in the code, suggest improvements.

    Syntax: Ensure correct syntax and formatting for easy understanding.

    Structure: Organize the code logically with appropriate use of functions, loops, and conditionals.

    Functionality: Ensure the code performs its intended task without bugs or errors.

    Readability: Ensure the code is easy to read and comprehend with descriptive variable names and helpful comments.

    Please limit your response to no more than 20 words.
      \
    `;
  };
  