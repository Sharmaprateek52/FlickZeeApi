module.exports =  getSoundex = (value) => {
  value = value.toUpperCase();
  var soundex="";
  for (var i = 0; i < value.length; i++) {
      if(allLetter(value.charAt(i))){
          soundex = addCharacter(soundex,value.charAt(i))
      }
  }
  soundex = removePlaceholders(soundex);
  soundex = fixLength(soundex);
  return soundex;
}

var allLetter = (inputtxt) => { 
  var letters = /^[A-Za-z]+$/; 
  if (inputtxt.match(letters)) { return true; } 
  else { return false; } 
}

var addCharacter = (soundex,ch)=>{
  if(soundex.length === 0){
    soundex+=ch;
  } else{
    var code = getSoundexDigit(ch);
    if (code != soundex.charAt(soundex.length-1))
    soundex+=code;
  }
  return soundex;
}

var getSoundexDigit = (ch)=>{
  if ("BFPV".includes(ch))
        return "1";
    else if ("CGJKQSXZ".includes(ch))
        return "2";
    else if ("DT".includes(ch))
        return "3";
    else if (ch === "L")
        return "4";
    else if ("MN".includes(ch))
        return "5";
    else if (ch === "R")
        return "6";
    else
        return ".";
}

var removePlaceholders = (soundex) => {
  return soundex.replace(/[.]/g, "");
}

var fixLength = (soundex) => {
  var length = soundex.length;
    if (length < 4){
      for(var i=0;i<4-length;i++){
        soundex += '0'
      }
    }
    else {
      soundex = soundex.substring(0,4);
    }
  return soundex;
}
