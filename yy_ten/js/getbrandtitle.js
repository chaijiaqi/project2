/**
 * Created by Administrator on 2017/2/14.
 */
$(function(){
    //品牌大全数据列表请求
    $.ajax({
        post:'get',
        url:'http://139.199.157.195:9090/api/getbrandtitle',
        data:{},
        beforeSend:function(){
            loading();
        },
        success:function(data){
        var html= template('tpl',data);
            $('.trademarkList').html(html);
            removeLoading();
            itemClick();
            returnTop();
    },
        error:function(){

        },
        complete:function(){

        }
    });

  function itemClick(){
      var $items=$('.trademarkList>a.list');
      $items.each(function(index,ele){
          $(ele).on('click',function(){
              if(($('nav span').length>0)){
                  $('nav span').remove();
              }
              var str=$items[index].innerHTML;
              str='&gt;'+str.replace('十大品牌','哪个牌子好');
              //    str.substring(str.length-4);
            $('nav').append('<span>'+str+'</span>')
          })

      })
  }

//跳转顶部
    function returnTop(){
    $('.footer .returnTop').on('click',function(ev){
        console.log(1)
        event=ev||window.event;
        event.preventDefault();
        return window.scrollTo(0,0);
    })
}
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