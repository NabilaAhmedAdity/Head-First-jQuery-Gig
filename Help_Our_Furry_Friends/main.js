$(document).ready(function(){
	//alert("I am ready !");
	$("#clickMe").click(function(){
		//alert("I am ready !");
		$("#picFrame").slideToggle("slow");
		$("img").fadeIn(1000000);
	});
});