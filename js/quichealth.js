var dropCnt = 0;
function showDrop(){
    if(dropCnt == 0){
    document.querySelector(".dropdown-content1").style.display = "block";
    dropCnt++;
    }
    else{
    document.querySelector(".dropdown-content1").style.display = "none";
    dropCnt = 0;
    }
}
function showHistoryMenu(){
    document.querySelector(".super_div").style.display ="none";
    document.querySelector(".history-div").style.display ="block";
    document.querySelector(".upcoming_child > h2").style.borderBottom ="none";
    document.querySelector(".history > div > h2").style.borderBottom ="5px solid #070647";
}
function showIncomingMenu (){
    document.querySelector(".history-div").style.display ="none";
    document.querySelector(".super_div").style.display ="block";
    document.querySelector(".upcoming_child > h2").style.borderBottom ="5px solid #070647";
    document.querySelector(".history > div > h2").style.borderBottom ="none";
}
function atOnload(){
    document.querySelector(".history-div").style.display ="none"
    document.querySelector(".submenu > ul li:nth-child(2)").style.backgroundColor= "#EFEFF2";
    document.querySelector(".submenu > ul li:nth-child(2)").style.borderLeft = "5px solid #070647";
    document.querySelector(".submenu > ul li:nth-child(2)").style.opacity="1.0"; 
}
function atOnload0(){
    document.querySelector(".submenu > ul li:first-child").style.backgroundColor= "#EFEFF2";
    document.querySelector(".submenu > ul li:first-child").style.borderLeft = "5px solid #070647";
    document.querySelector(".submenu > ul li:first-child").style.opacity="1.0"

}
function atOnload1(){
    document.querySelector(".submenu > ul li:nth-child(3)").style.backgroundColor= "#EFEFF2";
    document.querySelector(".submenu >  ul li:nth-child(3)").style.borderLeft = "5px solid #070647";
    document.querySelector(".submenu >ul li:nth-child(3)").style.opacity="1.0"
}
function atOnload2(){
    document.querySelector(".submenu > ul li:nth-child(4)").style.backgroundColor= "#EFEFF2";
    document.querySelector(".submenu >  ul li:nth-child(4)").style.borderLeft = "5px solid #070647";
    document.querySelector(".submenu >ul li:nth-child(4)").style.opacity="1.0"

}
function atOnload3(){
    document.querySelector(".comment-div").style.display ="none"
    document.querySelector(".submenu > ul li:nth-child(5)").style.backgroundColor= "#EFEFF2";
    document.querySelector(".submenu > ul li:nth-child(5)").style.borderLeft = "5px solid #070647";
    document.querySelector(".submenu > ul li:nth-child(5)").style.opacity="1.0"; 
}
function showHealthHistory () {
    document.querySelector(".comment-div").style.display ="none";
    document.querySelector(".health-div").style.display ="block";
    document.querySelector(".health_child > h2").style.borderBottom ="5px solid #070647";
    document.querySelector(".comment > div > h2").style.borderBottom ="none";
}
function showDoctorsComment() {
    document.querySelector(".health-div").style.display ="none";
    document.querySelector(".comment-div").style.display ="block";
    document.querySelector(".health_child > h2").style.borderBottom ="none";
    document.querySelector(".comment > div > h2").style.borderBottom ="5px solid #070647";
}
function atOnload4(){
    document.querySelector(".changePassword-div").style.display ="none"
    document.querySelector(".submenu > ul li:nth-child(6)").style.backgroundColor= "#EFEFF2";
    document.querySelector(".submenu ul li:nth-child(6)").style.borderLeft = "5px solid #070647";
    document.querySelector(".submenu > ul li:nth-child(6)").style.opacity="1.0"; 
}
function showAccount() {
    document.querySelector(".changePassword-div").style.display ="none";
    document.querySelector(".Account-div").style.display ="block";
    document.querySelector(".settings_child > h2").style.borderBottom ="5px solid #070647";
    document.querySelector(".change_password > div > h2").style.borderBottom ="none";
}
function showchangePassword() {
    document.querySelector(".Account-div").style.display ="none";
    document.querySelector(".changePassword-div").style.display ="block";
    document.querySelector(".settings_child > h2").style.borderBottom ="none";
    document.querySelector(".change_password > div > h2").style.borderBottom ="5px solid #070647";
}
function atOnload5(){
    document.querySelector(".submenu > ul li:nth-child(7)").style.backgroundColor= "#EFEFF2";
    document.querySelector(".submenu > ul li:nth-child(7)").style.borderLeft = "5px solid #070647";
    document.querySelector(".submenu > ul li:nth-child(7)").style.opacity="1.0"; 
}
