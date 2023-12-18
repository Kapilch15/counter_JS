let countValue = document.querySelector('#counter');

const increment = () =>{
    //get value from UI
    let value = parseInt(countValue.innerText);  //convert String into number
    //Updating value
    value = value + 1;
    //set the value onto UI 
    countValue.innerText = value;
};

const decrement = () =>{
    //get the value from UI
    let value = parseInt(countValue.innerText);
    //updating value
    value = value - 1;
    //set the value onto UI
    countValue.innerText = value;
}; 