// var inputCount = 0;
// var handlesHtml = '<div class="handle drag"></div>\n' +
// '        <div class="handle rotate"></div>\n' +
// '        <div class="handle scale"></div>\n' +
// '        <div class="handle delete"></div>\n';
//
// $(document).mousedown(function (e) {
//     // if mousedown is at an edit box then reselect that edit box else settle (TO DO!!!)
//
//     var container = $(".text-element");
//
//     if (!container.is(e.target)
//         && container.has(e.target).length === 0
//         && !$(".tshirt-input").is(e.target)
//         && $(".tshirt-input").val() !== '') {
//         settle();
//     } else {
//         settle();
//         reselect(e.target.closest('.text-element'));
//         // console.log('here');
//
//     }
//
//
// });
//
// function settle() {
//     $(".edit-box").removeClass('marching-ants marching selected');
//     $(".edit-box>div.handle").hide();
//     $('.tshirt-input').val('');
//     inputCount++;
// }
//
// function reselect(textContainer) {
//     var editBox = $(textContainer).find('.edit-box');
//
//     if(!editBox.hasClass('selected')) {
//         editBox.addClass('marching-ants marching selected');
//         editBox.find('.handle').show();
//     }
// }
//
//
// function assignProperties(textContainer) {
//     var editBox = $(textContainer).find('.edit-box');
//     editBox.draggable(
//         {
//             // containment: ".printable-area-box",
//             cancel: ".rotate, .scale, .delete"
//         });
//
//     editBox.rotatable(
//         {
//             handle: $(".rotate"),
//             wheelRotate: false,
//         });
//
//     editBox.find(".delete").on('click', function (e) {
//         textContainer.remove();
//         $('.tshirt-input').val('');
//     });
// }
//
// $('#app').on('keyup', function (e) {
//     var tshirtInput = $.trim($(this).find('.tshirt-input').val());
//     var textContainer = $("#element" + inputCount).length ? $("#element" + inputCount) : $('<div class="text-element" id="element' + inputCount + '"></div>').appendTo('.printable-area-box');
//
//     var inputHtml = '<div class="edit-box selected marching-ants marching draggable rotatable">\n' +
//         '        <p class="tshirt-text" style="font-size:100%; color:black;">' + tshirtInput + '</p>\n' + handlesHtml +
//         '    </div>';
//     var textBoxHtml = tshirtInput !== '' ? inputHtml : textContainer.remove();
//
//     textContainer.empty();
//     textContainer.append(textBoxHtml);
//
//     assignProperties(textContainer);
// });
//
//

// var imgURL = 'http://i.imgur.com/8rmMZI3.jpg';

// var canvas = new fabric.Canvas('tshirt-canvas');


var inputCount = 0;
var fontsList = getFontsList();
var select = document.getElementById("font-family");
fontsList.forEach(function(font) {
    var option = document.createElement('option');
    option.innerHTML = font;
    option.value = font;
    select.appendChild(option);
});

// Apply selected font on change
document.getElementById('font-family').onchange = function() {
    var activeObject = canvas.getActiveObject();

    if (activeObject === undefined || activeObject === null) {
        return false;
    }

    if (this.value !== 'Times New Roman') {
        loadAndUse(this.value);
    } else {
        canvas.getActiveObject().set("fontFamily", this.value);
        canvas.requestRenderAll();
    }
};

function loadAndUse(font) {
    var myFont = new FontFaceObserver(font);
    myFont.load()
        .then(function() {
            // when font is loaded, use it.
            canvas.getActiveObject().set("fontFamily", font);
            canvas.requestRenderAll();
        }).catch(function(e) {
        console.log(e);
        alert('font loading failed ' + font);
    });
}

// console.log(fontsList);

$(".colorPickSelector").colorPick({
    'initialColor': '#fff',
    'allowRecent': true,
    'recentMax': 5,
    'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1", "#bdc3c7", "#95a5a6", "#7f8c8d"],
    'onColorSelected': function () {
        this.element.css({'backgroundColor': this.color, 'color': this.color});
        $('.image-container').css({'backgroundColor': this.color, 'color': this.color});
    }
});


