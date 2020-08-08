$(function () {
    $('[data-toggle="tooltip"]').tooltip();
    $(".wjs_notice .notice2").hide();
    var flag = 2;
    $(".wjs_notice .notice1 .notice_toggle").click(
        function () {
            if(flag % 2  == 1){
                $(".wjs_notice .notice2").hide();
            }else {
                $(".wjs_notice .notice2").show();
            }
            flag++;
        }
    );
    var ul = $(".wjs_product .parent_tab .nav-tabs");
    var lis = ul.find("li");
    var tolalWidth = 0;
    lis.each(function (index, vaule) {
        tolalWidth += $(vaule).outerWidth(true);
    });
    ul.width(tolalWidth);
    var myScroll = new IScroll(".parent_tab",{
        scrollX:true, scrollY:false
    });
});