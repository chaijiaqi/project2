/**
 * Created by Administrator on 2017/2/15.
 */
$(function () {
    var reg = /=(\d+)/;
    var page = (reg.exec(window.location.href));
    var i = 1;
    if (page == null) {
        i = 1;
    } else {
        i = page[1];
    }
    console.log(i);
    function getData() {
        $('ul').hide();
        $('.loadpic').find('img').show();
        $.ajax({
            type: 'get',
            url: 'http://139.199.157.195:9090/api/getmoneyctrl?pageid=' + i,
            success: function (msg) {
                var html = template('tem', msg);
                $('ul').show();
                $('ul').html(html);
                $('.loadpic').find('img').hide();
            }
        })
    }

    getData();
    var num = 16;
    for (var j = 1; j < num; j++) {
        $('select').append('<option>' + j + "/15" + '</option>');
    }
    $('.down').on('click', function () {
        if (i < 15) {
            i++;
            getData();
        }else {
            alert('已经是最后一页');
        }
        $('select option:eq(' + ( i - 1 ) + ')').prop('selected', true);
    })
    $('.up').on('click', function () {
        if (i > 1) {
            i--;
            getData();
        } else {
            alert('已经是第一页');
        }
        $('select option:eq(' + (i - 1) + ')').prop('selected', true);
    })

    $('#selectPage').on('change', function () {
        console.log($(this));
        i = $('select')[0].selectedIndex + 1;
        getData();
        //console.log($(this).find("option:selected").html());
        window.scrollTo(0, 0);
    });
    $('select option:eq(' + (i - 1) + ')').prop('selected', true);
});


