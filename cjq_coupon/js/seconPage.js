$(function (){
    function getQueryString(name) {
        var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        var r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return unescape(r[2]);
        }
        return null;
    }

    console.log(getQueryString("couponId"));
    //获取对应优惠券的详情页数据;
    function getKfc() {
        $.get("http://139.199.157.195:9090/api/getcouponproduct?couponid=" + getQueryString("couponId") + " ", function (res) {
            var html = template("quanbox", res);
            $(".quan-box>ul").html(html);
            /*动态生成的元素，只有在页面加载完成之后，才可以进行事件的绑定
             * 否则，事件是绑定不上去的*/
        //    $(".cover_box").on("click", function () {
        //        $(".cover")[0].style.display = "block";
        //    });
        //    $(".cover").on("click", function () {
        //        $(".cover")[0].style.display = "none";
        //    })
        });
    }

    getKfc();








})