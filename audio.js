var audio = new Audio('file_select.mp3'); 
audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
}, false);
audio.pause();

function toggleMute()
{
    if (!audio.paused)
        audio.pause();
    else
    {
        audio.currentTime = 0;
        audio.play();
    }
    var html = '<span style="color:' + (audio.paused? "red" : "green") + '">' + (audio.paused? "Off" : "On") + "</span>";
    document.getElementById("toggle_audio_mute").innerHTML = "Audio: " + html;
}