$('#app').on('keyup', function (e) {
    var tshirtInput = $.trim($(this).find('.tshirt-input').val());

    var activeObject = canvas.getActiveObject();

    if (tshirtInput === '') {
        canvas.remove(activeObject);
        return false;
    }

    if (activeObject === undefined || activeObject === null) {

        addNewTextElement(tshirtInput);
    } else {
        appendText(activeObject, tshirtInput);
    }
    putDimensions();
});

function addNewTextElement(tshirtInput) {
    var elementId = 'element' + inputCount;
    var newElement = canvas.add(new fabric.Text(tshirtInput, {
        fontFamily: 'Engebrechtre',
        left: 100,
        top: 100,
        id: elementId
    }));

    newElement.getObjects().forEach(function (o) {
        if (o.id === elementId) {
            canvas.setActiveObject(o);
        }
    });

    inputCount++;
}

function appendText(activeObject, tshirtInput) {
    activeObject.set({
        text: tshirtInput
    });
    canvas.renderAll();
}

var canvas = new fabric.Canvas('tshirt-canvas');

fabric.Canvas.prototype.customiseControls({
    tl: {
        action: 'rotate',
        cursor: 'crosshair'
    },
    bl: {           //Overridden function (fabric-custom.js line:582)
        action: function (e, target) {
            var _this = this;
            if (this.getActiveObjects() && this.getActiveObjects() !== 'undefined') {
                this.getActiveObjects().forEach(function (o) {
                    o.off();
                    _this.discardActiveObject();
                    _this.remove(o);
                });

            } else {
                target.off();
                this.discardActiveObject();
                this.remove(target);
            }
            $('.tshirt-input').val('');

        },
        cursor: 'pointer'
    },

    br: {
        action: 'drag',
        cursor: 'move'
    }
});

fabric.Object.prototype.customiseCornerIcons({
    settings: {
        borderColor: '#A9A9A9',
        cornerColor: 'black',
        cornerSize: 12
    },
    tl: {
        icon: 'icons/rotate.svg'
    },
    tr: {
        icon: 'icons/scale.svg'
    },
    bl: {
        icon: 'icons/remove.svg'
    },
    br: {
        icon: 'icons/move.svg'
    },
    mb: {
        icon: 'icons/vertical-resize.svg'
    },
    mt: {
        icon: 'icons/vertical-resize.svg'
    },
    ml: {
        icon: 'icons/horizontal-resize.svg'
    },
    mr: {
        icon: 'icons/horizontal-resize.svg'
    }
});

fabric.Object.prototype.setControlsVisibility({
    mtr: false // middle top disable
});


function putDimensions() {
    var width = parseFloat(canvas.getActiveObject().getScaledWidth());
    var height = parseFloat(canvas.getActiveObject().getScaledHeight());

    $('div#dimension>span').text(Math.floor(width) + 'X' + Math.floor(height));
}

canvas.on('object:scaling', function () {
    putDimensions();
});

function selectElement(self) {
    if (self.getActiveObjects() && self.getActiveObjects() !== 'undefined' && self.getActiveObjects().length === 1) {
        $('.tshirt-input').val(self.getActiveObjects()[0].text);
    }
    ;

    putDimensions();
    //TODO make the textbox focus on select created or updated

}


canvas.on('selection:created', function () {
    selectElement(this);
});

canvas.on('selection:updated', function () {
    selectElement(this);
});


function unSelectElement() {
    $('.tshirt-input').val('');
    $('div#dimension>span').empty();
}

canvas.on('selection:cleared', function () {
    unSelectElement();
});

canvas.selection = false;

function toSvg() {
    console.log(canvas.toSVG());
}

function getFontsList() {
    var fontsArray = [];
    var pattern = "font-family:(.*); src";

    for (var i=0;i<document.styleSheets[3].cssRules.length;i++)
    {
        var urls=document.styleSheets[3].cssRules[i].cssText.match(pattern);
        // console.log(urls[1]);

        if (urls)
        {
            var font = urls[1].trim();

            if (font.charAt(0) === '"' && font.charAt(font.length -1) === '"')
            {
                font = font.substr(1,font.length -2);
            }

            fontsArray.push(font);
        }
    }
    return fontsArray;
}
