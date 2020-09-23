<?php

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$product = $_POST['goods__title--input'];
$polosa = $_POST['polosa_text--input'];
$cell = $_POST['cell_text--input'];
$prutok = $_POST['prutok_text--input'];
$zn = $_POST['zn_text--input'];
$length = $_POST['length_text--input'];
$width = $_POST['width_text--input'];
$message = $_POST['message'];


//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'shadruhin.konstantin@yandex.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Alexandra_2011'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('shadruhin.konstantin@yandex.ru'); // от кого будет уходить письмо?
$mail->addAddress('shadkonstantin@yandex.ru');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта www.kolosnik.com';
$mail->Body    = "<strong>ФИО отправителя:</strong> $name <br>
<strong>Электронный адрес отправителя:</strong> $email <br>
<strong>Телефон отправителя:</strong> $phone <br>
<strong>Продукт:</strong> $product <br>
<strong>Длина:</strong> $length <br>
<strong>Ширина:</strong> $width <br>
<strong>Несущая полоса:</strong> $polosa <br>
<strong>Ячейка:</strong> $cell <br>
<strong>Связующий пруток:</strong> $prutok <br>
<strong>Горячее цинкование:</strong> $zn <br>
<strong>Сообщение:</strong> $message <br>";
$mail->AltBody = '';

if (!$mail->send()) {
	echo 'Error';
} else {
	header('location: thank-you.html');
}
