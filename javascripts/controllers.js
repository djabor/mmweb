'user strict';
angular.module('mmWeb.controllers', ['ui']);

var GlobalCtrl = ['$scope', '$location', '$window', '$route', '$routeParams', function($scope,$location,$window,$route,$routeParams){
	$scope.window = $window
	, $scope.location = $location
	, $scope.route = $route
	, $scope.routeParams = $routeParams
	, $scope.Math = $window.Math;

	$scope.shareFB = function(){
		console.log('sharing facebook');
	}

	$scope.$on('routeChange', function(r, b){
		$scope.currentRoute = b;
	});

	$scope.routeCheck = function(name){
		if ($scope.currentRoute == name){
			return 'active';
		}
	}
}];

var MainCtrl = ['$scope', function($scope){
	$scope.$emit('routeChange', 'main')
}];

var ServicesCtrl = ['$scope', function($scope){
	$scope.$emit('routeChange', 'services');
	console.log($scope.routeParams);
}];

var ProductsCtrl = ['$scope', function($scope){
	$scope.$emit('routeChange', 'products');
}];

var PlaygroundCtrl = ['$scope', function($scope){
	$scope.$emit('routeChange', 'playground');
}];

var PortfolioCtrl = ['$scope', function($scope){
	$scope.$emit('routeChange', 'portfolio');
}];
