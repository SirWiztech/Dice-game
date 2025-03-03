

function dice(){
    var random = Math.random();
    var random2 = (random * 6) + 1;
    var whole = Math.floor(random2);
    var change = "./IMAGES/dice" + whole + ".png" ;
    document.querySelectorAll("img")[0].setAttribute('src', change)
    
    var randoms = Math.random();
    var randoms1 = Math.random() * 6;
    var randoms2 = Math.floor(randoms1 + 1);
    var change1 = "./IMAGES/dice" + randoms2 + ".png";
    document.querySelectorAll("img")[1].setAttribute('src', change1)
    

    var name1 = document.getElementById('name1').value.toUpperCase()
    document.getElementById('user').innerHTML = "<span class='bx bx-child bx-flashing' style='font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;'></span>" + name1.toUpperCase()

    
   

    if (change > change1){
        document.getElementById("result").innerHTML = name1 +" " + "WINS"
        document.getElementById("recent1").innerHTML = "(1.)" +" "+ name1 + " " + "WON THIS ROUND"
        let glomi = "+1 for " + name1
        return glomi
    }
    else if ( change < change1){
        document.getElementById("result").innerHTML = "COMPUTER WINS"
        document.getElementById("recent1").innerHTML = "(1.) COMPUTER WON THIS ROUND"
        let glomi = "+1 for COMPUTER"
        return glomi
    }
    
    else{
        document.getElementById("result").innerHTML = "DRAW !!"
        document.getElementById("recent1").innerHTML = "THIS ROUND IS DRAW"
        let glomi = "DRAW"
        return glomi
    }
    
    

}

function king(){
    document.getElementById('great').style.display = 'none'

}

let outcome = []
    outcome.push(dice())



document.getElementById('out').innerHTML = outcome


function menu(){
    document.getElementById('menu1').style.visibility = 'visible'
}

function closemenu(){
    document.getElementById('menu1').style.visibility = 'hidden'
}

    