function loadRSS() {
	let proxy = 'https://cors-anywhere.herokuapp.com/';
	let url = "https://www.nasa.gov/content/nasa-rss-feeds";
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", proxy + url, true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {

		let rss = this.responseText;
		parseRSS(this); }
	};
}
function parseRSS(rss) {
	let items = rss.responseXML.getElementsByTagName("item");
	let rssContent = "";

	for (let i = 0; i< items.length; i++) {
		let nodes = items[i].children;
		let title, pubdate, description, link;

	for (let j = 0; j < nodes.length; j++) {
		if (nodes[j].tagName == "title") {
			4
			title = nodes[j].childNodes[0].nodeValue;
		} 	else if (nodes[j].tagName == "link") {
			link = nodes[j].childNodes[0].nodeValue;
			} 	else if (nodes[j].tagName == "description") {
			description = nodes[j].childNodes[0].nodeValue;
			} 	else if (nodes[j].tagName == "pubDate") {
			pubdate = nodes[j].childNodes[0].nodeValue;
			}
	}

	rssContent += `<div style="background-color: gray; margin: 2px;">
		<h3>${title}</h3>
		<p style="font-style: italic;">${pubdate}</p>
		<p>${description}</p>
		<p><a href="${link}">Read more</a></p>
 	</div>`;
	}	

	document.getElementById("nasaFeed").innerHTML = rssContent;
}

//--------------------------------------------------------------------

function loadRSS() {
	let proxy = 'https://cors-anywhere.herokuapp.com/';
	let url = "http://rss.cnn.com/rss/edition.rss";
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", proxy + url, true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {

		let rss = this.responseText;
		parseRSS(this); }
	};
}
function parseRSS(rss) {
	let items = rss.responseXML.getElementsByTagName("item");
	let rssContent = "";

	for (let i = 0; i< items.length; i++) {
		let nodes = items[i].children;
		let title, pubdate, description, link;

	for (let j = 0; j < nodes.length; j++) {
		if (nodes[j].tagName == "title") {
			4
			title = nodes[j].childNodes[0].nodeValue;
		} 	else if (nodes[j].tagName == "link") {
			link = nodes[j].childNodes[0].nodeValue;
			} 	else if (nodes[j].tagName == "description") {
			description = nodes[j].childNodes[0].nodeValue;
			} 	else if (nodes[j].tagName == "pubDate") {
			pubdate = nodes[j].childNodes[0].nodeValue;
			}
	}

	rssContent += `<div style="background-color: gray; margin: 2px;">
		<h3>${title}</h3>
		<p style="font-style: italic;">${pubdate}</p>
		<p>${description}</p>
		<p><a href="${link}">Read more</a></p>
 	</div>`;
	}	

	document.getElementById("cnnFeed").innerHTML = rssContent;
}

//--------------------------------------------------------------------

function loadRSS() {
	let proxy = 'https://cors-anywhere.herokuapp.com/';
	let url = "http://feeds.bbci.co.uk/news/rss.xml";
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", proxy + url, true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {

		let rss = this.responseText;
		parseRSS(this); }
	};
}
function parseRSS(rss) {
	let items = rss.responseXML.getElementsByTagName("item");
	let rssContent = "";

	for (let i = 0; i< items.length; i++) {
		let nodes = items[i].children;
		let title, pubdate, description, link;

	for (let j = 0; j < nodes.length; j++) {
		if (nodes[j].tagName == "title") {
			4
			title = nodes[j].childNodes[0].nodeValue;
		} 	else if (nodes[j].tagName == "link") {
			link = nodes[j].childNodes[0].nodeValue;
			} 	else if (nodes[j].tagName == "description") {
			description = nodes[j].childNodes[0].nodeValue;
			} 	else if (nodes[j].tagName == "pubDate") {
			pubdate = nodes[j].childNodes[0].nodeValue;
			}
	}

	rssContent += `<div style="background-color: gray; margin: 2px;">
		<h3>${title}</h3>
		<p style="font-style: italic;">${pubdate}</p>
		<p>${description}</p>
		<p><a href="${link}">Read more</a></p>
 	</div>`;
	}	

	document.getElementById("bbcFeed").innerHTML = rssContent;
}

//--------------------------------------------------------------------

function loadRSS() {
	let proxy = 'https://cors-anywhere.herokuapp.com/';
	let url = "https://www.smashingmagazine.com/feed/";
	let xhttp = new XMLHttpRequest();
	xhttp.open("GET", proxy + url, true);
	xhttp.send();

	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {

		let rss = this.responseText;
		parseRSS(this); }
	};
}
function parseRSS(rss) {
	let items = rss.responseXML.getElementsByTagName("item");
	let rssContent = "";

	for (let i = 0; i< items.length; i++) {
		let nodes = items[i].children;
		let title, pubdate, description, link;

	for (let j = 0; j < nodes.length; j++) {
		if (nodes[j].tagName == "title") {
			4
			title = nodes[j].childNodes[0].nodeValue;
		} 	else if (nodes[j].tagName == "link") {
			link = nodes[j].childNodes[0].nodeValue;
			} 	else if (nodes[j].tagName == "description") {
			description = nodes[j].childNodes[0].nodeValue;
			} 	else if (nodes[j].tagName == "pubDate") {
			pubdate = nodes[j].childNodes[0].nodeValue;
			}
	}

	rssContent += `<div style="background-color: gray; margin: 2px;">
		<h3>${title}</h3>
		<p style="font-style: italic;">${pubdate}</p>
		<p>${description}</p>
		<p><a href="${link}">Read more</a></p>
 	</div>`;
	}	

	document.getElementById("smmFeed").innerHTML = rssContent;
}


