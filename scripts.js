// contact from options
function toggleVisibilityContactMessage() {
    let contact_message = document.getElementsByClassName('contact-write-messege-form')[0];
    let writeMessage=document.getElementById("contact-write-message");
   

    if (contact_message.style.display === 'none' || contact_message.style.display === '') {
        contact_message.style.display = 'flex';
        writeMessage.textContent="Send message"
   
    } else {
        contact_message.style.display = 'none';
        writeMessage.textContent="Write message"
   
    }
}

// other project visibility option
function toggleVisibilityOtherProject()
{
    let other_project=document.getElementById("other-project-main-div")
    
    let see_more_project_button_img=document.getElementById("other-project-seemore-img");
    let see_more_project_button_text=document.getElementById("other-project-seemore-text")

    if(other_project.style.display==='none' || other_project.style.display === '')
    {
        other_project.style.display='block';
        see_more_project_button_text.textContent="Collapse ";
        
        see_more_project_button_img.src="./images/viewless.png";
    }
    else{
        other_project.style.display='none';
        see_more_project_button_text.textContent="See More ";
        see_more_project_button_img.src="./images/viewmore.png";
        
    }
}
// large navbar toggle option
function toggleVisibilityNavbar() {
    let navbar_items = document.getElementsByClassName("flex-container");
    let nevbar_menu_img=document.getElementById("navbar-2nd-div-2nd-div-img");

    for (let i = 0; i < navbar_items.length; i++) {
        let navbaritem = navbar_items[i];
        navbaritem.classList.toggle("hidden");     
    }
    
    let navbar_item = document.getElementsByClassName("flex-container")[0];
    if(navbar_item.classList.contains('hidden'))
    {
        nevbar_menu_img.src="./images/list.png";
    }
    else{
        nevbar_menu_img.src="./images/next.png";   
    }

}

// Handle display size with navbar opations
function handleResize() {
    var width = window.innerWidth;

    console.log(width);
    if(width < 700)
    {
        let navbarlarge = document.getElementById('flex-container-head-large');
        let navbarsmall = document.getElementById('flex-container-head-small');
        navbarlarge.style.display='none'
        navbarsmall.style.display='flex'

    }
    else
    {
        let navbarlarge = document.getElementById('flex-container-head-large');
        let navbarsmall = document.getElementById('flex-container-head-small');
        navbarlarge.style.display='flex'
        navbarsmall.style.display='none'
    }
}

document.addEventListener('DOMContentLoaded', handleResize);
window.addEventListener('resize', handleResize);

// small navbar toaggle option
function handleClickSmallNavbarToggle()
{
    let navbar_item = document.getElementsByClassName("unorder-list-small-navbar")[0];
    
    
    navbar_item.classList.toggle("hidden");     
    let navbar_menu_img = document.getElementById("small-navbar-menu-img");
    if(navbar_item.classList.contains('hidden'))
    {
        
        navbar_menu_img.src="./images/list.png";   
    }
    else{
        navbar_menu_img.src="./images/xmark.png";
    }
}