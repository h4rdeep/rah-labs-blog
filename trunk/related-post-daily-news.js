/*-----------------------------------------------
Theme Name: Daily Times
Designer : Hardeep Singh
Created: Feb, 2014
Theme URI: http://hackerschronicle.com
Author: Hardeep Singh
Author URI: http://hackerschronicle.com
Description: Daily Times Related News JavaScript 
----------------------------------------------- */


imgr = new Array();
imgr[0] = "http://1.bp.blogspot.com/-QwlK2Rb-nns/TvhNDtJ4RnI/AAAAAAAACak/TgSjOqStaNc/s1600/empty_thumb.gif";
showRandomImg = true;

aBold = true;

summaryPost2 = 150;
summaryPost = 100;
summaryPosti = 70; 
summaryPostQk = 500;
summaryTitle = 25; 

numposts = 9; 
numposts1 = 1; 
numposts2 = 2; 
numposts3 = 3; 
numposts4 = 4; 
numposts5 = 5; 
numposts6 = 6; 
numposts7 = 7; 
numposts8 = 8;
numposts9 = 9;
numposts10 = 15;
numposts11 = 12;

label1 = "breakingnews";
Title1 = "Regional";

label2 = "Feature";
Title2 = "LATEST NEWS";

label3 = "Gear";
Title3 = "Slider";

label4 = "Mine";
Title4 = "THE EVENTS";

label5 = "europe";
Title5 = "EURO LINE";

label6 = "TopDownload";
Title6 = "TopDownload";

label7 = "asia";
Title7 = "ASIA";

label8 = "human";
Title8 = "HUMAN";

label9 = "Favourite";
Title9 = "Favourite";

label10 = "Gear";
Title10 = "Gear";

label11 = "Browser";
Title11 = "Browser";

function removeHtmlTag(strx,chop){
	var s = strx.split("<");
	for(var i=0;i<s.length;i++){
		if(s[i].indexOf(">")!=-1){
			s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
		}
	}
	s =  s.join("");
	s = s.substring(0,chop-1);
	return s;
}

function showrecentposts(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    
  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	var trtd = '<li><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="70" height="40" class="alignleft" src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><a href="'+posturl+'">'+posttitle+'</a><div class="clear"></div></li>';
	document.write(trtd);


	j++;
}

}

function showrecentposts1a1(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    
  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	var trtd = '<li><a href="'+posturl+'">'+posttitle+'</a></li>';
	document.write(trtd);


	j++;
}

}

function showrecentposts1a2(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    
  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	var trtd = '<div class="featuredpost"><p><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="95" height="50" class="aligncenter" src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2></p></div>';
	document.write(trtd);


	j++;
}

}

function showrecentposts1a(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	if (i==0) {
	var trtd = '<div class="featuredpost"><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="320" height="210" class="aligncenter" src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><p>'+removeHtmlTag(postcontent,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span><span class="meta_permalink"><a href="'+posturl+'">more</a></span></p></div>';
	document.write(trtd);
	          }
	if ((i>0)&&(i<numposts)) {
	var trtd = '<ul class="morestories"><li><a href="#summary" class="item-more"></a><a class="zoom" href="'+img[i]+'"><span class="icon-photo"></span></a><a href="'+posturl+'">'+posttitle+'</a> <div class="lisummary"><p><span class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span></span>'+removeHtmlTag(postcontent,summaryPost2)+'...</p></div></li></ul>';
	document.write(trtd);
	          }				
			  j++;
	}
	document.write('');

}

function showrecentposts1(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	if (i==0) {
	var trtd = '<div class="featuredpost"><h2 class="posttitle bigposttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><p>'+removeHtmlTag(postcontent,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span><span class="meta_permalink"><a href="'+posturl+'">more</a></span></p></div>';
	document.write(trtd);
	          }
	if ((i>0)&&(i<numposts)) {
	var trtd = '<div class="featuredpost lastpost"><div class="imgkiri"><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="70" height="70" class=" " src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><p>'+removeHtmlTag(postcontent,summaryPost)+' [...]</p><span class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span></span><div class="borderdot"></div></div>';
	document.write(trtd);
	          }				
			  j++;
	}
	document.write('');

}

function showrecentposts2b(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();

  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	var trtd = '<a class="headline_title" href="'+posturl+'">'+posttitle+'</a> - <p>'+daystr+' ~ </p>';
	document.write(trtd);


	j++;
}

}

