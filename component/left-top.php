<!-- List of elements
IDs:
    ncl-lang-tab     a div that contains all the language tabs
    ncl-zh-tab       a button shown as Chinese tab
    ncl-en-tab       a button shown as English tab
Classes:
    ncl-tab-links    buttons of all language tabs
-->
<div id="ncl-lang-tab">
    <button class="ncl-tab-links" id="ncl-zh-tab" onclick="changeLang('Chinese')">中文</button>
    <button class="ncl-tab-links" id="ncl-en-tab" onclick="changeLang('English')">Eng</button>
</div>
<script>
    function changeLang(languageName) {
        if (languageName == 'Chinese') {
            changeToChinese();
        } else if (languageName == 'English') {
            changeToEnglish();
        }
    }
</script>
<!-- List of functions
    changeLang(String languageName)         a function that receives a language name and changes the page to that language
    changeToChinese()                       a function that changes page to Chinese
    changeToEnglish()                       a function that changes page to English
-->