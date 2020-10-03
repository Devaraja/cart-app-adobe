// JavaScript Document
var data;
window.addEventListener('DOMContentLoaded', () => {
	data = {
		items: [
{
			name: "Samsung Series 4",
			image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
			price: {
				actual: 13999,
				display: 22500
},
			discount: 37
},
{
			name: "Samsung Super 6",
			image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
			price: {
				actual: 35999,
				display: 66900
},
			discount: 46
},
{
			name: "Samsung The Frame",
			image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
			price: {
				actual: 84999,
				display: 133900
},
			discount: 36
},
{
			name: "Thomson B9 Pro",
			image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
			price: {
				actual: 9999,
				display: 16999
},
			discount: 41
},
{
			name: "LG Ultra HD",
			image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
			price: {
				actual: 39990,
				display: 79990
},
			discount: 50
},
{
			name: "Vu Ready LED TV",
			image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
			price: {
				actual: 7999,
				display: 17e3
},
			discount: 52
},
{
			name: "Koryo Android TV",
			image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
			price: {
				actual: 55999,
				display: 199990
},
			discount: 71
},
{
			name: "Micromax LED Smart",
			image: "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
			price: {
				actual: 9999,
				display: 27990
},
			discount: 64
}
]
}

var i=0;
var card = ''
data.items.forEach(element => {
	//console.log(data.items[i].price.actual)
	//card +='<div class="card"><article><img src="'+data.items[i].image+'" class="card-image"><div class="card-footer"> <div class="footer-items">	<div>Item</div><div><span style="strikeprice">$'+data.items[i].price.display+'</span> $'+data.items[i].price.actual+'</div></div><div class="add-cart"><div id='+i+' class="button" onclick="myFunction(this.id)">Add cart</div></div></div></article></div>'
	card += '<div class="card">'+
	'<article>'+
		'<div class="card-header">'+
			'<img src="'+data.items[i].image+'" class="card-image">'+
		'<div class="card-offer">'+data.items[i].discount+'% off</div>'+
		'</div>'+
		'<div class="card-footer">'+ 
			'<div>'+data.items[i].name+'</div>'+                    
			'<div class="footer-items">'+
			   '<div class="footer-item"><span>$'+data.items[i].price.display+' </span> $'+data.items[i].price.actual+'</div>'+
			   '<div id='+i+' class="button" onclick="myFunction(this.id)">Add to cart</div> '+                       
		'</div>'+
		'</div>'+
	'</article>'+
'</div>'


	i++;
});

document.querySelector('.cards-container').innerHTML = card;
	
});

var rows = 0;
var cartItems=[];
var cartQty=[];
var cartamount = 0;
var discount = 0;
var carttotal =0;

function myFunction(clickedid){
	document.querySelector('.itemadded').innerHTML = data.items[clickedid].name+' added to cart';
	document.querySelector(".itemadded").style.backgroundColor  = "green";
	
  	if(rows==0){
		rows++;
		cartItems.push(clickedid)
		cartQty.push(1)
		addtoCart(clickedid)

	  }else{
		for(i=0; i<cartItems.length;i++){
			if(cartItems[i] === clickedid){
				console.log('already there')
				return;
			}
		}
		rows++;
		cartItems.push(clickedid)
		cartQty.push(1)
		addtoCart(clickedid)
	  }
}
  

function addtoCart(clickedid){
	var table = document.getElementById("cart-table");
	var row = table.insertRow(rows);
  	var cell1 = row.insertCell(0);
  	var cell2 = row.insertCell(1);
  	var cell3 = row.insertCell(2);
  	cell1.innerHTML = data.items[clickedid].name;
  	cell2.innerHTML = '<span id='+clickedid+' class="minus" onclick="minusFunc(this.id)">-</span><span id="qty">'+ 1 +'</span><span id='+clickedid+' class="plus" onclick="plusFunc(this.id)">+</span>';
	  cell3.innerHTML = '$'+data.items[clickedid].price.display;
	  cartTotalupdate(clickedid)
	  

}

function cartTotalupdate(clickedid){
	cartamount += data.items[clickedid].price.display;
	  discount += data.items[clickedid].price.display - data.items[clickedid].price.actual;
	  carttotal = cartamount-discount;
	  var totaltable = document.getElementById("total-table");
	  totaltable.rows[1].cells[0].innerHTML = 'Items ( '+ rows+' )';
	  totaltable.rows[1].cells[2].innerHTML = '$'+cartamount;
	  totaltable.rows[2].cells[2].innerHTML = '- $'+discount;
	  totaltable.rows[4].cells[2].innerHTML = ' $'+carttotal;
}

function minusFunc(minusid){
	var table = document.getElementById("cart-table");
	//table.rows[1].cells[1].innerHTML = 2;
	for(i=0; i<cartItems.length; i++){
		if(cartItems[i] === minusid){
			if(cartQty[i] != 0){
				cartQty[i] -= 1;
			table.rows[i+1].cells[2].innerHTML = '$'+(data.items[minusid].price.display * cartQty[i])
			 table.rows[i+1].cells[1].innerHTML = '<span id='+minusid+' class="minus" onclick="minusFunc(this.id)">-</span><span id="qty">'+ cartQty[i] +'</span><span id='+minusid+' class="plus" onclick="plusFunc(this.id)">+</span>';
			 var totaltable = document.getElementById("total-table");
			 cartamount -= data.items[minusid].price.display
			 discount -= data.items[minusid].price.display - data.items[minusid].price.actual;
			 carttotal = cartamount-discount;
	  totaltable.rows[1].cells[0].innerHTML = 'Items ( '+ rows+' )';
	  totaltable.rows[1].cells[2].innerHTML = '$'+cartamount;
	  totaltable.rows[2].cells[2].innerHTML = '- $'+discount;
	  totaltable.rows[4].cells[2].innerHTML = ' $'+carttotal;

			}
			
		}
	}
}



function plusFunc(plusid){
	var table = document.getElementById("cart-table");
	//table.rows[1].cells[1].innerHTML = 2;
	for(i=0; i<cartItems.length; i++){
		if(cartItems[i] === plusid){
			cartQty[i] += 1;
			table.rows[i+1].cells[2].innerHTML = '$'+(data.items[plusid].price.display * cartQty[i])
			 table.rows[i+1].cells[1].innerHTML = '<span id='+plusid+' class="minus" onclick="minusFunc(this.id)">-</span><span id="qty">'+ cartQty[i] +'</span><span id='+plusid+' class="plus" onclick="plusFunc(this.id)">+</span>';
			 cartamount += data.items[plusid].price.display
			 //cartTotalupdate(plusid)
			 var totaltable = document.getElementById("total-table");
			 discount += data.items[plusid].price.display - data.items[plusid].price.actual;
			 carttotal = cartamount-discount;
	  totaltable.rows[1].cells[0].innerHTML = 'Items ( '+ rows+' )';
	  totaltable.rows[1].cells[2].innerHTML = '$'+cartamount;
	  totaltable.rows[2].cells[2].innerHTML = '- $'+discount;
	  totaltable.rows[4].cells[2].innerHTML = ' $'+carttotal;
		}
	}
}