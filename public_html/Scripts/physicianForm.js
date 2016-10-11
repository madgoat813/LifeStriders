//JavaScript Document
//Scott
//10/9/2016

$(document).ready(function (e) {

     $('#printPreviewPhysicianFormOVER').hide();

     $('#printPreviewButton').click(function () {
          var formfield = ["Client Name: " + $('#clientName').val(),"Birth Date: " + $('#birthDate').val(),"Address: " + $('#address').val(),
          "Phone: " + $('#phone').val(),"Medical Diagnosis/Description of Disability: " + $('#medDiag').val(),
          "Precautions/Contraindications: " + $('#preCon').val(),"Additional Comments: " + $('#addCom').val(),
          "Physician's Name: " + $('#physName').val(),"Physician's Phone: " + $('#physPhone').val(),"Physician's Address: " + $('#physAddress').val(),
          "Physician's Signature: " + $('#physSig').val(),"Todays Date: " + $('#todayDate').val()];
          
          //This is not ideal, however I am begining to automate the process of creating the print preview screen
          var printindex = ['#CN','#BD','#AD','#PH','#MD','#PC','#AC','#PN','#PP','#PD','#PS','#TD'];
          
          for(i = 0;i<formfield.length;i++){
               $(printindex[i]).html(formfield[i]);
          }
          
          $('#printPreviewPhysicianFormOVER').show();
          $('#formPhysicianForm').hide();
     });

     $("#printButton").click(function () {
          var mode = 'iframe';
          var close = mode === "popup";
          var options = {mode: mode, popClose: close};
          $("#printPreviewPhysicianForm").printArea(options);
     });

});
    
    


