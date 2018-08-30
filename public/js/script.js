// var comp = Vue.component('tshirt-text', {
//     props: ['message'],
//     template: '<div class="edit-box marching-ants marching draggable rotatable">\n' +
//     '        <p class="tshirt-text" style="font-size:100%; color:black;">{{message}}</p>\n' +
//     '        <div class="handle drag"></div>\n' +
//     '        <div class="handle rotate"></div>\n' +
//     '        <div class="handle scale"></div>\n' +
//     '        <div class="handle delete"></div>\n' +
//     '    </div>'
// });

var vm = new Vue({
    el: '#app',
    data: {
        // declare message with an empty value
        message: ''
    },
});




$(".draggable").draggable(
    {
        containment: ".printable-area-box",
        cancel: ".rotate, .scale, .delete"
    });

$(".rotatable").rotatable(
    {
        handle: $(".rotate"),
        wheelRotate: false,
    });

$(".delete").on('click', function (e) {
    Vue.set(vm.$data, 'message', '');
});


// $(document).mouseup(function (e)
// {
//     var container = $(".edit-box"); // YOUR CONTAINER SELECTOR
//
//     if (!container.is(e.target) // if the target of the click isn't the container...
//         && container.has(e.target).length === 0 && $(".tshirt-input").val()!='') // ... nor a descendant of the container
//     {
//         settle();
//     }
// });
function settle()
{
    $(".edit-box").removeClass('marching-ants marching');
}
