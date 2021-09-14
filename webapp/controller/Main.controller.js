// sap.ui.define([

//     'sap/ui/core/mvc/Controller',

//     'sap/m/Button'

// ], function(Controller, oBtn) {

//     return Controller.extend("olaf.controller.Main",{

//         //event handler

//         clickMe: function(){

//             //here we are accessing HTML element using document

//             //This NOT a UI5 Element object

//             var oInp = document.getElementById("idInp-inner");

//             var sVal = oInp.value;

//             //we cant access the methods of UI5 Control

//             //oInp.setEnabled(false);

//             //To obtain UI5 element object, we need to first get 

//             //Application object

//             var oCore = sap.ui.getCore();

//             //alternate in XML Views ONLY

//             //var oCore = this.getView();



//             //On top of App object, we can get UI5 element object

//             var oField = oCore.byId("idInp");

//             //Also write above 2 lines in single line

//             //Chaining in JS

//             var oJustAnotherWay = sap.ui.getCore().byId("idInp");

//             //Then we can call any methods of UI5

//             oField.setEnabled(false);
//             alert(oField.getValue());

//             //get the button2 object

//             var oBtn2 = oCore.byId("idBtn2");

//             debugger;

//             //attach the functionality to button 2

//             oBtn2.attachPress(this.someMoreCode); //this is the object of current class

//         },

//         someMoreCode: function(){

//             var oCore = sap.ui.getCore();

//             //On top of App object, we can get UI5 element object

//             var oField = oCore.byId("idInp");

//             alert("Method2 ===> " + oField.getValue());

//         },

//         onInit: function(){

//             console.log("Dude, my Controller object is now Created by UI5");
//         }

//     });

// });

sap.ui.define([

	'sap/ui/core/mvc/Controller'

], function(Spiderman) {

	'use strict';

	//extend means we are inheriting from parent module

	return Spiderman.extend("mickey.controller.Main", {

		//since its a module (class), we have constructor of this class

		//as onInit which gets called by framework when object of this class is

		//created

		onInit: function() {

			//alert("Controller object is now created");

		},

		onClick: function() {

			alert(this.getView().byId("myField").getValue());

		},

		onLogin: function() {

			var sUser = sap.ui.getCore().byId("idUser").getValue();

			var sPassword = sap.ui.getCore().byId("idPassword").getValue();

			if (sUser === sPassword) {

				alert("Login success!");

			} else {

				alert("Login Failed!");

			}

		},

		myFunction: function() {

			//Step 1: Get The Runtime object of our UI5 application

			var oCore = sap.ui.getCore();

			//Step 2: Get the object of the Input field

			var oInp = oCore.byId("idInp");

			//Step 3: Get the value property (getValue method)

			var sVal = oInp.getValue();



			oCore.byId("idBtn").setVisible(false);



			alert("welcome " + sVal);

		}

	});

});