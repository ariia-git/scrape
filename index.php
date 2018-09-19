<?php
// cross origin header, allows posting from embedded script on other sites
header('Access-Control-Allow-Origin: *'); 

// extremely basic security for posting with z value
if (!empty($_POST['z']) && $_POST['z'] == 'apasscode') {
    
    $link = mysqli_connect("localhost", "dbuser", "password", "dbname");
    
    $i=0;
    $status = 'Reset';
    if (empty($_POST['emails'])) {
        // nothing
    } else {
        $emails = array_unique($_POST['emails']); //grab unique emails from data

        // for each email in array, insert into db
        // NEEDS CLEANSING!?
        foreach ($emails as $email){

            $query1 = "INSERT INTO emails (email_address) VALUES ('$email')";

            $q = mysqli_query($link, $query1) or die (mysqli_error($link));
            $i++;
        }
        $status = $i.' emails were added successfully!';
        echo $status;
        
        // return false;
    }

} else {
?>
Derp.
<?php
}
