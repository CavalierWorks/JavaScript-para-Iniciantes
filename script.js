
//gera um número aleatório de 0 a 10.
var num = Math.floor(Math.random() * 11);


function clique(){

	var inputUser = document.getElementById("numero").value;
	
	if(inputUser < num){
		document.getElementById("dica").innerHTML = "Mais para cima!";
	} else if (inputUser > num){
		document.getElementById("dica").innerHTML = "Mais para baixo!";
	} else {
		document.getElementById("dica").innerHTML = "PARABÉNS!! Você acertou, o número é " + num;
	}
}