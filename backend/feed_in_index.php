<?php
if ($error == -1) {
    foreach ($files as $ele) {
        $afile = fopen($ele, 'r');
        $length = 0;
        while (!feof($afile)) {
            $line = fgets($afile);
            for ($i = 0; $i < strlen($line);) {
                $char = substr($line, $i, 3);
                $num = mb_ord($char, "UTF-8");
                $loc = $ele . "=" . $length;
                if (64 < $num && $num < 123) {
                    $statement = "insert into indexing_z(indexing, location) value(\"" . substr($line, $i, 1) . "\",\"" . $loc . "\")";
                    $outcome = mysqli_query($mysqli, $statement);
                    $length++;
                    $i++;
                } else if ($num < 19968 || $num > 40959) {
                    $length += 3;
                    $i += 3;
                } else {
                    $table = "insert into indexing_";
                    if ($num < 21488) {
                        $table = $table . "a";
                    } else if ($num < 24359) {
                        $table = $table . "b";
                    } else if ($num < 26539) {
                        $table = $table . "c";
                    } else if ($num < 30447) {
                        $table = $table . "d";
                    } else if ($num < 34383) {
                        $table = $table . "e";
                    } else {
                        $table = $table . "f";
                    }
                    $statement = $table . "(indexing, location) value(\"" . $char . "\",\"" . $loc . "\")";
                    $outcome = mysqli_query($mysqli, $statement);
                    $length += 3;
                    $i += 3;
                }
            }
        }
    }
    mysqli_close($mysqli);
}