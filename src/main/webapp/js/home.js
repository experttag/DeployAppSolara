//function to validate email address
function validate(emailId) {
   var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
   var address = document.document.getElementById(emailId).value;
   if(reg.test(address) == false) {
      alert('Invalid Email Address');
	  document.document.getElementById(emailId).focus();
      return false;
   }
}


