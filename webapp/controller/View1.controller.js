sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"UberRides/util/uber"
], function(Controller, Uber) {
	"use strict";

	return Controller.extend("UberRides.controller.View1", {
		onActionPress: function() {
			
			var url = "/Uber_Login/oauth/v2/token?" +"client_id=1XU7blOR44FyEb49TLha0tnQmLQ6CnUl&client_secre=XPgwWD9UGRnG4-1hhhV-E79VbgMrdipeOv-ukBj2&grant_type=authorization_code&code= "+window.token;
			$.ajax({
				'url': url,
			
				'success': function(XMLHttpRequest, textStatus, result) {
					debugger;
				},
				'error': function(XMLHttpRequest, textStatus, errorThrown) {
					debugger;

				}
			});
			/*
			 $.ajax({
	      	'url' : "/Uber_Api/v1.2/history",
	      	'headers': {
	      		'Content-Type' : 'application/json',
	      		'Authorization' : 'Bearer ' +window.token
	      	},
	      	'success': function(XMLHttpRequest, textStatus, result){
	      		debugger;
	      	}
	      });
			*/

		}
	});
});