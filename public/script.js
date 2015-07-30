console.log('hello');

$( document ).ready(function(){

	$('#projects').on('click', function(){
		window.location='/projects'
	});

	$('#about').on('click', function(){
		window.location='/about'
	});

	$('.homeButton').on('click', function(){
		window.location='/'
	});	

	$('.projectsButton').on('click', function(){
		window.location='/projects'
	});	

	$('.aboutButton').on('click', function(){
		window.location='/about'
	});


});