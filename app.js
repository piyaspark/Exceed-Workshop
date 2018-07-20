
$(function () {
    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/pf-buzzer/view/",
            dataType: "text",
            success: function (response) {
                
            },
            fail: function (response) {
                console.log(response)
            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/pf-door/view/",
            dataType: "text",
            success: function (response) {
                
            },
            fail: function (response) {
                console.log(response)
            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/pf-light/view/",
            dataType: "text",
            success: function (response) {
                
            },
            fail: function (response) {
                console.log(response)
            }
        });

        $.ajax({
            type: "GET",
            url: "http://ecourse.cpe.ku.ac.th:1515/api/pf-temp/view/",
            dataType: "text",
            success: function (response) {
                
            },
            fail: function (response) {
                console.log(response)
            }
        });
    }, 1000)


    //Buzzer Post
    $(function () {
        var val;
        $('#buzzer-toggle').on('change', function () {
            let check = $('#buzzer-toggle').prop('checked')
            if(check)val = "1"
            else val = "0"
            $.ajax({
                type: "POST",
                url: "http://ecourse.cpe.ku.ac.th:1515/api/pf-buzzer/set/",
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


    //LED Post
    $(function () { 
        var val;
        $('#led-toggle').on('change', function () {
            let check = $('#led-toggle').prop('checked')
            if(check)val = "1"
            else val = "0"
            $.ajax({
                type: "POST",
                url: "http://ecourse.cpe.ku.ac.th:1515/api/pf-led/set/",
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


    //Air Post
    $(function () {
        $('#air-toggle').on('change', function () {
            let check = $('#air-toggle').prop('checked')
            if(check)val = "1"
            else val = "0"
            $.ajax({
                type: "POST",
                url: "http://ecourse.cpe.ku.ac.th:1515/api/pf-air/set/",
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

    //Door Post
    $(function () {
        $('#door-toggle').on('change', function () {
            let check = $('#door-toggle').prop('checked')
            if(check)val = "1"
            else val = "0"
            $.ajax({
                type: "POST",
                url: "http://ecourse.cpe.ku.ac.th:1515/api/pf-door/set/",
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

})
