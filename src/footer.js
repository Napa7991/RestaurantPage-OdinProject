import './style.css'
const createFooter = ()=>{
    const content = document.querySelector('.content');

    const footerContainer = document.createElement('div');
    footerContainer.classList.add('f-container');

    const div1 = document.createElement('div');
    div1.classList.add('f-div1');

    const link1 = document.createElement('li');
    link1.innerHTML = "Facebook";
    const link2 = document.createElement('li');
    link2.innerHTML = "Instagram";
    const link3 = document.createElement('li');
    link3.innerHTML = "Twitter";
    
    div1.appendChild(link1);
    div1.appendChild(link2);
    div1.appendChild(link3);

    const div2 = document.createElement('div');
    div2.classList.add('f-div2');
    div2.innerText = "Copyright © 2023 by Tailang Company. All rights reserved."
    
    footerContainer.appendChild(div1);
    footerContainer.appendChild(div2);


    content.appendChild(footerContainer);
    
}
export default createFooter;