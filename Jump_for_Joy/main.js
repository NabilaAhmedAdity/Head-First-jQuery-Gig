$(document).ready(function(){
	//alert("Im am ready!");

    function getRandom(num){
		var my_num = Math.floor(Math.random()*num);
		return my_num;
	}

	var hideCode = function(){
		var numRand = getRandom(4);
		$(".guess_box").each(function(index, value){
			if(numRand == index){
				$(this).append("<span id='has_discount'></span>");
				return false;
			}
		});
	}

	function checkForCode(){
		var discount;
		//contain: This method checks if whatever in the first parameter contains whatever in the second parameter.
		//this: The current element, the one that called the function
		if($.contains(this, document.getElementById("has_discount")))
		{
			var my_num = getRandom(100);
			discount = "<p> Your discount is " + my_num + "% </p>";
		}
		else
	    {
	    	discount = "<p>Sorry, no discount this time!<p>";
	    }
	    $(this).append(discount);

	    $(".guess_box").each(function(){
	        $(this).unbind('click');
	    });
	}

    hideCode();
    //call the function when the element of .guess_box is clicked
	$(".guess_box").click(checkForCode);

	$(".guess_box").hover(

		function(){
			$(this).addClass("my_hover");
		},
		function(){
			$(this).removeClass("my_hover");
		}
		);

});