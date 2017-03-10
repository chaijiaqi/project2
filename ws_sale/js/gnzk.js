/**
 * Created by Administrator on 2017/2/18.
 */
$(function () {
    var Data = {};
    var Total = 60;
    $data={};

    init();

    function init() {
        getDiscount();
        backHistory()
    }

    /*获取国内折扣列表*/
    function getDiscount() {
        $("img.load1").show();
        $.get("http://139.199.157.195:9090/api/getinlanddiscount", function (res) {
            /*复制数据*/
            Data.result = res.result.concat(res.result);
            Data.result = Data.result.concat(res.result);

            $data.result= res.result.concat(res.result);
            $data.result=  $data.result.concat(res.result);

            lazyLoad();
            $("img.load1").hide();

        })
    }

    function lazyLoad() {
        var wrapNum = $(".wrap").length;
        if (wrapNum >= Total) {
            return;
        }
        // console.log(newRes);
       var newRes = {result: []};

        var leng = 8;
        if (Data.result.length <= leng) {
            leng = Data.result.length;
        }
        for (var i = 0; i < leng; i++) {
            newRes.result.push(Data.result.shift());
        }


        /*console.log(newRes);
        console.log(Data);
        console.log($data);*/
        var html = template("gnzkTpl", newRes);
        $("#section>.row").append(html);
        jump();

    }


    /*判断是否加载数据*/
    var isLoad = false;
    window.onscroll = function () {
        if (isLoad == true) {
            return;
        }
        else {
            isLoad = true;
            var height = $("#section>.row").height() - $(document.body).height();
            var distanceBottom = height - $(document.body).scrollTop();
            console.log(distanceBottom);
            if (distanceBottom < 50) {
                lazyLoad();
            }
            isLoad = false;
        }
    }

//$data.result.each(function(index,data){

//})
    $(".wrap").each(function (index, data) {


    })
    function jump() {
        $(".wrap").each(function (index, data) {
            $(this).on("click", function () {
                window.location.href = "./ws_sale/gnzkfy.html" + "?productid:" + $data.result[index].productId;
                /* console.log($(this).width());
                 console.log($data.result[index].productId);*/

            })

        })
    }

    function backHistory(){
        $("#back").on("click",function(){
            window.history.go(-1);
        })
    }

});


