var HighriseDealParse = function(xmlString) {
	parser = new DOMParser();
  	xmlDoc = parser.parseFromString(xmlString,"text/xml");
  	

  	for (var i = 0; i < xmlDoc.length; i++) {
  		var title = xmlDoc[i].getElementsByTagName("name")[0];
  		var content = "";
  		content += "Price: " + xmlDoc[i].getElementsByTagName("price")[0] + " " + xmlDoc[i].getElementsByTagName("currency")[0] + "\n";
  		if(xmlDoc[i].getElementsByTagName("price")[0] > 10000) {
  			content += '<img scr="http://media.giphy.com/media/w2JmkbOHFoq8U/giphy.gif">' + "\n";
  		} 
  		content += xmlDoc[i].getElementsByTagName("background")[0] + "\nStatus: ";
  		if(xmlDoc[i].getElementsByTagName("status")[0] == "pending") {
  			content += '<img scr="http://cdn-media-2.lifehack.org/wp-content/files/2014/01/care-about-others.gif">' + "\n"
  		}
  		else if(xmlDoc[i].getElementsByTagName("status")[0] == "won") {
  			content += '<img scr="http://bushwickdaily.wpengine.netdna-cdn.com/wp-content/uploads/2014/01/Stephen-colbert-celebration-gif.gif">' + "\n"
  		}
  		else (xmlDoc[i].getElementsByTagName("status")[0] == "lost") {
  			content += '<img scr="https://mlkshk-ada.kxcdn.com/r/FUN9">' + "\n"
  		}
  		content += "Seller: " + xmlDoc[i].getElementsByTagName("id")[0] + "\n" + 
  		"Created at: " + xmlDoc[i].getElementsByTagName("created")[0] + ", Updated at: " + xmlDoc[i].getElementsByTagName("updated-at")[0] + "\n";
  		postToStream(title, content);
  	};
}



