
var vm = new Vue({
    el:'#app',
    data: {
        // declare message with an empty value
        message: ''
    },
});


$( ".draggable" ).draggable({containment: "parent"});
