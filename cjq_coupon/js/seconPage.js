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
    //��ȡ��Ӧ�Ż�ȯ������ҳ����;
    function getKfc() {
        $.get("http://139.199.157.195:9090/api/getcouponproduct?couponid=" + getQueryString("couponId") + " ", function (res) {
            var html = template("quanbox", res);
            $(".quan-box>ul").html(html);
            /*��̬���ɵ�Ԫ�أ�ֻ����ҳ��������֮�󣬲ſ��Խ����¼��İ�
             * �����¼��ǰ󶨲���ȥ��*/
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