<?php
    include 'connection.php';

    $sql = "SELECT count(*) as subs FROM subscribers ;";
    
    $result = $con->query($sql);
    
    if(($result->num_rows > 0)){
    
        echo $result->fetch_assoc()['subs'];
        
    }else{

        echo 10;
    
    }
    

?>
