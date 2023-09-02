let accItem = document.getElementsByClassName('toggle-box');
let accHD = document.getElementsByClassName('departments-title');
let content = document.getElementsByClassName('menu__box');
let btn = document.getElementsByClassName('btn'); 
	
for (i = 0; i < accHD.length; i++) {
        accHD[i].addEventListener('click', toggleItem, false);}
    
function toggleItem() {
  let itemClass = this.parentNode.className;
	 			

  for (i = 0; i < accItem.length; i++) {
	accItem[i].className = 'toggle-box close';
	accHD[i].style.color="#3D455F";
  }

  if (itemClass == 'toggle-box close') {
	this.parentNode.className = 'toggle-box open';
	this.nextElementSibling.style.transform='rotate(45deg)';
	
	
	if(this.className == "departments-title departments-title_biolg"){
	   this.style.color="#668BD4";
	}
	if(this.className == "departments-title departments-title_geogr"){
	   this.style.color="#6CAFC9";
	}
	if(this.className == "departments-title departments-title_geolog"){
	   this.style.color="#6DC2AB";
	}
	if(this.className == "departments-title departments-title_idpo"){
	   this.style.color="#94B478";
	}
	if(this.className == "departments-title departments-title_art"){
	   this.style.color="#668BD4";
	}
	if(this.className == "departments-title departments-title_history"){
	   this.style.color="#6CAFC9";
	}
	if(this.className == "departments-title departments-title_phys"){
	   this.style.color="#6DC2AB";
	}
	if(this.className == "departments-title departments-title_sport"){
	   this.style.color="#94B478";
	}
	if(this.className == "departments-title departments-title_filol"){
	   this.style.color="#668BD4";
	}
	if(this.className == "departments-title departments-title_chem"){
	   this.style.color="#6CAFC9";
	}
	if(this.className == "departments-title departments-title_mex-mat"){
	   this.style.color="#6DC2AB";
	}
	if(this.className == "departments-title departments-title_sociol"){
	   this.style.color="#94B478";
	}
	if(this.className == "departments-title departments-title_lang"){
	   this.style.color="#668BD4";
	}
	if(this.className == "departments-title departments-title_FKNIT"){
	   this.style.color="#6CAFC9";
	}
	if(this.className == "departments-title departments-title_psych"){
	   this.style.color="#6DC2AB";
	}
	if(this.className == "departments-title departments-title_FPPSO"){
	   this.style.color="#94B478";
	}
	if(this.className == "departments-title departments-title_FFMMT"){
	   this.style.color="#668BD4";
	}
	if(this.className == "departments-title departments-title_philol"){
	   this.style.color="#6CAFC9";
	}
	if(this.className == "departments-title departments-title_econom"){
	   this.style.color="#6DC2AB";
	}
	if(this.className == "departments-title departments-title_legal"){
	   this.style.color="#94B478";
	}
	if(this.className == "departments-title departments-title_geolog-college"){
	   this.style.color="#668BD4";
	}
	if(this.className == "departments-title departments-title_yabl"){
	   this.style.color="#6CAFC9";
	}
	
	
	let corps=document.querySelector('.corps__number_ix');
	corps.classList.add('corps__number_ix_blue');
	corps.classList.toogle('corps__number_ix_blue');		
   }
   else {
	this.nextElementSibling.style.transform='rotate(0deg)';
	this.style.color="#3D455F";
	
	let corps=document.querySelector('.corps__number_ix');
		corps.classList.remove('corps__number_ix_blue');
	
}
		
		
	
					
}
	
	
