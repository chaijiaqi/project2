//默认页面的数据获取
$(function () {

        var Data = {};
        var Total = 78;
        var _shopid = 1;
        var _areaid = 0;
        if ((window.location.href) == null) {
            _shopid = 1;
            _areaid = 0;
        } else {
            _shopid = 1;
            _areaid = num;
        }


        init();
        function init() {
            getShopping();
        }

        function getShopping() {
            $.get("http://139.199.157.195:9090/api/getgsproduct?shopid=" + _shopid + "&areaid=" + _areaid + "", function (res) {
                Data.result = res.result.concat(res.result);
                Data.result = Data.result.concat(res.result);
                render();

                /*  var html = template("contain", res);
                 $('#containTpl').html(html);*/
            });
        }

        function render() {
            // 已经加载了的li标签的个数
            var liLength = $("#containTpl li").length;
            if (liLength >= Total) {
                return;
            }
            var newRes = {result: []};
            var length = 8;
            if (Data.result.length <= 8) {
                length = Data.result.length;
            }
            for (var i = 0; i < length; i++) {
                //  shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
                newRes.result.push(Data.result.shift());
            }

            var html = template("contain", newRes);
            $('#containTpl').append(html);
        }


        var isLoad = false;
        window.onscroll = function () {
            if (isLoad == true) {
                return;
            } else {
                isLoad = true;
                var height = $("#containTpl").height()+$(".head-bar").height()+$(".hd").height() - $(document.body).height();
                var distanceBottom = height - $(document.body).scrollTop();
                if (distanceBottom < 50) {
                    render();
                }
                isLoad = false;
            }

        }
    });




//菜单切换
var flag = true;

