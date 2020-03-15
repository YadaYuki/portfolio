$(function() {
    // // tab click change content
    $(".nav_portfolio li").on("click", () => {
        $(".is_active").removeClass("is_active");
        $(this).addClass("is_active");
        $(".is_show").removeClass("is_show");
        var index = $('.nav_portfolio li').index(this);
        alert(index);
        $(".content_wrapper").eq(idx).addClass("is_show");
    });

    $(".nav_btn").click(() => {});

    // star rating
    // $(".star-rating").html(() => {
    //     let starIconsHtml = '';
    //     //inside an event handler
    //     const starNum = $(this).attr("class").split(" ")[1];
    //     alert(starNum);
    //     for (let i = 0; i < starNum; i++) {
    //         starIconsHtml += '<input type = "radio" name = "rating" value = "1"><i style="opacity:1;"></i>';
    //     }
    //     return starIconsHtml;
    // });
});