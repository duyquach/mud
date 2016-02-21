"use strict";

var mudController = angular.module("mudController", []);

mudController.controller("mudController", ["$scope", "$log", "ConfigService", "PlayerService", function($scope, $log, ConfigService, PlayerService) 
{	
	$scope.playDate = "";
	$scope.players = [];

	// load data
	ConfigService.load().success(function(data)
	{	
		$scope.playDate = data.play_date;

		// load player data
		PlayerService.loadRoster().success(function(data)
		{	
			$scope.players = data;			
		}).error(function() 
		{ 		
			$log.error("Could not load player data");
		});	
	}).error(function() 
	{ 		
		$log.error("Could not load config data");
	});	

	
	
	
	




}]);



/*
		

		mudApp.controller('MudCtrl', function ($scope, $http) 
		{
			$http.get('data/config.json').then(function(configRes)
			{				
				$scope.play_date = configRes.data.play_date;				
				$scope.teams_set = configRes.data.teams_set;				
				$scope.team_count = configRes.data.team_count;	
				$scope.teams = new Array($scope.team_count);

				for (var i = 0; i < $scope.team_count; i++)				
					$scope.teams[i] = { number : (i+1) };				
				
				$http.get('data/'+$scope.play_date+'.json').then(function(playerRes)
				{
					$scope.players = playerRes.data;				
			    });
		    });

			$scope.removeAttendance = function(player) 
			{				
				player.attending = 'unknown';					
				player.team = "0";

				$.ajax({
					type: "GET",
					url: "actions/write_player.php?name="+player.name+"&attending=unknown&team=0",
					data: "", 				
					success: function()
					{							
					} // end success
				});	// end ajax					
			};		

			$scope.writeAttendance = function(player) 
			{								
				$.ajax({
					type: "GET",
					url: "actions/write_player.php?name="+player.name+"&attending="+player.attending+"&team="+player.team,
					data: "", 				
					success: function()
					{							
					} // end success
				});	// end ajax	
			};			

			$scope.isEven = function(value) 
			{				
				if (value % 2 == 0)
					return true;
				else 
					return false;
			};
		});		

	*/