//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}	

//----------------------------------------------------------------
//JAVASCRIPT - DEMO 1
let allComments = [{name: "Ciara", comment: "Recommended, good one"},
				{name: "Grethel", comment: "I don't like this product"},
				{name: "Paul", comment: "Love it"},
				]; 
function loadComments() {
	for (var i=0; i < allComments.length; i++) {
	let name = allComments[i].name;
	let comment = allComments[i].comment;

	let node = document.createElement("P");
	let textnode = document.createTextNode(name + ": " + comment);
	node.appendChild(textnode);
	let parrent_node = document.getElementById("comment-list");
	parrent_node.appendChild(node);
	}
}

loadComments();

function addComment() {
	let enteredCommentName = document.getElementById("comment_name").value;
	let enteredCommentText = document.getElementById("comment_text").value;
	allComments.push({name: enteredCommentName, comment: enteredCommentText});
	alert("Thank you for your comment!");
	let node = document.createElement("P");
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	node.appendChild(textnode);
	let parrent_node = document.getElementById("comment-list");
	parrent_node.appendChild(node);
	document.getElementById("comment_name").value = "";
	document.getElementById("comment_text").value = "";
} 

//------------------------------------------------------------------------------------------------------
//JAVASCRIPT - DEMO 2
let topProds = [{id: 0, title: "HP Pavilion 15.6", specs: "Intel Core i5 8GB-RAM 256GB-SSD (15-EG0018TU)", image_url: "MEDIA/hp.png"},
{id: 1, title: "Acer Swift 3 14", specs: "Intel Core i5 8GB-RAM 512GB-SSD (SF314-511-53PF)", image_url: "MEDIA/acer.png"},
{id: 2, title: "Lenovo IdeaPad 3 15.6", specs: "Intel Pentium Silver 8GB-RAM 128GB-SSD (81WQ00B5AU) - Platinum Grey", image_url: "MEDIA/lenovo.png"},
{id: 3, title: "Asus 15.6", specs: "Intel Core i5 8GB-RAM 512GB-SSD - Grey (X515EA-BQ1185W)", image_url: "MEDIA/asus.png"},
{id: 4, title: "Microsoft Surface Laptop 4 15", specs: "AMD Ryzen7 8GB-RAM 256GB-SSD - Platinum", image_url: "MEDIA/ms.png"},
];
//MANUAL
let slideIndex = 0;
	function nextProd() {
		if (slideIndex < topProds.length - 1) {
		slideIndex++;
		} else {
		slideIndex = 0;
		}
		document.getElementById("manual-slide-title").innerHTML = topProds[slideIndex].title;
		document.getElementById("manual-slide-image").src = topProds[slideIndex].image_url;
	}
	function previousProd() {
		//DECREASE THE INDEX IF THE INDEX IS NOT 0
		if (slideIndex > 0) {
			slideIndex--;
		} else {
			slideIndex = topProds.length - 1;
		}
		//EXTRACT THE TITLE, IMAGE URL, AND DISPLAY ON HTML ELEMENTS
		//CHANGE TITLE
		document.getElementById("manual-slide-title").innerHTML = topProds[slideIndex].title;
		document.getElementById("manual-slide-image").src = topProds[slideIndex].image_url;
	}
//AUTO
let autoIndex = 0;
function autoSlideShow() {
	if (autoIndex < topProds.length - 1) {
		autoIndex++;
	} else {
		autoIndex = 0;
	}
	document.getElementById("auto-slide-title").innerHTML = topProds[autoIndex].title;
	document.getElementById("auto-slide-image").src = topProds[autoIndex].image_url;
	setTimeout(autoSlideShow, 2000);
}

autoSlideShow();

//-----------------------------------------------------------------
//JAVASCRIPT - DEMO 3
let currentVotes = {like: 20, dislike: 5};
document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;

let voteStatus = {like: false, dislike: false};

function like() {
	if (voteStatus.like == false) {
	document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
	document.getElementById("likeButton").style.backgroundColor = "green";
	voteStatus.like = true;

	if (voteStatus.dislike == true) {
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
		voteStatus.dislike = false;//
		document.getElementById("dislikeButton").style.backgroundColor = "white";
		} 
	} else {
		document.getElementById("likeNumber").innerHTML = currentVotes.like;
		document.getElementById("likeButton").style.backgroundColor = "white";
		voteStatus.like = false;
		}
}

function dislike() {
	if (voteStatus.dislike == false) {
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
		document.getElementById("dislikeButton").style.backgroundColor = "green";
		voteStatus.dislike = true;

	if (voteStatus.like == true) {
		document.getElementById("likeNumber").innerHTML = currentVotes.like;
		voteStatus.like = false;//
		document.getElementById("likeButton").style.backgroundColor = "white";
	}

	} else {
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
		document.getElementById("dislikeButton").style.backgroundColor = "white";
		voteStatus.dislike = false;
	}
} 

//------------------------------------------------------------------------
//JAVASCRIPT - DEMO 4
function loadMyProd() {
	let prodSelect = document.getElementById("my-prodList");
	for(var i=0; i < topProds.length; i++) {
	let node = document.createElement("option");
	node.value = topProds[i].id.toString();
	node.textContent = topProds[i].title.toString();
	prodSelect.appendChild(node);
	}

prodSelect.selectedIndex= "0"; 
}
loadMyProd();

function displayMyProd() {
	let selectedProdIndex = document.getElementById("my-prodList").value;
	document.getElementById("my-product-name").innerHTML = topProds[selectedProdIndex].title;
	document.getElementById("my-prodSpecs").innerHTML = topProds[selectedProdIndex].specs;
	document.getElementById("my-productImg").src = topProds[selectedProdIndex].image_url;
}

function AddItemToList() {
	let newItemTitle = document.getElementById("my-prod-name").value;
	let newItemSpecs = document.getElementById("my-prod-specs").value;
	let newItemUrl = document.getElementById("my-prod-image-url").value;
	let newId = topProds.length;

	if ((newItemTitle == "") || (newItemSpecs == "") || (newItemUrl == "")) {
		alert("ERROR. DATA IS INCOMPLETE!");
		} else {
		topProds.push({id: newId, title: newItemTitle, specs: newItemSpecs, image_url: newItemUrl});
		alert("NEW ITEM ADDED SUCCESSFULLY!"); 

		document.getElementById("my-prodList").options.length = 0;

		loadMyProd(); 

		document.getElementById("my-prod-title").value = "";
		document.getElementById("my-prod-specs").value = "";
		document.getElementById("my-prod-image-url").value = "";
		}
} 