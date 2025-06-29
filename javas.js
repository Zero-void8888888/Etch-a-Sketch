let contain = document.querySelector("#container");

//creates the button

let btn = document.createElement("button");
contain.appendChild(btn);
btn.textContent = "click me";
btn.style.cssText = ' font-size:10px;';
let row = undefined;
let column = undefined;



btn.addEventListener("click", () => {
    row = prompt("insert how many rows you would like"); 
    column = prompt("insert how many colums you would like brother");
    if(!isNaN(row) || !isNaN(column)|| row < 100 && column < 100 && row > 0 || column >  0 ){
        deleteGrid();
        creation(row,column)
    }
    else{
        alert("Invalid inputs, please click again");
    }
 });

//delete 


function deleteGrid(){

let divs = document.querySelectorAll(".subContainer");
divs.forEach((d)=> {
    d.remove();
})

}



// redefine creation of div

function creation ( row , column) {

for(let i = 0; i < row; i++){
    let quack = document.createElement("div");
    quack.classList.add("subContainer");
    container.append(quack);
    
    for(let j = 0; j < column; j++){
        let meow = document.createElement("div");
        meow.classList.add("ssubContainer");
        quack.append(meow);
    }
};

let subFlex = document.querySelectorAll(".subContainer");
subFlex.forEach(d => {
    d.style.cssText ='display:flex; border: 2px black solid; height: 20px;';
});

let ssubFlex = document.querySelectorAll(".ssubContainer");

ssubFlex.forEach( d => {
    d.style.cssText ='flex:1; border: 2px black solid;height: 20px;width:20px; ';
});


ssubFlex.forEach( d => {
    d.addEventListener("mouseenter", (e) => {
            e.target.style.background = "blue";
    })
});

ssubFlex.forEach( d => {
    d.addEventListener("mouseleave", (e) => {
            e.target.style.background = "white";
    })
});

}

//structure of grid

for(let i = 0; i < 16; i++){
    let quack = document.createElement("div");
    quack.classList.add("subContainer");
    container.append(quack);
    
    for(let j = 0; j < 16; j++){
        let meow = document.createElement("div");
        meow.classList.add("ssubContainer");
        quack.append(meow);
    }
};




let subFlex = document.querySelectorAll(".subContainer");
subFlex.forEach(d => {
    d.style.cssText ='display:flex; border: 2px black solid; height: 20px;';
});

let ssubFlex = document.querySelectorAll(".ssubContainer");

ssubFlex.forEach( d => {
    d.style.cssText ='flex-grow:1 ; border: 2px black solid;height: 20px;width:20px; ';
});


ssubFlex.forEach( d => {
    d.addEventListener("mouseenter", (e) => {
            e.target.style.background = "blue";
    })
});

ssubFlex.forEach( d => {
    d.addEventListener("mouseleave", (e) => {
            e.target.style.background = "white";
    })
});



/*

// creates the sub divs
let divSub1 = document.createElement("div");
let divSub2 = document.createElement("div");
let divSub3 = document.createElement("div");
let divSub4 = document.createElement("div");
let divSub5 = document.createElement("div");
let divSub6 = document.createElement("div");
let divSub7 = document.createElement("div");
let divSub8 = document.createElement("div");
let divSub9 = document.createElement("div");
let divSub10 = document.createElement("div");
let divSub11 = document.createElement("div");
let divSub12 = document.createElement("div");
let divSub13 = document.createElement("div");
let divSub14 = document.createElement("div");
let divSub15 = document.createElement("div");
let divSub16 = document.createElement("div");


// creates the divs in the sub divs 
let div = document.createElement("div");



//add them to each  sub container
function addToContainer(parent) {
    for (let i = 0; i < 16; i++) {
        let child = document.createElement("div");
        child.classList.add("ssubContainer")
        parent.appendChild(child);
    }
}


addToContainer(divSub1, div);
addToContainer(divSub2, div);
addToContainer(divSub3, div);
addToContainer(divSub4, div);
addToContainer(divSub5, div);
addToContainer(divSub6, div);
addToContainer(divSub7, div);
addToContainer(divSub8, div);
addToContainer(divSub9, div);
addToContainer(divSub10, div);
addToContainer(divSub11, div);
addToContainer(divSub12, div);
addToContainer(divSub13, div);
addToContainer(divSub14, div);
addToContainer(divSub15, div);
addToContainer(divSub16, div);



// creates the  class subContainer for the divs in the container


divSub1.classList.add("subContainer");
divSub2.classList.add("subContainer");
divSub3.classList.add("subContainer");
divSub4.classList.add("subContainer");
divSub5.classList.add("subContainer");
divSub6.classList.add("subContainer");
divSub7.classList.add("subContainer");
divSub8.classList.add("subContainer");
divSub9.classList.add("subContainer");
divSub10.classList.add("subContainer");
divSub11.classList.add("subContainer");
divSub12.classList.add("subContainer");
divSub13.classList.add("subContainer");
divSub14.classList.add("subContainer");
divSub15.classList.add("subContainer");
divSub16.classList.add("subContainer");


 


contain.appendChild(divSub1);
contain.appendChild(divSub2);
contain.appendChild(divSub3);
contain.appendChild(divSub4);
contain.appendChild(divSub5);
contain.appendChild(divSub6);
contain.appendChild(divSub7);
contain.appendChild(divSub8);
contain.appendChild(divSub9);
contain.appendChild(divSub10);
contain.appendChild(divSub11);
contain.appendChild(divSub12);
contain.appendChild(divSub13);
contain.appendChild(divSub14);
contain.appendChild(divSub15);
contain.appendChild(divSub16);
// grid has been done above and below is styling

// makes the div pop out
let subFlex = document.querySelectorAll(".subContainer");
subFlex.forEach(d => {
    d.style.cssText ='display:flex; border: 2px black solid; height: 20px;';
});

let ssubFlex = document.querySelectorAll(".ssubContainer");

ssubFlex.forEach( d => {
    d.style.cssText ='display:flex; border: 2px black solid;height: 20px;width:20px; ';
});

// adding hover affect
ssubFlex.forEach( d => {
    d.addEventListener("mouseenter", (e) => {
            e.target.style.background = "blue";
    })
});

ssubFlex.forEach( d => {
    d.addEventListener("mouseleave", (e) => {
            e.target.style.background = "white";
    })
});

*/
 


