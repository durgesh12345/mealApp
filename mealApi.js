const searchwrapper = document.querySelector(".search-input");
const inputBox = searchwrapper.querySelector("input")
const suggBox = searchwrapper.querySelector(".autocom-box");

fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then((product) =>{
return product.json();
}).then((promptList)=>{
	console.log(promptList);
	localStorage.setItem("arr1","json.stringify(promptList)");
    let data123="";
	
	let emptyArray1 = promptList.categories.filter((d)=>{
    // console.log(promptList);
	return	d.strCategory === "Chicken";
	
	})
	console.log(emptyArray1)
	promptList.categories.map((value)=>{
		let prop = value.idCategory;
		
		data123 +=` <div class="card" id="Ad">
		<img class="heart" src="https://cdn-icons-png.flaticon.com/128/1216/1216649.png" alt="">
        <img class="images" src="${value.strCategoryThumb}" alt="">
        <h1 class="title">${value.strCategory}</h1>
		<p></p>
        <p class="categery"></p>
        <p class="price">${value.idCategory}</p>
		
		
		<span class="btncart"><a href="Adcart.html"> <button  class="btn btn-outline-success my-2 my-sm-0" type="submit">Add To Card</button></a> 
		 <button onclick="buy()"  class="btn btn-outline-success my-2 my-sm-0" type="submit">Buy 99 ₹</button>
	
		
		</span>
		
		
      
     </div>`;
	// console.log(data123);
	document.getElementById('card').innerHTML = data123;
	
	
	})

	//Search bar
	
	
}).catch((err)=>{
	
})
 
function buy(){
	alert('Your order placed')
}

var addIteamId = 0;
function addToCart(item){
	//alert('Are you sure to Add this product in your card')
	addIteamId += 1;
	var selectItem = document.createElement('div');
	selectItem.classList.add('cartImg');
	selectItem.setAttribute('id',addIteamId);
	var img = document.createElement('img');
	img.setAttribute('src',item.children[0].currentSrc);
	var title13 = document.createElement('div');
	title13.innerText = item.children[1].innerText;
	var lable = document.createElement('div');
	lable.innerText = item.children[2].children[0].innerText;
	 
	var select = document.createElement('span');
	select.innerText = item.children[2].children[1].value;

  lable.append(select);
  var delbtn = document.createElement('button');
  delbtn.innerText='Delete';
  delbtn.setAttribute('onclick','del('+addIteamId+')')

	var cartItems = document.getElementById('title1');
	selectItem.append(img);
//	selectItem.append(title1);
	selectItem.append(lable);

	cartItems.append(selectItem);
	
	
	
	
}
 function del(it){
	document.getElementById(it).remove();
 }




let data1234;
inputBox.onkeyup =(e)=>{
	let userdata= e.target.value;
	let emptyArray = [];
	
	if(userdata){
		
		emptyArray = seggetion.filter((data1234)=>{
		return data1234.toLocaleLowerCase().startsWith(userdata.toLocaleLowerCase())
			
		});
		emptyArray= emptyArray.map((data1234)=>{
				return data1234 = `<li>`+ data1234 +`  </li>`
			});
			//console.log(emptyArray);
		 searchwrapper.classList.add("active");

		 show(emptyArray)
	 // Adding onclick
	
	}else {
	searchwrapper.classList.remove("active")
	}
	
	}


function show(list){
	let listData;
	if(!list.length){
	 userdata = inputBox.value;
	 listData = `<li>  No Product  </li>`;
	}else{
		listData = list.join('');
	}
	suggBox.innerHTML = listData;

}

// product list
fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then((product) =>{
return product.json();
}).then((promptList)=>{
	//console.log(promptList);
    let data1235="";
	promptList.categories.map((value)=>{
		let prop = value.idCategory;
		// console.log(prop)
		data1235 +=` <div class="card12">
		
		<div class="listi">
		<div>
		<img class="images1" src="${value.strCategoryThumb}" alt="">
		<h6 class="title">${value.strCategory}</h6> <br
		
	   
		</div>
		
		
		</div>      
		<h3 class="title1">${value.strCategoryDescription}</h3>
		
			
     </div>`;
	 //console.log(data123);
	document.getElementById('card12').innerHTML = data1235;
	})
}).catch((err)=>{
	
})


// let cartIcon =document.getElementById("cart-icon");
// let card = document.getElementById("cart");
// cartIcon.onclick =()=>{
// card.classList.add("active");
// };


//  let closeCart =document.getElementById("close-cart");
//  closeCart.onclick=()=>{
// 	cart.classList.remove("active");
//  }

	// if(document.readyState=='loading'){
	// 	document.addEventListener("DOMContentLoaded",ready);

	// }else{
	// 	ready();
	// }
	
	// //making function
	// function ready(){
	// 	// remove
	// 	var removeIteam = document.getElementById('cart-remove')
	// 	console.log(removeIteam.length);
	// 	// for (var index = 0; index <removeIteam.length; index++) {
			
	// 	// 	var button1 = removeIteam[index];
	// 	removeIteam.addEventListener('click', removeIteamCart);
	// 		console.log(removeIteam);
	// 	}
	// // }

	// // remove cart from cart
	// function removeIteamCart(event){
	// 	var buttonClick = event.target
	// 	buttonClick.parentElement.remove();
	// }

	// var a = document.getElementById("Addd").onclick = "my()";

function my(id){
	console.log(id);
}