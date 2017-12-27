/*eslint-env jquery, browser*/
$(document).ready(function() {
			$(".guess_box").click( function() {
				$(".guess_box p").remove();
				var my_num = Math.floor((Math.random()*5) + 5);
				var discount = "<p>Your Discount is "+my_num+"%</p>";
				$(this).append(discount);
			});
		});