function showrecentposts2a1(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    
  	for (var i = 0; i < numposts; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	var trtd = '<ul class="morestories"><li><a href="#summary" class="item-more"></a><a class="zoom" href="'+img[i]+'"><span class="icon-photo"></span></a><a href="'+posturl+'">'+posttitle+'</a> <div class="lisummary"><p><span class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span></span>'+removeHtmlTag(postcontent,summaryPost2)+'...</p></div></li></ul>';
	document.write(trtd);


	j++;
}

}

function showrecentposts2(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
img = new Array();

for (var i = 0; i < numposts; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var pcm;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}

for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
pcm = entry.link[k].title.split(" ")[0];
break;
}
}

if ("content" in entry) {
var postcontent = entry.content.$t;}
else
if ("summary" in entry) {
var postcontent = entry.summary.$t;}
else var postcontent = "";

postdate = entry.published.$t;

if(j>imgr.length-1) j=0;
img[i] = imgr[j];

s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var day = postdate.split("-")[2].substring(0,2);
var m = postdate.split("-")[1];
var y = postdate.split("-")[0];

for(var u2=0;u2<month.length;u2++){
if(parseInt(m)==month[u2]) {
m = month2[u2] ; break;
}
}

var daystr = day+ ' ' + m + ' ' + y ;
if (i==0) {
var trtd = '<div class="featuredpost"><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><p>'+removeHtmlTag(postcontent,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span><span class="meta_permalink"><a href="'+posturl+'">more</a></span></p></div>';
document.write(trtd);
	          }
if ((i>0)&&(i<numposts)) {
	var trtd = '<div class="featuredpost "><div class="flow_hide"><div class="imgkiri"><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="70" height="45" class=" " src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2></div><p>'+removeHtmlTag(postcontent,summaryPosti)+' [...]</p><p class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span><span class="meta_permalink"><a href="'+posturl+'">more</a></span></p></div>';    
	document.write(trtd);
	          }				
			  j++;
	}
	document.write('');

}

function showrecentposts2a(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
img = new Array();

for (var i = 0; i < numposts6; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var pcm;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}

for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
pcm = entry.link[k].title.split(" ")[0];
break;
}
}

if ("content" in entry) {
var postcontent = entry.content.$t;}
else
if ("summary" in entry) {
var postcontent = entry.summary.$t;}
else var postcontent = "";

postdate = entry.published.$t;

if(j>imgr.length-1) j=0;
img[i] = imgr[j];

s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var day = postdate.split("-")[2].substring(0,2);
var m = postdate.split("-")[1];
var y = postdate.split("-")[0];

for(var u2=0;u2<month.length;u2++){
if(parseInt(m)==month[u2]) {
m = month2[u2] ; break;
}
}

var daystr = day+ ' ' + m + ' ' + y ;
if (i==0) {
var trtd = '<div class="featuredpost"><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="300" height="160" class="aligncenter" src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h2 class="posttitle bigposttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><p>'+removeHtmlTag(postcontent,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span><span class="meta_permalink"><a href="'+posturl+'">more</a></span></p></div>';
document.write(trtd);
	          }
if ((i>0)&&(i<numposts2)) {
	var trtd = '<div class="featuredpost"><div class="imgkiri"><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="90" height="90" class="alignnone" src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><p>'+removeHtmlTag(postcontent,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span><span class="meta_permalink"><a href="'+posturl+'">more</a></span></p></div>';    
	
        document.write(trtd);
	          }
	if ((i>1)&&(i<numposts)) {
	var trtd = '<div class="lastpost ulpost2"><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="140" height="100" class="aligncenter" src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h3 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h3></div>';
	document.write(trtd);
	          }				
			  j++;
	}
	document.write('');

}

function showrecentposts3(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
img = new Array();

for (var i = 0; i < numposts; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var pcm;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}

for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
pcm = entry.link[k].title.split(" ")[0];
break;
}
}

if ("content" in entry) {
var postcontent = entry.content.$t;}
else
if ("summary" in entry) {
var postcontent = entry.summary.$t;}
else var postcontent = "";

postdate = entry.published.$t;

if(j>imgr.length-1) j=0;
img[i] = imgr[j];

