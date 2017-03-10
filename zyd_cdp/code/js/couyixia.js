/**
 * Created by Administrator on 2017/2/18.
 */

$('#areaInfo').on('change', function () {
    console.log(444444444);
    $(this).prop('selected', true);
    var num = $(this).find('option:selected').val();


//Ò³Ãæ´«²Î

    console.log('**************************');
    console.log(num);
    /*$('.b').click(function () {

        $('.b>a').href;
    })*/
    /*console.log($('.b>a').href);
    console.log($('.b>a')[0].href);
    //$('.b>a')[0].href = $('.b>a')[0].href + "#" + num;
    //console.log(456);
    //console.log(($('.b>a')[0].href)[1]);*/
    console.log($('.b>a')[0].href+"#" + num);
    $('.b>a')[0].href = $('.b>a')[0].href+"#" + num;
})











