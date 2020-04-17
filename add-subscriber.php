<?php

    include 'connection.php';

    $email = mysqli_real_escape_string($con, $_POST["email_sub"]);

    $sql = "INSERT INTO `subscribers`(`email`) VALUES ('$email');";

    //echo $sql;

    $result = $con->query($sql);


?>