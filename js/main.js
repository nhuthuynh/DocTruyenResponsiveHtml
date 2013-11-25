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

    $('ul.menu .search-field').autocomplete({
        appendTo: 'ul.menu > li.search',
        source: suggestions,
        open: function () {
            $("ul.menu > li.search > ul.ui-autocomplete").css({ 
                left: 70,
                top: 27
            });
        }
    });

    $('.nav.mobile .search-field').autocomplete({
        appendTo: '.nav.mobile > li.search',
        source: suggestions,
        open: function () {
            $(".nav.mobile > li.search > ul.ui-autocomplete").css({
                left: 0,
                top: 27
            });
        }
    });

    $('#nav .navbar-toggle').collapse();

    // hide #back-top first
    $("#scrollUp").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scrollUp').fadeIn();
            } else {
                $('#scrollUp').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#scrollUp').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });

});