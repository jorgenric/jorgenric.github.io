


(function(){
    
    var pwGenModule = angular.module("passwordGenerator");
    
    //https://www.google.com/accounts/RatePassword?Passwd=w
    
    var checkPwService = function(){
        
        var check = function(password){
            return 'STRONG';
            
        }
        
        return {
            check: check
        };
    }
    
    pwGenModule.factory("checkPwService", checkPwService);
    
}());