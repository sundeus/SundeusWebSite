function myFunction() {
    var popup = document.getElementById("myPopup");
   var validateStatus= validation();
 if(validateStatus)	 
 {
	 Email.send({
	Host: "smtp.gmail.com",
	Username : "sundeusconsulting@gmail.com",
	Password : "xrlykupbpqjorvji",
	To : 'contact@sundeus.com',
	From : document.getElementById("email").value.trim(),
	Subject : "Sundeus Enquiry",
	Body : "You have got an Enquiry. \n COMPANY NAME : "+document.getElementById("company").value.trim()+". \n"+"FIRST NAME : "+document.getElementById("name").value.trim()+". \n"+ "LAST NAME : "+document.getElementById("lname").value.trim()+". \n"+"CONTACT NUMBER : "+document.getElementById("mobile").value.trim()+". \n"+"EMAIL : "+document.getElementById("email").value.trim()+". \n"+"ENQUIRY : "+document.getElementById("exampleFormControlSelect1").value.trim()+". \n"+"MESSAGE : "+document.getElementById("comment").value.trim(),
	}).then(
		message =>{ console.log(message);
			   $('#form_contactUs').trigger("reset");
   $('textarea').val("");
   
   popup.classList.toggle("show");
			  }
		 
	);

	
}

    
  }


  function validation(){
    var name = document.getElementById("name").value.trim();
    var lname = document.getElementById("lname").value.trim();

    var email = document.getElementById("email").value.trim();
    var company = document.getElementById("company").value.trim();
    var mobile = document.getElementById("mobile").value.trim();
     var selectname = document.getElementById("exampleFormControlSelect1").value.trim();
    var comment = document.getElementById("comment").value.trim();
// console.log(name.length);


var flag = true;

    if(name == ""){
      document.getElementById('username').innerHTML = "Please Enter FirstName";
      // return false;
      flag = false;
    }
    else if((name.length <2 ) || (name.length > 25)){
      document.getElementById('username').innerHTML = "Please Enter name length in between 2 and 25";
      // return false;
      flag = false;
    }
    else if(!isNaN(name)){
      document.getElementById('username').innerHTML = "Only characters are allowed";
      // return false;
      flag = false;
    }
    else{
      document.getElementById('username').innerHTML="";
    }
    // LAST NAME
    if(lname == ""){
      document.getElementById('lastname').innerHTML = "Please Enter LastName";
      // return false;
      flag = false;
    }
    else if((lname.length <=2 ) || (lname.length > 25)){
      document.getElementById('lastname').innerHTML = "Please Enter name length in between 2 and 25";
      // return false;
      flag = false;
    }
    else if(!isNaN(lname)){
      document.getElementById('lastname').innerHTML = "Only characters are allowed";
      // return false;
      flag = false;
    }
    else
{      document.getElementById('lastname').innerHTML = "";
}
    // EMAIL VALIDATION
    if(email == ""){
      document.getElementById('emails').innerHTML = "Please Enter valid EmailId";
      // return false;
      flag = false;

    }
    else if(email.indexOf('@') <= 0){
      document.getElementById('emails').innerHTML = "@ invalid position";
      // return false;
      flag = false;
    }
   else  if((email.charAt(email.length-4)!= '.') && (email.charAt(email.length-3)!= '.')){
      document.getElementById('emails').innerHTML = ". invalid position";
      // return false;
      flag = false;
    }
    else {
      document.getElementById('emails').innerHTML = "";

    }
    // COMPANY
    if(company == ""){
      document.getElementById('companyname').innerHTML = "Please Enter valid CompanyName";
      // return false;
      flag = false;
    }
    else if((company.length <=2 ) || (company.length > 25)){
      document.getElementById('companyname').innerHTML = "Please Enter name length in between 2 and 25";
      // return false;

      flag = false;
    }
    else {
      document.getElementById('companyname').innerHTML = "";

    }
    // PHONE VALIDATIONS
    if(mobile == ""){
      document.getElementById('phonenum').innerHTML = "Please Enter Correct Mobile No";
      flag = false;
    }
    else if(isNaN(mobile)){
      document.getElementById('phonenum').innerHTML = "User must write digits only";
      flag = false;
    }
    else if(mobile.length!=10){
      document.getElementById('phonenum').innerHTML = "Mobile number must be 10 digits only";
      flag = false;
    }
    else{
      document.getElementById('phonenum').innerHTML = "";

    }
    // COMPANY FIELD
    if(selectname == "Choose Enquiry"){
      document.getElementById('chooseopt').innerHTML = "Please Select Enquiry Name";
      flag = false;
    }
    else {
      document.getElementById('chooseopt').innerHTML = "";

    }
    // TEXTAREA MESSAGE
    if(comment == ""){
      document.getElementById('messagee').innerHTML = "Please Provide valid Message";
      flag = false;
    }
  
   else if((comment.length <=2 ) || (comment.length > 75)){
      document.getElementById('messagee').innerHTML = "Please enter Meassage length in between 2 and 75";
      flag = false;
    }
    else {      
      document.getElementById('messagee').innerHTML = "";
  }
    return flag;
  }

