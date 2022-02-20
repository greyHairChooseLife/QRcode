const itemList = document.getElementsByClassName('list');

for(var i=0; i<itemList.length; i++){
	itemList[i].addEventListener('click', (e)=>{
		//e.target.inner
	})
}

JsBarcode("#barcode", "12341234", {
	format: "CODE128",
	lineColor: "black",
	width: 3,
	height: 80,
	fontSize: 15,
	margin: 15,
	marginBottom: 2,
});
