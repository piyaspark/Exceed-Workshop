
$(function () {
    //Get box status if it empty or not
    var secs = 0;
    var mins = 0;
    var hours = 0;

    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/pf-box-status/view/",
            dataType: "text",
            success: function (response) {
                console.log(response)
                if (response == 1) {
                    $("#time").html(`<div> 0 hrs 0 min 0 sec</div>`)
                    $("#boxstatus").html('<span class="badge badge-success">Empty</span>')
                    $("#box-img").html('<img src="https://png.icons8.com/ios/100/000000/empty-box-filled.png" style="margin-left: 210px">')
                }
                else {
                    $("#box-img").html('<img src="https://png.icons8.com/ios/100/000000/open-box-filled.png" style="margin-left: 210px">')
                    $('#myModal').modal('show')

                    secs++
                    if (secs === 60) {
                        mins++
                        secs = 0
                    }
                    if (mins === 60) {
                        hours++
                        mins = 0
                        secs = 0
                    }
                    $("#time").html(`<h4> ${hours} hrs ${mins} min ${secs} sec</h4>`)
                    console.log(secs)
                    $("#boxstatus").html('<span class="badge badge-danger">Full</span>')
                    // if()
                    // $("#box-img").html('<img src="https://png.icons8.com/ios/100/F31A03/open-box-filled.png">')
                }
            }, timeout: 5000
            ,
            fail: function (response) {
                console.log(response)
            }
        });


        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/pf-box-status/history/",
            dataType: "text",
            success: function (response) {

            }, timeout: 5000
            ,
            fail: function (response) {
                console.log(response)
            }
        });

    }, 1000);

})




//Box Using(enabled/disabled)
// $(function () {
//     var val;
//     $('#test').on('change', function () {
//         let check = $('#test').prop('checked')
//         if(check)val = "1"
//         else val = "0"
//         $.ajax({
//             type: "POST",
//             url: "http://ecourse.cpe.ku.ac.th/exceed/api/pf-box-status/set/",
//             data: { value: val }
//             ,
//             dataType: "JSON",
//             success: function (response) {
//                 console.log(response)
//             },
//             fail: function (response) {
//                 console.log(response)
//             }
//         });
//     })
$(function () {
    var val;
    $('#test').on('click', function () {
        val = "1"
        $.ajax({
            type: "POST",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/pf-box-status/set/",
            data: { value: val }
            ,
            dataType: "JSON",
            success: function (response) {
                console.log(response)
            },
            fail: function (response) {
                console.log(response)
            }
        });
    })
})


