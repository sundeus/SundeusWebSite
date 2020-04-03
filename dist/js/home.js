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
    validation();
   $('#form_contactUs').trigger("reset");
   $('textarea').val("");
  //  $('textaers').trigger("reset");

    // document.getElementById("clearformm").value="";
    popup.classList.toggle("show");
    // return false;
  }


  function validation(){
    var name = document.getElementById("name").value;
    var lname = document.getElementById("lname").value;

    var email = document.getElementById("email").value;
    var company = document.getElementById("company").value;
    var mobile = document.getElementById("mobile").value;
    var selectname = document.getElementById("selectname").value('Choose Enquiry');
    var comment = document.getElementById("comment").value;


    if(name == ""){
      document.getElementById('username').innerHTML = "Please Enter FirstName";
      return false;
    }
    if((name.length <=2 ) || (name.length > 20)){
      document.getElementById('username').innerHTML = "Please Enter name length in between 2 and 20";
      return false;
    }
    if(!isNaN(name)){
      document.getElementById('username').innerHTML = "Only characters are allowed";
      return false;
    }
    // LAST NAME
    if(lname == ""){
      document.getElementById('lastname').innerHTML = "Please Enter LastName";
      return false;
    }
    if((lname.length <=2 ) || (lname.length > 20)){
      document.getElementById('lastname').innerHTML = "Please Enter name length in between 2 and 20";
      return false;
    }
    if(!isNaN(lname)){
      document.getElementById('lastname').innerHTML = "Only characters are allowed";
      return false;
    }
    // EMAIL VALIDATION
    if(email == ""){
      document.getElementById('emails').innerHTML = "Please Enter valid EmailId";
      return false;
    }
    if(email.indexOf('@') <= 0){
      document.getElementById('emails').innerHTML = "@ invalid position";
      return false;
    }
    if((email.charAt(email.length-4)!= '.') && (email.charAt(email.length-3)!= '.')){
      document.getElementById('emails').innerHTML = ". invalid position";
      return false;
    }
    // COMPANY
    if(company == ""){
      document.getElementById('companyname').innerHTML = "Please Enter valid CompanyName";
      return false;
    }
    if((company.length <=2 ) || (company.length > 15)){
      document.getElementById('companyname').innerHTML = "Please Enter name length in between 2 and 15";
      return false;
    }
    // PHONE VALIDATIONS
    if(mobile == ""){
      document.getElementById('phonenum').innerHTML = "Please Enter Correct Mobile No";
      return false;
    }
    if(isNaN(mobile)){
      document.getElementById('phonenum').innerHTML = "User must write digits only";
      return false;
    }
    if(mobile.length!=10){
      document.getElementById('phonenum').innerHTML = "Mobile number must be 10 digits only";
      return false;
    }
    // COMPANY FIELD
    if(selectname == "Choose Enquiry"){
      document.getElementById('chooseopt').innerHTML = "Please Select Enquiry Name";
      return false;
    }
    // TEXTAREA MESSAGE
    if(comment == ""){
      document.getElementById('message').innerHTML = "Please Provide valid Message";
      return false;
    }
    if((comment.length <=2 ) || (comment.length > 50)){
      document.getElementById('message').innerHTML = "Please Enter name length in between 2 and 50";
      return false;
    }
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