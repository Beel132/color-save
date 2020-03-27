let colors_array = [
    '#4bb543', // success green
    '#F2CB07', // traffic yellow
    '#f32013', // danger / stop red
    '#EF5E50', // ubisoft orange
    '#55efc4', // flatUI light-green
    '#FF5C62', // calculator gum
    '#fc5185', // todo 'pink'
    '#E63946', // API red
    '#400082', // strong purple
    '#7058C1', // rocketseat purple
    '#4a47a3', // circle decoration color
    '#a278b5', // circle decoration color
    '#916dd5', // circle decoration color
    '#d89cf6', // circle decoration color
    '#be9fe1', // circle decoration color
    '#e1ccec', // circle decoration color
    '#f0e3ff', // circle decoration color
];

let a = $('#colors--container').html();

for (let j = 1; j < colors_array.length; j++)
    $('#colors--container').append(a);

let color_box_class = $('.color--box');

let color_box_content = $('.color--box').html();

for (let i = 0; i < color_box_class.length; i++) {

    color_box_class[i].style.background = colors_array[i];

    color_box_class[i].style.boxShadow = `0 0 20px ${colors_array[i]}`;
}

color_box_class.on('click', function () {
    let background = rgb2hex($(this).css("background-color"));
    copyToClipboard(background);
});

// --

// convert rgb color to hex
function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
    let hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
    return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}

// copy to clipboard
const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};
