$(document).bind('ready', function () {
    var suggestions = [];

    $('button.search-by').bind('click', function () { $('ul.search-by-list').toggle(); });
    $('ul.search-by-list li a').bind('click', function () {
        var el = $(this);
        if (el.parent('li').index() == 1) {
            suggestions = ["La Quán Trung", "Ngô Thụy An", "Quỳnh Dao"];
        } else if (el.parent('li').index() == 2) {
            suggestions = ["La phù", "Tiên Quốc Đại Đế", "Đô Thị Thiếu Soái", "Tứ Đại Danh Bộ", "Quan Thần", "Cuồng Dã Diễm Tiêu Diêu", "Anh Hùng Xạ Điêu"];
        } else {
            suggestions = [];
        }

        $('button.search-by').html($(this).text() + ' <span class="caret"></span>'); 
        $('ul.search-by-list').hide();
        $('.search-field').autocomplete('option', 'source', suggestions).val('');
    });

    $('.search-field').autocomplete({
        appendTo: 'ul.menu > li.search',
        source: suggestions  
    });


    $('#nav .navbar-toggle').collapse();
});