var search = location.search;
console.log(search);
var idd = search.split('=');
console.log(idd);
var id = idd[idd.length - 1]
console.log(id)
var url = "https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+id;
console.log(url);
var btnid = 0;

var add = document.getElementById('add-to-cart');

var http = new XMLHttpRequest();
http.open('GET',url,true);
http.send();
   http.onreadystatechange = function(){
   		if(this.readyState === 4){
   			if(this.status == 200){
   				console.log("Call was successful");
   				var products = JSON.parse(this.responseText);
   				console.log(products);
   				prodname.innerHTML = products.name;
   				prodbrand.innerHTML = products.brand;
   				prodprice.innerHTML = products.price;
   				proddesc.innerHTML = products.description;
   				mainimg.src = products.preview;
   				var photos = products.photos;
   				for (var i = 0; i < photos.length; i++) {
   					var imgsrc = photos[i];
   					createbutton(imgsrc);
   				}
				$(".previewimg").click(function() {
				    var fired_button = $(this).attr("src");
				    //alert(fired_button);
				    mainimg.src = fired_button;
				});	

				add.onclick = function(){
					var existing = localStorage.getItem('cart');
					existing = existing ? JSON.parse(existing) : [];
					existing.push(products);
					localStorage.setItem('cart', JSON.stringify(existing));
					alert("product is added to cart");

				}			
   			}
   			else{
   				console.log("Call Failed");
   			}
   		}

   }

var prodname = document.getElementById('Pname');
var prodbrand = document.getElementById('Pbrand');
var prodprice = document.getElementById('Pprice');
var proddesc = document.getElementById('Pdesc');
var prodview = document.getElementById('buttons');
var mainimg = document.getElementById('main');

function createbutton(imgsource){
var button = document.createElement('button');
button.className = 'preview';
button.id = ++btnid;
console.log(button)
var img = document.createElement('img');
img.className = 'previewimg';
img.src = imgsource;
button.appendChild(img);
prodview.appendChild(button);

}




