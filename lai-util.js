var laiUtil = {};

laiUtil.setRandomBgColor = function (selector) {
    $(selector).each(function () {
        var rgba = laiUtil.getRandomBgColor();
        $(this).css('background-color', rgba);
    })
};
laiUtil.getRandomBgColor = function () {
    var r = laiUtil.getRandomNumber(0,255);
    var g = laiUtil.getRandomNumber(0,255);
    var b = laiUtil.getRandomNumber(0,255);
    var a = laiUtil.getRandomNumber(50,100) / 100;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a +')';
};
laiUtil.getRandomNumber = function (min, max) {
    var range = max - min;
    var result = Math.floor(Math.random() * range) + min;
    return result;
};