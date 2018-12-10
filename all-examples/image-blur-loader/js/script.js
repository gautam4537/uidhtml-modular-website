function pageLoad() {
    var imgHtmlCollection = document.images;

    for (var i = 0; i < imgHtmlCollection.length; i++) {
        (function(index) {
            setTimeout(function() {
                var img_w = imgHtmlCollection[index].width;
                var img_h = imgHtmlCollection[index].height;
                var wrapper = document.createElement('div');
                wrap(imgHtmlCollection[index], wrapper);
                var canvas = document.createElement('canvas');
                canvas.width = img_w;
                canvas.height = img_h;
                imgHtmlCollection[index].parentNode.appendChild(canvas);
                var ctx = canvas.getContext('2d');
                var img = new Image();
                img.onload = function() {
                    ctx.drawImage(img, 0, 0, img_w, img_h);
                    canvas.classList.add('active');
                }
                var imgName = (imgHtmlCollection[index].src).replace('_blur', '');
                img.src = imgName;
            }, 50)
        })(i);
    }
}

function wrap(elem, wrapper) {
    elem.parentNode.insertBefore(wrapper, elem);
    wrapper.appendChild(elem);
}

window.addEventListener('load', pageLoad, false)