/**
 * Created by Administrator on 2017/2/14.
 */
$(function () {
    init();
    function init() {
        setClose();
        setDis($('#dis-list'));
        setMenu($("#mmb-menu"));
        //$("#toTop").scrollToTop(1000);
    }

    //xr礼包遮罩层关闭
    function setClose() {
        //清楚存储
        //window.localStorage.clear();

        $("#mmb-gift").on("click", ".gift>.close", function () {
            // 保存起来...
            window.localStorage.setItem('display', $("#mmb-gift").css("display"));
            $("#mmb-gift").css("display", "none");
            $("#mmb-smallgift").css("display", "block");
        });

        if (window.localStorage.getItem('display')) $("#mmb-gift").css("display", "none");

        //...E:\0         前端与移动开发。。。。。。。\html5 雷俊草\06.HTML5\02.其他资料\示例代码 localStorage
        $("#mmb-smallgift").on("click", function () {
            $("#mmb-gift").css("display", "block");
            $("#mmb-smallgift").css("display", "none");
        })
    }

    //加载更多
    function showMore() {
        var flag = true;
        $("#mmb-menu").on("click", ".row>div:nth-child(8)", function () {
            if (flag) {
                $("#mmb-menu>.row>div:nth-last-child(-n+4)").slideToggle().removeClass("hidden");
                flag = false;
                setTimeout(function () {
                    flag = true;
                }, 500);
            }
        })

    }

    //得到菜单
    function setMenu(dom) {
        $.ajax({
            url: "http://139.199.157.195:9090/api/getindexmenu",
            type: "get",
            dateType: "json",
            success: function (data) {
                var html = template("mmbMenu", data);
                dom.html(html);
                showMore();
            }
        });
    };
    //得到折扣列表
    function setDis(dom) {
        $.ajax({
            url: "http://139.199.157.195:9090/api/getmoneyctrl",
            type: "get",
            dataType: "json",
            success: function (data) {
                var html = template('listDiscount', data);
                dom.html(html);
            }
        });
    };
})