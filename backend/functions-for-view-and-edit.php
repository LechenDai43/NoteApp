<?php
function createEntryTable($js) {
    echo "<table class = \"entry-table-head\">";
    echo "<thead><tr class = \"entry-table-head\">";
    $heads = $js->{'head'};
    foreach ($heads as $value) {
        echo "<th><p class = \"entry-table-header\">".$value."</p>";
    }
    echo "</tr></thead><tbody>";
    $bodies = $js->{'table'};
    foreach ($bodies as $row) {
        echo "<tr class = \"entry-table-body\">";
        foreach ($heads as $value) {
            echo "<td><p class = \"entry-table-cells\">";
            if (isset($row->{$value})) {
                echo $row->{$value};
            } else {
                echo "";
            }
            echo "</p></td>";
        }
        echo "</tr>";
    }
}

function createEntryList($js) {
    echo "<ul class=\"in-section-p\">";
    foreach ($js->{'content'} as $item) {
        echo "<li class = \"entry-list-item\">".$item."</li>";
    }
    echo "</ul>";
}

function createEntryImage($js) {
    echo "<div class = \"entry-outer-image\">";
    echo "<img src = \"".$js->{'image'}."\" width = \"500px\">";
    echo "</div>";
}

function createEntryParagraph($js) {
    echo "<p class = \"in-section-p\">".$js->{'content'}."</p>";
}
