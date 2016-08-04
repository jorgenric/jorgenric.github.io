


(function(){
    
    var pwGenModule = angular.module("passwordGenerator");
    
    var pwGenService = function(){
        
         var generatePw = function(pwSentence, charMapObj, capitalizePostSwap){
        
            var wordArr = pwSentence.split(' ');
            var capitalizeNextLetter = false;
            
            var password = "";
            
            for(var i =0; i < wordArr.length; i++){
                var word = wordArr[i];
                var letter = word.toLowerCase()[0];
                
                var pwLetter = letter;
                
                if(charMapObj[letter] && charMapObj[letter] != letter){
                    pwLetter = charMapObj[letter];
                    capitalizeNextLetter = true;
                }else if(capitalizePostSwap && capitalizeNextLetter){
                    pwLetter = letter.toUpperCase();    
                    capitalizeNextLetter = false;
                }
                
                password += pwLetter;
            }
            return password; 
        };    
        
        return {
            generatePw : generatePw
        }
    }
    
    pwGenModule.factory("pwGenService",pwGenService);
    
}());