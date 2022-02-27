function createToppings(numberOfToppings, classNameOfToppings,imageSource){
    const nodeListToReturn = [];
    for(let i=0;i<numberOfToppings;i++){

        const topping = document.createElement('img');

        topping.className=classNameOfToppings;

        topping.src=imageSource;

        topping.style.position = "absolute";

        topping.style.top = `${((Math.random()*100)%80)}%`;
        topping.style.left = `${((Math.random()*100)%80)}%`;
        topping.style.transform = `rotate(${Math.random()*360}deg)`;
        topping.style.height="20%";
        topping.style.width="20%";

        nodeListToReturn.push(topping);
    }
    return nodeListToReturn;
}

function addToppingToCrust(){
    //the div that contains all the toppings images
    const toppingsContainer = document.getElementsByClassName("toppings-container")[0];

    //the to be className of the topping element that will be created by the button that fired this function
    const classNameOfToppings = this.innerText.toLowerCase().replaceAll(" ","")+"topping";

    

    //add a remove the selected class from the button
    if(this.classList.contains('selected')){

        //if the topping has already been selected then remove that topping from the crust
        //get all the topping
        const toppingsToDelete = toppingsContainer.getElementsByClassName(classNameOfToppings);
        //using a for loop here was the biggest mistake of my life
        while(toppingsToDelete.length){
            toppingsContainer.removeChild(toppingsToDelete[0]);
        }
        this.classList.toggle("selected");
        return;

    }else{
        
        this.classList.toggle("selected");
    }

    //select the number of toppings to be inserted,
    //the numbers below are not part of any formula, just picked them randomly
    let numberOfToppings = (40 + Math.floor(Math.random() * 80)) % 81;

    //we decided that number of toppings should not be less than 40
    if(numberOfToppings<40){
        numberOfToppings=40;
    }

    //the path to the image of the topping
    const imageSource = this.getElementsByTagName("img")[0].src;
    //this will return the nodeList that we need to insert in the crust
    const toppingsNodeList = createToppings(numberOfToppings,classNameOfToppings,imageSource);

    //now insert these toppings into the topping container inside the crust
    for(let i=0;i<toppingsNodeList.length;i++){
        toppingsContainer.appendChild(toppingsNodeList[i]);
    }

}

function addListenersToToppingsButtons(){
    const toppingsButtons = document.getElementsByClassName("toppings-insertion-button");
    
    for(let i=0;i<toppingsButtons.length;i++){
        toppingsButtons[i].addEventListener("click",addToppingToCrust);
    }
}

addListenersToToppingsButtons();