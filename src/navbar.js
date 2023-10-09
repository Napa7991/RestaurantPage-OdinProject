import './style.css';
import menu from './menu';
import heroPage from './heroPage';
import pageLoad from './pageLoad';
import createHomePage from './home';
import createFooter from './footer';
import contactUs from './contact';
const navBar = () => {
    const content = document.querySelector('.content');

    const section = document.createElement('section');
    const nav = document.createElement('nav');
    nav.classList.add('nav-bar');

    const logo = document.createElement('h1');
    logo.classList.add("nav-logo")
    logo.innerText = "FORQY"

    const div1 = document.createElement('div');
    div1.classList.add("div-tab")
    div1.innerText = "Home";

    const div2 = document.createElement('div');
    div2.classList.add("div-tab")
    div2.innerText = "Menu";

    const div3 = document.createElement('div');
    div3.classList.add("div-tab")
    div3.innerText = "Contact";

    nav.appendChild(logo)
    nav.appendChild(div1);
    nav.appendChild(div2);
    nav.appendChild(div3);

    section.appendChild(nav);

    content.appendChild(section);

    // onClick

    // For Home 
    div1.addEventListener("click", () => {
        const content = document.querySelector(".content")
        const menuContent = document.querySelector(".menu-container")
        if(menuContent){
            content.removeChild(menuContent);
        }
     
        clearContent();
        heroPage();
        createFooter();  
    })

    // For Menu;

    div2.addEventListener("click", () => {
       
            clearContent();
            menu();
            createFooter();
        
      
    })

    // For contact ;
    div3.addEventListener("click",()=>{
        clearContent();
        contactUs();

        createFooter();
    })

}

// to clearContent
function clearContent (){
    const content = document.querySelector('.content');
    const heroPageContent = document.querySelector(".hero-body");
    const footerContent = document.querySelector(".f-container");
    const menuContent = document.querySelector(".menu-container")
    const contactContent = document.querySelector(".page-content");

    if(heroPageContent){
        content.removeChild(heroPageContent)
    }
    if(footerContent){
        content.removeChild(footerContent);
    }
    if(menuContent){
        content.removeChild(menuContent);
    }
    if(contactContent){
        content.removeChild(contactContent);
    }

}


export default navBar;