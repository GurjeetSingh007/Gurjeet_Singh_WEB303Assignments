$(function(){
    getDataByJson();
});

function getDataByJson(){
    $.getJSON("team.json", function(result){
        $.each(result, function(index, data){
            $("div#team").append(`<h2>${data.name}</h2><h5>${data.position}</h5><p>${data.bio}</p>`);
        });
    });
};

function getAjaxData(){
    $.ajax({
        url: "team.json",
        beforeSend: function(){
            $("div#team").html(`<h1>Loading...</h1>`);
        },
        error: function(){
            $("div#team").html(`<h1>The content could not be retrieved</h1>`);
        },
        success: function(result){
            setTimeout(function() {
                $("div#team").html("");
                $.each(result, function(index, givendata){
                    $("div#team").append(`<h2>${givendata.name}</h2><h5>${givendata.position}</h5><p>${givendata.bio}</p>`);
                });
            }, 3000);
        }
    });
};