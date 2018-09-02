// var component = Vue.component('tshirt-text', {
//     props: ['message'],
//     template: '<div class="edit-box marching-ants marching draggable rotatable">\n' +
//     '        <p class="tshirt-text" style="font-size:100%; color:black;">{{message}}</p>\n' +
//     '        <div class="handle drag"></div>\n' +
//     '        <div class="handle rotate"></div>\n' +
//     '        <div class="handle scale"></div>\n' +
//     '        <div class="handle delete"></div>\n' +
//     '    </div>'
// });
//
// var vm = new Vue({
//     el: '#app',
//     data: {message:''},
// });

//
// $(".draggable").draggable(
//     {
//         containment: ".printable-area-box",
//         cancel: ".rotate, .scale, .delete"
//     });
//
// $(".rotatable").rotatable(
//     {
//         handle: $(".rotate"),
//         wheelRotate: false,
//     });
//
// $(".delete").on('click', function (e) {
//     Vue.set(vm.$data, 'message', '');
// });

var inputCount = 0;

$(document).mousedown(function (e) {
    // if ($(".edit-box").length) {
    //     return false;
    // }

    var container = $(".edit-box"); // YOUR CONTAINER SELECTOR
    // if ($(".edit-box").length) {
    //     return false;
    // }

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0 && $(".tshirt-input").val() !== '') // ... nor a descendant of the container
    {
        settle();
    }
});

// var borderCss = 'position: absolute;\n' +
//     '    white-space: pre-wrap;\n' +
//     '    transform-origin: 0 0;\n' +
//     '    background-image: linear-gradient(90deg, #ddd 50%, #333 0), linear-gradient(90deg, #ddd 50%, #333 0), linear-gradient(180deg, #ddd 50%, #333 0), linear-gradient(180deg, #ddd 50%, #333 0);\n' +
//     '    background-color: transparent;';

function settle() {
    $(".text-entered").removeClass('marching-ants marching');
    $(".text-entered>div.handle").remove();
    $('.tshirt-input').val('');
    inputCount++;
}

// $(".tshirt-input").on('change', function () {
//     $(".printable-area-box").append(tshirtBoxHtml);
// });


// $('.tshirt-input').on('focus', function () {
//     var textContainer = '<div id="text-portion"></div>';
//     $(this).find('.printable-area-box').append(textContainer);
// });

function assignProperties(textContainer) {
    var editBox = $(textContainer).find('.edit-box');
    editBox.draggable(
        {
            containment: ".printable-area-box",
            cancel: ".rotate, .scale, .delete"
        });

    editBox.rotatable(
        {
            handle: $(".rotate"),
            wheelRotate: false,
        });
}

$('#app').on('keyup', function (e) {


    // var textContainer = $('.text-element').length ? $('.text-element') : $('<div class="text-element" id="element'+inputCount+'"></div>').appendTo('.printable-area-box');

    // var textContainer = $('<div class="text-element" id="element'+inputCount+'"></div>').appendTo('.printable-area-box');

    //if input empty, create div; if input not empty, add to the div

    // var textContainer = $('.text-element').length ? $('.text-element') : $('<div class="text-element" id="element'+inputCount+'"></div>').appendTo('.printable-area-box');
    // inputCount++;
    // var textContainer =  $(this).find('#text-portion');
    // $(this).find('.printable-area-box').append(textContainer);


    var tshirtInput = $.trim($(this).find('.tshirt-input').val());

    if (tshirtInput === '') return;

    // var textContainer;
    // if(tshirtInput!=='') {
    //     textContainer =
    // }

    var textContainer = $("#element" + inputCount).length ? $("#element" + inputCount) : $('<div class="text-element" id="element' + inputCount + '"></div>').appendTo('.printable-area-box');


    var inputHtml = '<div class="edit-box text-entered marching-ants marching draggable rotatable">\n' +
        '        <p class="tshirt-text" style="font-size:100%; color:black;">' + tshirtInput + '</p>\n' +
        '        <div class="handle drag"></div>\n' +
        '        <div class="handle rotate"></div>\n' +
        '        <div class="handle scale"></div>\n' +
        '        <div class="handle delete"></div>\n' +
        '    </div>';
    var textBoxHtml = tshirtInput !== '' ? inputHtml : textContainer.remove();//To-work
    //
    // if (tshirtInput !== '') {
    //     textBoxHtml = inputHtml;
    //     console.log("keyup!");
    //     assignProperties(textBoxHtml);
    // } else {
    //     textBoxHtml = textContainer.remove();
    // }


    textContainer.empty();
    textContainer.append(textBoxHtml);

    assignProperties(textContainer);

    // assignProperties(textBox)
});


