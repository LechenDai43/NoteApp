<?php
$directory = "../files/";
$v1 = "";
$v2 = "";
$v3 = "";
$v4 = "";
$v5 = "";

$note = json_decode($_POST['js']);
$title = $note->{'title'};
$type = $note->{'type'};

$statement = "insert into articles(title, class) value(\"".$title."\", \"".$type."\")";
$outcome = mysqli_query($mysqli, $statement);
if ($outcome != true) {
    echo mysqli_error($mysqli);
    return;
}
$id = mysqli_insert_id($mysqli);

$tag = $note->{'tag'};
foreach ($tag as $value) {
    $statement = "insert into tags(id, tag) value($id,\"".$value."\")";
    $outcome = mysqli_query($mysqli, $statement);
    if ($outcome != true) {
        echo mysqli_error($mysqli);
        return;
    }
}

$format_directory = $directory.$type.$id;