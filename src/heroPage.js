const heroPage = ()=>{
    const content = document.querySelector('.content');
    
    const mainBody = document.createElement('main');
    mainBody.classList.add('hero-body')

    const title = document.createElement('h1');
    title.classList.add('title-h1')
    title.innerText = "Welcome to FORQUE";

    const para = document.createElement('p');
    para.classList.add('para-p')
    para.innerText = "Welcome to FORQUE, where culinary artistry meets a cozy ambiance. Experience exquisite Cuisine creations prepared with passion, paired with the finest wines, and served with warm hospitality. Join us for an unforgettable dining experience.";

    mainBody.appendChild(title);
    mainBody.appendChild(para);

    content.appendChild(mainBody)


}
export default heroPage;