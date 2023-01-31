function isDigitCode(n) {
    let char = n.charCodeAt(0);
    const charCodeZero = "0".charCodeAt(0);
    const charCodeNine = "9".charCodeAt(0); 
    return(char >= charCodeZero && char <= charCodeNine);
};
  
function isLetterCode(l) {
    let letter = l.toUpperCase().charCodeAt(0);
    const charCodeUpperA = "A".charCodeAt(0);
    const charCodeUpperZ = "Z".charCodeAt(0);
    return(letter >= charCodeUpperA && letter <= charCodeUpperZ);
};

function checkStateA(s, index) {
    const char = s[index];
    if(isLetterCode(char) || char === '_') 
        checkStateB(s, index + 1)
    else    
        console.log("Error con el caracter: " + s[index] + " en el estado A");
};
  
function checkStateB(s, index) {
    if(index === s.length) return;
    const char = s[index];
    if(isLetterCode(char) || isDigitCode(char) || char === '_') 
        checkStateB(s, index + 1)
    else
        console.log("Error con el caracter: " + char + " en el estado B");
};
  
const dfa1 = (s) => {
    let index = 0;
    checkStateA(s, index);
};
dfa1("aas#aas");