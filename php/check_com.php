<?php
	// new comment
	setlocale(LC_TIME, "Ukrainian_Ukraine");
	if(isset($_POST['new_comment'])) {
		$new_com_email = $_POST['Email'];
		$new_com_name = $_POST['Name'];
		$new_com_text = $_POST['comment'];
		$new_com_date = date('Y-m-d H:i:s');
		$new_com_code = generateRandomString();

		if(isset($new_com_text)) {
			mysqli_query($connect, "INSERT INTO `parents` (`user`, `text`, `date`, `code`, `email`) VALUES ('$new_com_name', '$new_com_text', '$new_com_date', '$new_com_code', '$new_com_email')");
		}
		header("Location: ");
	}
	// new reply
	if(isset($_POST['new_reply'])) {
		$new_reply_email = $_POST['Email'];
		$new_reply_name = $_POST['Name'];
		$new_reply_text = $_POST['new-reply'];
		$new_reply_date = date('Y-m-d H:i:s');
		$new_reply_code = $_POST['code'];
		if(isset($new_reply_text)) {
			mysqli_query($connect, "INSERT INTO `children` (`user`, `text`, `date`, `par_code`, `email`) VALUES ('$new_reply_name', '$new_reply_text', '$new_reply_date', '$new_reply_code', '$new_reply_email')") or die(mysqli_error());
		}
		header("Location: ");
	}
?>