$('.filter>ul>li:nth-child(1)>a').on('click', function () {
    if (flag) {
        $('.popsort.popbox').css('display', 'block');
        $('.popprice.popbox').css('display', 'none');
        $('.popcat.popbox').css('display', 'none');
        $('.popsearch.popbox').css('display', 'none');
        $('.filter>ul>li:nth-child(1)').addClass('on');
        $('.filter>ul>li:nth-child(2)').removeClass('on');
        $('.filter>ul>li:nth-child(3)').removeClass('on');
        $('.search').removeClass('on');
        flag = false;
        flag2 = true;
        flag3 = true;
        flag1 = true;

    } else {
        $('.popsort.popbox').css('display', 'none');
        $('.filter>ul>li:nth-child(1)').removeClass('on');
        flag = true;
    }
});
var flag1 = true;
$('.filter>ul>li:nth-child(2)>a').on('click', function () {

    if (flag1) {
        $('.popsort.popbox').css('display', 'none');
        $('.popcat.popbox').css('display', 'none');
        $('.popprice.popbox').css('display', 'block');
        $('.popsearch.popbox').css('display', 'none');
        $('.filter>ul>li:nth-child(1)').removeClass('on');
        $('.filter>ul>li:nth-child(2)').addClass('on');
        $('.filter>ul>li:nth-child(3)').removeClass('on');
        $('.search').removeClass('on');
        flag = true;
        flag2 = true;
        flag3 = true;
        flag1 = false;
    } else {
        $('.popprice.popbox').css('display', 'none');
        $('.filter>ul>li:nth-child(2)').removeClass('on');
        flag1 = true;
    }
})
var flag2 = true;
$('.filter>ul>li:nth-child(3)>a').on('click', function () {
    if (flag2) {
        $('.popsort.popbox').css('display', 'none');
        $('.popcat.popbox').css('display', 'block');
        $('.popprice.popbox').css('display', 'none');
        $('.popsearch.popbox').css('display', 'none');
        $('.filter>ul>li:nth-child(1)').removeClass('on');
        $('.filter>ul>li:nth-child(2)').removeClass('on');
        $('.filter>ul>li:nth-child(3)').addClass('on');
        $('.search').removeClass('on');
        flag2 = false;
        flag = true;
        flag3 = true;
        flag1 = true;
    } else {
        $('.popcat.popbox').css('display', 'none');
        $('.filter>ul>li:nth-child(3)').removeClass('on');
        flag2 = true;
    }
})
var flag3 = true;
$('.search>.icon-search').on('click', function () {
    if (flag3) {
        $('.popsort.popbox').css('display', 'none');
        $('.popcat.popbox').css('display', 'none');
        $('.popprice.popbox').css('display', 'none');
        $('.popsearch.popbox').css('display', 'block');
        $('.filter>ul>li:nth-child(1)').removeClass('on');
        $('.filter>ul>li:nth-child(2)').removeClass('on');
        $('.filter>ul>li:nth-child(3)').removeClass('on');
        $('.search').addClass('on');
        flag3 = false;
        flag = true;
        flag1 = true;
        flag2 = true;
    } else {
        $('.popsearch.popbox').css('display', 'none');
        $('.search').removeClass('on');
        flag3 = true;
    }
})
//菜单一   子列表的数据获取
$('.popsort>ul>li:nth-child(1)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=0&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popsort.popbox>ul>li:nth-child(1)').addClass('on');
    $('.popsort.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popsort.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popsort.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(1)').removeClass('on');
    $('.filter>ul>li:nth-child(1)>a').html('京东<i>></i>');
    flag = true;
})
$('.popsort>ul>li:nth-child(2)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popsort.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popsort.popbox>ul>li:nth-child(2)').addClass('on');
    $('.popsort.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popsort.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(1)').removeClass('on');
    $('.filter>ul>li:nth-child(1)>a').html('一号店<i></i>');
    flag = true;
})
$('.popsort>ul>li:nth-child(3)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=0&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popsort.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popsort.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popsort.popbox>ul>li:nth-child(3)').addClass('on');
    $('.popsort.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(1)').removeClass('on');
    $('.filter>ul>li:nth-child(1)>a').html('天猫超市<i></i>');
    flag = true;
})
//菜单二    子列表的数据获取
$('.popprice>ul>li:nth-child(1)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=" + _shopid + "&areaid=" + _areaid + "",
            success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('华北<i></i>');
    flag = true;
})
$('.popprice>ul>li:nth-child(2)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=1", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('华东<i></i>');
    flag = true;
})
$('.popprice>ul>li:nth-child(3)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=2", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('华南<i></i>');
    flag = true;
})
$('.popprice>ul>li:nth-child(4)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=3", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('华中<i></i>');
    flag = true;
})
$('.popprice>ul>li:nth-child(5)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=0&areaid=4", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('西南<i></i>');
    flag = true;
})
$('.popprice>ul>li:nth-child(6)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=5", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('东北<i></i>');
    flag = true;
})
$('.popprice>ul>li:nth-child(7)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=6", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').addClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('西北<i></i>');
    flag = true;
})
//菜单三    子列表的数据获取
$('.popcat>ul>li:nth-child(1)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=0&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popcat.popbox>ul>li:nth-child(1)').addClass('on');
    $('.popcat.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popcat.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(3)').removeClass('on');
    $('.filter>ul>li:nth-child(3)>a').html('全部价格<i></i>');
    flag = true;
})
$('.popcat>ul>li:nth-child(2)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popcat.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(2)').addClass('on');
    $('.popcat.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popcat.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(3)').removeClass('on');
    $('.filter>ul>li:nth-child(3)>a').html('1-3元<i></i>');
    flag = true;
})
$('.popcat>ul>li:nth-child(3)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popcat.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(3)').addClass('on');
    $('.popcat.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popcat.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(3)').removeClass('on');
    $('.filter>ul>li:nth-child(3)>a').html('3-5元<i></i>');
    flag = true;
})
$('.popcat>ul>li:nth-child(4)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=1", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popcat.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(4)').addClass('on');
    $('.popcat.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popcat.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(3)').removeClass('on');
    $('.filter>ul>li:nth-child(3)>a').html('5-10元<i></i>');
    flag = true;
})
$('.popcat>ul>li:nth-child(5)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=1", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popcat.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(5)').addClass('on');
    $('.popcat.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popcat.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(3)').removeClass('on');
    $('.filter>ul>li:nth-child(3)>a').html('10-15元<i></i>');
    flag = true;
})
$('.popcat>ul>li:nth-child(6)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=2", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popcat.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popcat.popbox>ul>li:nth-child(6)').addClass('on');
    $('.popcat.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(3)').removeClass('on');
    $('.filter>ul>li:nth-child(3)>a').html('15元以上<i></i>');
    flag = true;
})
//搜索菜单  子选项的数据获取
//排序选项的数据获取
$('.select.ui-border-b>.c>dl>dd:nth-child(1)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.ui-border-b>.c>dl>dd:nth-child(1)').addClass('on');
    $('.select.ui-border-b>.c>dl>dd:nth-child(2)').removeClass('on');
    $('.select.ui-border-b>.c>dl>dd:nth-child(3)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
$('.select.ui-border-b>.c>dl>dd:nth-child(2)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.ui-border-b>.c>dl>dd:nth-child(1)').removeClass('on');
    $('.select.ui-border-b>.c>dl>dd:nth-child(2)').addClass('on');
    $('.select.ui-border-b>.c>dl>dd:nth-child(3)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
$('.select.ui-border-b>.c>dl>dd:nth-child(3)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.ui-border-b>.c>dl>dd:nth-child(1)').removeClass('on');
    $('.select.ui-border-b>.c>dl>dd:nth-child(2)').removeClass('on');
    $('.select.ui-border-b>.c>dl>dd:nth-child(3)').addClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
//分类选项的数据获取
$('.select.classify>.c>dl>dd:nth-child(1)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.classify>.c>dl>dd:nth-child(1)').addClass('on');
    $('.select.classify>.c>dl>dd:nth-child(2)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(3)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(4)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(5)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(6)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(7)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(8)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
$('.select.classify>.c>dl>dd:nth-child(2)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=1", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.classify>.c>dl>dd:nth-child(2)').addClass('on');
    $('.select.classify>.c>dl>dd:nth-child(1)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(3)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(4)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(5)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(6)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(7)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(8)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
$('.select.classify>.c>dl>dd:nth-child(3)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=2", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.classify>.c>dl>dd:nth-child(3)').addClass('on');
    $('.select.classify>.c>dl>dd:nth-child(2)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(1)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(4)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(5)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(6)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(7)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(8)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
$('.select.classify>.c>dl>dd:nth-child(4)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.classify>.c>dl>dd:nth-child(4)').addClass('on');
    $('.select.classify>.c>dl>dd:nth-child(2)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(3)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(1)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(5)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(6)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(7)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(8)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
$('.select.classify>.c>dl>dd:nth-child(5)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=1&areaid=3", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.classify>.c>dl>dd:nth-child(5)').addClass('on');
    $('.select.classify>.c>dl>dd:nth-child(2)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(3)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(4)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(1)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(6)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(7)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(8)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
$('.select.classify>.c>dl>dd:nth-child(6)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=0", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.classify>.c>dl>dd:nth-child(6)').addClass('on');
    $('.select.classify>.c>dl>dd:nth-child(2)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(3)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(4)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(5)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(1)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(7)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(8)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
$('.select.classify>.c>dl>dd:nth-child(7)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=1", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.classify>.c>dl>dd:nth-child(7)').addClass('on');
    $('.select.classify>.c>dl>dd:nth-child(2)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(3)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(4)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(5)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(6)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(1)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(8)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
$('.select.classify>.c>dl>dd:nth-child(8)>a').click(function () {
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=2&areaid=2", success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.select.classify>.c>dl>dd:nth-child(8)').addClass('on');
    $('.select.classify>.c>dl>dd:nth-child(2)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(3)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(4)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(5)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(6)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(7)').removeClass('on');
    $('.select.classify>.c>dl>dd:nth-child(1)').removeClass('on');
    $('.popsearch.popbox').css('display', 'none');
    $('.search').removeClass('on');
    flag = true;
})
//页面跳转
console.log(window.location.href);
/*^\d{1,6}$ */
var reg = window.location.href;
//console.log(123);
//console.log(reg);
var reg = /#(\d+)/;
var num = 0;
if (reg.exec(window.location.href) == null) {
    num = 1;
} else {
    num = reg.exec(window.location.href)[1];
}

console.log(num);
/*
 var as = $('.popprice>ul>li').children();
 //console.log(as);
 for(var i = 0;i <as.lenght; i++){
 as[i].index = num-1;
 $('.filter>ul>li:nth-child(2)>a').html('as[i].html');
 }
 //$('.filter>ul>li:nth-child(2)>a').html();*/

if (num == 1) {
    _areaid = 0;
    _shopid = 0;
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=" + _shopid + "&areaid=" + _areaid + "",
            success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('华北<i></i>');
    flag = true;

}
else if (num == 2) {
    _areaid = num;
    _shopid = 1;
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=" + _shopid + "&areaid=" + _areaid + "",
            success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('华东<i></i>');
    //flag = true;

}
else if (num == 3) {
    _areaid = num;
    _shopid = 1;
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=" + _shopid + "&areaid=" + _areaid + "",
            success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('华南<i></i>');
    flag = true;

}
else if (num == 4) {

    _areaid = num;
    _shopid = 1;
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=" + _shopid + "&areaid=" + _areaid + "",
            success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('华中<i></i>');
    flag = true;

}
else if (num == 5) {

    _areaid = num;
    _shopid = 1;
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=" + _shopid + "&areaid=" + _areaid + "",
            success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('西南<i></i>');
    flag = true;

}
else if (num == 6) {

    _areaid = num;
    _shopid = 1;
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=" + _shopid + "&areaid=" + _areaid + "",
            success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').addClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').removeClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('东北<i></i>');
    flag = true;

}
else if (num == 7) {

    _areaid = num;
    _shopid = 1;
    getRes();
    function getRes() {
        template.helper("getNum", getNum);
        $.ajax({
            url: "http://139.199.157.195:9090/api/getgsproduct?shopid=" + _shopid + "&areaid=" + _areaid + "",
            success: function (res) {
                var html = template('contain', res);
                $("#containTpl").html(html);
                console.log(res)
            }
        });
        function getNum(str) {
            return str.replace(/[^0-9]+/g, '')
        }
    }

    $('.popprice.popbox>ul>li:nth-child(1)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(2)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(3)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(4)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(5)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(6)').removeClass('on');
    $('.popprice.popbox>ul>li:nth-child(7)').addClass('on');
    $('.popprice.popbox').css('display', 'none');
    $('.filter>ul>li:nth-child(2)').removeClass('on');
    $('.filter>ul>li:nth-child(2)>a').html('西北<i></i>');
    flag = true;

}
/*懒加载*/


