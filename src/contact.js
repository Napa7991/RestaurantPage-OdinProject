import './style.css';

const createContactPage = ()=>{
    const content = document.querySelector('.content');
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const heading = document.createElement('h1');
    heading.classList.add('contactUs')
    heading.innerText = "Contact Us";
    form.appendChild(heading);

    const headingInput = document.createElement('input');
    headingInput.type = 'text';
    headingInput.placeholder = 'Enter Your Name';
    form.appendChild(headingInput);

    const addressInput = document.createElement('input');
    addressInput.type = 'text';
    addressInput.placeholder = 'Enter email address';
    form.appendChild(addressInput);

    const phoneInput = document.createElement('input');
    phoneInput.type = 'text';
    phoneInput.placeholder = 'Enter Phone Number';
    form.appendChild(phoneInput);

    const submitButton = document.createElement('input');
    submitButton.classList.add("submitBtn");
    submitButton.type = 'submit';
    submitButton.value = 'Submit';
    form.appendChild(submitButton)

    pageContent.appendChild(form);
    content.appendChild(pageContent);
}
export default createContactPage;