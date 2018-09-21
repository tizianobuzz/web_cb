function toggleDropDown(dropdownID) {
    var targetDD = document.getElementById(dropdownID+'-dd');
    var currDown = document.getElementsByClassName('currDown');
    if(currDown.length > 0 && currDown.item(0).id != (dropdownID+"-dd")) {
        currDown.item(0).style = "display:none";
        var cdID = currDown.item(0).id;
        console.log(cdID.substring(0,cdID.length-3)+"-ni");
        currDown.item(0).classList.remove('currDown');
        document.getElementById(cdID.substring(0,cdID.length-3)+"-ni").classList.remove("selected");
        targetDD.style = "display:block"; //Cam be set ad currDown porperty in css to avoid mistakes
        targetDD.classList.add('currDown');
        document.getElementById(dropdownID+'-ni').classList.add('selected'); //turn the navigation bar item white
    } else if (currDown.length == 0 && targetDD.classList.contains('currDown') == false) {
        targetDD.style = "display:block"; //Cam be set ad currDown porperty in css to avoid mistakes
        targetDD.classList.add('currDown');
        document.getElementById(dropdownID+'-ni').classList.add('selected');
    } else {
        targetDD.style = "display:none"; //Cam be set ad currDown porperty in css to avoid mistakes
        targetDD.classList.remove('currDown');
        document.getElementById(dropdownID+'-ni').classList.remove('selected');
    }
}