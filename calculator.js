function dark_mode(){
    document.getElementById("frame").style.backgroundColor = "black";
    document.getElementById("frame").style.border = "4px solid blue";
}
function light_mode(){
    document.getElementById("frame").style.backgroundColor = "white";
    document.getElementById("frame").style.border = "4px solid black";
}



function clearScreen(){
    document.getElementById("result").value = " ";
};

function display(value){
    document.getElementById("result").value += value;
}
function calculate(){
    if( result.value.length<1){
        document.getElementById("equalto")= "";
    }
    else{
    let operation = document.getElementById("result").value;
    let sum = eval(operation);
    document.getElementById("result").value = sum;

    }
}

function pressClear(){
    document.getElementById("result").value = result.value.slice(0, -1)
};

