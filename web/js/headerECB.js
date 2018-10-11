function toggleDropDown(dropdownID) {
    var targetDD = document.getElementById(dropdownID+'-dd');
    var currDown = document.getElementsByClassName('currDown');
    if(currDown.length > 0 && currDown.item(0).id != (dropdownID+"-dd")) {
        
        currDown.item(0).style = "display:none";
        var cdID = currDown.item(0).id;
        console.log(cdID.substring(0,cdID.length-3)+"-ni");
        currDown.item(0).classList.remove('currDown');
        
        document.getElementById(cdID.substring(0,cdID.length-3)+"-ni").classList.remove("active");
        document.getElementById(cdID.substring(0,cdID.length-3)+"-ni").children.item(0).children.item(0).classList.add("fa-chevron-up");
        document.getElementById(cdID.substring(0,cdID.length-3)+"-ni").children.item(0).children.item(0).classList.remove("fa-chevron-down");
        targetDD.style = "display:block"; //Cam be set ad currDown porperty in css to avoid mistakes
        targetDD.classList.add('currDown');
        
        document.getElementById(dropdownID+'-ni').classList.add('active'); //turn the navigation bar item white
        document.getElementById(dropdownID+'-ni').children.item(0).children.item(0).classList.remove("fa-chevron-up");
        document.getElementById(dropdownID+'-ni').children.item(0).children.item(0).classList.add("fa-chevron-down");
        //TODO UPDATE all this risky selectors!!!! children of children arrays ARE NOT A SAFE solution!
        
    } else if (currDown.length == 0 && targetDD.classList.contains('currDown') == false) {
        
        targetDD.style = "display:block"; //Cam be set ad currDown porperty in css to avoid mistakes
        targetDD.classList.add('currDown');
        document.getElementById(dropdownID+'-ni').classList.add('active');
        document.getElementById(dropdownID+'-ni').children.item(0).children.item(0).classList.remove("fa-chevron-up");
        document.getElementById(dropdownID+'-ni').children.item(0).children.item(0).classList.add("fa-chevron-down");
        
    } else {
        
        targetDD.style = "display:none"; //Cam be set ad currDown porperty in css to avoid mistakes
        targetDD.classList.remove('currDown');
        document.getElementById(dropdownID+'-ni').classList.remove('active');
        document.getElementById(dropdownID+'-ni').children.item(0).children.item(0).classList.add("fa-chevron-up");
        document.getElementById(dropdownID+'-ni').children.item(0).children.item(0).classList.remove("fa-chevron-down");
    }
}