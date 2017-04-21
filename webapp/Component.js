sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"UberRides/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("UberRides.Component", {
		metadata: {
			manifest: "json"
		},
		
	
		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			this.getToken();
		},
		
	
 
      getToken: function() {
      	var accessToken = '';
    	var baseURI = '';

          var url_base = '/Uber_Login/oauth/v2?client_id%3D1XU7blOR44FyEb49TLha0tnQmLQ6CnUl&response_type%3Dcode&redirect_url=https://uberrides-c82ef9371.dispatcher.ap1.hana.ondemand.com/?hc_reset';
 
          // The auth_token is the base64 encoded string for the API 
          // application.
          var auth_token = '1XU7blOR44FyEb49TLha0tnQmLQ6CnUl:XPgwWD9UGRnG4-1hhhV-E79VbgMrdipeOv-ukBj2';
          auth_token = window.btoa(auth_token);
          var requestPayload = {
              'scope': 'history',
              'redirect_uri' : window.location.host 
          };
          /*
          $.ajax({
              'url': url_base,
    		'headers': {
    			"Access-Control-Allow-Origin": "*",
    			"referer" : "https://uberrides-c82ef9371.dispatcher.ap1.hana.ondemand.com/"
    		},
              'success': function (result) {
                //Process success actions
                console.log(result);debugger;
              },
              'error': function (XMLHttpRequest, textStatus, errorThrown) {
              	debugger;
              
              }
          });*/
          
          
	    var CLIENT_ID = "1XU7blOR44FyEb49TLha0tnQmLQ6CnUl";
	    var AUTHORIZATION_ENDPOINT = "/Uber_Login/oauth/v2/authorize";
	    var RESOURCE_ENDPOINT = "/Uber_Api/";
		var token;
		
	
	      var authUrl = AUTHORIZATION_ENDPOINT + 
	        "?response_type=code" +
	        "&client_id="    + CLIENT_ID;
	
	      window.location.href = authUrl;

	    }
          
       
   
	});
});