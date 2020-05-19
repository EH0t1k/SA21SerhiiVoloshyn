$(document).ready(function() {
	$(".burger").click(function(event){
		$(".burger,.header_menu").toggleClass("active");
		$("body").toggleClass("lock");
	});
	$(".child-comments").hide();

	$("a#children").click(function() {
		var section = $(this).attr("name");
		var togTxt = $("#tog_text").text();
		$("#C-" + section).toggle();
	});

	$(".form-submit").click(function() {
		var commentBox = $("#comment");
		var commentCheck = commentBox.val();
		if(commentCheck == '' || commentCheck == NULL) {
			commentBox.addClass("form-text-error");
			return false;
		}
		return false;
	});

	$(".form-reply").click(function() {
		var replyBox = $("#new-reply");
		var replyCheck = replyBox.val();
		if(replyCheck == '' || replyCheck == NULL) {
			replyBox.addClass("form-text-error");
			return false;
		}
		return false;
	});

	$("a#reply").one("click", function() {
		var comCode = $(this).attr("name");
		var parent = $(this).parent();

		parent.append("<br /><form action='' method='post'>\<fieldset><div id='name' class='Form'><label for='Form_Name'>Ім'я<labal style='color:red;'>*</labal></label><input type='text' name='Name' class='text form-control' id='Form_name' required></div><div id='email' class='Form'><label for='Form_email'>Email</label><input type='email' name='Email' class='email text form-control' id='Form_email'></div><div id='question' class='Form'><label for='Form_question'>Питання<labal style='color:red;'>*</labal></label><textarea class='form-text' name='new-reply' id='new-reply' required='required'></textarea></div></fieldset><div /><input type='hidden' name='code' value='"+comCode+"' /><input type='submit' class='form-submit' id='form-reply' name='new_reply' value='Відповісти' /></div></form>");
	});
})
