'use strict';

angular.module('mmWeb', []).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
		when('/main', {templateUrl: '/views/main.html', controller: MainCtrl, name:'Main'}).
		when('/services', {templateUrl: '/views/services.html', controller: ServicesCtrl, name:'main'}).
		when('/products', {templateUrl: '/views/products.html', controller: ProductsCtrl, name:'products'}).
		when('/playground', {templateUrl: '/views/playground.html', controller: PlaygroundCtrl, name:'playground'}).
		when('/playground/:play', {templateUrl: '/views/play.html', controller: PlaygroundCtrl, name:'play'}).
		when('/portfolio', {templateUrl: '/views/portfolio.html', controller: PortfolioCtrl, name:'portfolio'}).
		otherwise({redirectTo: '/main'});
		$locationProvider.html5Mode(true);
}])