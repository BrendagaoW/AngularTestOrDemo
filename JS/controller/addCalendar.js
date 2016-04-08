var app = angular.module('AddCalendar', []);
app.controller('addEventToCalendarCtrl', ['$scope', function ($scope) {

    $scope.test = 'hello';

    $scope.downloadCalendarFile = function () {
        var calendar = ics();
        var subject = 'test calendar';
        var description = 'test how to add event on calendar for mobile';
        var location = 'ThoughtWorks';
        var startDate = '11/12/2016 12:35 am';
        var endDate = '11/13/2016 12:35 am';
        calendar.addEvent(subject, description, location, startDate, endDate);
        $scope.test = 'add event';
        return calendar.download();
    }

    $scope.changeTestData = function () {
        $scope.test = 'world';
    }
}]);