


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
        
        var check = function(password){
            var strength;
            var apiPath = "https://www.google.com/accounts/RatePassword?Passwd=" + password;
            /*
            if(password == null || password == undefined || password == ""){
                strength = "";
            }else{
                strength = $http.get(apiPath).then(successResponse, errorResponse);
            }
            */
            return $http.get(apiPath);
        }
        
        return {
            check: check
        };
    }
    
    pwGenModule.factory("checkPwService", checkPwService);
    
}());