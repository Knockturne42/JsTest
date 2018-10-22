/*----------------------------------------------------------------------------------------------------------------------*/
function jeu() {
	//on initialise la variable expanded qui est le nombre de possibilité renseigné par l'utilisateur pour la partie.
	var expanded = parseInt(prompt("Sur combien de nombre voulez vous jouer? (supérieur à 0)"));
	//on vérifie que l'info renseignée par l'utilisateur est bien un nombre. Tant que ce n'est pas le cas on invite l'utilisateur à de nouveau renseigner un nombre valide.
	while(!Number.isInteger(expanded))
		var expanded = parseInt(prompt("Veuillez bien choisir un nombre."));
	//on vérifie que le nombre renseigné par l'utilisateur est bien un nombre supérieur à 0. Tant que ce n'est pas le cas on invite l'utilisateur à de nouveau renseigner un nombre valide.
	while(expanded < 1)
		var expanded = parseInt(prompt("Veuillez bien choisir un nombre supérieur à 0."));
	//on initialise la variable numberTry avec le maximum d'essais possible.
	if (expanded > 0)
	{
		//si l'utilisateur choisi Y alors le nombre d'essais est choisi par ses soins, sinon un calcul par rapport au nombre de possibilités est effectué pour déterminer le nombre d'essais max.
		if (prompt("Voulez vous choisir votre nombre d'essais maximum, Y si oui ?").toUpperCase() == "Y")
			var numberTry = parseInt(prompt("Combien d'essais maximum voulez vous?"));
		else
		{
			//si le nombre de possibilité est inférieur ou égale à 100, alors l'utilisateur à le droit à 10% de ce chiffre en essais.
			if (expanded < 10)
				var numberTry = 1;
			else if (expanded <= 100)
				var numberTry = Math.floor(expanded * 0.1);
			else
				var numberTry = Math.floor(expanded / 100)*2+10;
		}
		//on indique à l'utilisateur le nombre d'essais maximum dont il dispose.
		console.log("Vous avez droit à "+numberTry+" essais pour trouver le bon nombre");
		//on initialise la variable numberToFind qui génère le nombre à trouver aléatoirement.
		var numberToFind = Math.floor(Math.random() * Math.floor(expanded))+1;
		//initialisation de la variable d'incrémentation.
		var i = 0;
		//initialisation de la variable match;
		var match = false;
		//boucle qui agis le nombre de fois que l'utilisateur à renseigné et tant que la valeur de retour de la fonction guess n'est pas true.
		for (i; i < numberTry && !match; i++) {
			//valeur que l'utilisateur veux essayer.
			var userValue = parseInt(prompt("Quel est votre nombre compris entre 0 et "+expanded+"?"));
			if (Number.isInteger(userValue) && userValue > 0 && userValue <= expanded)
			{
				//on assigne à match la valeur de retour de la fonction guess.
				match = guess(userValue, numberToFind);
			}
			else
			{
				console.log("Veuillez bien renseigner un nombre compris entre 0 et "+expanded+".");
				i--;
			}
		}
		//on indique à l'utilisateur en combien d'essais il a trouvé le bon nombre (si il l'a trouvé).
		if (match)
		{
			console.log("Vous avez trouvé le bon nombre en "+i+" essais sur "+expanded+" possibilités");
			//en fonction du nombre d'essais effectués par l'utilisateur, on lui affiche un message.
			if (i <= numberTry * 0.1)
				console.log("Top 1, wp");
			else if(i <= numberTry * 0.3)
				console.log("Irma n'a qu'a bien se tenir !");
			else if(i <= numberTry * 0.5)
				console.log("Not bad !");
			else if(i <= numberTry * 0.7)
				console.log("Mouai");
			else
				console.log("Bouuuuh");
		}
		//sinon on lui conseil de rejouer.
		else
			console.log("Vous êtes mauvais !\nEn "+i+" essais sur "+expanded+" possibilités vous n'êtes pas parvenu à déterminer le bon nombre qui était: "+numberToFind+".");
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
		console.log("Pour rejouer veuillez réactualiser la page (touche F5 du clavier).");
	}
}

jeu();