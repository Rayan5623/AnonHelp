<?php 
// OTP SYSTEM CODE fonte: https://blog.infotheme.net/2018/05/make-otp-system-in-php.html
function sendSMS($mobile=null, $subject=null)
{
$SMSapiKey = 'XYZ';
$url = 'http://example.com/api_2.0/SendSMS.php?APIKEY='.$SMSapiKey.'&MobileNo='.urlencode($mobile).'&SenderID=SAMPLE_MSG&Message='.urlencode($subject).'&ServiceName=TEMPLATE_BASED';
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$returndata = curl_exec($ch);
curl_close($ch);
return "A SMS SENT SUCCESSFULLY TO $mobile";
}
$otp_code = strtoupper(bin2hex(openssl_random_pseudo_bytes(3)));  // A smart code to generate OTP PIN.
 
//update_user_meta($user_ID, 'otp_payment','$otp_code'); // For wordpress user's OTP management
$query = mysql_query("UPDATE otp_table SET otp_code='".$otp_code."' WHERE user_id= '$user_ID' ");// For PHP USER's OTP MANAGEMENT
 
$otp_query_fetch = mysql_query($query);
 
//Send OTP Via Email
 
$customer_email = "customer_name@example.com";
 
$emailSubject = "Hello, We received an Authentication Request.";
 
$emailContent = "Thanks to request an OTP, Your OTP Code for this transaction is $otp_code";
mail($customer_email ,$emailSubject ,$emailContent); // Using mail() Function to send otp pin via email
 
// Send OTP Via SMS
 
sendSMS(123456789, "Hello, Your OTP (One Time Password) for this transaction is $otp_code");
 
echo "An OTP has been sent to your mobile and email.";
?>