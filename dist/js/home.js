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
   $('#form_contactUs').trigger("reset");
   $('textarea').val("");
  //  $('textaers').trigger("reset");

    // document.getElementById("clearformm").value="";
    popup.classList.toggle("show");
    // return false;
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