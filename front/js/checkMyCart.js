const columns = document.getElementsByClassName('columns');
const barcodeValue = document.getElementsByClassName('barcodeValue');

for(var i=0; i<columns.length; i++){
	(function(m){
		columns[m].addEventListener('click', (e)=>{
			//alert(barcodeValue[m].value);
		});
	})(i)
}

const defaultColumn = document.getElementsByClassName('defaultColumn');
const updatingColumn = document.getElementsByClassName('updatingColumn');
const del = document.getElementsByClassName('del');
const up = document.getElementsByClassName('up');
const down = document.getElementsByClassName('down');
const apply = document.getElementsByClassName('apply');
const updatingForm = document.getElementsByClassName('updatingForm');
const quantity = document.getElementsByClassName('quantity');

for(var i=0; i<defaultColumn.length; i++){
	(function(m){
		defaultColumn[m].addEventListener('click', ()=>{
			defaultColumn[m].style.display = 'none';
			updatingColumn[m].style.display = 'block';
		});
		apply[m].addEventListener('click', ()=>{
			defaultColumn[m].style.display = 'block';
			updatingColumn[m].style.display = 'none';
		});
		del[m].addEventListener('click', ()=>{
			alert('del');
		});
		up[m].addEventListener('click', ()=>{
			updatingForm[m].quantity.value = Number(updatingForm[m].quantity.value) + 1;
			quantity[m].innerText = updatingForm[m].quantity.value;
		});
		down[m].addEventListener('click', ()=>{
			updatingForm[m].quantity.value = Number(updatingForm[m].quantity.value) - 1;
			quantity[m].innerText = updatingForm[m].quantity.value;
		});
		apply[m].addEventListener('click', ()=>{
			updatingForm[m].action = `http://localhost:5000/customer/updateCart`;
			updatingForm[m].submit();
		});
	})(i)
}
