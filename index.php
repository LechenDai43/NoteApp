<!-- list of elements
IDs:
    index-main                                  a main to hold main part of this page
    main-logo                                   a h1 that hold the logo
    out-form                                    a div hold searching form and feel luck button and show all button
    main-search-form                            the form to fill in searching keyword and search
    adv-btn                                     a button to trigger advanced search section
    follow-form                                 a div hold feel luck button and show all button
classes:
    text-field
    submit
-->
<html>
    <head>
        <title><?php include_once 'utility/name.php'; ?></title>
        <meta name="description" content="<?php include_once 'utility/generalDescription.php'; ?>">
        <meta name="keywords" content="">
        <?php include_once 'utility/authorAndView.php'; ?>
        <link rel="stylesheet" type="text/css" href="css/component.css">
        <link rel="stylesheet" type="text/css" href="css/index.css">
    </head>
    <body>
        <?php include_once 'component/left-top.php'; ?>
        <?php include_once 'component/right-top-unsigned.php'; ?>
        <main id="index-main">
            <h1 id="main-logo">Note App</h1>
            <div id="out-form">
                <form method="get" action="search/simple-search.php" id="main-search-form">
                    <input type="search" name="simple-key" class="text-field"/>
                    <input type="submit" name="submit" class="submit" value="Search"/>
                </form>
                <button id="adv-btn">Advanced</button>
            </div>
            <div id="follow-form">
                <button>Feel Luck</button>
                <button>Show All</button>
            </div>
        </main>
        <script>
            document.getElementById("main-search-form").style.height = "25px";
            document.getElementById("adv-btn").style.height = "25px";
        </script>
    </body>
</html>

