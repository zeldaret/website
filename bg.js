
var imgSrc = "img/vrbox_cur.png";

// background scroll animation
var bgImg = new Image();
bgImg.onload = function()
{
    var factor = (window.innerHeight/this.height);
    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = '@keyframes bg_anim {\
        from {background-position-x:0%;} \
        to {background-position-x:-' + (this.width*(factor)) + '%;} \
    }';
    document.getElementsByTagName('head')[0].appendChild(style);

    var bodyStyle = document.getElementsByTagName("body")[0].style;
    bodyStyle.animationDuration = (1000*(factor)) + "s"
    bodyStyle.backgroundImage = "url(" + imgSrc + ")";
    bodyStyle.backgroundRepeat = "repeat-x";
    bodyStyle.backgroundAttachment = "fixed";
    bodyStyle.backgroundSize = "cover";
    bodyStyle.animationName = "bg_anim";
    bodyStyle.animationIterationCount = "infinite";
    bodyStyle.animationTimingFunction = "linear";
}
bgImg.src = imgSrc;