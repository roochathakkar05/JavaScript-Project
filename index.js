    $(document).ready(function(){
      $('.topimage').slick({
      	infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		dots: true,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		speed: 500,
  		fade: true,
  		cssEase: 'linear'

      });
    });

   //===============================================End slider===============================================//

  var httprequest = new XMLHttpRequest();
   httprequest.open('GET','https://5d76bf96515d1a0014085cf9.mockapi.io/product',true);
   httprequest.send();
   httprequest.onreadystatechange = function(){
   		if(this.readyState === 4){
   			if(this.status == 200){
   				console.log("Call was successful");
   				var products = JSON.parse(this.responseText);
   				for (var i = 0; i < products.length; i++) {
   					console.log(products[i]);
   					var cloth = products[i].isAccessory;
   					console.log(cloth);
   					if(cloth == false){
   						mainwrapper.appendChild(createcard(products[i]));
   					}
   					else{
   						mainwrapper2.appendChild(createcardAccessories (products[i]));
   					}
   				}
   			}
   			else{
   				console.log("Call Failed");
   			}
   		}

   }

    var mainwrapper = document.getElementById('main-wrapper');
    var mainwrapper2 = document.getElementById('main-wrapper2');

    function createcard(prod){
   	   var product = document.createElement('div');
	   product.className = 'product';
	   var image = document.createElement('img');
	   image.className = 'img';
	   image.src = prod.preview;
	   var description = document.createElement('div');
	   description.className = 'description';
	   var link = document.createElement('a');
	   link.className = 'link';
	   link.href = "details.html?id="+ prod.id;
	   var heading4 = document.createElement('h4');
	   var prodname = document.createTextNode(prod.name);
	  
	   var brand = document.createElement('p');
	   brand.className = 'brand';
	   var brandname = document.createTextNode(prod.brand);
	 
	   var price = document.createElement('p');
	   price.className = 'price';
	   var pricevalue = document.createTextNode('Rs. '+prod.price);


	   product.appendChild(image);
	   product.appendChild(description);
	   description.appendChild(link);
	   link.appendChild(heading4);
	   heading4.appendChild(prodname);
	   brand.appendChild(brandname);
	   description.appendChild(brand);
	   price.appendChild(pricevalue);
	   description.appendChild(price);

	   return product;


   }
   	function createcardAccessories(prod){
   	   var product = document.createElement('div');
	   product.className = 'product';
	   var image = document.createElement('img');
	   image.className = 'img';
	   image.src = prod.preview;
	   var description = document.createElement('div');
	   description.className = 'description';
	   var link = document.createElement('a');
	   link.className = 'link';
	   link.href = "details.html?id="+ prod.id;
	   var heading4 = document.createElement('h4');
	   var prodname = document.createTextNode(prod.name);
	  
	   var brand = document.createElement('p');
	   brand.className = 'brand';
	   var brandname = document.createTextNode(prod.brand);
	 
	   var price = document.createElement('p');
	   price.className = 'price';
	   var pricevalue = document.createTextNode('Rs. '+ prod.price);


	   product.appendChild(image);
	   product.appendChild(description);
	   description.appendChild(link);
	   link.appendChild(heading4);
	   heading4.appendChild(prodname);
	   brand.appendChild(brandname);
	   description.appendChild(brand);
	   price.appendChild(pricevalue);
	   description.appendChild(price);

	   return product;


   }
   	
   

