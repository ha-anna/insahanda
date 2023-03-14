$('#login').click(function(){
  const firstname = $('#firstname').val()
  const lastname = $('#lastname').val()
  const lang = $('#lang').val()
  const form = $('#form').val()
  const isTrue = form === 'true'

   // @ts-ignore
  const i = i$(firstname, lastname)
  i.greet().setLang(lang).displayGreeting('#greeting', isTrue)
})


