
$(function () {
    //Get box status if it empty or not
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/pf-box-status/view/",
            dataType: "text",
            success: function (response) {
                
            },timeout: 5000
            ,
            fail: function (response) {
                console.log(response)
            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th/exceed/api/pf-box-totaluse/view/",
            dataType: "text",
            success: function (response) {
            
            },timeout: 5000
            ,
            fail: function (response) {
                console.log(response)
            }
        });

        });
        
    }, 1000)

    


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
                val = 0
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

