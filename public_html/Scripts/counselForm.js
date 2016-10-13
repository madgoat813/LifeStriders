//JavaScript Document

//Hide one div and show a div. tado

$(document).ready(function (e) {

    $('#printPreviewConsultingFormOVER').hide();



    $('#printPreviewButton').click(function (e) {


        var todayDate = $('#todayDate').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var birthDate = $('#birthDate').val();
        var gender = $('#sex').val();
        var marStatus = $('#marital').val();

        var address = $('#cAddress').val();
        var city = $('#cCity').val();
        var state = $('#cState').val();
        var zipCode = $('#cZipCode').val();

        var homePhone = $('#homePhone').val();
        var myEmail = $('#myEmail').val();
        var workPhone = $('#workPhone').val();
        var cellPhone = $('#cellPhone').val();
        
        var employerName = $('#employerName').val();
        var socSecNum = $('#socSecNum').val();


//--------------------------------------------------------


        $('#printPreviewTD').html(todayDate);
        $('#printPreviewFN').html(firstName);
        $('#printPreviewLN').html(lastName);
        $('#printPreviewBD').html(birthDate);
        $('#printPreviewSX').html(gender);
        $('#printPreviewMS').html(marStatus);

        $('#pAddress').html(address);
        $('#pCity').html(city);
        $('#pState').html(state);
        $('#pZipCode').html(zipCode);

        $('#pHomePhone').html(homePhone);
        $('#pMyEmail').html(myEmail);
        $('#pWorkPhone').html(workPhone);
         $('#pCellPhone').html(cellPhone);
         
         $('#pEmployersName').html(employerName).val();
         $('#pSocSecNum').html(socSecNum).val();

        //--------------------------------------------------------

        $('#printPreviewConsultingFormOVER').show();
        $('#formConsultingForm').hide();
    });


    $("#printButton").click(function () {
        var mode = 'iframe';
        var close = mode === "popup";
        var options = {mode: mode, popClose: close};
        $("#printPreviewConsultingForm").printArea(options);
    });






});


