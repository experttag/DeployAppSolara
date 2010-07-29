            function changeimage(imgName){

                document.getElementById("Image-Maps_5201007141517415").src=imgName;

            }
			
						

            function opendiv(divid){
                document.getElementById(divid).style.display="";
            }
			

            function togglediv(divid){

                if(document.getElementById(divid).style.display=="none"){
                    document.getElementById(divid).style.display="";
					//document.getElementById("scroll1").style.height = "400px";
				}
                else
                    document.getElementById(divid).style.display="none"
            }
			
			

		//method to hidle all page section and display the one given as parameter
		function showpage(theid){ 
			var thearray= new Array("homepage","servicepage", "privacypage","contactuspage","clientpage","aboutuspage","mailuspage"); 
	
			for(i=0; i<thearray.length; i++){ 				  
				document.getElementById(thearray[i]).style.display="none"; 
				}
			   
			   document.getElementById(theid).style.display="";  
		}
		
		
		function submitmailus(){
		
		if(validatemail()){
			document.mailusfrm.submit();
			alert("your mail sent successfully, \n our customer executive will contact you shortly"); 
		}
			
		}
		
		
		function validatemail(){
			var error="";
			errorcolor = "Yellow";
			normalcolor = "white";
			error=error+ isValidEmail("mailusfrm","mailus_mailid",errorcolor,normalcolor);		   
		    error=error+ isSpecialCharacters("mailusfrm","mailus_enquiry",errorcolor,normalcolor);	
			
			if((error!="")) {
			  alert(error);	  
			  return false;
		   }
		   
		   return true;
			
		}
		
		
		
		function submitForm(){
	
		if(validateForm()){
		document.contactfrm.submit();
		alert("your mail sent successfully, \n our customer executive will contact you shortly"); 
		}
	}
	
	function validateForm(){
	
			var error="";
			errorcolor = "Yellow";
			normalcolor = "white";
		   
		   error=error+ isValidUsername("contactfrm","customername",errorcolor,normalcolor);
		   error=error+ isValidUsername("contactfrm","companyname",errorcolor,normalcolor);
		   error=error+ isSpecialCharacters("contactfrm","companywebsite",errorcolor,normalcolor);		   
		   error=error+ isValidPhone("contactfrm","telephone",errorcolor,normalcolor);		   
		   error=error+ isValidEmail("contactfrm","email",errorcolor,normalcolor);		   
		   error=error+ isSpecialCharacters("contactfrm","services",errorcolor,normalcolor);		   
		   error=error+ isSpecialCharacters("contactfrm","enquiry",errorcolor,normalcolor);		   
		   //error= isValidPhone(form_id,email,errorcolor,normalcolor);
		   
		   if((error!="")) {
			  alert(error);	  
			  return false;
		   }
		   
		   return true;
	}
	
//function to trim spaces from string
function trim(s){
  return s.replace(/^\s+|\s+$/, '');
}
	
	
//function to check if email address is valid or not and return error
function isValidEmail(form_id,email,errorcolor,normalcolor) {
    var error="";
	var fld = document.forms[form_id].elements[email];
    var tfld = trim(fld.value);                        // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/ ;
    var illegalChars= /[\(\)\<\>\,\;\:\$\#\\\"\[\]]/ ;
   
    if (fld.value == "") {
        fld.style.background = errorcolor;
        error = "You didn't enter an email address.\n";
		fld.focus();  
    } else if (!emailFilter.test(tfld)) {              //test email for illegal characters
        fld.style.background = errorcolor;
        error = "Please enter a valid email address.\n";
		fld.focus();  
    } else if (fld.value.match(illegalChars)) {
        fld.style.background = errorcolor;
        error = "The email address contains illegal characters.\n";
		fld.focus();  
    } else {
        fld.style.background = normalcolor;
    }
    return error;
}
	
//function to check if username is valid or not and return error
function isValidUsername(form_id,username,errorcolor,normalcolor) {
    var error = "";
    var illegalChars = /\W/; // allow letters, numbers, and underscores
	var fld = document.forms[form_id].elements[username];
	  
    if (fld.value == "") {
        fld.style.background = errorcolor; 
        error = "You didn't enter a " + username + ".\n";
		fld.focus(); 
    } else if ((fld.value.length < 3) || (fld.value.length > 50)) {
        fld.style.background = errorcolor; 
        error = "The " + username + " is the wrong length. It must be 4 to 50 characters long \n";
		fld.focus(); 
    } else if (illegalChars.test(fld.value)) {
        fld.style.background = errorcolor; 
        error = "The " + username + "contains illegal characters. It must contain only letters and numbers and underscores\n";
		fld.focus(); 
    } else {
        fld.style.background = normalcolor;
    }
	
    return error;
}


//function to check if field contans special characters  or not and return error
function isSpecialCharacters(form_id,username,errorcolor,normalcolor){
	var error="";
	var fld = document.forms[form_id].elements[username];
    	                       // value of field with whitespace trimmed off   
    var illegalChars= /[\(\)\<\>\,\;\:\$\#\\\"\[\]]/ ;
   
    if (fld.value == "") {
        fld.style.background = errorcolor;
        error = "You didn't enter " + username + ".\n";
		fld.style.background = errorcolor;
		fld.focus();  
    }else if (fld.value.match(illegalChars)) {
        fld.style.background = errorcolor;
        error = "The " + username + " contains illegal characters.\n";
		fld.focus();  
    } else {
	    fld.style.background = normalcolor;
    }
    return error;
}


//function to check if phone number is valid or not and return error
function isValidPhone(form_id,phone,errorcolor,normalcolor) {    	
	var error="";
	var fld = document.forms[form_id].elements[phone];
	var stripped = fld.value.replace(/[\(\)\.\-\ ]/g, '');
	    
   if (fld.value == "") {
        error = "You didn't enter a "+ phone + " number.\n";
        fld.style.background = errorcolor;
		fld.focus();  
    } else if (isNaN(parseInt(stripped))) {
        error = "The "+ phone + " number contains illegal characters.\n";
        fld.style.background = errorcolor;
		fld.focus(); 
    } else if ((stripped.length < 10)) {
        error = "The "+ phone + " number is too short. Make sure you included an area code.\n";
        fld.style.background = errorcolor;
		fld.focus(); 
    }else if ((stripped.length > 12)) {
        error = "The "+ phone + " number is too long. \n";
        fld.style.background = errorcolor;
		fld.focus(); 
    }
	else
	fld.style.background = normalcolor;
	  
    return error;
}