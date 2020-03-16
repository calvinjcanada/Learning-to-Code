<!-- Pulled from Inmotion Hosting Documentation -->
<?php
  if (isset($_POST['email']))  {
    // email = the input for <input type="email" name="email" in HTML file
  
    //Email information
    $admin_email = "brad@edgeledger.net";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    //send email
    mail($admin_email, "New Form Submission(Email Subject)", $message . ' - ' . $phone, "From:" . $email);
    
    header('Location: http://edgeledger.net/success.html');
    // Re-directs to a new page
  }