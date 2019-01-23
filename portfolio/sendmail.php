<?
	$kuda='nickmomotenkofowweb@gmail.com';
	$zagolovok='сообщение с сайта';
	$headers='Content-type: text; charset="utf-8"';

	if (isset($_POST['ok'])){
	  $fio=$_POST['name'];
	  $email=$_POST['email'];
	  $tel=$_POST['message'];

	  $messages=$email."\n".$tel."\n".$fio;

	  if (mail($kuda,$zagolovok,$messages,$headers)){echo "Сообщение отправлено.";}
	  
	  }


?>