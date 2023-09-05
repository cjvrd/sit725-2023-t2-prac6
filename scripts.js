const clickMe = () => {
    alert("Thanks for clicking me. Hope you have a nice day!")
};

const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="' + item.path + '">' +
            '</div><div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title + '<i class="material-icons right">more_vert</i></span><p>' + '</p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.subtitle + '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.desciption + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend)
    });
};

const submitForm = () => {
    let formData = {};
    formData.title = $('#title').val();
    formData.subtitle = $('#subtitle').val();
    formData.path = $('#path').val();
    formData.description = $('#description').val();

    console.log("Form Data Submitted: ", formData)
    postCat(formData);
};

function postCat(cat) {
    $.ajax({
        url: '/api/cats',
        type: 'POST',
        data:cat,
        success: (result) => {
            if (result.statusCode === 201) {
                alert('cat post successful');
            }
        }
    });
}

function getAllCats() {
    $.get('/api/cats', (response) => {
        // result is in array format, soo we can use it
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    });
}

let socket = io();
socket.on('number',(msg)=>{
    console.log('Random Number: ' + msg);
});

$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('#clickMeButton').click(() => {
        clickMe();
    })
    $('#formSubmit').click(() => {
        submitForm();
    })
    $('.modal').modal();
    getAllCats();
});