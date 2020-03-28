function audioPlayer() {

    $('#playlist li a span img').dblclick(function (e) {

        var currentSong = $(this).parent().parent().parent().index();
        $("#playlist li audio")[currentSong].currentTime = 0;
        $("#playlist li audio")[currentSong].play();
        $("#playlist li").removeClass("current-song");


        $(this).parent().parent().parent().addClass("current-song");
        $("#playlist li a span img")[currentSong].setAttribute('src', 'assets/img/UMEQ-01.png');
        $(this).parent().parent().parent().removeClass("paused");
        $("#playlist li audio")[currentSong].addEventListener("ended", function () {
            currentSong++;
            if (currentSong === $("#playlist li a").length)
                currentSong = 0;
            $("#playlist li").removeClass("current-song");
            $("#playlist li a span img")[currentSong].setAttribute('src', 'assets/img/UMEQ-01.png');
            $("#playlist li:eq(" + currentSong + ")").addClass("current-song");
            $("#playlist li audio")[currentSong].play()
        });
    });


    $('#playlist li a span img').click(function (e) {
      var currentSong = $(this).parent().parent().parent().index();
        var items = $("#playlist li");
        var songsNumber = items.length;
        e.preventDefault();
        for (var i = 0; i < songsNumber; ++i) {
            $("#playlist li a span img")[i].setAttribute('src', 'assets/img/UMEQ-02.png');
            if (i !== currentSong) {
                $("#playlist li audio")[i].pause();
                $("#playlist li audio")[i].currentTime = 0;
                $("#playlist li")[i].classList.add("paused");
            } else if (i === currentSong && $(this).parent().parent().parent().prop('class').includes("paused")) {
                $("#playlist li audio")[currentSong].play();
                $("#playlist li a span img")[currentSong].setAttribute('src', 'assets/img/UMEQ-01.png');
                $("#playlist li").removeClass("current-song");
                $(this).parent().parent().parent().addClass("current-song");
                $(this).parent().parent().parent().removeClass("paused");
                $("#playlist li audio")[currentSong].addEventListener("ended", function () {
                    currentSong++;
                    if (currentSong === $("#playlist li a").length)
                        currentSong = 0;
                    $("#playlist li").removeClass("current-song");
                    $("#playlist li a span img")[currentSong].setAttribute('src', 'assets/img/UMEQ-01.png');
                    $("#playlist li:eq(" + currentSong + ")").addClass("current-song");
                    $("#playlist li audio")[currentSong].play()
                });
            } else {
                $("#playlist li audio")[currentSong].pause();
                $("#playlist li").removeClass("current-song");
                $("#playlist li a span img")[currentSong].setAttribute('src', 'assets/img/UMEQ-01.png');
                $(this).parent().parent().parent().addClass("current-song");
                $(this).parent().parent().parent().addClass("paused");
            }
        }
    });

}

$(document).ready(function () {

    $("#playlist li a span img").mouseover(function (e) {
        this.setAttribute('src', 'assets/img/UMEQ-01.png');
    });
    $("#playlist li a span img").mouseout(function (e) {
        if(!$(this).parent().parent().parent().prop('class').includes("current-song"))
            this.setAttribute('src', 'assets/img/UMEQ-02.png');
    });

});
