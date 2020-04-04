// $(document).ready(function () {
//     $(function () {
//         $('li a').click(function (e) {
//             e.preventDefault();
//             $('a').removeClass('active');
//             $(this).addClass('active');
//         });
//     });
// });

function myFunction() {
    var popup = document.getElementById("myPopup");
    // var popup= document.getElementById("contactus").reset();
   var validateStatus= validation();
 if(validateStatus)
 {  $('#form_contactUs').trigger("reset");
   $('textarea').val("");
   popup.classList.toggle("show");
}
  //  $('textaers').trigger("reset");

    // document.getElementById("clearformm").value="";
    
    // return false;
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
// console.log(lname);
// console.log(email);

// console.log(company);
// console.log(mobile);
// console.log(selectname);
// console.log(comment.length);

var flag = true;

    if(name == ""){
      document.getElementById('username').innerHTML = "Please Enter FirstName";
      // return false;
      flag = false;
    }
    else if((name.length <2 ) || (name.length > 20)){
      document.getElementById('username').innerHTML = "Please Enter name length in between 2 and 20";
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
    else if((lname.length <=2 ) || (lname.length > 20)){
      document.getElementById('lastname').innerHTML = "Please Enter name length in between 2 and 20";
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
      flag=false;

    }
    else if(email.indexOf('@') <= 0){
      document.getElementById('emails').innerHTML = "@ invalid position";
      // return false;
      flag = false;
    }
   else  if((email.charAt(email.length-4)!= '.') && (email.charAt(email.length-3)!= '.')){
      document.getElementById('emails').innerHTML = ". invalid position";
      // return false;
      flag=false;
    }
    else {
      document.getElementById('emails').innerHTML = "";

    }
    // COMPANY
    if(company == ""){
      document.getElementById('companyname').innerHTML = "Please Enter valid CompanyName";
      // return false;
      flag =false;
    }
    else if((company.length <=2 ) || (company.length > 15)){
      document.getElementById('companyname').innerHTML = "Please Enter name length in between 2 and 15";
      // return false;

      flag=false;
    }
    else {
      document.getElementById('companyname').innerHTML = "";

    }
    // PHONE VALIDATIONS
    if(mobile == ""){
      document.getElementById('phonenum').innerHTML = "Please Enter Correct Mobile No";
      flag =false;
    }
    else if(isNaN(mobile)){
      document.getElementById('phonenum').innerHTML = "User must write digits only";
      flag= false;
    }
    else if(mobile.length!=10){
      document.getElementById('phonenum').innerHTML = "Mobile number must be 10 digits only";
      flag= false;
    }
    else{
      document.getElementById('phonenum').innerHTML = "";

    }
    // COMPANY FIELD
    if(selectname == "Choose Enquiry"){
      document.getElementById('chooseopt').innerHTML = "Please Select Enquiry Name";
      flag= false;
    }
    else {
      document.getElementById('chooseopt').innerHTML = "";

    }
    // TEXTAREA MESSAGE
    if(comment == ""){
      document.getElementById('message').innerHTML = "Please Provide valid Message";
      flag = false;
    }
  
   else if((comment.length <=2 ) || (comment.length > 50)){
      document.getElementById('message').innerHTML = "Please enter Meassage length in between 2 and 50";
      flag= false;
    }
    else {      document.getElementById('message').innerHTML = "";
  }
    return flag;
  }
//function myFunction()
//{
   /* var h= document.createElement("div");
      h.className="Popup";
      var span=document.createElement("span");
      span.className="popuptext";
      span.innerText="Sample popup";
      h.append(span);
      $("#popup_id").append(h);*/

  //var html= " <div class="Popup" >Send<span class="popuptext" id="myPopup">A Simple Popup!</span></div>";

//}

// });

// function myFunction() {
//   var popup = document.getElementById("myPopup");
//   popup.classList.toggle("show");
// }
// $(function () {
//     $("#dialog").dialog({
//         modal: true,
//         autoOpen: false,
//         title: "jQuery Dialog",
//         width: 300,
//         height: 150
//     });
//     $("#btn btn-primary").click(function () {
//         $('#dialog').dialog('open');
//     });
// });