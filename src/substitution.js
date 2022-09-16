// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  let actualAlphabet="abcdefghijklmnopqrstuvwxyz"
  
  function uniqueChar(alphabet){
    for(let i = 0; i < alphabet.length; i++){
      for (let j = i + 1; j < alphabet.length; j++){
        if(alphabet[i] === alphabet[j]){
        return false;
        }
      }
    }
    return true;
  }
  
  function substitution(input, alphabet, encode = true) {
      // your solution code here
    let lowerInput = input.toLowerCase();
    let encodedMessage = "";
    //if given alphabet is more or less than 26 returns false
    if (!alphabet|| alphabet.length > 26 || alphabet.length < 26){return false;};
    //if there is no alphabet returns false
    if (!uniqueChar(alphabet)){return false;};
    
    //decoding the message
    if(!encode){
      for(let i = 0; i < input.length; i++){
        const char = input[i];
        if (char !== " "){
          let index;
          index = alphabet.indexOf(char)
          encodedMessage += actualAlphabet[index]
        } else {
          encodedMessage += char;
        }
      }
      return encodedMessage;
    }

      //encodeding the message
      for (let i = 0; i < lowerInput.length; i++){
        const char = lowerInput[i];
        if(char !== " "){
          let index ; 
          index = actualAlphabet.indexOf(char)
          encodedMessage += alphabet[index]
        } else {
          encodedMessage += char;
        }
      }  
      return encodedMessage;
}
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