s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var day = postdate.split("-")[2].substring(0,2);
var m = postdate.split("-")[1];
var y = postdate.split("-")[0];

for(var u2=0;u2<month.length;u2++){
if(parseInt(m)==month[u2]) {
m = month2[u2] ; break;
}
}

var daystr = day+ ' ' + m + ' ' + y ;

var trtd = '<li class="car"><div class="slide_media"><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="144" height="100" class="alignnone " src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><span class="columz"> '+daystr+'</span><h2 class="posttitle"> <a href="'+posturl+'">'+posttitle+'</a></h2></li>';
document.write(trtd);       
				
			  j++;
	}
	 
}

function showrecentposts3a(json) {
	j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    
  	for (var i = 0; i < numposts ; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	if (i==0) {
	var trtd = '<div class="left border_right_20"><div class="imgkiri"><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="200" height="145" class=" " src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><p>'+removeHtmlTag(postcontent,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span><span class="meta_permalink"><a href="'+posturl+'">more</a></span></p></div>';
	document.write(trtd);
	          }
	if ((i>0)&&(i<numposts)) {
	var trtd = '<ul class="right morestories"><li><a href="#summary" class="item-more"></a><a class="zoom" href="'+img[i]+'"><span class="icon-photo"></span></a><a href="'+posturl+'">'+posttitle+'</a> <div class="lisummary"><p><span class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span></span>'+removeHtmlTag(postcontent,summaryPost2)+'...</p></div></li></ul>';
	document.write(trtd);
	          }				
			  j++;
	}
	document.write('');

}

function showrecentposts4(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
img = new Array();

for (var i = 0; i < numposts4; i++) {
var entry = json.feed.entry[i];
var posttitle = entry.title.$t;
var pcm;
var posturl;
if (i == json.feed.entry.length) break;
for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'alternate') {
posturl = entry.link[k].href;
break;
}
}

for (var k = 0; k < entry.link.length; k++) {
if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
pcm = entry.link[k].title.split(" ")[0];
break;
}
}

if ("content" in entry) {
var postcontent = entry.content.$t;}
else
if ("summary" in entry) {
var postcontent = entry.summary.$t;}
else var postcontent = "";

postdate = entry.published.$t;

if(j>imgr.length-1) j=0;
img[i] = imgr[j];

s = postcontent ; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


var month = [1,2,3,4,5,6,7,8,9,10,11,12];
var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var day = postdate.split("-")[2].substring(0,2);
var m = postdate.split("-")[1];
var y = postdate.split("-")[0];

for(var u2=0;u2<month.length;u2++){
if(parseInt(m)==month[u2]) {
m = month2[u2] ; break;
}
}

var daystr = day+ ' ' + m + ' ' + y ;
if (i==0) {
	var trtd = '<div class="featuredpost"><div class="fancybox-zoom"><a class="zoom" href="'+img[i]+'"><img width="225" height="123" class="aligncenter" src="'+img[i]+'"/><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2><p>'+removeHtmlTag(postcontent,summaryPost2)+' [...]</p><p class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span><span class="meta_permalink"><a href="'+posturl+'">more</a></span></p></div>';
	document.write(trtd);
	          }
	if ((i>0)&&(i<numposts)) {
	var trtd = '<ul class="morestories"><li><a href="#summary" class="item-more"></a><a class="zoom" href="'+img[i]+'"><span class="icon-photo"></span></a><a href="'+posturl+'">'+posttitle+'</a> <div class="lisummary"><p><span class="postmeta"><span class="meta_date">'+daystr+'</span><span class="meta_comment"><a href="'+posturl+'">'+pcm+' comment</a></span></span>'+removeHtmlTag(postcontent,summaryPost2)+'...</p></div></li></ul>';
	document.write(trtd);
	          }				
			  j++;
	}
	document.write('');

}

function showrecentposts7(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
     
  	for (var i = 0; i < numposts11; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	
	var trtd = '<div class="subleftpost"><h2 class="posttitle"><a href="'+posturl+'">'+posttitle+'</a></h2></h4><ul class="morestories"><li><a href="#summary" class="item-more"></a>'+daystr+' <div class="lisummary"><p>'+removeHtmlTag(postcontent,summaryPost2)+'...</p></div></li></ul></div>';					 
		document.write(trtd);       
				
			  j++;
	}
	
}

