<?php
  //connect to mysql db
  $connection = mysql_connect("charmalarm.mysql","charmalarm_cms00","ydHt/6zA") or die('Could not connect: ' . mysql_error());
  //connect to the database
  mysql_select_db("charmalarm_cms00", $connection);

  //get the location details
  $test_id = $data['test_id'];
  $test_title = $data['test_title'];

  //insert into mysql table
  $sql = "INSERT INTO charmalarm
  VALUES('$test_id', '$test_title')";
  if(!mysql_query($sql,$connection))
  {
    die('Error : ' . mysql_error());
  }
?>