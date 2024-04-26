/* This part selects a piece of clothing and puts 
it on the female character */
 const shirt = document.getElementById("shirt");
 const origLocaShirt = {top:"150px", left: "370px"};
 let clickCount = 0;

 shirt.addEventListener("click", selectedShirt);

 function selectedShirt(){
    console.log("shirt selected");
    clickCount++;
    console.log(clickCount);
    /* This is the position of the where the shirt
    will go on the female character*/
    shirt.style.postion = "absolute";
    shirt.style.top = "198px";
    shirt.style.left = "92px";

    if(clickCount === 2){
      shirt.style.top = "150px";
      shirt.style.left = "370px";
      shirt.style.height = "155px";
      clickCount = 0;

    }
 }


