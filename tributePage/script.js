$(document).ready(function(){
	$(".pt-br").addClass("hidden");
})

function changeLang(lang){
	if (lang === "pt-br"){
		$(".pt-br").removeClass("hidden");
		$(".en").addClass("hidden");
	} else if (lang ==="en"){
		$(".en").removeClass("hidden");
		$(".pt-br").addClass("hidden");
	}
}
