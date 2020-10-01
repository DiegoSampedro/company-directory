$('document').ready(function() {

    $.ajax({
        url: "./libs/php/getAll.php",
        type: 'POST',
        dataType: 'json',
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                for(i = 0; i < result.data.length; i++) {
                   
                   $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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
                    
                        $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
                    }
    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });
    })



    // desktop department filter event listeners

    $('#departments-filter').change(function(){

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
                           
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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
                           
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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
                           
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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

    $('#location-filters').change(function(){

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
                           
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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
                           
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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
                           
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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

    $('#mobile-department-filters').change(function(){

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
                           
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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
                        
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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
                           
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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

    $('#mobile-location-filters').change(function(){

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
                           
                            $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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
                           
                           $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
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
                           
                           $('#results').append('<div class="col-12 col-lg-6 shadow-sm p-3 mb-3 bg-white rounded"><div class="row"><div class="col-3 my-auto mr-4"><img src="' + result['data'][i]['photo'] + '"  id="avatar"></div><div class="col-7 my-auto reduced-height"><div class="row"><p class="firstName mr-1" id="' + result['data'][i]['id'] + '">' + result['data'][i]['firstName'] + '</p><span class="lastName">' + result['data'][i]['lastName'] + '</span><div class="col-1 pr-2 align-top ml-auto"><img src="images/icon-edit.png" data-toggle="modal" data-target="#profileModal" id="edit-icon"></div></div><div class="row"><p class="position">' + result['data'][i]['jobTitle'] + '</p></div><div class="row"><p class="email">' + result['data'][i]['email'] + '</p></div><div class="row"><p class="department">' + result['data'][i]['department'] + '</p></div><div class="row"><p class="location">' + result['data'][i]['location'] + '</p></div></div></div></div>')
                        }
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            }); 
        }
    });


    // save new profile button event listener

    $('#saving-profile').click(function() {

        $.ajax({
            url: "./libs/php/insertNewProfile.php",
            type: 'POST',
            data: {
                firstName: $('#employeeName').val(),
                lastName: $('#employeeSurname').val(),
                jobTitle: $('#employeePosition').val(),
                email: $('#employeeEmail').val(),
                departmentID: $('#employeeDepartment').val()
            },
            dataType: 'json',
            success: function(result) {
    
                console.log(result);
    
                if (result.status.name == "ok") {
    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }

        });

        location.reload(true);

    })


    // Update existing profile event listener

    $('#update-profile').click(function() {

        $.ajax({
            url: "./libs/php/updateExistingProfile.php",
            type: 'POST',
            data: {
                id: $('#profileID').val(),
                firstName: $('#existingEmployeeName').val(),
                lastName: $('#existingEmployeeSurname').val(),
                jobTitle: $('#existingEmployeePosition').val(),
                email: $('#existingEmployeeEmail').val(),
                departmentID: $('#existingEmployeeDepartment').val()
            },
            dataType: 'json',
            success: function(result) {
    
                console.log(result);
    
                if (result.status.name == "ok") {
    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

        location.reload(true);

    })


    // Delete existing profile event listener

    $('#delete-profile').click(function() {

        $.ajax({
            url: "./libs/php/deleteProfileByID.php",
            type: 'POST',
            data: {
                id: $('#profileID').val()
            },
            dataType: 'json',
            success: function(result) {
    
                console.log(result);
    
                if (result.status.name == "ok") {
    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        });

        location.reload(true);

    })


    // delete and update department buttons event listeners

    $('#edit-departments').click(function(e) {

        if(e.target.innerHTML === "Delete"){

            $.ajax({
                url: "./libs/php/deleteDepartmentByID.php",
                type: 'POST',
                data: {
                    id: e.target.value
                },
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });

            location.reload(true);

        } else if (e.target.innerHTML === "Update") {

            $.ajax({
                url: "./libs/php/updateDepartmentByID.php",
                type: 'POST',
                data: {
                    id: e.target.value,
                    name: $('#indep' + e.target.value).val()
                },
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });

            location.reload(true);

        }

    });


    // delete and update location buttons event listeners

    $('#edit-locations').click(function(e) {

        if(e.target.innerHTML === "Delete"){

            $.ajax({
                url: "./libs/php/deleteLocationByID.php",
                type: 'POST',
                data: {
                    id: e.target.value
                },
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });

            location.reload(true);

        } else if (e.target.innerHTML === "Update") {

            $.ajax({
                url: "./libs/php/updateLocationByID.php",
                type: 'POST',
                data: {
                    id: e.target.value,
                    name: $('#inloc' + e.target.value).val()
                },
                dataType: 'json',
                success: function(result) {
        
                    console.log(result);
        
                    if (result.status.name == "ok") {
        
                    }
                
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(errorThrown);
                }
            });

            location.reload(true);

        }

    });


    // Add new department button event listener

    $('#add-department').click(function() {

        $.ajax({
            url: "./libs/php/insertNewDepartment.php",
            type: 'POST',
            dataType: 'json',
            data: {
                locationID: $('#location-list').val(),
                name: $('#new-department-name').val()
            },
            success: function(result) {
    
                console.log(result);
    
                if (result.status.name == "ok") {
    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        }); 

        location.reload(true);

    })


    // Add new location button event listener

    $('#add-location').click(function() {

        $.ajax({
            url: "./libs/php/insertNewlocation.php",
            type: 'POST',
            dataType: 'json',
            data: {
                name: $('#new-location-name').val()
            },
            success: function(result) {
    
                console.log(result);
    
                if (result.status.name == "ok") {
    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        }); 

        //location.reload(true);

    })


    // Result cards event listener

    $('#results').click(function(e) {

        if(e.target.id === 'edit-icon') {
            console.log($(e.target).parent().prev().prev().attr('id'))

        $('#existingEmployeeName').attr('value', $(e.target).parent().prev().prev().text());
        $('#existingEmployeeSurname').attr('value', $(e.target).parent().prev().text());
        $('#existingEmployeePosition').attr('value', $(e.target).parent().parent().next().text());
        $('#existingEmployeeEmail').attr('value', $(e.target).parent().parent().next().next().text());
        $('#existingEmployeeDepartment').find("option:contains('" + $(e.target).parent().parent().next().next().next().text() + "')").attr('selected', 'selected');
        var id = $(e.target).parent().prev().prev().attr('id');
        $('#profileID').attr('value', id);

    }
        
    })



    // Adding all departments to the edit departments modal and filter sections

        $.ajax({
            url: "./libs/php/getAllDepartments.php",
            type: 'POST',
            dataType: 'json',
            success: function(result) {
    
                console.log(result);
    
                if (result.status.name == "ok") {
    
                    for(i = 0; i < result.data.length; i++) {
                       $("#edit-departments").append('<div class="row justify-content-center my-auto""><div class="col-6 outline"><input class="m-1" type="text" value="' + result['data'][i]['name'] + '" id="indep' + result['data'][i]['id'] + '"></div><div class="col-2"><button type="button" class="btn btn-outline-success btn-sm mt-1 update-department-btn" value="' + result['data'][i]['id'] + '">Update</button></div><div class="col-2"><button type="button" class="delete-department-btn btn btn-outline-danger btn-sm mt-1" value="' + result['data'][i]['id'] + '">Delete</button></div></div>')
                    }

                    for(i = 0; i < result.data.length; i++) {
                        $('#mobile-department-filters').append('<div class="form-check"><input class="form-check-input" type="checkbox" value="' + result['data'][i]['name'] + '" id="' + result['data'][i]['name'] + '"><label class="form-check-label" for="' + result['data'][i]['name'] + '">' + result['data'][i]['name'] + '</label></div>')
                     }
                    
                     for(i = 0; i < result.data.length; i++) {
                        $('<div class="form-check"><input class="form-check-input" type="checkbox" value="' + result['data'][i]['name'] + '" id="' + result['data'][i]['name'] + '"><label class="form-check-label" for="' + result['data'][i]['name'] + '">' + result['data'][i]['name'] + '</label></div>').insertBefore('#edit-departments-btn-row')
                     }
    
                }
            
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(errorThrown);
            }
        }); 

    
    // Adding all locations to the edit departments modal, edit locations modal, filter sections

    $.ajax({
        url: "./libs/php/getAllLocations.php",
        type: 'POST',
        dataType: 'json',
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                for(i = 0; i < result.data.length; i++) {
                   $("#edit-locations").append('<div class="row justify-content-center my-auto""><div class="col-6 outline"><input class="m-1" type="text" value="' + result['data'][i]['name'] + '" id="inloc' + result['data'][i]['id'] + '"></div><div class="col-2"><button type="button" class="btn btn-outline-success btn-sm mt-1 update-location-btn" value="' + result['data'][i]['id'] + '">Update</button></div><div class="col-2"><button type="button" class="btn btn-outline-danger btn-sm mt-1 delete-location-btn" value="' + result['data'][i]['id'] + '">Delete</button></div></div>')
                }

                for(i = 0; i < result.data.length; i++) {
                    $('<option value="' + result['data'][i]['id'] + '">' + result['data'][i]['name'] + '</option>').insertAfter('#first-option')
                 }

                 for(i = 0; i < result.data.length; i++) {
                    $('#mobile-location-filters').append('<div class="form-check"><input class="form-check-input" type="checkbox" value="' + result['data'][i]['name'] + '" id="' + result['data'][i]['name'] + '"><label class="form-check-label" for="' + result['data'][i]['name'] + '">' + result['data'][i]['name'] + '</label></div>')
                 }
                
                 for(i = 0; i < result.data.length; i++) {
                    $('<div class="form-check"><input class="form-check-input" type="checkbox" value="' + result['data'][i]['name'] + '" id="' + result['data'][i]['name'] + '"><label class="form-check-label" for="' + result['data'][i]['name'] + '">' + result['data'][i]['name'] + '</label></div>').insertBefore('#edit-location-btn-row')
                 }

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
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


// Uncheck department/location filters

$('#departments-filter').on('change', function() {
        $("#location-filters input:checkbox:checked").prop('checked', false);
})

$('#location-filters').on('change', function() {
        $("#departments-filter input:checkbox:checked").prop('checked', false);
})

$('#mobile-department-filters').on('change', function() {
        $("#mobile-location-filters input:checkbox:checked").prop('checked', false);
})

$('#mobile-location-filters').on('change', function() {
        $("#mobile-department-filters input:checkbox:checked").prop('checked', false);
})

// functions


function getAllDepartments() {

    $.ajax({
        url: "./libs/php/getAllDepartments.php",
        type: 'POST',
        dataType: 'json',
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                for(i = 0; i < result.data.length; i++) {
                   $("#employeeDepartment").append("<option value='" + result['data'][i]['id'] + "'>" + result['data'][i]['name'] + "</option>")
                }

                for(i = 0; i < result.data.length; i++) {
                    $("#existingEmployeeDepartment").append("<option value='" + result['data'][i]['id'] + "'>" + result['data'][i]['name'] + "</option>")
                 }

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    }); 

}

getAllDepartments();


function getAllLocations() {

    $.ajax({
        url: "./libs/php/getAllLocations.php",
        type: 'POST',
        dataType: 'json',
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                for(i = 0; i < result.data.length; i++) {
                   $("#employeeLocation").append("<option value='" + result['data'][i]['name'] + "'>" + result['data'][i]['name'] + "</option>")
                }

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    }); 

}

})