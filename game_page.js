player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML= player1_name+": ";
document.getElementById("player2_name").innerHTML= player2_name+": ";
player1_score= 0;
player2_score= 0;
document.getElementById("player1_score").innerHTML= player1_score;
document.getElementById("player2_score").innerHTML= player2_score;

document.getElementById("player_q").innerHTML= "Question Turn- " + player1_name;
document.getElementById("player_ans").innerHTML= "Answer Turn- " + player2_name;

function send(){
	number1= document.getElementById("no1").value;
	number2= document.getElementById("no2").value;
	actual_ans= parseInt(number1) * parseInt(number2);
    q_word= "<h4 id='word_display'>Q."+ number1+ "x"+ number2+ "</h4>";
    input_box= "<br> ans: <input type='text' id='input_check_box'>"
    check_btn= "<br> <br> <button class='btn btn-info' onclick='check()'>Checkkk</button>";
    row= q_word+input_box+check_btn;
    document.getElementById("output").innerHTML= row;
    document.getElementById("no1").value= "";
    document.getElementById("no2").value= "";
}
q_turn= "player1";
ans_turn= "player2";
function check()
{
	get_ans1 = document.getElementById("input_check_box").value;

	if(get_ans1 == actual_ans)	
	{
		if(ans_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(q_turn == "player1")
	{
		q_turn = "player2"
		document.getElementById("player_q").innerHTML = "Question Turn - " + player2_name ;
	}
	else 
	{
		q_turn = "player1"
		document.getElementById("player_q").innerHTML = "Question Turn - " + player1_name ;
	}

	if(ans_turn == "player1")
	{
		ans_turn = "player2"
		document.getElementById("player_ans").innerHTML = "Answer Turn - " + player2_name ;
	}
	else 
	{
		ans_turn = "player1"
		document.getElementById("player_ans").innerHTML = "Answer Turn - " + player1_name ;
	}

    document.getElementById("output").innerHTML = "";
}