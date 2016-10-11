//JavaScript Document
//Scott
//10/9/2016

$(document).ready(function (e) {

     $('#printPreviewPhysicianFormOVER').hide();

     $('#printPreviewButton').click(function (e) {
          var formfield = [$('#clientName').val(),$('#birthDate').val(),$('#address').val(),$('#phone').val(),$('#medDiag').val(),
          $('#preCon').val(),$('#addCom').val(),$('#physName').val(),$('#physPhone').val(),$('#physAddress').val(),$('#physSig').val(),$('#todayDate').val()];
          
          //This is not ideal, however I am begining to automate the process of creating the print preview screen
          var displayindex = ["Client Name: " + formfield[0],"Birth Date: " + formfield[1],"Address: " + formfield[2],"Phone: " + formfield[3],
          "Medical Diagnosis/Description of Disability: " + formfield[4],
          "Precautions/Contraindications: " + formfield[5], "Additional Comments: " + formfield[6],"Physician's Name: " + formfield[7],
          "Physician's Phone: " + formfield[8],"Physician's Address: " + formfield[9],
          "Physician's Signature: " + formfield[10],"Todays Date: " + formfield[11]];
          var printindex = ['#CN','#BD','#AD','#PH','#MD','#PC','#AC','#PN','#PP','#PD','#PS','#TD'];
          var mainindex = [0,1,2,3,4,5,6,7,8,9,10,11];
          
          for(i = 0;i<mainindex.length;i++){
               $(printindex[i]).html(displayindex[i]);
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
    
    


