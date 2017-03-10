/**
 * Created by Administrator on 2017/2/15.
 */

$(function(){
    //console.log(window.location.search);
    //var value=window.location.search.replace('?brandTitleId=','');
    var value=request('brandTitleId');
    //品牌排行数据列表
    $.ajax({
            post: 'get',
            url: 'http://139.199.157.195:9090/api/getbrand',
            data:{brandtitleid:value},
            beforeSend: function () {
                loading()
            },
            success: function (data) {
                var html= template('tpl',data);
                $('#goodsList').html(html);
                removeLoading();
            }
        }
    );
//十大品牌销量排行
    $.ajax({
        post:'get',
        url:'http://139.199.157.195:9090/api/getbrandproductlist',
        data:{brandtitleid:value,pagesize:4},
        beforeSend:function(){
        },
        success:function(data){
            console.log(data);
            var html= template('saleList',data);
            $('#salesList').html(html);
            var result={};
            result.productId=data.result[0].productId;
            result.productImg=data.result[0].productImg;
            result.productName=data.result[0].productName;
            getContent(result)
        }
    });


//渲染评论盒子的内容
    function getContent(result){
        $.ajax({
                post: 'get',
                url: 'http://139.199.157.195:9090/api/getproductcom',
                data:{productid:result.productId},
                beforeSend: function () {
                },
                success: function (data) {
                    data.productImg=result.productImg;
                    data.productName=result.productName;
                    console.log(data);
                    var html= template('commentList',data);
                    $('.review-list ul').html(html);
                }
            }
        );
    }
    //导航栏动态效果数据请求
    $.ajax({
        post:'get',
        url:'http://139.199.157.195:9090/api/getbrandtitle',
        data:{},
        beforeSend:function(){

        },
        success:function(data){
            data.result.forEach(function(ele,index){
                if(ele.brandTitleId==value){
                    if(($('nav span').length>0)){
                        $('nav span').remove();
                    }
                    var str=ele.brandTitle;
                    var saleStr=str.replace('十大品牌','产品销量排行');
                    var speechTitle=str.replace('十大品牌','最新评论');
                    var navStr=str.replace('十大品牌','那个牌子好');
                    str='&gt;'+str.replace('十大品牌','哪个牌子好');
                    $('title').html(navStr);
                    $('.rankList').html(navStr);
                    $('.saleTitle').html(saleStr);
                    $('.speechTitle').html(speechTitle);
                    $('nav').append('<span>'+str+'</span>');
                }
            })
        }
    });
    //正则匹配URL参数
    function request(attribute){
        var reg = new RegExp("(^|&)"+attribute+"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if(r!=null) return decodeURI(r[2].toString()); return null;
    }

//点击返回顶部
    function returnTop(){
        $('footer .returnTop').on('click',function(ev){
            event=ev||window.event;
            //event.preventDefault();
            return window.scrollTo(0,0);
        })
    }
    returnTop();
//loading动画
    function loading(){
        var html='<div id="layout">'+
            '<div class="loader">'+
            '<div class="loading-1">'+
            '<i></i>'+
            '<i></i>'+
            '<i></i>'+
            '</div>'+
            '</div>'+
            '</div>';
        $('#layout').css({
            'height': window.innerHeight,
            'width': window.innerWidth
        });
        $($('body')).append(html);
    }
//移除loading动画
    function removeLoading(){
        setTimeout(function(){
            $($('body #layout')).remove()
        },2000);
    }


});
