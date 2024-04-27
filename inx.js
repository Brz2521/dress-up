/*Each item has a function, when you click on them once it will go
on the female character. When you click on the item again, while
on the female character, then it will go back to its original
location on the page.*/

//Variables of each item
 const shirt = document.getElementById("shirt");
 const skirt = document.getElementById("skirt");
 const shoes = document.getElementById("shoes");
 const dress = document.getElementById("dress");
 const hair = document.getElementById("hair");
 let clickCount = 0;

 //Event listeners that listens for a click on a specific item
 shirt.addEventListener("click", selectedShirt);
 skirt.addEventListener("click", selectedSkirt);
 shoes.addEventListener("click", selectedShoes);
 dress.addEventListener("click",selectedDress);
 hair.addEventListener("click",selectedHair);

 //Function that moves the shirt image when shirt is selected onto the female character
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

 function selectedSkirt(){
   console.log("skirt selected");
   clickCount++;
   console.log(clickCount);
   /* This is the position of where the skirt
   will go on the female character*/
   skirt.style.postion = "absolute";
   skirt.style.top = "355px";
   skirt.style.left = "109px";

   if(clickCount === 2){
     skirt.style.top = "160px";
     skirt.style.left = "580px";
     skirt.style.height = "125px";
     clickCount = 0;

   }
}

function selectedShoes(){
   console.log("shoes selected");
   clickCount++;
   console.log(clickCount);
   /* This is the position of where the skirt
   will go on the female character*/
   shoes.style.postion = "absolute";
   shoes.style.top = "350px";
   shoes.style.left = "400px";

   if(clickCount === 2){
     shoes.style.top = "720px";
     shoes.style.left = "130px";
     shoes.style.height = "";
     clickCount = 0;

   }
}

function selectedDress(){
   console.log("Dress selected");
   clickCount++;
   console.log(clickCount);
   /* This is the position of where the skirt
   will go on the female character*/
   dress.style.postion = "absolute";
   dress.style.top = "200px";
   dress.style.left = "95px";

   if(clickCount === 2){
      dress.style.top = "300px";
      dress.style.left = "550px";
      dress.style.height = "";
     clickCount = 0;

   }
}

function selectedHair(){
   console.log("Dress selected");
   clickCount++;
   console.log(clickCount);
   /* This is the position of where the skirt
   will go on the female character*/
   hair.style.postion = "absolute";
   hair.style.top = "92px";
   hair.style.left = "140px";

   if(clickCount === 2){
      hair.style.top = "450px";
      hair.style.left = "410px";
      hair.style.height = "";
     clickCount = 0;

   }
}









