/**
 * Created by User on 2017/8/18.
 */
$(function () {
    var lis=$(".li_st");
    var show=$(".show_box");
    for (var i =0 ;i<lis.length ;i++){
        lis[i].onclick=function () {
            var img_src=$(this).attr("data-img");
            var title=$(this).attr("data-title");
            var dis=$(this).attr("data-dis");
            $(".s_left >img").attr("src",img_src);
            $(".s_title").html(title);
            $(".s_des").html(dis);
            $(show).addClass("ssss");
        }

    }
    $(show).click(function () {
        $(this).removeClass("ssss");
    });
    $(".close_btn").click(function () {
        $(show).removeClass("ssss");
    })
})