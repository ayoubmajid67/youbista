 

function setUpUi(){
	let  currentPageName=window.location.pathname.split('/').pop().toLowerCase();
	if (localStorage.getItem("userToken") && localStorage.getItem("user")) {
		if(currentPageName=='index.html')
		goToLoginPage();
      else 
	  goToLoginDetailsPage(); 
		
	}
	else {
		innerLogoutButtons();
		removeUserInfoFromLocalStorage();
	
	   if (currentPageName=='index.html')
		removeAddPostContent();
	}
}
window.onload =setUpUi;


