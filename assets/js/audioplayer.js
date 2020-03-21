function audioPlayer() {
    var currentSong = 0;
    $("#playlist li audio")[currentSong].play();

    function playOnClick() {
          currentSong = $(this).parent().index();
          var items = $("#playlist li");
          var songsNumber = items.length;
          e.preventDefault();
          $("#playlist li audio")[currentSong].play();
          $("#playlist li").removeClass("current-song");
          $(this).parent().addClass("current-song");
          for (var i = 0; i < songsNumber; ++i) {
            if(i != currentSong) {
                $("#playlist li audio")[i].pause();
                $("#playlist li audio")[i].currentTime = 0;
              }
          }
    }

    $("#playlist li audio").onplay = function() {
      currentSong = $(this).parent().index();
      var items = $("#playlist li");
      var songsNumber = items.length;
      e.preventDefault();
      $("#playlist li audio")[currentSong].play();
      $("#playlist li").removeClass("current-song");
      $(this).parent().addClass("current-song");
      for (var i = 0; i < songsNumber; ++i) {
        if(i != currentSong) {
            $("#playlist li audio")[i].pause();
            $("#playlist li audio")[i].currentTime = 0;
          }
      }
    };

    $("#playlist li a").click(function (e) {
        currentSong = $(this).parent().index();
        var items = $("#playlist li");
        var songsNumber = items.length;
        e.preventDefault();
        $("#playlist li audio")[currentSong].play();
        $("#playlist li").removeClass("current-song");
        $(this).parent().addClass("current-song");
        for (var i = 0; i < songsNumber; ++i) {
          if(i != currentSong) {
              $("#playlist li audio")[i].pause();
              $("#playlist li audio")[i].currentTime = 0;
            }
        }
    });

    $("#playlist #play").click(function (e) {
        currentSong = $(this).parent().index();
        var items = $("#playlist li");
        var songsNumber = items.length;
        e.preventDefault();
        $("#playlist li audio")[currentSong].play();
        $("#playlist li").removeClass("current-song");
        $(this).parent().addClass("current-song");
        for (var i = 0; i < songsNumber; ++i) {
          if(i != currentSong) {
              $("#playlist li audio")[i].pause();
              $("#playlist li audio")[i].currentTime = 0;
            }
        }
    });

    $("#playlist #pause").click(function (e) {
        currentSong = $(this).parent().index();
        var items = $("#playlist li");
        var songsNumber = items.length;
        e.preventDefault();
        $("#playlist li audio")[currentSong].play();
        $("#playlist li").removeClass("current-song");
        $(this).parent().addClass("current-song");
        for (var i = 0; i < songsNumber; ++i) {
          if(i != currentSong) {
              $("#playlist li audio")[i].pause();
              $("#playlist li audio")[i].currentTime = 0;
            }
        }
    });

    $("#playlist li audio")[currentSong].addEventListener("ended", function () {
        currentSong++;
        if(currentSong === $("#playlist li a").length)
            currentSong = 0;
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#playlist li audio")[currentSong].play()
    })
}
