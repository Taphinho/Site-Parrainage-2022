let button = document.getElementById("submit-button");
let avatar = document.getElementById("avatar");
let popup = document.getElementById("popup");
avatar.value="";
let audio = document.getElementById("audio");
let input = document.querySelectorAll("input");


button.addEventListener('click',(event) => {
	event.preventDefault();
	
	if(avatar.value.length == 0 ){
		popup.classList.remove("hidden");
		
         }else{
		 var valide = true;
                 for (let i = 0; i < input.length; i++) {
   			 if ( input[i].value == "") {
      			valide = false;
      			break;
                    }
                }
		 if(valide){
			
			audio.play();
			setTimeout(function(){
                        document.getElementById("form").submit();		
			},3030);
		 }

                  
		

	 }
	 
	
	
	
});

