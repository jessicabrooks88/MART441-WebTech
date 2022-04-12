$(document).ready(function(){
    $("#audiochange").click(function(){
        updateAudio();
    });

    $("#videochange").click(function(){
        updateVideo();
    });
});


function updateAudio()
{
    $("#song").attr("src", "beethoven.mp3"); 
}

function updateVideo()
{
    $("#film").attr("src", "pigeating.mp4");
}
