<?php
    $data_file = fopen("text.txt","w");
    $name=$_POST("name");
    $text_to_write=$name;

    fwrite($data_file,$text_to_write);
    fclose($data_file);
?>