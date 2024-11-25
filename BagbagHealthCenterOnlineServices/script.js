
/* visitingpage */
function showlogin(){
        document.querySelector(".bgopacitylogin").style.display = "flex";
}

function hidelogin(){
    document.querySelector(".bgopacitylogin").style.display = "none";
}

function showsignup(){
    document.querySelector(".bgopacitysignup").style.display = "flex";
}

function hidesignup(){
    document.querySelector(".bgopacitysignup").style.display = "none";
}

/* homepage */
function toggleStateMenu() {

    const menu = document.getElementById('clickablemenu');
    const menulist = document.getElementById('menuitemcontainer');

        // Toggle the visibility of the content
        if (menulist.style.display === 'none' || menulist.style.display === '') {
            menulist.style.display = 'flex'; // Show content
        } else {
            menulist.style.display = 'none'; // Hide content
        }
}
  
function hidemenulist(){
    document.querySelector(".menuitem-container").style.display = "none";
}

function visitingpage(){
    window.location.replace("visitingpage.html");
    //window.location.href = "visitingpage.html";

    /* replace is use to forcely go to another webpage without having access or going-back to the previous webpage
    while href is the opposite of it where it can access the previous page and you can go back and forth*/
}


/* services */
function tbdots(){
    window.location.href = "tbdots.html";
}

function maternalchild(){
    window.location.href = "maternalchild.html";
}

function vaccination(){
    window.location.href = "vaccination.html";
}

function dental(){
    window.location.href = "dental.html";
}

function familyplanning(){
    window.location.href = "familyplanning.html";
}

function seniorcitizen(){
    window.location.href = "seniorcitizenhealthcare.html";
}

function generalconsultation(){
    window.location.href = "generalconsultation.html";
}

function medicalrecords(){
    window.location.href = "medicalrecords.html";
}

function bmicalcu(){
    window.location.href = "bmicalculator.html";
}

