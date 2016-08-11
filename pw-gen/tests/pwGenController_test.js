describe("passwordGenerator", function(){
   
 
   beforeEach(module('passwordGenerator'));
   
   var $controller;
   
   beforeEach(inject(function(_$controller_){
       $controller = _$controller_;
   }));
   
   describe("$scope.outputPw", function(){
                
        it("should return the expected translated password string", function(){
            var pwSentence = "apple banana cherry date elderberry fig grape huckleberry";
            var $scope = {};
            var controller = $controller('pwGenController', {$scope : $scope});
            $scope.generatePw(pwSentence);
            expect($scope.outputPw).toEqual("48Cd3Fgh");
        });
        
        it("should be empty str if input blank", function(){

            var pwSentence = "";
            var $scope = {};
            var controller = $controller('pwGenController', {$scope : $scope});
            $scope.generatePw(pwSentence);
            expect($scope.outputPw).toEqual("");
        }); 
        
        it("should be empty str if input is white spaces", function(){

            var pwSentence = "   ";
            var $scope = {};
            var controller = $controller('pwGenController', {$scope : $scope});
            $scope.generatePw(pwSentence);
            expect($scope.outputPw).toEqual("");
        });
        
        it("should keep any special characters in place if included", function(){

            var pwSentence = "apple banana! cherry date elderberry";
            var $scope = {};
            var controller = $controller('pwGenController', {$scope : $scope});
            $scope.generatePw(pwSentence);
            expect($scope.outputPw).toEqual("48!Cd3");
        });
        
        it("should not interpret capitalized letters as special characters", function(){

            var pwSentence = "what if I add! a new sentence";
            var $scope = {};
            var controller = $controller('pwGenController', {$scope : $scope});
            $scope.generatePw(pwSentence);
            expect($scope.outputPw).toEqual("w114!4N5");
        });
                  
   });
   /*
   describe("$scope.pwStrength", function(){
        
        it("should be empty str if input is nothing", function(){
            
            var $scope = {};
            var pwSentence = "";
            var controller = $controller('pwGenController', {$scope : $scope});
            $scope.generatePw(pwSentence);
            expect($scope.pwStrength).toEqual("");
            
        });
                  
    });
    */   
   
});
            
           