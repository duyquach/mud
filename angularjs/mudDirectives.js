var attendance = angular.module('attendance', []);

attendance.directive('attendance', function() 
{
	return {
    	restrict: 'E',
    	templateUrl: 'templates/attendance.html'
    };
});