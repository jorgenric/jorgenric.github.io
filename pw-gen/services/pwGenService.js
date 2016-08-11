


(function(){
    
    var pwGenModule = angular.module("passwordGenerator");
    
    var pwGenService = function(){
        
         var cleansePwInput = function(pwSentence){
             var cleansed = [];
             var wordArr = pwSentence.split(' ');
             
             for(var i = 0; i < wordArr.length; i++){
                 var word = wordArr[i];
                 if(word != ""){
                     cleansed.push(word);
                 };
             }
             
             return cleansed;
         } 
        
         var checkForTrailingSpecialChars = function(word,charMapObj){
             var specialChar = "";
             var lastChar = word[word.length-1].toLowerCase();
             if(charMapObj[lastChar] == undefined){
                 specialChar = lastChar;
             }             
             return specialChar;
         }
        
         var generatePw = function(pwSentence, charMapObj, capitalizePostSwap){
        
            var wordArr = cleansePwInput(pwSentence);
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
                
                var trailingSpecialChar = checkForTrailingSpecialChars(word, charMapObj);
                password += (pwLetter + trailingSpecialChar);
                
            }
            return password; 
        };    
        
        return {
            generatePw : generatePw
        }
    }
    
    pwGenModule.factory("pwGenService",pwGenService);
    
}());