$(function (){
    getYouhui();


    function getYouhui(){
        $.ajax({
            type:'get',
            url:'http://139.199.157.195:9090/api/getcoupon',
            data:{},
            success: function (res) {
                console.log(res)
                var html = '';
                html += template('youhui',res);
                console.log(html)
                $("#yhq>.container>.row").html(html);

            }
        })
    }

})