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

const title = document.getElementById('title');
const activeCart = document.getElementById('activeCart');
const deactiveCart = document.getElementById('deactiveCart');
activeCart.style.display = 'none';
const cartArrow = document.getElementById('cartArrow');
const cartImg = document.getElementById('cartImg');
window.addEventListener('scroll', ()=>{
	if(window.pageYOffset > 0){
		cartArrow.style.display = 'none';
		cartImg.style.display = 'none';
		activeCart.style.display = 'block';
		deactiveCart.style.display = 'none';
		title.style.marginTop = '21vh';
	}else if(window.pageYOffset === 0){
		cartArrow.style.display = 'block';
		cartImg.style.display = 'block';
		activeCart.style.display = 'none';
		deactiveCart.style.display = 'block';
		title.style.marginTop = '0vh';
	}
})

const checkQuantity = () => {		//수량이 0개일 때 form태그의 action 실행 중지
	if(quantity === 0){
		alert('1개 이상 선택하세요.');
		return false;
	}
	return true;
}
