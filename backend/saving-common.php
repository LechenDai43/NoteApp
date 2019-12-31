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
    $tag_id = -1;
    $statement = "select tag_id from tags where tag = \"".$value."\"";
    $outcome = mysqli_query($mysqli, $statement);
    if ($outcome->num_rows == 0) {
        $statement = "insert into tags(tag) value (\"".$value."\")";
        $outcome = mysqli_query($mysqli, $statement);
        $tag_id = mysqli_insert_id($mysqli);
    } else {
        $row = mysqli_fetch_row($outcome);
        $tag_id = $row[0];
    }
    $statement = "insert into tag_ref(tag_id, article_id) value(".$tag_id.",".$id.")";
    $outcome = mysqli_query($mysqli, $statement);
    if ($outcome != true) {
        echo mysqli_error($mysqli);
        return;
    }
}

$format_directory = $directory.$id;
$files = [];
//echo "so far so good";