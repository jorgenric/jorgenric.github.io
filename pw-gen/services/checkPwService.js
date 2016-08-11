


(function(){
    
    var pwGenModule = angular.module("passwordGenerator");
    
    //
    
    var checkPwService = function($http){
        
        var errorResponse = function(response){
            return response.data || "Request Failed";
        }
        
        var successResponse = function(response){
            return response.data;
        }
        
        var checkRemote = function(password){
            var strength;
            var apiPath = "https://www.google.com/accounts/RatePassword?Passwd=" + password;
            return $http.post(apiPath);
        }
        
        var getPwRankLocal = function(password){
            var passwordStr;
            var passLen = password.length;
            if(passLen < 5){
                passwordStr = 0
            }else if(passLen >= 5 && passLen < 8){
                passwordStr = 1
            }else if(passLen >= 8 && passLen < 11){
                passwordStr = 2
            }else {
                passwordStr = 3
            }
            return passwordStr;
        }
        
        var check = function(password, strengthRank){
            var passwordStr = strengthRank || getPwRankLocal(password);
            var strengthMsg = "";
            if(passwordStr == 0){
                strengthMsg = "Gotta say, pretty weak";
            }else if(passwordStr == 2){
                strengthMsg = "Maybe you wont get hacked";
            }else if(passwordStr == 3){
                strengthMsg = "Nothing to be embarassed about";
            }else if(passwordStr == 4){
                strengthMsg = "Solid! Nice work.";
            }else{
                strengthMsg = "Hmmm, getting a weird value... not sure";   
            }
        }
        
        return {
            check: check
        };
    }
    
    pwGenModule.factory("checkPwService", checkPwService);
    
}());