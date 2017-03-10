/**
 * Created by Administrator on 2017/2/14.
 */
$(function () {


        getGnzk();
        backHistory();



});


function getGnzk() {
    $("img.load1").show();
    console.log(window);
    var reg=/productid:([0-9]*)/g;
    var i= reg.exec(window.location.href)[1];
    $.get("http://139.199.157.195:9090/api/getdiscountproduct?productid="+i, function (res) {
        var html = template('gnzkfyTpl', res);
        $("#container").html(html);
        comment();
    });
    //$("img.load1").hide();

}

function comment(){
    $("#ctl00_ContentBody_Button1").on("click",function(){
        $com=$("#ctl00_ContentBody_txt_nr").val();

        $("#comment>.list>ul").prepend("<li>"+$com+"</li>");

        $("#ctl00_ContentBody_txt_nr").val("");
        console.log(1);
    })
}
function backHistory(){
    $("#back").on("click",function(){
        window.history.go(-1);
    })
}
