(function () {
    if (window.pluso) if (typeof window.pluso.start == "function") return;
    var d = document, s = d.createElement('script'), g = 'getElementsByTagName';
    s.type = 'text/javascript';
    s.charset = 'UTF-8';
    s.async = true;
    s.src = ('https:' == window.location.protocol ? 'https' : 'http') + '://share.pluso.ru/pluso-like.js';
    var h = d[g]('head')[0] || d[g]('body')[0];
    h.appendChild(s);
})();

$(function(){
    $('#myTab').find('a').click(function (e) {
        e.preventDefault();
        $(this).tab('show')
    });

    $('a[href="#preview"]').click(function(){
        var post_content = $('#new-post-content');
        var preview = $('#preview-content');
        var empty_preview_message = $('#empty-preview');

        if(post_content.val().length > 0)
            empty_preview_message.hide();
        else
            empty_preview_message.show();

        show_preview(post_content, preview);
    });
});

function show_preview(content, preview){
   preview.html(markdown.toHTML(content.val()))
}
