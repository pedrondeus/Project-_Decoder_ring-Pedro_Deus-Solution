// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  const cipher = {a:11,b:21,c:31,d:41,e:51,f:12,g:22,h:32,i:42,j:42,k:52,l:13,m:23,n:33,o:43,p:53,q:14,r:24,s:34,t:44,u:54,v:15,w:25,x:35,y:45,z:55,};

  const decipher = { 11: "a",21: "b",31: "c",41: "d",51: "e",12: "f",22: "g",32: "h",42: "(i/j)",52: "k",13: "l",23: "m",33: "n",43: "o",53: "p",14: "q",24: "r",34: "s",44: "t",54: "u",15: "v",25: "w",35: "x",45: "y",55: "z",};
  
  function polybius(input, encode = true) {
    // your solution code here
    lowerInput = input.toLowerCase();
    let encodedMessage ="";
    let decodedMessage ="";
    let doubleSpaced ="";
    //
    if (!parseInt(input)) {
            //handling space
      if (encode === true){
        for (let i = 0; i < lowerInput.length; i++){
          if (lowerInput[i] === " "){
            encodedMessage += " ";
          } else {
            encodedMessage += cipher[lowerInput[i]]
          }
        }
        return encodedMessage;
      } else {
          let decodedMessage = "";
          let doubleSpaced = "";
  
          for (let  i = 0; i < input.length; i++){
            if (input[i] != " "){
              doubleSpaced += input[i];
            } else {
              doubleSpaced += " "
            }
            if(doubleSpaced.length % 2 != 0) { 
              return "false";//false
            }
          } 
        }
    } else {
          

      let chesk = 2;

      //let space = input.find((char) => char.indexOf() === " ") 
      if(!input.includes(" ") && input.length % 2 != 0){
        return false;
      } else {
      
      for(let j = 0; j < input.length; j+=chesk) { 
         
          if (input[j] != " "){
            chesk = 2;
            let code = ""; 
            code += input[j]; 
            code += input[j+1]; 
            if (decipher[code] === undefined){
              return false;
            } else {
              decodedMessage += decipher[code];
              }
            
          } else { 
            //after adding space it doesnt get the right letter
            //add space  then count +1 and not  +2
            chesk = 1;
            decodedMessage += " "; 
          }
        }
      }          
    }
      return decodedMessage; 
    }
    return {
      polybius,
    }

})();

module.exports = { polybius: polybiusModule.polybius };