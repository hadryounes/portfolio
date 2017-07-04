<?php
    if (isset($_POST['name'], $_POST['email'], $_POST['project-details'])) {
        $to = "hadryounes@gmail.com";
        $from = $_POST['email']; // this is the sender's Email address
        $first_name = $_POST['name'];
        $subject = "Work Inquiry";
        $message = $first_name . " " . " wrote the following:" . "\n\n" . $_POST['project-details'];
    
        $headers = "From:" . $from;
        mail($to,$subject,$message,$headers);
        
        echo "Mail Sent. Thank you " . $first_name . ", I will contact you shortly.";
    }

?>

