// mini framework that greets you in different languages (Korean, English, Polish)

;(function(global, $) {

  // 'new' an object
  const insahanda = function(firstName, lastName, language) {
    return new insahanda.init(firstName, lastName, language)
  }

  //hidden within the scope of the IIFE and never directly accessible
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

  // prototype holds methods (to save memory space)
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

      //make chainable
      return this
    },
    log: function() {
      if (console) {
        console.log(`${logMessages[this.language]}: ${this.fullName()}`)
      }

      //make chainable
      return this
    },
    setLang: function(lang) {
      this.language = lang

      this.validate()

      //make chainable
      return this
    },
    displayGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded'
      }
      if (!selector) {
        throw 'jQuery selector missing'
      }
      let msg
      if (formal) {
        msg = this.formalGreeting()
      } else {
        msg = this.greeting()
      }
      $(selector).text(msg)
    }
  }

  // the actual object is created here so we don't have to call 'new' every time
  insahanda.init = function(firstName, lastName, language) {
    const self = this
    self.firstName = firstName || ""
    self.lastName = lastName || ""
    self.language = language || "ko"

    self.validate()
  }

  insahanda.init.prototype = insahanda.prototype
  
  //attached insahanda to the global object and added a shorthand i$
  global.insahanda = global.i$ = insahanda

})(window, jQuery)