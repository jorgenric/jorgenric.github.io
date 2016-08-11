

(function(){
    
    var pwGenModule = angular.module("passwordGenerator");
    
    function pwGenController($scope, CHAR_MAPPING_OBJ, checkPwService, pwGenService){
           
        var onPwCheckResponse = function(response){
            $scope.pwStrength = response.data;
        }
        
        $scope.generatePw = function(pwSentence){
            var generatedPw = "";
            generatedPw = pwGenService.generatePw(pwSentence, CHAR_MAPPING_OBJ, $scope.capitalizePostSwap);
            checkPwService.check(generatedPw).then(onPwCheckResponse, onPwCheckResponse);
            $scope.outputPw = generatedPw;
            
        };
        
        $scope.clearPwForm = function(){
            $scope.outputPw = "";
            $scope.pwSentence = "";
            $scope.capitalizePostSwap = true;    
        }
        
        $scope.pwStrength = "";
        $scope.outputPw = "";
        $scope.pwSentence = "this is a default password which I entered as an example";
        $scope.capitalizePostSwap = true;
    }    
    
    pwGenModule.controller("pwGenController", ["$scope", "CHAR_MAPPING_OBJ", "checkPwService", "pwGenService", pwGenController] );
}());
