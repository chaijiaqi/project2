/**
 *
 * Created by big Tiger on 2017/2/18.
 */
$(function () {
    $.ajax({
        type : 'get',
        url : 'http://139.199.157.195:9090/api/getsitenav',
        success : function(info) {
            console.log('success');
            var html = template('tpl',info);
            document.querySelector('.contain').innerHTML = html;
        }
    })
});
