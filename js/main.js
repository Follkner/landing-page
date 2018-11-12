$('.minimized').click(function(event) {
    let i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
        left: ($(document).width() - $('#magnify').outerWidth())/2,
        top: ($(window).height() - $('#magnify').outerHeight())/2
    });
    $('#overlay, #magnify').fadeIn('fast');
});
  
$('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
        $('#close-popup, #magnify, #overlay').remove();
    });
});



let vid = document.getElementById("bgvid");
let pauseButton = document.querySelector("#btn-play");

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function(){
  vid.pause();
  vidFade();
}); 

pauseButton.addEventListener("click", function() {
  let pathBtn = $(this).attr('src');
  (pathBtn == "icons/icon-play.png")?$(this).attr("src", "icons/icon-pause.png"): $(this).attr("src", "icons/icon-play.png");

  vid.classList.toggle("stopfade");

  vid.paused? vid.play(): vid.pause();
})