

(function(){
    
    var pwGenModule = angular.module("passwordGenerator");
    
    function pwGenController($scope, CHAR_MAPPING_OBJ, checkPwService, pwGenService){
        
        $scope.generatePw = function(pwSentence){
            var generatedPw = "";
            var pwRank;
            generatedPw = pwGenService.generatePw(pwSentence, CHAR_MAPPING_OBJ, $scope.capitalizePostSwap);
            pwRank = checkPwService.getPwScore(generatedPw);
            $scope.pwStrength = checkPwService.pwDescription(pwRank);
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
