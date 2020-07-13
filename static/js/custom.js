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
<<<<<<< HEAD
    $(".star-rating").html(function() {
        let starIconsHtml = '';
        //inside an event handler
        const starNum = $(this).attr("class").split(" ")[1];
        for (let i = 0; i < starNum; i++) {
            starIconsHtml += '<input type = "radio" name = "rating" value = "1"><i style="opacity:1;"></i>';
        }
        return starIconsHtml;
    });

    // side menu
    $(".nav_btn").click(function() {
        $(".main_wrapper").toggleClass("side-menu-open");
        // close menu
        $(".main_wrapper").click(function() {

        });
    });
=======
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
>>>>>>> parent of 0fcf11c... implemented menu tab change and star rating
});