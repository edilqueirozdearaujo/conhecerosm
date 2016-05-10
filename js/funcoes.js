function GetLinkMapillaryImg(ImgKey) {
	var Link = "http://www.mapillary.com/map/im/" + ImgKey + "/photo";
	return Link;
}

http://edilqueirozdearaujo.github.io/conhecerosm/map/

function GetLinkCOSM(Lt,Lg,Z) {
	var Link = "http://edilqueirozdearaujo.github.io/conhecerosm/map/#"+ Z +"/"+ Lt +"/"+ Lg;
	return Link;
}

//+ opção target=''
function HrefFromURLPlus(Link,Classe,Titulo,Conteudo,Alvo) {
	var TagAlvo = "";
	if ( Alvo ) {
		TagAlvo = " target='"+ Alvo +"' ";
	}
	FullLink = "<a href='" + Link + "' class='" + Classe + "' title='"+ Titulo + "' " + TagAlvo + " >"+ Conteudo +"</a>";
	return FullLink;
}