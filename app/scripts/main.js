var GetURLParameter = function(sParam){
	return decodeURI(
		(RegExp(sParam + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
	);
};

$('.welcome h3').text(GetURLParameter('name'));

