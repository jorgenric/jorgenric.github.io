

(function(){
    
    var pwGenModule = angular.module("passwordGenerator");
    
    function pwGenController($scope, CHAR_MAPPING_OBJ, pwGenService){
        
           $scope.generatePw = function(pwSentence){
               $scope.outputPw = pwGenService.generatePw(pwSentence, CHAR_MAPPING_OBJ, $scope.capitalizePostSwap);
           };
           
           $scope.clearPwForm = function(){
                $scope.outputPw = "";
                $scope.pwSentence = "";
                $scope.capitalizePostSwap = true;    
           }
           
           $scope.outputPw = "";
           $scope.pwSentence = "this is a default password which I entered as an example";
           $scope.capitalizePostSwap = true;
    }    
    
    pwGenModule.controller("pwGenController", ["$scope", "CHAR_MAPPING_OBJ", "pwGenService", pwGenController] );
}());
