$(function () {
    // $('#add-button').on('click', function () {
    //     if ($('#input1').val() === "" || $('#input2').val() === "") {
    //         alert("กรอกกกกก")
    //     } else {
    //         $('#box').append(`
    //        <div>
    //         <h3>${$("#input1").val()}</h3>
    //         <p>${$("#input2").val()}</p>
    //         <hr>
    //         </div>
    //        `)
    //         $('#input1').val("")
    //         $('#input2').val("")
    //     }
    // })
    
    let old = ""
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://exceed.srakrn.me/api/jacky-group/view/",
            dataType: "text",
            success: function (response) {
                if(old !== response){
                    old = response
                    $('#box').append(`<h4 class="text-left">Guess</h4>`)
                    $(`#box`).append(`
                    <h3 class="alert alert-primary" role="alert">${response}</h3>
                    `)
                    
                }
            },
            fail: function (response) {
                console.log(response)
            }
        });
    }, 1000)

    $('#send-button').on('click', function () {

        $.ajax({
            type: "POST",
            url: "http://exceed.srakrn.me/api/jacky-group/set/",
            data: {
                value: $('#text-input').val()
            },
            dataType: "json",
            success: function (response) {
            if(old !== response)
                old = response
                $('#box').append(`<h4 class="text-right">You</h4>`)
                $('#box').append(`<h3 class="text-right alert alert-success" role="alert">${$("#text-input").val()}</h3>`).val()
                console.log(response)

            }
        });
    })






})