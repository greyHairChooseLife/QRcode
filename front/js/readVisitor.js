const introBarcode = document.getElementById('introBarcode');
const itemList = document.getElementsByClassName('list');

for(var i=0; i<itemList.length; i++){
	itemList[i].addEventListener('click', (e)=>{
		e.target.style.opacity = '0.2';
		introBarcode.style.display = 'none';
		let barcodeKey = e.target.querySelector('input').value;
		JsBarcode("#barcode", barcodeKey, {
			format: "CODE128",
			lineColor: "black",
			width: 3,
			height: 80,
			fontSize: 15,
			margin: 15,
			marginBottom: 2,
		});
	})
}

