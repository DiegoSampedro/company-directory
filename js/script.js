$('document').ready(function() {

    $.ajax({
        url: "./libs/php/getAll.php",
        type: 'POST',
        dataType: 'json',
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                for(i = 0; i < result.data.length; i++) {
                   $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                }

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    }); 



    // search bar event listener

    $('#search').on('input', function() {
        $.ajax({
            url: "./libs/php/getByName.php",
            data: {
                search: $('#search').val()
            },
            type: 'POST',
            dataType: 'json',
            success: function(result) {
    
                console.log(result);
    
                if (result.status.name == "ok") {

                    $('#results').empty();

                    for(i = 0; i < result.data.length; i++) {
                       $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                    }
    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    })



    // desktop department filter event listeners

    $('#departments-filter input:checkbox').change(function(){

        if($("#departments-filter input:checkbox:checked").length === 1){
            $.ajax({
                url: "./libs/php/getByDepartment.php",
                data: {
                    department: $("#departments-filter input:checkbox:checked").val()
                },
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {

                        $('#results').empty();
    
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        } else if ($("#departments-filter input:checkbox:checked").length > 1) {
            
            $('#results').empty();

            var boxes = [];

            $.each($("#departments-filter input:checkbox:checked"), function(){
                boxes.push($(this).val());
            });

            for(i = 0; i < boxes.length; i++) {
            $.ajax({
                url: "./libs/php/getByDepartment.php",
                data: {
                    department: boxes[i]
                },
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
    
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
            }

        } else {

            $('#results').empty();

            $.ajax({
                url: "./libs/php/getAll.php",
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
        
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            }); 
        }
    });


    // desktop location filter event listeners

    $('#location-filters input:checkbox').change(function(){

        if($("#location-filters input:checkbox:checked").length === 1){
            $.ajax({
                url: "./libs/php/getByLocation.php",
                data: {
                    location: $("#location-filters input:checkbox:checked").val()
                },
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {

                        $('#results').empty();
    
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        } else if ($("#location-filters input:checkbox:checked").length > 1) {
            
            $('#results').empty();

            var boxes = [];

            $.each($("#location-filters input:checkbox:checked"), function(){
                boxes.push($(this).val());
            });

            for(i = 0; i < boxes.length; i++) {
            $.ajax({
                url: "./libs/php/getByLocation.php",
                data: {
                    location: boxes[i]
                },
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
    
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
            }

        } else {

            $('#results').empty();

            $.ajax({
                url: "./libs/php/getAll.php",
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
        
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            }); 
        }
    });



// mobile filter event listeners

    $('#mobile-department-filters input:checkbox').change(function(){

        if($("#mobile-department-filters input:checkbox:checked").length === 1){
            $.ajax({
                url: "./libs/php/getByDepartment.php",
                data: {
                    department: $("#mobile-department-filters input:checkbox:checked").val()
                },
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {

                        $('#results').empty();
    
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        } else if ($("#mobile-department-filters input:checkbox:checked").length > 1) {
            
            $('#results').empty();

            var boxes = [];

            $.each($("#mobile-department-filters input:checkbox:checked"), function(){
                boxes.push($(this).val());
            });

            for(i = 0; i < boxes.length; i++) {
            $.ajax({
                url: "./libs/php/getByDepartment.php",
                data: {
                    department: boxes[i]
                },
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
    
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
            }

        } else {

            $('#results').empty();

            $.ajax({
                url: "./libs/php/getAll.php",
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
        
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            }); 
        }
    });

    // mobile location filter event listener

    $('#mobile-location-filters input:checkbox').change(function(){

        if($("#mobile-location-filters input:checkbox:checked").length === 1){
            $.ajax({
                url: "./libs/php/getByLocation.php",
                data: {
                    location: $("#mobile-location-filters input:checkbox:checked").val()
                },
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {

                        $('#results').empty();
    
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
        } else if ($("#mobile-location-filters input:checkbox:checked").length > 1) {
            
            $('#results').empty();

            var boxes = [];

            $.each($("#mobile-location-filters input:checkbox:checked"), function(){
                boxes.push($(this).val());
            });

            for(i = 0; i < boxes.length; i++) {
            $.ajax({
                url: "./libs/php/getByLocation.php",
                data: {
                    location: boxes[i]
                },
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
    
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });
            }

        } else {

            $('#results').empty();

            $.ajax({
                url: "./libs/php/getAll.php",
                type: 'POST',
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
        
                        for(i = 0; i < result.data.length; i++) {
                           $("#results").append("<div class='row shadow-sm p-3 mb-3 bg-white rounded'><div class='col-4 col-lg-3'><img src='images/avatar.png' style='height: 100px;'></div><div class='col-lg-4 col-8 my-auto'><p>" + result['data'][i]['firstName'] + ' ' + result['data'][i]['lastName'] + "</p><p>" + result['data'][i]['jobTitle'] + "</p></div><div class='col-4 my-auto profile-info-2'><p>" + result['data'][i]['email'] + "</p><p>" + result['data'][i]['department'] + "</p></div></div>")
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            }); 
        }
    });




// sidebar event listeners

    $(".closebtn").click(function() {
        document.getElementById("mySidebar").style.width = "0px";
    });
    
      $("#filter-icon").click(function() {
        var width = $(window).width();
        if(width >= 450) { 
        document.getElementById("mySidebar").style.width = "450px";
        } else {
            document.getElementById("mySidebar").style.width = "100%";
        }
    });


})