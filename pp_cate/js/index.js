     $.ajax({
    url:"http://139.199.157.195:9090/api/getcategorytitle",
    type:"get",
    datetype:"json",
    success:function(res1) {
        var html = template("titleTp1", res1);
        $("#bigtit").html(html);
        $.ajax({
            url:"http://139.199.157.195:9090/api/getcategory?titleid=0",
            type:"get",
            datetype:"json",
            success:function(res2){
                var html = template("titleTp2", res2);
                $(".item").eq(0).html(html);
                //$(".col-xs-4").css({display:"none"});

                //----------------华丽的分隔符-----------------事件绑定
                $(".formcnt").click(function(){
                    var a = this.nextElementSibling
                    if( a.style.display=="block"){
                        $(a).css({display:"none"})
                    }
                    else{
                        $(".item").css({display:"none"});
                        $(a).css({display:"block"});
                    }
                    $.ajax({
                        url:"http://139.199.157.195:9090/api/getcategory?titleid="+this.getAttribute("datanum")+"",
                        type:"get",
                        datetype:"json",
                        success:function(res3){
                            var html = template("titleTp2", res3);
                            $(a).html(html);
                        }
                    })
                })
            }
        });
    }
});







