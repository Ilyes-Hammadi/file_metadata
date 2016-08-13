$(document).ready(() => {

  $('#submit').click(() => {
    var formData = new FormData($("form#data")[0]);

    $.ajax({
        url: '/',
        type: 'POST',
        data: formData,
        async: false,
        success: (data) => {
            alert('File size: ' + data.fileSize)
        },
        cache: false,
        contentType: false,
        processData: false
    });

    return false;
  })

})
