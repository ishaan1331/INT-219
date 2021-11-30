var likecount = 0;
$(document).ready(function() {
    $("button").click(function(e) {
        if (likecount % 2 == 0) {
            likecount++;
            $(".likecountdisplay").text(likecount);
            $(".likes").toggleClass("liked ");

        } else if (likecount % 2 != 0) {
            likecount--;
            $(".likecountdisplay").text(likecount);
            $(".likes").toggleClass("liked ");

        }
        if (likecount == 0) {
            $(".likecountdisplay").text("");
        } else {
            $(".likecountdisplay").show();
        }
    });
});