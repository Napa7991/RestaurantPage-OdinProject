import './style.css';
import heroPage from "./heroPage";

const menu = ()=>{

    const content = document.querySelector(".content");
    const  mainBody = document.createElement('main');

    mainBody.classList.add('menu-container');

    const Breakfast = document.createElement('div');
    Breakfast.classList.add('menu-Div');

    const breakfastMenu = document.createElement('h1');
    breakfastMenu.classList.add('headingMenu')
    breakfastMenu.innerText = "Breakfast";

    const breakfastItem = document.createElement('li');
    breakfastItem.classList.add('items')
    breakfastItem.innerText = "Dosa";
    const breakfastItem1 = document.createElement('li');
    breakfastItem1.classList.add('items')
    breakfastItem1.innerText = "Idli";
    const breakfastItem2 = document.createElement('li');
    breakfastItem2.classList.add('items')
    breakfastItem2.innerText = "Puri";

    breakfastMenu.appendChild(breakfastItem);
    breakfastMenu.appendChild(breakfastItem1);
    breakfastMenu.appendChild(breakfastItem2);

    Breakfast.appendChild(breakfastMenu);



    const Lunch = document.createElement('div');
    Lunch.classList.add('menu-Div');

    const lunchMenu = document.createElement('h1');
    lunchMenu.classList.add('headingMenu')
    lunchMenu.innerText = "Lunch";

    const lunchItem = document.createElement('li');
    lunchItem.classList.add('items')
    lunchItem.innerText = "Rice Dal";
    const lunchItem1 = document.createElement('li');
    lunchItem1.classList.add('items')
    lunchItem1.innerText = "Bhindi fry";
    const lunchItem2 = document.createElement('li');
    lunchItem2.classList.add('items')
    lunchItem2.innerText = "Aloo fry";

    lunchMenu.appendChild(lunchItem);
    lunchMenu.appendChild(lunchItem1);
    lunchMenu.appendChild(lunchItem2);

   
    Lunch.appendChild(lunchMenu);

    

    

    const Dinner = document.createElement('div');
    Dinner.classList.add('menu-Div');

    const DinnerMenu = document.createElement('h1');
    DinnerMenu.classList.add('headingMenu')
    DinnerMenu.innerText = "Dinner";

    const dinnerItem = document.createElement('li');
    dinnerItem.classList.add('items')
    dinnerItem.innerText = "Chicken";
    const dinnerItem1 = document.createElement('li');
    dinnerItem1.classList.add('items')
    dinnerItem1.innerText = "Egg";
    const dinnerItem2 = document.createElement('li');
    dinnerItem2.classList.add('items')
    dinnerItem2.innerText = "Fish";

    DinnerMenu.appendChild(dinnerItem);
    DinnerMenu.appendChild(dinnerItem1);
    DinnerMenu.appendChild(dinnerItem2);

    Dinner.appendChild(DinnerMenu);


    mainBody.appendChild(Breakfast);
    mainBody.appendChild(Lunch);
    mainBody.appendChild(Dinner)

    content.appendChild(mainBody)

  
}

export default menu;

