// javascript
const sign_in_btn = document.getElementById('sign-in-btn');
const sign_up_btn = document.getElementById('sign-up-btn');
const container = document.querySelector(".containers");

sign_up_btn.addEventListener('click', function(){
	container.classList.add("sign-up-mode");
});
 
sign_in_btn.addEventListener('click', function(){
	container.classList.remove("sign-up-mode");
});

// Angular js
var app = angular.module("myapp", ['ngMessages']);
app.controller("signin-signup", function($scope, $window) {
	// if login success, it will forward index.html 
	$scope.login = function(index) {
		if(index.SignInForm.$valid) {
			$window.location.href = '/index.html';
		}
	}

	$scope.register = function(index) {
		if(index.signUpForm.$valid) {
			$window.location.href = '/index.html';
		}
	}
});
