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