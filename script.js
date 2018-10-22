/*----------------------------------------------------------------------------------------------------------------------*/

//on initialise la variable expanded qui est le nombre de possibilité renseigné par l'utilisateur pour la partie.
var expanded = parseInt(prompt("Sur combien de nombre voulez vous jouer?", "0"));
//on initialise la variable numberToFind qui génère le nombre à trouver aléatoirement.
var numberToFind = Math.floor(Math.random() * Math.floor(expanded));
//initialisation de la variable d'incrémentation.
var i = 0;
//initialisation de la variable match;
var match = false;
//boucle qui agis le nombre de fois que l'utilisateur à renseigné et tant que la valeur de retour de la fonction guess n'est pas true.
while (!match) {
	//valeur que l'utilisateur veux essayer.
	var userValue = parseInt(prompt("Quel est votre nombre?", "0"));
	//on assigne à match la valeur de retour de la fonction guess.
	match = guess(userValue, numberToFind);
	//on incrémente i.
	i++;
}
//on indique à l'utilisateur en combien d'essais il a trouvé le bon nombre.
console.log("Vous avez trouvé le bon nombre en "+i+" essais");

//en fonction du nombre d'essais effectués par l'utilisateur, on lui affiche un message.
if (i == 1)
	console.log("Top 1, wp");
else if(i < 6)
	console.log("Irma n'a qu'a bien se tenir !");
else if(i < 11)
	console.log("Not bad !");
else if(i < 16)
	console.log("Mouai");
else
	console.log("Bouuuuh");
//initialisation de la fonction guess qui compare le nombre essayé avec celui à trouver et renvois le résultat.
function guess(userValue, numberToFind) {
	//si la valeur testée par l'utilisateur est supérieur au nombre à trouver alors on indique à l'utilisateur que son nombre est trop grand.
	if (userValue > numberToFind)
	{
		console.log("Votre nombre est trop grand");
		//on retourne la valeur false qui est testée dans la boucle while.
		return false;
	}
	//sinon si la valeur testée par l'utilisateur est inférieur au nombre à trouver alors on indique à l'utilisateur que son nombre est trop petit.
	else if (userValue < numberToFind)
	{
		console.log("Votre nombre est trop petit");
		//on retourne la valeur false qui est testée dans la boucle while.
		return false;
	}
	//sinon la valeur testée par l'utilisateur est égale au nombre à trouver alors on indique à l'utilisateur qu'il a trouvé le bon nombre.
	else
	{
		console.log("Votre nombre est le bon !!!!!!");
		//on retourne la valeur true qui est testée dans la boucle while.
		return true;
	}
}