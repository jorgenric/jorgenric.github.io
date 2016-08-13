


(function(){
    
    var pwGenModule = angular.module("passwordGenerator");

    var checkPwService = function($http){
        
        var getPwRankLocal = function(password){
            var passwordStr;
            var passLen = password.length;
            var hasNumber = /\d/;
            var containsNum = hasNumber.test(password);
            
            if(passLen < 5){
                passwordStr = 0
            }else if(passLen >= 5 && passLen < 8){
                passwordStr = 1
            }else if(passLen >= 8 && passLen < 11){
                passwordStr = 2
            }else {
                passwordStr = 3
            }
            if(containsNum){
                passwordStr += 1;
            }
            return passwordStr;
        }
        
        var pwDescription = function(passwordStr){
            var strengthMsg = "";
            if(passwordStr == 0){
                strengthMsg = "Well, it's better than 'password'";
            }else if(passwordStr == 1){
                strengthMsg = "Gotta say, pretty weak";
            }else if(passwordStr == 2){
                strengthMsg = "Maybe you wont get hacked";
            }else if(passwordStr == 3){
                strengthMsg = "Yeah, that's pretty good";
            }else if(passwordStr == 4){
                strengthMsg = "Your password is a brick house, it's mighty mighty.";
            }else{
                strengthMsg = "Hmmm, getting a weird value... not sure";   
            }
        
            return strengthMsg; 
        }
        
        var errorResponse = function(response){
            return response.data || "Request Failed";
        }
        
        var successResponse = function(response){
            return response.data;
        }
        
        var checkRemote = function(password){
            var strength;
            // need to setup a server to complete this query do to cross origin restrictions, future state
            var apiPath = "https://www.google.com/accounts/RatePassword?Passwd=" + password;
            return $http.post(apiPath);
        }
        
        return {
            pwDescription: pwDescription,
            getPwScore : getPwRankLocal
        };
    }
    
    pwGenModule.factory("checkPwService", checkPwService);
    
}());