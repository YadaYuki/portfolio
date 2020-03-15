$(function() {
    // when page loaded.
    $(document).ready(function() {
        $("#thisSiteModal").modal("show");
    });
    // // tab click change content
    $(".menu_list li").click(function() {
        var index = $('.menu_list li').index(this);
        // nav link active
        $(".is_active").removeClass("is_active");
        $(this).addClass("is_active");
        $(".content_wrapper").removeClass("is_show").eq(index).addClass("is_show");
    });

    // star rating
    $(".star-rating").html(function() {
        let starIconsHtml = '';
        //inside an event handler
        const starNum = $(this).attr("class").split(" ")[1];
        for (let i = 0; i < starNum; i++) {
            starIconsHtml += '<input type = "radio" name = "rating" value = "1"><i style="opacity:1;"></i>';
        }
        return starIconsHtml;
    });
});