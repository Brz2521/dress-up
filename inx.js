/* This part selects a piece of clothing and puts 
it on the female character */
 const shirt = document.getElementById("shirt");
 const newLocaShirt = document.getElementById("shirt");
 /*Braces {} are used to encapsulate these property-value pairs(top and left) into a single object.*/
 const originalShirtLocation = {top: "150px", left: "370px"};

 shirt.addEventListener("click", selectedShirt);

 function selectedShirt(){
    console.log("shirt selected");
    /* This is the position of the where the shirt
    will go on the female character*/
    newLocaShirt.style.postion = "absolute";
    newLocaShirt.style.top = "198px";
    newLocaShirt.style.left = "92px";

    /*Event listener to the character image*/
    const returnShirt = document.getElementById("shirt");
    returnShirt.addEventListener("click", returnShirt, {once:true}); // Listen for one click and then remove the event listener

 }

 function returnShirt(){
   console.log("Character clicked");

   shirt.style.position = "absolute";
   shirt.style.top = originalShirtLocation.top;
   shirt.style.left = originalShirtLocation.left;
 }