//var img = null;
//var h3 = null;
//var p = null;
//
//function listItem (img_item, title_item, desc_item, div) {
//	this.img_item = img_item;
//	this.title_item = title_item;
//	this.desc_item = desc_item;
//	
//	this.createToAdd = function  () {
//		var item_div = document.createElement("div");
//		item_div.setAttribute("class","itemClass");
//		
//		//内层左div
//		var item_left_div = document.createElement("div");
//		item_div.appendChild(item_left_div);
//		
//		//左  div img  
//		img = document.createElement("img");
//		img.setAttribute("src",this.img_item);
//		item_left_div.appendChild(img);
//		
//		//内层右div
//		var item_right_div = document.createElement("div");
//		item_div.appendChild(item_right_div);
//		
//		//右   h3 
//		h3 = document.createElement("h3");
//		h3.innerText = title_item;
//		item_right_div.appendChild(h3);
//		
//		//右   p
//		p = document.createElement("p");
//		p.innerText = desc_item;
//		item_right_div.appendChild(p);
//		
//		//类  div
//		document.querySelector(".mainScreen").appendChild(item_div);
//	}
//}

var url = "http://www.marrymin.com/LOL/News?item=%E6%9C%80%E6%96%B0&pageIndex=";
var i = 1;
function buttonClick () {
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			var arr = JSON.parse(xhr.responseText);
			var img = document.querySelector("img");
			var h4 = document.querySelector("h4");
			var p = document.querySelector("p");
			for (var j = 0; j < arr.length; j++) {
				img.innerText = p.innerText + arr[j].img + "\n";
				h4.innerText = p.innerText + arr[j].title + "\n";
				p.innerText = p.innerText + arr[j].desc + "\n";
				
			}
		}
	}
	xhr.open("GET", url + i, true);
	xhr.send(null);
	i++;
	
//	var item = new listItem("img/墨羽.jpg","绝世美女白骨墨羽","墨羽美女，红妆仗剑，笑傲江湖");
//	var item = new listItem(img.innerText,h3.innerText,p.innerText);
	
	
//	item.createToAdd();
	
}