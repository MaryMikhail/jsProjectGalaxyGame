$(function(){

    $("#radio-2").click(function(){
        $("#shipITI").show();
        $("#shipHome").hide();
    })

    $("#radio-1").click(function(){
        $("#shipITI").hide();
        $("#shipHome").show();
    })

    $("#paymentDiv").dialog({
        closeOnEscape: false,
        resizable : false,
        draggable : false,
        width : 700,
        height : 650,
        open: function(event, ui) {
            $(".ui-dialog-titlebar-close", ui.dialog || ui).hide();
            $("#shipITI").hide();
        },
        buttons : {
            "Proceed" : function(){
                if(!nameRegexp.test($("#name").val()) & !emailRegexp.test($("#email").val()))
                {
                    $("#email").next().remove();
                    $("#email").after($("<p>The email and name are not correct</p>"));
                }
                else if(!nameRegexp.test($("#name").val()))
                {
                    $("#email").next().remove();
                    $("#email").after($("<p>Name is not correct</p>"));
                }
                else if(!emailRegexp.test($("#email").val()))
                {
                    $("#email").next().remove();
                    $("#email").after($("<p>Email is not correct</p>"));
                }
                else
                {
                    $("#email").next().remove();
                    $("#afterPayment").dialog("open");
                    $("#afterPayment").children('p').html("Always visit for joyable games.")
                }
            }
        }
    });

    $("#moneySlider").slider({
        range : "max",
        min : 0,
        max : 50,
        slide : function(event, ui){
            $("#price").html("Pay " + ui.value + " EGP");
        }
    });

    $(".shippingRadio").checkboxradio();

    $("#afterPayment").dialog({
        autoOpen: false,
        resizable: false,
        modal : true,
        buttons : {
            "Home Page" : function(){
                window.location.replace("jsProjectGalaxyGame\puzzleGame\index.html");
            }
        }
    })

    var emailRegexp = /[a-z A-Z 0-9 _+-]+@[a-z A-Z]+\.[a-z A-Z]+/i;
    var nameRegexp = /[a-z A-Z]{5,50}/i;

})