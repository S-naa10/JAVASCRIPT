// let btn=document.querySelector("button");
// let inp=document.querySelector("input");
// let ul=document.querySelector("ul");

// btn.addEventListener("click",function(){
//     let item=document.createElement("li");
//     item.innerText=inp.value;
//     let delBtn=document.createElement("button");
//     // delBtn.style.flex=1;
//     // delBtn.style.width= "150px";
    

//     delBtn.innerText="Delete";
//     delBtn.classList.add("task-item");
//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value="";
// });

// ul.addEventListener("click",function(event){
//     if(event.target.nodeName="BUTTON"){
//         let listItem=event.target.parentElement;
//         listItem.remove();
//     }
// } );
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;
  
  // Add class to the created li element
  item.classList.add("task-list-item");

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  
  // Add class to the created delete button
  delBtn.classList.add("delete");
  
  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});

ul.addEventListener("click", function (event) {
  if (event.target.nodeName === "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
