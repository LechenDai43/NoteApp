<?php
$directory = "../files/";
$error = -1;
$v1 = "";
$v2 = "";
$v3 = "";
$v4 = "";
$v5 = "";
$files = [];
$id = -1;


$note = json_decode($_POST['js']);
$title = $note->{'title'};
$type = $note->{'type'};

$statement = "insert into articles(title, class) value(\"".$title."\", \"".$type."\")";
$outcome = mysqli_query($mysqli, $statement);
$e = mysqli_error($mysqli);
if (!empty($e)) {
    $error = $e;
}
if ($error == -1) {
    $id = mysqli_insert_id($mysqli);
    $format_directory = $directory . $id;

    $tag = $note->{'tag'};
    foreach ($tag as $value) {
        $tag_id = -1;
        $statement = "select tag_id from tags where tag = \"" . $value . "\"";
        $outcome = mysqli_query($mysqli, $statement);
        if ($outcome->num_rows == 0) {
            $statement = "insert into tags(tag) value (\"" . $value . "\")";
            $outcome = mysqli_query($mysqli, $statement);
            $tag_id = mysqli_insert_id($mysqli);
        } else {
            $row = mysqli_fetch_row($outcome);
            $tag_id = $row[0];
        }
        $statement = "insert into tag_ref(tag_id, article_id) value(" . $tag_id . "," . $id . ")";
        $outcome = mysqli_query($mysqli, $statement);
        $e = mysqli_error($mysqli);
        if (!empty($e)) {
            $error = $e.$value;
            break;
        }
    }



//echo "so far so good";
}