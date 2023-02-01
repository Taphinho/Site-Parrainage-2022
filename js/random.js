let bey = document.getElementById("bey");
let sirou = document.getElementById("sirou");
let docbey = document.getElementById("docbey");
let docsirou = document.getElementById("docsirou");
let cardbey = document.getElementById("cardbey");
let cardsirou = document.getElementById("cardsirou");
let imagebey = document.getElementById("imagebey");
let imagesirou = document.getElementById("imagesirou");
let button = document.getElementById("button");


docbey.classList.remove("shake");
docsirou.classList.remove("shake");
cardbey.style.display="none";
cardsirou.style.display="none";


button.addEventListener('click', () =>{
  imagebey.style.opacity="0";
  imagesirou.style.opacity="0";
  imagebey.classList.remove("up");
  imagesirou.classList.remove("up")
  button.classList.toggle("hidden");
  cardbey.style.display="block";
  cardsirou.style.display="block";
  docbey.classList.toggle("shake");
  docsirou.classList.toggle("shake");

  setTimeout(function(){
   cardbey.classList.add("up");
   cardsirou.classList.add("up");
 },500);

  setTimeout(function(){
   cardbey.classList.add("rot");
   cardsirou.classList.add("rot");
   docbey.classList.toggle("shake");
   docsirou.classList.toggle("shake");
   docbey.classList.toggle("hidden");
   docsirou.classList.toggle("hidden");
  

       },1200);
imagebey.classList.toggle("flip");
imagesirou.classList.toggle("flip");
 setTimeout(function(){
     
      
      cardbey.classList.toggle('flip');
      cardsirou.classList.toggle("flip");
      imagebey.classList.toggle("flip");
      imagesirou.classList.toggle("flip");
 
		
      setTimeout(function(){
              imagebey.style.opacity="1";
	      imagesirou.style.opacity="1"
	      cardsirou.style.display="none";
              cardbey.style.display="none";
	      


            },300);
    

},3000);
//Pour retourner l'image et la remplacer par une autre
 

  

setTimeout(function() {

    	 
	 cardsirou.classList.toggle("flip");
	 cardsirou.style.display="block";
	 cardbey.classList.toggle("flip");
	 cardbey.style.display="block";
         docbey.classList.toggle("hidden");
         docsirou.classList.toggle("hidden");
         cardbey.classList.toggle("rot");
         cardsirou.classList.toggle("rot");
	 cardbey.classList.toggle("up");
	 cardsirou.classList.toggle("up");
	 imagebey.classList.add("up");
	 imagesirou.classList.add("up");
	 
         


         
         
	 button.classList.toggle("hidden");
        
      

}, 10000);//attendre 10s pour reinitialiser tous

});
