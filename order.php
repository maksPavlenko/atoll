<?php

if( isset($_POST['name']) )
{
	$to = 'filtgroup@ukr.net';
	$subject ='Заявка с сайта Atoll';
	$headers = "From: Atoll <order@my-atoll.com.ua/>\r\nContent-type:text/plain;charset=utf-8";
	$message = "";

	$phone = $_POST["phone"];
	$name = ! empty($_POST["name"]) ? $_POST["name"] : 'Не указано';
	$theme = ! empty($_POST["title"])? $_POST["title"] : 'Без темы';

	$message = "Форма: ".$theme ."\nИмя: ".$name."\nТелефон: ".$phone."\n\n";
	if (! empty($_COOKIE['utm_source'])) {
		$message .= "\nutm_source: ".$_COOKIE['utm_source'];
	};
	if (! empty($_COOKIE['utm_campaign'])) {
		$message .= "\nutm_campaign: ".$_COOKIE['utm_campaign'];
	};
	if (! empty($_COOKIE['utm_medium'])) {
		$message .= "\nutm_medium: ".$_COOKIE['utm_medium'];
	};
	if (! empty($_COOKIE['utm_term'])) {
		$message .= "\nutm_term: ".$_COOKIE['utm_term'];
	};
	if (! empty($_COOKIE['utm_content'])) {
		$message .= "\nutm_content: ".$_COOKIE['utm_content'];
	};
	mail($to, $subject, $message, $headers);
	
	///sms for phone

	$_POST['phone'] = str_replace('+', '%2B', $_POST['phone']);
	file_get_contents("http://smsc.ru/sys/send.php?login=atoll.lp5&psw=3lk5n31ljk5n&phones=+380509188491&charset=utf-8&mes=Имя:%20" . $_POST['name'] . "%0aТелефон:%20" . $_POST['phone'] . "%0aE-mail:%20" . $_POST['email']);
}
	
?>