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

for(var i=0; i<defaultColumn.length; i++){
	(function(m){
		defaultColumn[m].addEventListener('click', (e)=>{
//			if(defaultColumn[m].style.display !== 'none'){
//				defaultColumn[m].style.display = 'none';
//				updatingColumn[m].style.display = 'block';
//			}else{
//				defaultColumn[m].style.display = 'block';
//				updatingColumn[m].style.display = 'none';
//			}
			defaultColumn[m].style.display = 'none';
			updatingColumn[m].style.display = 'block';
		});
		updatingColumn[m].addEventListener('click', (e)=>{
			defaultColumn[m].style.display = 'block';
			updatingColumn[m].style.display = 'none';
		});
	})(i)
}
