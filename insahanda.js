
(function(global, $) {
  const insahanda = function(firstName, lastName, language) {
    return new insahanda.init(firstName, lastName, language)
  }

  insahanda.prototype = {}

  insahanda.init = function(firstName, lastName, language) {
    const self = this
    self.firstName = firstName || ""
    self.lastName = lastName || ""
    self.language = language || "ko"
  }

  insahanda.init.prototype = insahanda.prototype
  
  global.insahanda = global.i$ = insahanda

})(window, jQuery)