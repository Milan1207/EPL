myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl	 : 'views/main-page.html',
			controller 	 : 'mainController',
			controllerAs : 'mainFixture'
		})
		otherwise({
			templateUrl	 : '<h1>404 target not found</h1>'
		});
}]);