var app = angular.module('HouseInfo',[]);
app.controller('homeModelController', ['$scope', 'HouseInfoService', function($scope, HouseInfoService){
                                        // $scope.homeRegions = ["锦江", "武侯", "高新"];
// 										$scope.homeTypes = ["买房", "租房"];

										HouseInfoService.getRegions().success(function(data) {
											$scope.homeRegions = data;
										});
										HouseInfoService.getTypes().success(function(data) {
											$scope.homeTypes = data;
										});
										// $scope.homeInformations = [
								// 			{"region" : "锦江", "type" : "买房", "name" : "张三"},
								// 			{"region" : "锦江", "type" : "租房", "name" : "李四"},
								// 			{"region" : "武侯", "type" : "买房", "name" : "王五"},
								// 			{"region" : "武侯", "type" : "租房", "name" : "赵六"},
								// 			{"region" : "高新", "type" : "买房", "name" : "吴七"},
								// 			{"region" : "高新", "type" : "租房", "name" : "张三"}
								// 		];
										// $scope.results = [];
										$scope.search = function(r, t) {
											// for (var index in $scope.homeInformations) {
					// 							if ($scope.homeInformations[index].region == r
					// 								&& $scope.homeInformations[index].type == t) {
					// 									$scope.results.push($scope.homeInformations[index]);
					// 								}
					// 						}
											HouseInfoService.getSearchResults(r, t).success(function(data) {
											$scope.searchResults = data;
					});
										};
										
                                        }]);