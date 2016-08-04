

(function(){
    
    var pwgen = angular.module("passwordGenerator");
    
    var homeController = function($scope, CHAR_MAPPING_OBJ){
        
        $scope.replace_rules = CHAR_MAPPING_OBJ;
        
        $scope.showChart = false;
        $scope.showChartValue = "Show Chart";
        $scope.chartToggle = function(){
            $scope.showChart = !$scope.showChart;
            if($scope.showChart){
                $scope.showChartValue = "Hide Chart";    
            }else{
                $scope.showChartValue = "Show Chart";
            }
        }
        
        $scope.exampleToggleText = "See what I'm talking about";
        $scope.exampleVisible = false;
        $scope.toggleExample = function(){                        
            if($scope.exampleVisible){
                $scope.exampleVisible = false;
                $scope.exampleToggleText = "See what I'm talking about";
            }else{
                $scope.exampleVisible = true;
                $scope.exampleToggleText = "Ok, put that away";    
            }
        }
        
    }
    
    pwgen.controller("homeController", ["$scope", "CHAR_MAPPING_OBJ", homeController]);
    
}());