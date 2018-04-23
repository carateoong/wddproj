$(document).ready(function() {

let pics = {
	0 : '1',
	1 : '2',
	2 : '3',
	3 : '4',
	4 : '5',
	5 : '6',
	6 : '7',
	7 : '8',
	8 : '9',

}

	for (i = 0; i < 3; i++) {
		//jQuery Function Number 1
  		$("#pic" + pics[i]).append("<img id=\"pic" + pics[i] + "\" class=\"picture\" src=\"assets/img/" + pics[i] + ".jpg\">");
	}

	for (i = 3; i < 6; i++) {
  		$("#pic" + pics[i]).append("<img id=\"pic" + pics[i] + "\" class=\"picture\" src=\"assets/img/" + pics[i] + ".jpg\">");
  		if (i == 5) {
  			//jQuery Function Number 2
  			$("#pic6 img").addClass("explore");
  		}
	}

	for (i = 6; i < 9; i++) {
  		$("#pic" + pics[i]).append("<img id=\"pic" + pics[i] + "\" class=\"picture\" src=\"assets/img/" + pics[i] + ".jpg\">");
	}

	//jQuery Function Number 3
    $(".fancy-box").css("width", "22.5vw");
    $(".fancy-box").css("height", "3vw");

    //jQuery Function Number 4
	$(".picture").click(function() {
		//jQuery Function Number 5
		$("#overlay").show();
		
		//jQuery Function Number 6
    	img = this.getAttribute("src");


    	//jQuery Function Number 7
    	$(".pic-click > img").attr("src", img);
    	$(".pic-click").show();

	})

	$("#overlay").click(function() {

    	//jQuery Function Number 8
		$(this).hide();
		$(".pic-click").hide();
	})


});


