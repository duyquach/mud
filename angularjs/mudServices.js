"use strict";

var configServices = angular.module('configServices', []);
						
configServices.factory('ConfigService', function($http)
{
	var configURL = "data/config.json";
	var factory = {};
	
	factory.load = function() { return $http.get(configURL); };		
	
	return factory;
});

var playerServices = angular.module('playerServices', []);

playerServices.factory('PlayerService', function($http)
{
	var urlBase = "data/";
	var factory = {};

	var rosterURL = "data/roster.json";
	
	factory.loadRoster = function() { return $http.get(rosterURL); };	

	//factory.loadRoster = function() { return $http.get(urlBase+playDate+".json"); };	


	/*factory.update = function(view, credential) { return $http.post(urlBase+view+"/"+credential.id, credential); };
	factory.remove = function(view, credential) { return $http.delete(urlBase+view+"/"+credential.id); };  
	factory.create = function(view, credential) { return $http.post(urlBase+view+"/", credential); };*/
	
	return factory;
});

