$(function () {
    var reg = /#(\d+)/;
    var num = (reg.exec(window.location.href))[1];
    var i = num;

    function getFy() {
        $.ajax({
            type: 'get',
            url: 'http://139.199.157.195:9090/api/getmoneyctrlproduct?productid=' + i,
            success: function (msg) {
                var html = template('temp', msg);
                $('.big').html(html);
                $('#ctl00_ContentBody_Button1').on('click', function () {
                    if ($('textarea').val() == '') {
                        alert('没有评论');
                    } else {
                        alert('请先登录');
                    }
                })
                $('.loadpic').find('img').hide();
                var reg = /(\d+)./;
                var page = (reg.exec(msg.result[0].productId / 10 - 1));
                if (page == null) {
                    page = msg.result[0].productId / 10 - 1;
                } else {
                    page = page.input;
                }
                var money = $('.head>a')[0].href + "?pageid=" + page;
                $('.head>a')[0].href = money;
            }
        })
    }

    getFy();
});

