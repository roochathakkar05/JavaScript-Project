var left = document.getElementById('left');
var total = document.getElementById('total');
var ta = 0;
var a = [];

var storedval = JSON.parse(localStorage.getItem('cart'));
console.log(storedval)
for (var i = 0; i < storedval.length; i++) {
	console.log(storedval[i]);
	var x = storedval[i];
	ta = ta + x.price;
	var y = x.id
	a.push(y);
	var map = a.reduce(function(obj, b) {
	  obj[b] = ++obj[b] || 1;
	  return obj;
	}, {});
	var quantity = map[y];
	console.log(quantity)
	if(quantity == 1){
		left.appendChild(createcarditem(storedval[i]))
	}
	else{
		var setamt = document.getElementById(y);
		console.log(setamt)
		setamt.innerHTML = 'x'+quantity;
	}
}
total.innerHTML = ta

var order = document.getElementById('place');
order.onclick = function(){
	localStorage.clear();
}



function createcarditem(obj) {
	var card = document.createElement('div');
	card.className = 'card';
	
	var imagecard = document.createElement('div');
	imagecard.className = 'image';
	var image = document.createElement('img');
	image.className = 'mini-image';
	image.src = obj.preview;
	var caption = document.createElement('div');
	caption.className = 'caption';
	var span1 = document.createElement('span');
	var name = document.createTextNode(obj.name);
	var span2 = document.createElement('span');
	span2.id = obj.id;
	var val = document.createTextNode("x1");
	var span3 = document.createElement('span');
	var amount = document.createTextNode('Amount: Rs.' + obj.price);
	var breaktag = document.createElement('br');
	var breaktag1 = document.createElement('br');

	span3.appendChild(amount)
	span2.appendChild(val)
	span1.appendChild(name)

	caption.appendChild(span1)
	caption.appendChild(breaktag1)
	caption.appendChild(span2)
	caption.appendChild(breaktag)
	caption.appendChild(span3)

	imagecard.appendChild(image)
	card.appendChild(imagecard)
	card.appendChild(caption)
	//console.log(card)

	return card;

}

