angular.module('HouseInfo')
	.factory('HouseInfoService', ['$http', function($http){
		var getRegions = function() {
			return $http.get('/getRegions');
		};
		
		var getTypes = function() {
			return $http.get('/getTypes');
		};
		
		var getSearchResults = function(region, type) {
			return $http.post('/getSearchResults', {'region':region, 'type':type});
		}
		return {
			getRegions : getRegions,
			getTypes : getTypes,
			getSearchResults : getSearchResults
		};
	}]);