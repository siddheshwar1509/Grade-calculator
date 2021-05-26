function getmarks(){
	
	var physics=Number(document.getElementById("physics").value);
    var chemistry=Number(document.getElementById("chemistry").value);
    var maths=Number(document.getElementById("maths").value);
	var english=Number(document.getElementById("english").value);
	var totalmarks = 400;
	var marksobtained = physics+chemistry+maths+english;
	var percentage = (marksobtained/totalmarks)*100;
	console.log(percentage + "%");
	document.getElementById("percentage").innerHTML = percentage + "%"

    if(percentage >= 90){
		grade = "O";
	}else if(percentage < 90 && percentage >= 80){
		grade = "A";
	}else if(percentage < 80 && percentage >= 70){
		grade = "B";
	}else if (percentage <70 && percentage >= 60 ){
		grade = "C";
	}else if(percentage<60 && percentage>= 50){
		grade = "D"
	}else if(percentage<50 && percentage>=40){
		grade = "E"
	}else if(percentage<40 && percentage>=35){
		grade = "f"
	}
	document.getElementById("grade").innerHTML = grade;
	
	if(percentage<35){
		document.getElementById("pass").innerHTML="Sorry!You Have Failed";
	}else{
		document.getElementById("pass").innerHTML="Congratulations!You have Passed!";
	}
}
