(function(){
	var audio = document.getElementById("bgMusic")
	var paused = document.getElementById("paused")
	var firsttwo = document.getElementById("firsttwo")
	var tanchu = document.getElementById("firstthird")
	var jixv = document.getElementById("jixv")
	var dianji = document.getElementById("dianji");
	var zuocetanchu = document.getElementById("zuocetanchu");
	var dianjituihui = document.getElementById("dianjituihui")
	
	audio.autoplay = true;
	paused.onclick = function(){
		audio.pause();
		tanchu.style.display = "block"
		jixv.style.display = "block"
		paused.style.display = "none"
	}
	
	tanchu.onclick = function(){
		audio.play();
		tanchu.style.display = "none"
		jixv.style.display = "none"
		paused.style.display = "block"
	}
	
	dianji.onclick = function(){
		zuocetanchu.style.display = "block";
		dianji.style.display = "none"
	}
	
	dianjituihui.onclick = function(){
		zuocetanchu.style.display = "none";
		dianji.style.display = "block"
	}
	/*//播放(继续播放)
	
	 
	//暂停
	audio.pause();
	 
	//停止
	audio.pause();
	audio.currentTime = 0;
	 
	//重新播放
	audio.currentTime = 0;
	audio.play();*/
}(window))
