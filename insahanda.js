// mini framework that greets you in different languages (Korean, English, Polish)
;
(function (global, $) {
    // 'new' an object
    var insahanda = function (firstName, lastName, language) {
        return new insahanda.init(firstName, lastName, language);
    };
    //hidden within the scope of the IIFE and never directly accessible
    var supportedLangs = ['ko', 'eng', 'pl'];
    var greetings = {
        ko: '안녕',
        eng: 'Hi',
        pl: 'Cześć'
    };
    var formalGreetings = {
        ko: '안녕하세요',
        eng: 'Greetings',
        pl: 'Witaj'
    };
    var logMessages = {
        ko: '로그인했어요',
        eng: 'Logged in',
        pl: 'Zalogowano pomyślnie'
    };
    // prototype holds methods (to save memory space)
    insahanda.prototype = {
        fullName: function () {
            if (/^[a-zA-Z]+$/.test(this.firstName) && /^[a-zA-Z]+$/.test(this.lastName)) {
                return "".concat(this.firstName, " ").concat(this.lastName);
            }
            else {
                return "".concat(this.lastName).concat(this.firstName);
            }
        },
        validate: function () {
            if (supportedLangs.indexOf(this.language) === -1) {
                throw ("Invalid language");
            }
        },
        greeting: function () {
            return "".concat(greetings[this.language], " ").concat(this.firstName, "!");
        },
        formalGreeting: function () {
            return "".concat(formalGreetings[this.language], ", ").concat(this.fullName(), "!");
        },
        greet: function (formal) {
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            //make chainable
            return this;
        },
        log: function () {
            if (console) {
                console.log("".concat(logMessages[this.language], ": ").concat(this.fullName()));
            }
            //make chainable
            return this;
        },
        setLang: function (lang) {
            this.language = lang;
            this.validate();
            //make chainable
            return this;
        },
        displayGreeting: function (selector, formal) {
            if (!$) {
                throw 'jQuery not loaded';
            }
            if (!selector) {
                throw 'jQuery selector missing';
            }
            var msg;
            if (formal) {
                msg = this.formalGreeting();
            }
            else {
                msg = this.greeting();
            }
            $(selector).text(msg);
        }
    };
    // the actual object is created here so we don't have to call 'new' every time
    insahanda.init = function (firstName, lastName, language) {
        var self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "ko";
        self.validate();
    };
    insahanda.init.prototype = insahanda.prototype;
    //attached insahanda to the global object and added a shorthand i$
    // @ts-ignore
    global.insahanda = global.i$ = insahanda;
})(window, jQuery);
