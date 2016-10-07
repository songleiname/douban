(function(){
	var audio = document.getElementById("bgMusic")
	var paused = document.getElementById("paused")
	var firsttwo = document.getElementById("firsttwo")
	var tanchu = document.getElementById("firstthird")
	var jixv = document.getElementById("jixv")
	var dianji = document.getElementById("dianji");
	var zuocetanchu = document.getElementById("zuocetanchu");
	var dianjituihui = document.getElementById("dianjituihui")	
	
	var denglubeijing = document.getElementById("denglubeijing")
	var denglu = document.getElementById("denglu")
	var zhuce = document.getElementById("dengluer")
	var guanbione = document.getElementById("guanbione")
	var guanbizhuce = document.getElementById("guanbizhuce")	
	var denglujinru = document.getElementById("denglujinru");
	var mashangzhuce =document.getElementById("mashangzhuce")
	
	guanbione.onclick = function(){
		denglu.style.display = "none"
		denglubeijing.style.display = "none";
	}
	guanbizhuce.onclick = function (){
		zhuce.style.display = "none";
		denglubeijing.style.display = "none";
	}
	denglujinru.onclick = function(){
		denglu.style.display = "block";
		denglubeijing.style.display = "block"
	}
	mashangzhuce.onclick = function(){
		zhuce.style.display = "block";
		denglubeijing.style.display = "block"
	}
	
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
	
	setInterval(function(){
		var gdimg = document.getElementById("gundongimg")
		if (gdimg.src.match("gd1.jpg")) {
			gdimg.src = "img/gd2.jpg"
			beijingtwo.style.display = "block"
		} else if(gdimg.src.match("gd2.jpg")){
			gdimg.src = "img/gd3.jpg"
			beijingthrid.style.display = "block"
		}else if(gdimg.src.match("gd3.jpg")){
			gdimg.src = "img/gd4.jpg"
			beijingfour.style.display = "block"
		}else if(gdimg.src.match("gd4.jpg")){
			gdimg.src = "img/gd5.jpg"
			beijingfive.style.display = "block"
		}else if(gdimg.src.match("gd5.jpg")){
			gdimg.src = "img/gd6.jpg"
			beijingsix.style.display = "block"
		}else if(gdimg.src.match("gd6.jpg")){
			gdimg.src = "img/gd1.jpg"
			beijingtwo.style.display = "none"
			beijingthrid.style.display = "none"
			beijingfour.style.display = "none"
			beijingfive.style.display = "none"
			beijingsix.style.display = "none"
			beijing.style.display = "block"
		}
	},2000);
	
	var gdone =document.getElementById("gdone");
	gdone.onmousemove = function(){
		document.getElementById("gundongimg").src="img/gd1.jpg"
		beijing.style.display = "block"
		beijingtwo.style.display = "none"
		beijingthrid.style.display = "none"
		beijingfour.style.display = "none"
		beijingfive.style.display = "none"
		beijingsix.style.display = "none"
	}			
	var gdtwo =document.getElementById("gdtwo");
	gdtwo.onmousemove = function(){
		document.getElementById("gundongimg").src="img/gd2.jpg"
		beijing.style.display = "none"
		beijingtwo.style.display = "block"
		beijingthrid.style.display = "none"
		beijingfour.style.display = "none"
		beijingfive.style.display = "none"
		beijingsix.style.display = "none"
	}
	var gdthrid =document.getElementById("gdthrid");
	gdthrid.onmousemove = function(){
		document.getElementById("gundongimg").src="img/gd3.jpg"
		beijing.style.display = "none"
		beijingtwo.style.display = "none"
		beijingthrid.style.display = "block"
		beijingfour.style.display = "none"
		beijingfive.style.display = "none"
		beijingsix.style.display = "none"
	}
	var gdfour =document.getElementById("gdfour");
	gdfour.onmousemove = function(){
		document.getElementById("gundongimg").src="img/gd4.jpg"
		beijing.style.display = "none"
		beijingtwo.style.display = "none"
		beijingthrid.style.display = "none"
		beijingfour.style.display = "block"
		beijingfive.style.display = "none"
		beijingsix.style.display = "none"
	}
	var gdfive =document.getElementById("gdfive");
	gdfive.onmousemove = function(){
		document.getElementById("gundongimg").src="img/gd5.jpg"
		beijing.style.display = "none"
		beijingtwo.style.display = "none"
		beijingthrid.style.display = "none"
		beijingfour.style.display = "none"
		beijingfive.style.display = "block"
		beijingsix.style.display = "none"
	}
	var gdsix =document.getElementById("gdsix");
	gdsix.onmousemove = function(){
		document.getElementById("gundongimg").src="img/gd6.jpg"
		beijingsix.style.display = "block"
		beijingtwo.style.display = "none"
		beijingthrid.style.display = "none"
		beijingfour.style.display = "none"
		beijingfive.style.display = "none"
		beijing.style.display = "none"
	}
	
	var fenxiangzheshou = document.getElementById("fenxiangzheshou");
	var	fenxiangtwo = document.getElementById("fenxiangtwo")
	fenxiangzheshou.onmouseover = function(){		
		fenxiangzheshou.style.display = "none"
		fenxiangtwo.style.display = "block"
	}
	fenxiangzheshou.onmouseout = function(){
		fenxiangzheshou.style.display = "block"
		fenxiangtwo.style.display = "none"
	}
	
	var wodeone = document.getElementById("wodeone");
	wodeone.onclick = function(){
		wodeone.style.backgroundColor = "red"
	}
	
	audio.ontimeupdate = function(){
		var sj = audio.duration - audio.currentTime;
		var miao = (parseInt(sj))%60
		var fen = (parseInt(sj/60))%60
		if(miao<10){
			miao = '0' + miao;
		}		
		document.getElementById("shijian").innerHTML= "-" + fen +":"+ miao;	
		var percent = audio.currentTime / audio.duration;
		var waitiao = document.getElementById("waitiao");
    	var neitiao = document.getElementById("neitiao");
    	neitiao.style.width = percent * (waitiao.offsetWidth)  + "px";
	}
	var waitiao = document.getElementById("waitiao");
    var neitiao = document.getElementById("neitiao");
	/*waitiao.onclick = function(event){
		neitiao.style.width = event.offsetX+ "px";
		audio.currentTime = parseInt(event.offsetX)/225;
	}*/
	var waitiao = document.getElementById("waitiao");
    var neitiao = document.getElementById("neitiao");
	waitiao.onmousedown = function(){
		waitiao.onmousemove = function(){
			audio.currentTime = parseInt(event.offsetX)/225*audio.duration;
		}
		waitiao.onmouseup = function(){
			waitiao.onmousemove = null;
		}
	}
	
	audio.volumemin = 0.1;
	audio.volumemax = 1;
	var tiao = document.getElementById("tiao")
	var yinliangtiao = document.getElementById("yinliangtiao")
	tiao.onclick = function(event){
		yinliangtiao.style.width = event.offsetX+ "px";
		audio.volume = parseInt(event.offsetX)/100;
	}
	
	var tiao = document.getElementById("tiao");
	var shengyin = document.getElementById("shengyin");
	shengyin.onmousemove = function(){		
		if (shengyin.style.display == "none") {
			tiao.style.display = "block";
		}
		tiao.onmousemove = function(){
			shengyin.style.display = "block"
			tiao.style.display = "none"
		}
	}
	
/*	var imgimgimg = document.getElementById("huanbofang")
	var huanbo = document.getElementById("huanbo")
	imgimgimg.onmousemove = function (){
		if (imgimgimg.style.visibility == "hidden") {
			huanbo.style.visibility = "visible"
		} else{
			imgimgimg.style.visibility = "visible"
			huanbo.style.visibility = "hidden"
		}
	}*/
	//停止
	audio.pause();
	audio.currentTime = 0;
	 
	//重新播放
	/*audio.currentTime = 0;
	audio.play();*/
}(window))
