$(function () {
    $.ajax({
        url: '/engine/dle_alloha/ajax.php',
        method: 'post',
        dataType: 'json',
        data: {id: newsIdAlloha},
    }).done(function(data){
        console.log(data);
    }).fail(function (jqXHR, exception, errorThrown) {
        if (jqXHR.status == 500) {
            console.log('Internal Server Error (500).');
        } else if (exception === 'timeout') {
            console.log('Time out error.');
        } else {
            console.log('Uncaught Error. ' + jqXHR.responseText);
        }
    });
});