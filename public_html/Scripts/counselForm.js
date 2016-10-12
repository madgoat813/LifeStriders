//JavaScript Document

//Hide one div and show a div. tado

$(document).ready(function (e) {

    $('#printPreviewConsultingFormOVER').hide();



    $('#printPreviewButton').click(function (e) {
        
        
        var todayDate = $('#todayDate').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var birthDate = $('#birthDate').val();


//--------------------------------------------------------


        $('#printPreviewTD').html(todayDate);
        $('#printPreviewFN').html(firstName);
        $('#printPreviewLN').html(lastName);
        $('#printPreviewBD').html(birthDate);






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


