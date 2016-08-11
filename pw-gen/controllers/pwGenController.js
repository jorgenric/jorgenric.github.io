

(function(){
    
    var pwGenModule = angular.module("passwordGenerator");
    
    function pwGenController($scope, CHAR_MAPPING_OBJ, checkPwService, pwGenService){
        
        $scope.generatePw = function(pwSentence){
            var generatedPw = "";
            generatedPw = pwGenService.generatePw(pwSentence, CHAR_MAPPING_OBJ, $scope.capitalizePostSwap);
            $scope.pwStrength = checkPwService.check(generatedPw);
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
