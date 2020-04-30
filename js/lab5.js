
$(document).ready(function () {
	"use strict";


	//document.getElementById("loginSubmitBtn").addEventListener("click", function(event){
		//event.preventDefault()
	//});

	//Disable form submitted event
	$("#loginSubmitBtn").on("click", function (event) {
       event.preventDefault();
	})
	jQuery("#loginSubmitBtn").click(function onClickMe(){

		let email = jQuery("#emailInput").val();
		let password = jQuery("#passwordInput").val();
		let url = jQuery("#urlInput").val();

		console.log("Email =" +email +"\n" +
			"Password = " + password + "\n" +
			"URL=" + url);
	});
});