function showrecentposts7a(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    
  	for (var i = 0; i < numposts ; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	
	var trtd = '<li class="slider1Image"><a href="'+posturl+'"><img width="430" height="255" class="alignnone" src="'+img[i]+'"/></a><span class="sliderbottom"><b><a href="'+posturl+'">'+posttitle+'</a></b></span></li>';					 
		document.write(trtd);       
				
			  j++;
	}
	
}

function showrecentposts8(json) {
j = (showRandomImg) ? Math.floor((imgr.length+1)*Math.random()) : 0;
	img  = new Array();
    
  	for (var i = 0; i < numposts9; i++) {
    	var entry = json.feed.entry[i];
    	var posttitle = entry.title.$t;
		var pcm;
    	var posturl;
    	if (i == json.feed.entry.length) break;
    	for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'alternate') {
        		posturl = entry.link[k].href;
        		break;
      		}
    	}
		
		for (var k = 0; k < entry.link.length; k++) {
      		if (entry.link[k].rel == 'replies' && entry.link[k].type == 'text/html') {
        		pcm = entry.link[k].title.split(" ")[0];
        		break;
      		}
    	}
		
    	if ("content" in entry) {
      		var postcontent = entry.content.$t;}
    	else
    	if ("summary" in entry) {
      		var postcontent = entry.summary.$t;}
    	else var postcontent = "";
    	
    	postdate = entry.published.$t;
	
	if(j>imgr.length-1) j=0;
	img[i] = imgr[j];
	
	s = postcontent	; a = s.indexOf("<img"); b = s.indexOf("src=\"",a); c = s.indexOf("\"",b+5); d = s.substr(b+5,c-b-5);

	if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!="")) img[i] = d;

	//cmtext = (text != 'no') ? '<i><font color="'+acolor+'">('+pcm+' '+text+')</font></i>' : '';


	var month = [1,2,3,4,5,6,7,8,9,10,11,12];
	var month2 = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

	var day = postdate.split("-")[2].substring(0,2);
	var m = postdate.split("-")[1];
	var y = postdate.split("-")[0];

	for(var u2=0;u2<month.length;u2++){
		if(parseInt(m)==month[u2]) {
			m = month2[u2] ; break;
		}
	}

	var daystr = day+ ' ' + m + ' ' + y ;
	
	var trtd = '<li><a href="'+posturl+'"><img width="50" height="50" class="alignleft" src="'+img[i]+'"/></a><a href="'+posturl+'">'+posttitle+'</a><p>'+daystr+' / '+pcm+' comments</p><div class="clear"></div></li>';					 
		document.write(trtd);       
				
			  j++;
	}
	 
}

var classicMode = false ;
var summary = 75;
var indent = 3;

function stripHtmlTags(s,max){return s.replace(/<.*?>/ig, '').split(/\s+/).slice(0,max-1).join(' ')}

function getSummaryLikeWP(id) {
return document.getElementById(id).innerHTML.split(/<!--\s*more\s*-->/)[0];
}

function getSummaryImproved(post,max){
var re = /<.*?>/gi
var re2 = /<br.*?>/gi
var re3 = /(<\/{1}p>)|(<\/{1}div>)/gi
var re4 = /(<style.*?\/{1}style>)|(<script.*?\/{1}script>)|(<table.*?\/{1}table>)|(<form.*?\/{1}form>)|(<code.*?\/{1}code>)|(<pre.*?\/{1}pre>)/gi

post = post.replace(re4,'')
post = post.replace(re3,'<br /> ').split(re2)

for(var i=0; i<post.length; i++){
post[i] = post[i].replace(re,'');
}
var post2 = new Array();
for(var i in post) {
//if(post[i]!='' && post[i]!=' ' && post[i] != '\n') post2.push(post[i]);
if(/[a-zA-Z0-9]/.test(post[i])) post2.push(post[i]) ;

}


var s = "";
var indentBlank = "";
for(var i=0;i<indent;i++){
indentBlank += " ";
}
if(post2.join('<br/>').split(' ').length < max-1 ){
s = post2.join(indentBlank +' <br/>');
} else {
var i = 0;
while(s.split(' ').length < max){
s += indentBlank + ' ' + post2[i]+'<br/>';
i++;
}
}
return s;
}


