const quantityIndicator = document.getElementById("quantityIndicator");
const upBtn = document.getElementById("upBtn");
const power_upBtn = document.getElementById("power_upBtn");
const downBtn = document.getElementById("downBtn");
const power_downBtn = document.getElementById("power_downBtn");

const quantityValue = document.getElementById("quantityValue");

let quantity = 0;
quantityIndicator.innerText = quantity;
upBtn.addEventListener('click', () => {
	quantityIndicator.innerText = ++quantity;
	quantityValue.value = quantity;
})
power_upBtn.addEventListener('click', () => {
	quantity += 5;
	quantityIndicator.innerText = quantity;
	quantityValue.value = quantity;
})
downBtn.addEventListener('click', () => {
	if(quantity > 0){
		quantityIndicator.innerText = --quantity;
		quantityValue.value = quantity;
	}
})
power_downBtn.addEventListener('click', () => {
	if(quantity > 0){
		quantity -= 5;
		if(quantity < 0)
			quantity = 0;
		quantityIndicator.innerText = quantity ;
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

const mobilePlace_ = document.getElementById("mobilePlace_");
const controller = document.getElementById('controller');
controller.style.display = 'none';
mobilePlace_.style.display = 'none';
const guideSymbol = document.getElementById('guideSymbol');

window.addEventListener('scroll', ()=>{
	if(window.pageYOffset > 0){
		guideSymbol.style.display = 'none';
		controller.style.display = 'block';
		mobilePlace_.style.display = 'block';
	}else if(window.pageYOffset === 0){
		guideSymbol.style.display = 'block';
		controller.style.display = 'none';
		mobilePlace_.style.display = 'none';
	}
})

const mainForm = document.getElementById('mainForm');
const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', () => {
	if(mobilePlace !== null){
		if(mobilePlace.value.length !== 11){
		alert('11자리 전화번호를 써 주세요.');
		}
		else{
		mainForm.submit();
		}
	}else if(quantity < 1){
		alert('1개 이상 선택하세요.');
	}else{
		mainForm.submit();
	}
})
