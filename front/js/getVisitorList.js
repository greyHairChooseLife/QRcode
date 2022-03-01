const visitorList = document.getElementsByClassName('visitorList');
const searchForm = document.getElementById('searchForm');
const customerIdInput = document.getElementById('customerIdInput');

for(var i=0; i<visitorList.length; i++){
	visitorList[i].addEventListener('click', (e)=>{
		customerIdInput.value = e.target.innerHTML;
		searchForm.submit();
	})
}