function createSummaryAndThumb(pID,title,url,date,comment){
var posturl= url;
var title=title;
var date =date;
var comment = comment;
var div = document.getElementById(pID);
var content = div.innerHTML;
if (/<!--\s*more\s*-->/.test(content)) {
div.innerHTML = getSummaryLikeWP(pID);
div.style.display = "block";
}
else {

var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = summary;
if(img.length>=1) {
imgtag = '<div class="imgkiri"><div class="fancybox-zoom"><a class="zoom" href="'+img[0].src+'"><img width="160" height="120" class=" " src="'+img[0].src+'"><div class="zoom-black"></div><div class="zoom-overlay"></div></a></div></div>';
}
var summary1 = imgtag+'<p>'+stripHtmlTags(content,summary)+' [...] </p>';

div.innerHTML = summary1;
div.style.display = "block";
}
}
// Recent Comments Settings
    var
	numComments 	= 4,
	showAvatar 	= true,
	avatarSize 	= 40,
	roundAvatar	= true,
	characters 	= 60,
	showMorelink	= true,
	moreLinktext	= " more",
	defaultAvatar 	= " ",
	hideCredits	= true;
	
function viewPic(img)
{ 	
    picfile = new Image(); 
    picfile.src =(img); 
    fileCheck(img); 
}

function fileCheck(img)
{ 	
    if( (picfile.width!=0) && (picfile.height!=0) )
    { 
        makeWindow(img); 
    }
    else 
    {
        funzione="fileCheck('"+img+"')"; 
        intervallo=setTimeout(funzione,50); 
    }
}

function makeWindow(img)
{ 	
    ht = picfile.height + 20;
    wd = picfile.width + 20; 

    var args= "height=" + ht + ",innerHeight=" + ht;
    args += ",width=" + wd + ",innerWidth=" + wd;
    if (window.screen) 
    { 
        var avht = screen.availHeight; 
        var avwd = screen.availWidth;
        var xcen = (avwd - wd) / 0; 
        var ycen = (avht - ht) / 4;
        args += ",left=" + xcen + ",screenX=" + xcen;
        args += ",top=" + ycen + ",screenY=" + ycen + ",resizable=yes"; 	
    }
    return window.open(img, '', args); 
} 
function viewPic(img)
{ 	
    picfile = new Image(); 
    picfile.src =(img); 
    fileCheck(img); 
}

function fileCheck(img)
{ 	
    if( (picfile.width!=0) && (picfile.height!=0) )
    { 
        makeWindow(img); 
    }
    else 
    {
        funzione="fileCheck('"+img+"')"; 
        intervallo=setTimeout(funzione,50); 
    }
}

function makeWindow(img)
{ 	
    ht = picfile.height + 20;
    wd = picfile.width + 20; 

    var args= "height=" + ht + ",innerHeight=" + ht;
    args += ",width=" + wd + ",innerWidth=" + wd;
    if (window.screen) 
    { 
        var avht = screen.availHeight; 
        var avwd = screen.availWidth;
        var xcen = (avwd - wd) / 0; 
        var ycen = (avht - ht) / 4;
        args += ",left=" + xcen + ",screenX=" + xcen;
        args += ",top=" + ycen + ",screenY=" + ycen + ",resizable=yes"; 	
    }
    return window.open(img, '', args); 
} 
function viewPic(img)
{ 	
    picfile = new Image(); 
    picfile.src =(img); 
    fileCheck(img); 
}

function fileCheck(img)
{ 	
    if( (picfile.width!=0) && (picfile.height!=0) )
    { 
        makeWindow(img); 
    }
    else 
    {
        funzione="fileCheck('"+img+"')"; 
        intervallo=setTimeout(funzione,50); 
    }
}

function makeWindow(img)
{ 	
    ht = picfile.height + 20;
    wd = picfile.width + 20; 

    var args= "height=" + ht + ",innerHeight=" + ht;
    args += ",width=" + wd + ",innerWidth=" + wd;
    if (window.screen) 
    { 
        var avht = screen.availHeight; 
        var avwd = screen.availWidth;
        var xcen = (avwd - wd) / 0; 
        var ycen = (avht - ht) / 4;
        args += ",left=" + xcen + ",screenX=" + xcen;
        args += ",top=" + ycen + ",screenY=" + ycen + ",resizable=yes"; 	
    }
    return window.open(img, '', args); 
} 
