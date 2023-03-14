$('#login').click(function () {
    var firstname = $('#firstname').val();
    var lastname = $('#lastname').val();
    var lang = $('#lang').val();
    var form = $('#form').val();
    var isTrue = form === 'true';
    // @ts-ignore
    var i = i$(firstname, lastname);
    i.greet().setLang(lang).displayGreeting('#greeting', isTrue);
});
