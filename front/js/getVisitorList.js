const visitorList = document.getElementsByClassName('list');
const searchForm = document.getElementById('searchForm');
const textBox = document.getElementById('textBox');

for(var i=0; i<visitorList.length; i++){
	visitorList[i].addEventListener('click', (e)=>{
		textBox.value = e.target.innerHTML;
		searchForm.submit();
	})
}
