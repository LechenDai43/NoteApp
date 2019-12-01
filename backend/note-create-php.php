<?php
if (isset($_POST['js'])) {
    include_once 'mysql-connection.php';
    $note = json_decode($_POST['js']);
    $title = $note->{'title'};
    $type = $note->{'type'};
}