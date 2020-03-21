function audioPlayer() {

    $("#playlist li a").dblclick(function (e) {
        var currentSong = $(this).parent().index();
        $("#playlist li audio")[currentSong].currentTime = 0;
        $("#playlist li audio")[currentSong].play();
        $("#playlist li").removeClass("current-song");
        $(this).parent().addClass("current-song");
        $(this).parent().removeClass("paused");
        $("#playlist li audio")[currentSong].addEventListener("ended", function () {
            currentSong++;
            if (currentSong === $("#playlist li a").length)
                currentSong = 0;
            $("#playlist li").removeClass("current-song");
            $("#playlist li:eq(" + currentSong + ")").addClass("current-song");
            $("#playlist li audio")[currentSong].play()
        });
    });


    $("#playlist li a").click(function (e) {
        var currentSong = $(this).parent().index();
        var items = $("#playlist li");
        var songsNumber = items.length;
        e.preventDefault();
        for (var i = 0; i < songsNumber; ++i) {
            if (i !== currentSong) {
                $("#playlist li audio")[i].pause();
                $("#playlist li audio")[i].currentTime = 0;
                $("#playlist li")[i].classList.add("paused");
            } else if (i === currentSong && $(this).parent().prop('class').includes("paused")) {
                $("#playlist li audio")[currentSong].play();
                $("#playlist li").removeClass("current-song");
                $(this).parent().addClass("current-song");
                $(this).parent().removeClass("paused");
                $("#playlist li audio")[currentSong].addEventListener("ended", function () {
                    currentSong++;
                    if (currentSong === $("#playlist li a").length)
                        currentSong = 0;
                    $("#playlist li").removeClass("current-song");
                    $("#playlist li:eq(" + currentSong + ")").addClass("current-song");
                    $("#playlist li audio")[currentSong].play()
                });
            } else {
                $("#playlist li audio")[currentSong].pause();
                $("#playlist li").removeClass("current-song");
                $(this).parent().addClass("current-song");
                $(this).parent().addClass("paused");
            }
        }
    });
}
