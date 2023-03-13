$('#login').click(function(){
  let i = i$('Anna', 'Ha')
  const lang = $('#lang').val()
  const form = $('#form').val()
  const isTrue = form === 'true'
  i.greet().setLang(lang).displayGreeting('#greeting', isTrue)
})