

$(function () {
    var obj = window.location.href
    console.log(obj);
    var a = /^.*id=(\d+).*&.*$/
    var c = a.exec(obj);
    console.log(c);
    //console.log(c[1]);
    var pageid=1;
    var arr=0;


    $.ajax({
        url: "http://139.199.157.195:9090/api/getproductlist?categoryid=" + c[1] + "&pageid="+pageid,
        type: "get",
        datetype: "json",
        success: function (res2) {
            arr=Math.ceil(res2.totalCount/res2.pagesize)
            console.log(arr);
            var html = template("productListTpl", res2);
            $("#listshow").html(html);
            $.ajax({
                url:"http://139.199.157.195:9090/api/getcategorybyid?categoryid="+c[1]+"",
                type: "get",
                datetype: "json",
                success: function (res1) {
                    var html = template("productListTp2", res1);
                    $("#listname").html(html);
                    var app = angular.module('myApp', []);
                    app.controller('myCtrl', function($scope) {
                        $scope.names = ["Google", "Runoob", "Taobao"];
                    });


                }
            })
        }
    })




    ////commonInit();
    //
    ///*取到字符串里面的数字 */
    ////function getNum(str) {
    ////    // console.dir(/\d+/.exec(str));
    ////    if (!str || str.length == 0) {
    ////        return "";
    ////    } else {
    ////        var ret = /\d+/.exec(str);
    ////        if (!ret) {
    ////            return "";
    ////        }
    ////        return parseInt(/\d+/.exec(str)[0]);
    ////    }
    ////}
    //
    //
    /////*取到url的参数*/
    ////function getQueryString(name) {
    ////    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    ////    var r = window.location.search.substr(1).match(reg);
    ////    // if (r != null) return unescape(r[2]);
    ////    if (r != null) return decodeURI(r[2]);
    ////    return null;
    ////}
    //
    //
    ////function commonInit() {
    ////    /* 往模版插件注册方法 */
    ////    template.helper("getNum", getNum);
    ////}
    ////function getcategoryList(pageid) {
    ////    var id = getQueryString("categoryid");
    ////    // var pageid = getQueryString("pageid") || 1;
    ////    // $.get("http://139.199.157.195:9090/api/getproductlist?categoryid=" + id, function (res) {
    ////    $.get(path + "/api/getproductlist?categoryid=" + id + "&pageid=" + pageid, function (res) {
    ////        // console.dir(res);
    ////        var html = template("productListTpl", res);
    ////        $(".product-list").html(html);
    //
    //        // 一个页面上的数据条数是pagesize
    //        // 总条数 totalCount
    //
    //
    //        // Total = pageTotal;
    //        // 获取总页数
    //    //    var arr = [];
    //    //    // var str="";
    //    //    for (var i = 0; i < pageTotal; i++) {
    //    //        // $(".product-page ul li:nth-child("i")").find("a").html(i);
    //    //        arr.push('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">第' + (i + 1) + '页</a></li>');
    //    //        // str=str+'<li role="presentation"><a role="menuitem" tabindex="-1" href="#">第'+(i+1)+'页</a></li>';
    //    //    }
    //    //    // var arrStr=arr.join('');
    //    //    // console.log(str);
    //    //    /* join的用法*/
    //    //    $(".product-page ul").html(arr.join(''));
    //    //    // $(".product-page ul").html(str);
    //    //    // console.log(pageTotal);
    //    //    //  addPageClick();
    //    //});
    //    // $.ajax({url:"http://139.199.157.195:9090/api/getproductlist?categoryid=1&pageid=0",success:function(res){
    //    //     console.log("ok");
    //    // },error:function(err){
    //    //     console.error("=================");
    //    //     console.error(err);
    //    // }});
    ////}
    ////var path = "http://139.199.157.195:9090";
    ///*================方法的调用================*/
    //init();
    ///*================方法的定义================*/
    //
    ///*初始化*/
    //function init() {
    //    getcategoryList(1);
    //    setlocation();
    //    addPageClick();
    //}
    //
    //
    ///* 初始页面的路径和页码 */
    //function setlocation() {
    //    /* var name=getQueryString("category");
    //     $(".breadcrumb li:last-child").html(name);*/
    //    var id = getQueryString("categoryid");
    //    $.get(path + "/api/getcategorybyid?categoryid=" + id, function (res) {
    //        // console.dir(res);
    //        var n = res.result[0].category;
    //        $(".breadcrumb li:last-child").html(n);
    //    });
    //    // var index = getQueryString("pageid") || 1;
    //    // $(".product-page button").html("第" + index + "页");
    //}
    //
    ///*总页数*/
    //// var Total = 0;
    //
    ///*根据分类id获取列表信息*/
    //function getcategoryList(pageid) {
    //    var id = getQueryString("categoryid");
    //    // var pageid = getQueryString("pageid") || 1;
    //    // $.get("http://139.199.157.195:9090/api/getproductlist?categoryid=" + id, function (res) {
    //    $.get(path + "/api/getproductlist?categoryid=" + id + "&pageid=" + pageid, function (res) {
    //        // console.dir(res);
    //        var html = template("productListTpl", res);
    //        $(".product-list").html(html);
    //
    //        // 一个页面上的数据条数是pagesize
    //        // 总条数 totalCount
    //
    //        var pageTotal = res.totalCount / res.pagesize;
    //
    //        // Total = pageTotal;
    //        // 获取总页数
    //        var arr = [];
    //        // var str="";
    //        for (var i = 0; i < pageTotal; i++) {
    //            // $(".product-page ul li:nth-child("i")").find("a").html(i);
    //            arr.push('<li role="presentation"><a role="menuitem" tabindex="-1" href="#">第' + (i + 1) + '页</a></li>');
    //            // str=str+'<li role="presentation"><a role="menuitem" tabindex="-1" href="#">第'+(i+1)+'页</a></li>';
    //        }
    //        // var arrStr=arr.join('');
    //        // console.log(str);
    //        /* join的用法*/
    //        $(".product-page ul").html(arr.join(''));
    //        // $(".product-page ul").html(str);
    //        // console.log(pageTotal);
    //        //  addPageClick();
    //    });
    //    // $.ajax({url:"http://139.199.157.195:9090/api/getproductlist?categoryid=1&pageid=0",success:function(res){
    //    //     console.log("ok");
    //    // },error:function(err){
    //    //     console.error("=================");
    //    //     console.error(err);
    //    // }});
    //}

    /*绑定分页点击事件*/



    //})
























    })







