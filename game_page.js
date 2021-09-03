p1_name = localStorage.getItem("p1_name");
p2_name = localStorage.getItem("p2_name");

p1_score = 0;
p2_score = 0;

document.getElementById("p1_name").innerHTML = p1_name + " : ";
document.getElementById("p2_name").innerHTML = p2_name + " : ";

document.getElementById("p1_score").innerHTML = p1_score;
document.getElementById("p2_score").innerHTML = p2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " + p1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2_name;

function send() {
	n1 = document.getElementById("n1").value;
	n2 = document.getElementById("n2").value;
	actual_answer = parseInt(n1) * parseInt(n2);
	console.log(actual_answer);

	question_number = "<h4>" + n1 + " * " + n2 + "</h4>";
	input_box = "<br>Answer: <input type='number' id='input_check_box'>";
	check_button = "<br><br><button class='btn btn-info' onclick='check();'>Check</button>";
	row = question_number + input_box + check_button;
	document.getElementById("output").innerHTML = row;
	document.getElementById("n1").value = "";
	document.getElementById("n2").value = "";
}


question_turn = "p1";
answer_turn = "p2";

function check() {
	get_answer = document.getElementById("input_check_box").value;
	if (get_answer == actual_answer) {
		if (answer_turn == "p1") {
			p1_score = p1_score + 1;
			document.getElementById("p1_score").innerHTML = p1_score;
		} else {
			p2_score = p2_score + 1;
			document.getElementById("p2_score").innerHTML = p2_score;
		}
	}

	if (question_turn == "p1") {
		question_turn = "p2";
		document.getElementById("player_question").innerHTML = "Question Turn - " + p2_name;
	} else {
		question_turn = "p1";
		document.getElementById("player_question").innerHTML = "Question Turn - " + p1_name;
	}

	if (answer_turn == "p1") {
		answer_turn = "p2";
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2_name;
	} else {
		answer_turn = "p1";
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + p1_name;
	}

	document.getElementById("output").innerHTML = "";
}
