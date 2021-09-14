sap.ui.jsview("olaf.view.Main",{

    getControllerName: function(){
        return "olaf.controller.Main";

    },
    // //always every JS view has this standard method

    // //which is entitled to receive controller object

    // createContent: function(oAnubhav){

    //     var oInput = new sap.m.Input("idInp",{
    //         value: "Anubhav Trainings"
    //     });

    //     var oBtn = new sap.m.Button({

    //             text: "welcome",

    //             //press is an event which calls event handler

    //             //the processing logic is in my controller class

    //             //explicitly passsing the CONTROLLER object to EVENT HANDLER

    //             //SO this pointer CAN BE INITIALIZED to Controller object

    //             press: [oAnubhav.clickMe, oAnubhav]

    //     });

    //      var oBtn2 = new sap.m.Button("idBtn2",{

    //             text: "I am inactive"

    //             //press is an event which calls event handler

    //             //the processing logic is in my controller class

    //             //press: oAnubhav.clickMe

    //     });
    //     return [oInput, oBtn, oBtn2];

    // }

	createContent: function(oController) {

		//oInp is a UI5 object not an HTML Object

		//@Runtime UI5 Renderer will produce the HTML

		var form = new sap.ui.layout.form.SimpleForm({

			title: "User Details",

			content: [

				new sap.m.Label({

					text: "User Name:"
				}),

				new sap.m.Input("idUser", {

					type: sap.m.InputType.Text,

					placeholder: "Enter a Name..."

				}),



				new sap.m.Label({
					text: "Password:"

				}),



				new sap.m.Input("idPassword", {

					type: sap.m.InputType.Password,

					placeholder: "Password"

				}),

				new sap.m.Button("idBtn", {

					text: "Click me",

					icon: "sap-icon://program-triangles",

					press: [oController.onLogin, oController]

				})



			]



		});



		return [form];



	}



});
