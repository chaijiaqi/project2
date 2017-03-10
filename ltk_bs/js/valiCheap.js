/**
 * Created by big Tiger on 2017/2/15.
 */
$(function () {
    var widthTop = 0;
    var first = 0 ;
    var pageid = 0;
    var _scrollTop = 0 ;
    $('.appp').on('click', function () {
        window.scrollTo(0,0);

        var lis = $('.scroll>ul')[0].querySelectorAll('li');
        for(var i = 0  ; i < lis.length; i ++) {
            $(lis[i]).removeClass('red');
        }
        if(first>0 && pageid>0 && pageid <=12){

            $(lis[pageid]).addClass('red');
        }else {
            $(lis[0]).addClass('red');
        }
    });
    //var formData = {
    //    titleid : pageid
    //};
    var flag = true ; /*定义节流阀false表示节流阀是关着的*/
    init();
    listenScroll();


function listenScroll() {
    fixTheNav();
}




function fixTheNav(){
    var head = document.getElementById('header');
    //var headHeight = head.offsetHeight;
    var nav = document.getElementById('scrollNav');
    //var navHeight = nav.offsetHeight;
    var movePage = document.getElementById('movePage');
    var search = document.querySelector('.search');
    $(window).on('scroll',function() {
        //var top = document.body.scrollTop;
        if(scroll().top >= head.offsetHeight) {
            nav.style.position = 'fixed';
            nav.style.top  = 0;
            movePage.style.paddingTop = nav.offsetHeight +'px';
            search.style.position = 'fixed';
        }else {
            nav.style.position = 'relative';
            movePage.style.paddingTop = 0;
            search.style.position = 'absolute';
        }
        //var lis = $('.scroll>ul')[0].querySelectorAll('li');
        var $parent = $('.search');
        var $child = $parent.find('ul');
        var $lis = $child.find('li');
        //if($(lis[0]).hasClass('red') ) {
        //    lazyLoad();
        //}

        /*只有第一页才懒加载*/
        if(first == 0) {
            lazyLoad();
            //changeBottom();
            //$lis && $lis.each(function () {
            //    $(this).removeClass('red');
            //    console.log($this+'thisthisthisthisthsithsithisthisthisthisthisthisthis');
            //});
            //$lis.eq(pageid).addClass('red');

        }
        
    });
}
/*封装懒加载函数*/
function lazyLoad() {
    /*如果不是第一页就返回*/
    //if(pageid == 0) {
        //console.log($(document.body).height());
        //console.log(windowhei+"高度高度高度");
        var height = $('#content').height()+$('#header').height() + $('#scrollNav').height() + $('#movePage').height() +$('.foot').height() - $(window).height();;
        //console.log(height);
        var distanceBottom = height - $(window).scrollTop();
        console.log(distanceBottom);
        /*这个距离是第一个标签距离顶部的距离*/
        if(distanceBottom <= 180) {
            //pageid ++;
            console.log(pageid);
            getData();
        }else {

        }
    //var lis = $('.scroll>ul')[0].querySelectorAll('li');
    //if(pageid>0 && pageid <=12){
    //    for(var i = 0  ; i < lis.length; i ++) {
    //        $(lis[i]).removeClass('red');
    //    }
    //    $(lis[pageid]).addClass('red');
    //}

    //lazyLoad();
    }

//}
/*根据pageid来异步获取数据*/
function getData() {
    //dataPageid = pageid;
    if(pageid >= 13) {
        return ;
    }
    if(flag) {
        flag = false;
        $.ajax({
            type: 'get',
            url: 'http://139.199.157.195:9090/api/getbaicaijiaproduct?titleid=' + pageid,
            success: function (info) {
                //console.log(info);
                console.log('获取数据成功');
                var divArr = [];
                var html = template('tpl', info);
                $('.content').append(html);
                $('#fig').css('display','none');
                /*初始化顶部高度*/
                widthTop = $('#header').height() + $('#scrollNav').height() + $('#movePage').height()+ 20;
                console.log(widthTop+'初始化顶部高度');
                console.log($('.aaa').height()+'初始高度');
                //$('')
                //divArr.push();
                //console.log($('.remainNum>.bar span').html());
                var htm = $('.remainNum>.bar span').html();
                //$('.num>.progress>.progress-bar').html(htm);
                //console.log($('.num>.progress>.progress-bar').get(0)+'我我我我我我我我我');
                var $bars = $('.num>.progress>.progress-bar');
                console.log($bars)+"wowowowowowowowowowowowowowwoowwowowowwowowowwoowwowow";
                //for(var i = 0 ; i < bars.)
                //$('.num>.progress>.progress-bar').css('width',htm);
                //$('.num>.progress>.progress-bar').html(htm);

                $('#content>.aaa:nth-last-child(-n+1) .num>.progress>.progress-bar').css('width',htm);
                $('#content>.aaa:nth-last-child(-n+1) .num>.progress>.progress-bar').html(htm);


                //$('.num>.progress>.progress-bar')[0]. = 60;
                //var htm2 = $('.remainNum>.bar b').html();
                $('.remainNum>.bar span').remove();
                //$('.remainNum>.bar span').get(0)
                //swipe();
                //changeBottom();
                //dataPageid ++;
                //pageid ++;
                //var per = console.log($('.bar span').html());
                //$('.progress>.progress-bar').html(per);
            },
            error: function (err, errmsg) {
                console.log('出错了');
            },
            complete: function () {
                console.log('完了0');
                flag = true;
                //pageid ++;
            }
        });
        /*????????????这里要不要添加第一页的判断,之后再看*/
        //changeBottom();
        changeBottom();
        /*这里的pageid++针对的是懒加载*/
    }
    }
    //function changeBottom() {
    //    var widthAAA = 0 ;
    //    //console.log($('.aaa').height()+"高度高度高度高度");
    //    $('.aaa').each(function () {
    //         widthAAA += $(this).height();
    //
    //    });
    //    console.log(widthAAA+"高度高度高度高度");
    //
    //}
    /*这个算法是用来滑动时候动态地改变上面标签的状态*/
    function changeBottom() {
        console.log('getdata结尾');
        var lis = $('.scroll>ul')[0].querySelectorAll('li');
        _scrollTop = scroll().top;
        if(pageid>0 && pageid <=12){
            //console.log('document.body.scrollTop:'+document.body.scrollTop);

            for(var i = 0  ; i < lis.length; i ++) {
                $(lis[i]).removeClass('red');
            }
            $(lis[pageid]).addClass('red');
            //if(document.body.scrollTop > _scrollTop) {
            //    pageid ++;
            //}else {
            //    pageid --;
            //}
        }
        //if(document.body.scrollTop > _scrollTop) {
        //    pageid ++;
        //}else {
        //    pageid --;
        //}
        pageid++;
    }

/*滑动的兼容写法*/
function scroll() {
    return {
        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
    };
}
/*初始化数据*/
function init() {
    $.ajax({
        type:'get',
        url:'http://139.199.157.195:9090/api/getbaicaijiatitle',
        success : function (info) {
            var html = template('listTpl',info);
            $('.scroll>ul').append(html);
            var lis = $('.scroll>ul')[0].querySelectorAll('li');
            $(lis[0]).addClass('red');

            swipe();
            for(var i = 0 ; i < lis.length ; i ++) {
                $(lis[i]).index = i ;
                $(lis[i]).on('click', function () {
                    first = this.index;
                    pageid = this.index;
                    $.ajax({
                        type: 'get',
                        url : 'http://139.199.157.195:9090/api/getbaicaijiaproduct?titleid=' + this.index ,
                        success : function(info) {
                            var html = template('tpl',info);
                            $('.content').html(html);
                            $('#fig').css('display','none');
                            var htm = $('.remainNum>.bar span').html()
                            $('.num>.progress>.progress-bar').html(htm);
                            $('.num>.progress>.progress-bar').css('width',htm);
                            //$('.num>.progress>.progress-bar')[0]. = 60;
                            //var htm2 = $('.remainNum>.bar b').html();
                            $('.remainNum>.bar span').html('');
                            window.scrollTo(0,0);
                        }
                    });
                })
            }
            //lis[0].style.borderBottom = '2px solid #e4393c';
            //for(var i = 0 ; i < lis.length ; i ++) {
            //    lis[i].index = i ;
            //    lis[i].onclick = function () {
            //        /*这里这个first没有什么其他的作用,只是
            //        * 当first变化之后不能懒加载*/
            //        //first = this.index;
            //        //pageid = this.index;
            //        //console.log(pageid);
            //        //for(var j = 0 ; j < lis.length ; j ++) {
            //        //    //lis[j].style.borderBottom = 'none';
            //        //    $(lis[j]).removeClass('red');
            //        //    //lis[j].style.marginTop = '0';
            //        //    //$(this).css({'border-bottom':'none','margin-top':'0'})
            //        //}
            //        ////$(this).css({'border-bottom':'2px solid #e4393c','margin-top':'-1px'});
            //        //$(this).addClass('red');
            //        $.ajax({
            //            type: 'get',
            //            url : 'http://139.199.157.195:9090/api/getbaicaijiaproduct?titleid=' + this.index ,
            //            success : function(info) {
            //                var html = template('tpl',info);
            //                $('.content').html(html);
            //                var htm = $('.remainNum>.bar span').html()
            //                $('.num>.progress>.progress-bar').html(htm);
            //                $('.num>.progress>.progress-bar').css('width',htm);
            //                //$('.num>.progress>.progress-bar')[0]. = 60;
            //                //var htm2 = $('.remainNum>.bar b').html();
            //                $('.remainNum>.bar span').html('');
            //                window.scrollTo(0,0);
            //            }
            //        });
            //        //window.scrollTo(0,0);
            //        //getData();
            //    }
            //}
        }

    })

    getData();
    /*下面这个方法是想获取模板里面的有些数据*/
    //function getRemain(html) {
    //    console.log($('.contentDiv').html());
    //}
}
/*自己封装的顶部nav的滑动事件*/
    //function swipe(){
    //    /*通过封装的swipe插件来实现*/
    //    itcast.iScroll({
    //        swipeDom:document.querySelector('.scroll'),/*父容器对象*/
    //        swipeType:'x',/*滑动的方向*/
    //        swipeDistance:100/*缓冲的距离*/
    //    });
    //}
    /*左菜单*/
    function swipe(){
        /*
         * 1.菜单滑动起来
         * 2.当滑动到一定的距离的时候不能滑动  滑动区间
         * 3.当触摸结束的时候  需要判断是否在定位区间内  否则吸附回去  定位回去
         * 4.点击菜单的时候  改变当前的样式
         * 5.点击菜单的时候  定位到当前的那个菜单到最顶部
         *   如果不满足定位区间就不做定位
         * */

        /*获取父容器*/
        var parentBox = document.querySelector('.scroll');
        var childBox = parentBox.querySelector('ul');
        var parentWidth = parentBox.offsetWidth;
        console.log(parentWidth);
        var childWidth = childBox.offsetWidth;
        console.log(childWidth);
        /*translateX 初始的定位 其实就是最大定位 0*/
        var maxX = 0;
        /*translateX 滑动到最下面的定位 其实就是最小定位 父容器高度-子容器高度*/
        var minX = parentWidth-childWidth;
        /*自己定义缓冲的距离*/
        var distance = 100;
        /*translateX 最大滑动定位*/
        var maxSwipe = maxX + 100;
        /*translateY 最小滑动定位*/
        var minSwipe = minX - 100;

        /*第一步  1.菜单滑动起来*/
        var startX = 0;
        var moveX = 0;
        var distanceX = 0;
        var isMove  = false;

        var currX = 0;/*记录当前的定位 全局  相当于轮播图当中的index*/

        /*定义公用的方法*/
        var addTransition = function(){
            childBox.style.webkitTransition = "all .2s";
            childBox.style.transition = "all .2s";
        }
        var removeTransition = function(){
            childBox.style.webkitTransition = "none";
            childBox.style.transition = "none";
        }
        var setTranslateX = function(x){
            childBox.style.webkitTransform = "translateX("+x+"px)";
            childBox.style.transform = "translateX("+x+"px)";
        }

        /*绑定事件*/
        childBox.addEventListener('touchstart',function(e){
            startx = e.touches[0].clientX;
        });
        childBox.addEventListener('touchmove',function(e){
            moveX = e.touches[0].clientX;
            distanceX = moveX-startX;
            console.log(distanceX +'=====distanceX');
            /*清除过度*/
            removeTransition();
            /*设置定位*/
            /*第二步 2.当滑动到一定的距离的时候不能滑动  滑动区间*/
            /*当前要做定位的位子需要在滑动区间内*/
            if((currX + distanceX) < maxSwipe &&　(currX + distanceX) > minSwipe){
                setTranslateX(currX + distanceX);
            }

        });
        window.addEventListener('touchend',function(e){
            /*第二步 3.当触摸结束的时候  需要判断是否在定位区间内  否则吸附回去  定位回去*/
            /*当往下滑的时候 大于 最大定位*/
            if(( currX + distanceX)>maxX){
                currX = maxX;
                addTransition();
                setTranslateX(currX);
            }
            /*当往上滑的时候 小于 最小定位*/
            else if(( currX + distanceX)<minX){
                currX = minX;
                addTransition();
                setTranslateX(currX);
            }
            else{
                /*记录当前的定位   上一次当前的定位 + 这一次改变的定位*/
                currX = currX + distanceX;
            }

            /*重置所有的参数  不重置currY */
            startX = 0;
            moveX =0;
            distanceX = 0;
            isMove = 0;
        });

        /*绑定tap*/
        /*所有的li*/
        var lis = childBox.querySelectorAll('li');
        itcast.tap(childBox,function(e){
            /*找到事件触发源 然后找到点击的那个li元素*/
            //console.log(e.target.parentNode);
            var li = e.target.parentNode;
            console.log(li+"======================li");
            for(var i = 0 ; i < lis.length ; i ++){
                lis[i].className = " ";
                /*设置索引*/
                lis[i].index = i;

            }
            /*4.点击菜单的时候  改变当前的样式*/
            li.className = "red";
            /*
             * 5.点击菜单的时候  定位到当前的那个菜单到最顶部
             * 如果不满足定位区间就不做定位
             * */
            /*需要知道  将要定位的位子*/
            var width = 0 ;
            for(var i = 0 ; i < li.index ; i ++) {
                width += lis[i].offsetWidth;
            }
            var translateX = -width;/*通过索引来计算*/
            /*判断当前的定位要大于  定位区间的  最小定位*/
            if(translateX > minX){
                currX = translateX;
                addTransition();
                setTranslateX(currX);
            }
            else{
                currX = minX;
                addTransition();
                setTranslateX(currX);
            }
            //console.log(111111111111111);
            //$.ajax({
            //                type: 'get',
            //                url : 'http://139.199.157.195:9090/api/getbaicaijiaproduct?titleid=' + this.index ,
            //                success : function(info) {
            //                    console.log(66666666666);
            //                    var html = template('tpl',info);
            //                    $('.content').html(html);
            //                    var htm = $('.remainNum>.bar span').html()
            //                    $('.num>.progress>.progress-bar').html(htm);
            //                    $('.num>.progress>.progress-bar').css('width',htm);
            //                    //$('.num>.progress>.progress-bar')[0]. = 60;
            //                    //var htm2 = $('.remainNum>.bar b').html();
            //                    $('.remainNum>.bar span').html('');
            //                    window.scrollTo(0,0);
            //                }
            //            });
            //console.log(222222222222);
        });
    }


});