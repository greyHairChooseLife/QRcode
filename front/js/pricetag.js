const quantityShow = document.getElementById("quantityShow");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");

const quantityValue = document.getElementById("quantityValue");

let quantity = 0;
quantityShow.innerText = quantity;
upBtn.addEventListener('click', () => {
	quantityShow.innerText = ++quantity;
	quantityValue.value = quantity;
})
downBtn.addEventListener('click', () => {
	if(quantity > 0){
		quantityShow.innerText = --quantity;
		quantityValue.value = quantity;
	}
})

const mobilePlace = document.getElementById("mobilePlace");
if(mobilePlace !== null){
	mobilePlace.addEventListener('keyup', ()=>{
		if(mobilePlace.value.length === 11)
			mobilePlace.blur();
	})
}

const cartArrow = document.getElementById('cartArrow');
window.addEventListener('scroll', ()=>{
	if(window.pageYOffset > 0){
		cartArrow.style.display = 'none';
	}else if(window.pageYOffset === 0){
		cartArrow.style.display = 'block';
	}
})
