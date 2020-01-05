<html>
    <head>
        <link rel="stylesheet" type="text/css" href="../../css/component.css">
        <link rel="stylesheet" type="text/css" href="../../css/create.css">
    </head>
    <body>
        <?php include_once '../../component/page-top.php'; ?>
        <main class="create-main" id="entry-create-main">
            <hr/>
            <?php include_once 'common-view.php'; ?>
            <div class="introduction-container">
                <h3>简介-Introduction</h3>
                <p class="introduction-p">
                    <?php
                    $statement = "select introduction, entry_id from entries where id = ".$id;
                    $outcome = mysqli_query($mysqli, $statement);
                    $row = mysqli_fetch_row($outcome);
                    $introduction_directory = $row[0];
                    $entry_id = $row[1];
                    $introduction_file = fopen("../".$introduction_directory, 'r');
                    while (!feof($introduction_file)) {
                        echo fgets($introduction_file);
                    }
                    fclose($introduction_file);
                    ?>
                </p>
            </div>
            <div class="all-sections">
                <?php
                include_once "../../backend/functions-for-view-and-edit.php";
                $statement = "select sect, content from entry_sections where entry_id = ".$entry_id;
                $outcome = mysqli_query($mysqli, $statement);
                $row = mysqli_fetch_row($outcome);
                while ($row != null) {
                    $section_title = $row[0];
                    $section_directory = $row[1];
                    $section_file = fopen("../".$section_directory, 'r');
                    $section_content = "";
                    while (!feof($section_file)) {
                        $section_content = $section_content.fgets($section_file);
                    }
                    createEntrySection(json_decode($section_content), $section_title);
                    $row = mysqli_fetch_row($outcome);
                }
                ?>
            </div>
            <div class="reference-container">
                <h4>信息来源-Reference</h4>
                <ol class="entry-ref-list">
                    <?php
                    $statement = "select reference from entry_references where entry_id = ".$entry_id;
                    $outcome = mysqli_query($mysqli, $statement);
                    $row = mysqli_fetch_row($outcome);
                    while ($row != null) {
                        echo "<li>".$row[0]."</li>";
                        $row = mysqli_fetch_row($outcome);
                    }
                    ?>
                </ol>
            </div>
        </main>
        <script src="../../javascript/entry-create-js.js"></script>
        <script src="../../javascript/create-submit-js.js"></script>
    </body>
</html>
