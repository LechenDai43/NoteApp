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
    echo "<ul class=\"entry_list\">";
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

function createEntrySection($js, $title) {
    echo "<div class = \"a-group\">";
    echo "<h3>".$title."</h3><hr>";
    echo "<div class = \"section-container\">";
    foreach ($js as $element) {
        switch ($element->{'type'}) {
            case "table":
                createEntryTable($element);
                break;
            case "list":
                createEntryList($element);
                break;
            case "image":
                createEntryImage($element);
                break;
            case "paragraph":
                createEntryParagraph($element);
                break;
        }
    }
    echo "</div></div>";
}

function createNoteTable($js) {
    echo "<table class = \"note-table\">";
    echo "<thead><tr class = \"note-table-head\">";
    $heads = $js->{'head'};
    foreach ($heads as $value) {
        echo "<th><p class = \"note-table-header\">".$value."</p>";
    }
    echo "</tr></thead><tbody>";
    $bodies = $js->{'table'};
    foreach ($bodies as $row) {
        echo "<tr class = \"note-table-body\">";
        foreach ($heads as $value) {
            echo "<td><p class = \"note-table-cells\">";
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

function createNoteList($js) {
    echo "<ul class=\"note-list\">";
    foreach ($js->{'content'} as $item) {
        echo "<li class = \"note-list-item\">".$item."</li>";
    }
    echo "</ul>";
}

function createNoteParagraph($js) {
    echo "<p class = \"note-content-p\">".$js->{'content'}."</p>";
}

function createNoteMatrix($js) {
    echo "<div class = \"note-matrix\"><div class = \"matrix-neg-x-axis\">";
    echo $js->{'x'}->{'negative'};
    echo "</div><table class = \"matrix-mid\"><tr><td class = \"matrix-pos-y-axis\" colspan=\"2\">";
    echo $js->{'y'}->{'positive'};
    echo "</td></tr><td class = \"matrix-left-top\">";
    echo $js->{'content'}->{'-x+y'};
    echo "</td><td class = \"matrix-right-top\">";
    echo $js->{'content'}->{'+x+y'};
    echo "</td></tr><tr><td class = \"matrix-right-bottom\">";
    echo $js->{'content'}->{'-x-y'};
    echo "</td><td class = \"matrix-right-bottom\">";
    echo $js->{'content'}->{'+x-y'};
    echo "</td></tr><tr><td class = \"matrix-neg-y-axis\" colspan = \"2\">";
    echo $js->{'y'}->{'negative'};
    echo "</td></tr></table><div class = \"matrix-pos-x-axis\">";
    echo $js->{'x'}->{'positive'};
    echo "</div></div>";
}

function createNoteProcess($js) {
    echo "<div class = \"note-process\"><dic class = \"note-process-main-container\">";
    $l = 0;
    foreach ($js->{'content'} as $item) {
        if ($l != 0) {
            echo "<img src = \"../image/note-process-arrow.png\" height = \"25\" class = \"note-process-arrow\">";

        }
        echo "<div class = \"note-process-single-process\">";
        echo $item;
        echo "</div>";
        $l++;
    }
    echo "</div></div>";
}

function createNoteContent($js) {
    echo "<div class = \"note-container\">";
    foreach ($js as $element) {
        switch ($element->{'type'}) {
            case "table":
                createNoteTable($element);
                break;
            case "list":
                createNoteList($element);
                break;
            case "matrix":
                createNoteMatrix($element);
                break;
            case "paragraph":
                createNoteParagraph($element);
                break;
            case "process":
                createNoteProcess($element);
                break;
        }
    }
    echo "</div>";
}
