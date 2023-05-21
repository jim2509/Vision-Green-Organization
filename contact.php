<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Get the form data
  $first_name = $_POST['first-name'];
  $last_name = $_POST['last-name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Set the recipient email address
  $to = "information@visiongreen.org";

  // Set the email subject
  $email_subject = "New message from $first_name $last_name: $subject";

  // Set the email message
  $email_message = "Name: $first_name $last_name\n\nEmail: $email\n\nMessage:\n$message";

  // Set the email headers
  $headers = "From: $email\r\n";
  $headers .= "Reply-To: $email\r\n";

  // Send the email
  mail($to, $email_subject, $email_message, $headers);

  // Redirect the user to a thank you page
  header("Location: thank-you.php");
  exit();
}
?>
