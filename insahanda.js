
(function(global, $) {
  const insahanda = function(firstName, lastName, language) {
    return new insahanda.init(firstName, lastName, language)
  }
  const supportedLangs = ['ko', 'eng', 'pl']

  const greetings = {
    ko: '안녕',
    eng: 'Hi',
    pl: 'Cześć'
  }

  const formalGreetings = {
    ko: '안녕하세요',
    eng: 'Greetings',
    pl: 'Witaj'
  }

  const logMessages = {
    ko: '로그인했어요',
    eng: 'Logged in',
    pl: 'Zalogowano pomyślnie'
  }

  insahanda.prototype = {
    fullName: function() {
      return `${this.firstName} ${this.lastName}`
    },
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw ("Invalid language")
      }
    },
    greeting: function() {
      return `${greetings[this.language]} ${this.firstName}!`
    },
    formalGreeting: function() {
      return `${formalGreetings[this.language]}, ${this.fullName()}!`
    },
    greet: function(formal) {
      let msg
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }
      if (console) {
        console.log(msg)
      }

      return this
    },
    log: function() {
      if (console) {
        console.log(`${logMessages[this.language]}: ${this.fullName()}`)
      }
      return this
    },
    setLang: function(lang) {
      this.language = lang

      this.validate()

      return this
    }
  }

  insahanda.init = function(firstName, lastName, language) {
    const self = this
    self.firstName = firstName || ""
    self.lastName = lastName || ""
    self.language = language || "ko"
  }

  insahanda.init.prototype = insahanda.prototype
  
  global.insahanda = global.i$ = insahanda

})(window, jQuery)