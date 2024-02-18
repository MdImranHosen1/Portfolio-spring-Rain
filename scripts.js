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
