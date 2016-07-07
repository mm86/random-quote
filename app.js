$(function() {
    //on page load, display a quote
    $.ajax({
            url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
            dataType: 'jsonp',
        })
        .done(result)
        .fail(errorHandling);

    //on clicking "new quote" button, display a new quote
    $('.new-quote').click(function() {
        $.ajax({
                url: 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?',
                dataType: 'jsonp',
            })
            .done(result)
            .fail(errorHandling);
    });

    function result(response) {
        $('.quote').text(response.quoteText);
        $('.person').text(response.quoteAuthor);
    }

    function errorHandling(jqxhr, textStatus, errorThrown) {
        alert("Request Failed: " + textStatus + ", " + errorThrown);
    }

    //on clicking "Twitter" button, open the twitter link with the quote embedded
    $('.twitter').click(function() {
        var quote = $('.quote').text();
        var person = $('.person').text();
        window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + quote + '" ' + person));

    });

});
