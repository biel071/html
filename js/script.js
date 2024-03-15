const VideoTag = document.getElementById('VideoTag')

setInterval(() => {
    if (VideoTag.ended) {
        VideoTag.currentTime = 0
        VideoTag.play()
    }   
});