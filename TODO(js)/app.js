let todo=[];
let req=prompt("Please enter your request.");
while(true){
    if(req=="quit"){
        console.log("Quitting todo");
        break;
    }
    if(req == "list"){
        console.log("-------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("--------------");
    }
    else if(req=="add"){
        let task=prompt("Please enter the you want to add in todo");
        todo.push(task);
        console.log("task added");

    }
    else if(req=="delete"){
        let idx=prompt("Please enter the index of element you want to delete");
        todo.splice(idx,1);
        console.log("task deleted");

    }
    else{
        console.log("Wrong Request");
    }
    req = prompt("Please enter your request.");
    
}

