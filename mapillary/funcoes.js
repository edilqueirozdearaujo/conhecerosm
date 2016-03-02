function GetLinkMapillaryImg(ImgKey) {
	var Link = "http://www.mapillary.com/map/im/" + ImgKey + "/photo";
	return Link;
}

http://edilqueirozdearaujo.github.io/conhecerosm/map/

function GetLinkCOSM(Lt,Lg,Z) {
	var Link = "http://edilqueirozdearaujo.github.io/conhecerosm/map/#"+ Z +"/"+ Lt +"/"+ Lg;
	return Link;
}
