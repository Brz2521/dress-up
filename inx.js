/* This part selects a piece of clothing and puts 
it on the female character */
 const shirt = document.getElementById("shirt");
 const locaShirt = document.getElementById("shirt");

 shirt.addEventListener("click", selectedShirt);

 function selectedShirt(){
    console.log("shirt selected");

    locaShirt.style.postion = "absolute";
    locaShirt.style.top = "198px";
    locaShirt.style.left = "92px";

 }