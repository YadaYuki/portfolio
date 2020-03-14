// tab click change content
$(".tab").on("click", () => {
    $(".is_active").removeClass("is_active");
    $(this).addClass("is_active");
    $(".is_show").removeClass("is_show");
    const className = $(this).attr("class");
    $(".content_wrapper").eq(idx).addClass("is_show");
});
// star rating
$(".star-rating").html(() => {
    let starIconsHtml = '';
    //inside an event handler
    const starNum = $(this).attr("class").split(" ")[1];
    for (let i = 0; i < starNum; i++) {
        starIconsHtml += '<input type = "radio" name = "rating" value = "1"><i style="opacity:1;"></i>';
    }
    return starIconsHtml;
});