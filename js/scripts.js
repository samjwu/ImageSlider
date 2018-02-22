$(document).ready(function() {
    var currimg = 0;
    var imagewidth = 1000;

    var window = $("<div id='window'></div>");
    var img = $("<div id='img'></div>");
    var buttons = $("<div id='leftbutton'><</div><div id='rightbutton'>></div>");
    var wrapper = $("<div id='wrapper'></div>");

    var slider = $("slider");

    var imgsrcs = ["https://img00.deviantart.net/0de0/i/2017/187/0/b/afternoon_coffee_by_sjwu-dbfcmku.jpg","https://img00.deviantart.net/9f86/i/2017/224/3/b/photorealistic_bread_by_sjwu-dbj9k5i.jpg","https://img00.deviantart.net/5f25/i/2017/232/a/0/cave_by_sjwu-dbkreqc.jpg","https://img00.deviantart.net/ffb6/i/2017/188/1/8/castle_in_fog_by_sjwu-dbfhvgm.jpg","https://img00.deviantart.net/c4c8/i/2017/211/4/8/blue_earth_hologram_by_sjwu-dbhf3lt.jpg","https://img00.deviantart.net/ac49/i/2017/239/9/0/photorealistic_earth_by_sjwu-dbljjau.jpg"];
    var imgcount = imgsrcs.length;


    slider.append(window);
    $("#window").append(img);
    $("#window").append(buttons);

    for(i = 0; i > imgcount; i++) {
        $("img").append("<img src='" + imgsrcs[i] + "'>")
    }
});