window.addEventListener("load", () => {
	for(var i=0; i<obj.length; i++){
		let target = obj[i].target;
		let item_code = obj[i].item_code;
		let barcode = obj[i].barcode;
		let qr_url = `http://54.180.86.49:5000/readItem/${target}/${item_code}`;
	
		new QRCode(document.getElementById(`qrcode_${i}`), {
			text: qr_url,
			width: 60,
			height: 60,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});

		JsBarcode(`#barcode_${i}`, barcode, {
			format: "CODE128",
			lineColor: "black",
			width: 2.5,
			height: 50,
			fontSize: 15,
			margin: 15,
			marginBottom: 2,
		});
	}
});
