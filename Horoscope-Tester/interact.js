//Initialize document
var student_h = 0;
document.getElementById("continue").style.display = "none";
document.getElementById("true_page").style.display = "none";
document.getElementById("fail_page").style.display = "none";
document.getElementById("choice_page").style.display = "none";

//Event listeners to pick your sign
document.getElementById("Aries2").addEventListener("click",  function Aries_check2(){ student_check2(1, "Aries2");});
document.getElementById("Taurus2").addEventListener("click",  function Taurus_check2(){ student_check2(2, "Taurus2");});
document.getElementById("Gemini2").addEventListener("click",  function Gemini_check2(){ student_check2(3, "Gemini2");});
document.getElementById("Cancer2").addEventListener("click",  function Cancer_check2(){ student_check2(4, "Cancer2");});
document.getElementById("Leo2").addEventListener("click",  function Leo_check2(){ student_check2(5, "Leo2");});
document.getElementById("Virgo2").addEventListener("click",  function Virgo_check2(){ student_check2(6, "Virgo2");});
document.getElementById("Libra2").addEventListener("click",  function Libra_check2(){ student_check2(7, "Libra2");});
document.getElementById("Scorpio2").addEventListener("click",  function Scorpio_check2(){ student_check2(8, "Scorpio2");});
document.getElementById("Sagittarius2").addEventListener("click",  function Sagittarius_check2(){ student_check2(9, "Sagittarius2");});
document.getElementById("Capricorn2").addEventListener("click",  function Capricorn_check2(){ student_check2(10, "Capricorn2");});
document.getElementById("Aquarius2").addEventListener("click",  function Aquarius_check2(){ student_check2(11, "Aquarius2");});
document.getElementById("Pisces2").addEventListener("click",  function Pisces_check2(){ student_check2(12, "Pisces2");});

//Function to initialize choice page
function student_init(){
document.getElementById("continue").style.display = "none";
document.getElementById("initial_page").style.display = "none";
document.getElementById("choice_page").style.display = "block";
let paragraphs = document.getElementById('choice_page').getElementsByTagName("p");
  
  //loop to shuffle
	  for(var i=11; i>=0; i--){
	  var j = Math.floor(Math.random() * 11);
	  document.getElementById('choice_page').insertBefore(paragraphs[i], paragraphs[j]);
	  document.getElementById('choice_page').insertBefore(paragraphs[j+1], paragraphs[i]);
	  };
	
	//Event listeners to choose horoscope choice
	document.getElementById("Aries").addEventListener("click",  function Aries_check(){ student_check(1, "Aries");});
	document.getElementById("Taurus").addEventListener("click",  function Taurus_check(){ student_check(2, "Taurus");});
	document.getElementById("Gemini").addEventListener("click",  function Gemini_check(){ student_check(3, "Gemini");});
	document.getElementById("Cancer").addEventListener("click",  function Cancer_check(){ student_check(4, "Cancer");});
	document.getElementById("Leo").addEventListener("click",  function Leo_check(){ student_check(5, "Leo");});
	document.getElementById("Virgo").addEventListener("click",  function Virgo_check(){ student_check(6, "Virgo");});
	document.getElementById("Libra").addEventListener("click",  function Libra_check(){ student_check(7, "Libra");});
	document.getElementById("Scorpio").addEventListener("click",  function Scorpio_check(){ student_check(8, "Scorpio");});
	document.getElementById("Sagittarius").addEventListener("click",  function Sagittarius_check(){ student_check(9, "Sagittarius");});
	document.getElementById("Capricorn").addEventListener("click",  function Capricorn_check(){ student_check(10, "Capricorn");});
	document.getElementById("Aquarius").addEventListener("click",  function Aquarius_check(){ student_check(11, "Aquarius");});
	document.getElementById("Pisces").addEventListener("click",  function Pisces_check(){ student_check(12, "Pisces");});
	}
	
//Function to transition to result page	
function student_check(check, paragraph_id){
	document.getElementById(paragraph_id).style.color = "blue";
 	document.getElementById("choice_page").style.display = "none";
        if (check == student_h){
			document.getElementById("true_page").style.display = "block";
		}
		else{
			document.getElementById("fail_page").style.display = "block";
		}
    

}

//Function to transition to choice page
function student_check2(check, paragraph_id){
	document.getElementById(paragraph_id).style.color = "blue";
    student_h = check;
	document.getElementById("continue").style.display = "block";
	document.getElementById("cont").addEventListener("click",  function cont_check(){ student_init();});
}
