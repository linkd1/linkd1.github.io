<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $feedback = $_POST['feedback'];

    // Prepare email message
    $to = 'd.tsarddakas@gmail.com'; // Change this to your email address
    $subject = 'Feedback from Website';
    $message = "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Feedback: $feedback\n";

    // Send email
    if (mail($to, $subject, $message)) {
        echo "Thank you for your feedback!";
    } else {
        echo "Sorry, there was an error submitting your feedback.";
    }
}
?>
