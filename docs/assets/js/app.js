var app = angular.module('utility', []);
app.controller('utilityController',function($scope){
    
    $scope.tubigTotalAmountCompute = function(){
        if(!$scope.tubigPreviousReading) $scope.tubigPreviousReading = 0;
        if(!$scope.tubigCurrentReading) $scope.tubigCurrentReading = 0;
        if(!$scope.tubigRate) $scope.tubigRate = 0;
        if(!$scope.tubigBalance) $scope.tubigBalance = 0;
        $scope.tubigConsumed = +$scope.tubigCurrentReading - +$scope.tubigPreviousReading;
        $scope.tubigTotal = (+(+$scope.tubigCurrentReading - +$scope.tubigPreviousReading) * +$scope.tubigRate)+ +$scope.tubigBalance;

        if(isNaN($scope.tubigConsumed)) $scope.tubigConsumed = "0.00";
        if(isNaN($scope.tubigTotal)) $scope.tubigTotal = "0";

        $scope.tubigResult = "Ang iyong babayaran ay P " + $scope.tubigTotal + " para sa " + $scope.tubigConsumed + " cubic meters na iyong nakonsumo";
    }

    $scope.tubigClear = function(){
        $scope.tubigConsumed = "";
        $scope.tubigTotal = "";
        $scope.tubigCurrentReading = "";
        $scope.tubigPreviousReading = "";
        $scope.tubigRate = "";
        $scope.tubigBalance = "";
        $scope.tubigResult = "";
    }

    $scope.kuryenteTotalAmountCompute = function(){
        if(!$scope.kuryentePreviousReading) $scope.kuryentePreviousReading = 0;
        if(!$scope.kuryenteCurrentReading) $scope.kuryenteCurrentReading = 0;
        if(!$scope.kuryenteRate) $scope.kuryenteRate = 0;
        if(!$scope.kuryenteBalance) $scope.kuryenteBalance = 0;

        $scope.kuryenteConsumed = +$scope.kuryenteCurrentReading - +$scope.kuryentePreviousReading;
        $scope.kuryenteTotal = (+(+$scope.kuryenteCurrentReading - +$scope.kuryentePreviousReading) * +$scope.kuryenteRate)+ +$scope.kuryenteBalance;

        if(isNaN($scope.kuryenteConsumed)) $scope.kuryenteConsumed = "0.00";
        if(isNaN($scope.kuryenteTotal)) $scope.kuryenteTotal = "0.00";

        $scope.kuryenteResult = "Ang iyong babayaran ay P " + $scope.kuryenteTotal + " para sa " + $scope.kuryenteConsumed + " KWh na iyong nakonsumo";
    }

    $scope.kuryenteClear = function(){
        $scope.kuryenteConsumed = "";
        $scope.kuryenteTotal = "";
        $scope.kuryenteCurrentReading = "";
        $scope.kuryentePreviousReading = "";
        $scope.kuryenteRate = "";
        $scope.kuryenteBalance = "";
        $scope.kuryenteResult = "";
    }

});