"format amd";
! function() {
    "use strict";

    function a(a) {
        return angular.isUndefined(a) || null === a
    }

    function b() {
        try {
            return require("moment")
        } catch (a) {
            throw new Error("Please install moment via npm. Please reference to: https://github.com/urish/angular-moment")
        }
    }

    function c(c, d) {
        if ("undefined" == typeof d) {
            if ("function" != typeof require) throw new Error("Moment cannot be found by angular-moment! Please reference to: https://github.com/urish/angular-moment");
            d = b()
        }
        return c.module("angularMoment", []).constant("angularMomentConfig", {
            preprocess: null,
            timezone: null,
            format: null,
            statefulFilters: !0
        }).constant("moment", d).constant("amTimeAgoConfig", {
            withoutSuffix: !1,
            serverTime: null,
            titleFormat: null,
            fullDateThreshold: null,
            fullDateFormat: null,
            fullDateThresholdUnit: "day"
        }).directive("amTimeAgo", ["$window", "moment", "amMoment", "amTimeAgoConfig", function(b, d, e, f) {
            return function(g, h, i) {
                function j() {
                    var a;
                    if (p) a = p;
                    else if (f.serverTime) {
                        var b = (new Date).getTime(),
                            c = b - w + f.serverTime;
                        a = d(c)
                    } else a = d();
                    return a
                }

                function k() {
                    q && (b.clearTimeout(q), q = null)
                }

                function l(a) {
                    var c = j().diff(a, v),
                        d = t && c >= t;
                    if (d ? h.text(a.format(u)) : h.text(a.from(j(), r)), s && z && h.attr("title", a.format(s)), !d) {
                        var e = Math.abs(j().diff(a, "minute")),
                            f = 3600;
                        e < 1 ? f = 1 : e < 60 ? f = 30 : e < 180 && (f = 300), q = b.setTimeout(function() {
                            l(a)
                        }, 1e3 * f)
                    }
                }

                function m(a) {
                    y && h.attr("datetime", a)
                }

                function n() {
                    if (k(), o) {
                        var a = e.preprocessDate(o);
                        l(a), m(a.toISOString())
                    }
                }
                var o, p, q = null,
                    r = f.withoutSuffix,
                    s = f.titleFormat,
                    t = f.fullDateThreshold,
                    u = f.fullDateFormat,
                    v = f.fullDateThresholdUnit,
                    w = (new Date).getTime(),
                    x = i.amTimeAgo,
                    y = "TIME" === h[0].nodeName.toUpperCase(),
                    z = !h.attr("title");
                g.$watch(x, function(b) {
                    return a(b) || "" === b ? (k(), void(o && (h.text(""), m(""), o = null))) : (o = b, void n())
                }), c.isDefined(i.amFrom) && g.$watch(i.amFrom, function(b) {
                    p = a(b) || "" === b ? null : d(b), n()
                }), c.isDefined(i.amWithoutSuffix) && g.$watch(i.amWithoutSuffix, function(a) {
                    "boolean" == typeof a ? (r = a, n()) : r = f.withoutSuffix
                }), i.$observe("amFullDateThreshold", function(a) {
                    t = a, n()
                }), i.$observe("amFullDateFormat", function(a) {
                    u = a, n()
                }), i.$observe("amFullDateThresholdUnit", function(a) {
                    v = a, n()
                }), g.$on("$destroy", function() {
                    k()
                }), g.$on("amMoment:localeChanged", function() {
                    n()
                })
            }
        }]).service("amMoment", ["moment", "$rootScope", "$log", "angularMomentConfig", function(a, b, d, e) {
            var f = null;
            this.changeLocale = function(d, e) {
                var f = a.locale(d, e);
                return c.isDefined(d) && b.$broadcast("amMoment:localeChanged"), f
            }, this.changeTimezone = function(c) {
                a.tz && a.tz.setDefault ? (a.tz.setDefault(c), b.$broadcast("amMoment:timezoneChanged")) : d.warn("angular-moment: changeTimezone() works only with moment-timezone.js v0.3.0 or greater."), e.timezone = c, f = c
            }, this.preprocessDate = function(b) {
                return f !== e.timezone && this.changeTimezone(e.timezone), e.preprocess ? e.preprocess(b) : a(!isNaN(parseFloat(b)) && isFinite(b) ? parseInt(b, 10) : b)
            }
        }]).filter("amParse", ["moment", function(a) {
            return function(b, c) {
                return a(b, c)
            }
        }]).filter("amFromUnix", ["moment", function(a) {
            return function(b) {
                return a.unix(b)
            }
        }]).filter("amUtc", ["moment", function(a) {
            return function(b) {
                return a.utc(b)
            }
        }]).filter("amUtcOffset", ["amMoment", function(a) {
            function b(b, c) {
                return a.preprocessDate(b).utcOffset(c)
            }
            return b
        }]).filter("amLocal", ["moment", function(a) {
            return function(b) {
                return a.isMoment(b) ? b.local() : null
            }
        }]).filter("amTimezone", ["amMoment", "angularMomentConfig", "$log", function(a, b, c) {
            function d(b, d) {
                var e = a.preprocessDate(b);
                return d ? e.tz ? e.tz(d) : (c.warn("angular-moment: named timezone specified but moment.tz() is undefined. Did you forget to include moment-timezone.js ?"), e) : e
            }
            return d
        }]).filter("amCalendar", ["moment", "amMoment", "angularMomentConfig", function(b, c, d) {
            function e(b, d, e) {
                if (a(b)) return "";
                var f = c.preprocessDate(b);
                return f.isValid() ? f.calendar(d, e) : ""
            }
            return e.$stateful = d.statefulFilters, e
        }]).filter("amDifference", ["moment", "amMoment", "angularMomentConfig", function(b, c, d) {
            function e(d, e, f, g) {
                if (a(d)) return "";
                var h = c.preprocessDate(d),
                    i = a(e) ? b() : c.preprocessDate(e);
                return h.isValid() && i.isValid() ? h.diff(i, f, g) : ""
            }
            return e.$stateful = d.statefulFilters, e
        }]).filter("amDateFormat", ["moment", "amMoment", "angularMomentConfig", function(b, c, d) {
            function e(b, d) {
                if (a(b)) return "";
                var e = c.preprocessDate(b);
                return e.isValid() ? e.format(d) : ""
            }
            return e.$stateful = d.statefulFilters, e
        }]).filter("amDurationFormat", ["moment", "angularMomentConfig", function(b, c) {
            function d(c, d, e) {
                return a(c) ? "" : b.duration(c, d).humanize(e)
            }
            return d.$stateful = c.statefulFilters, d
        }]).filter("amTimeAgo", ["moment", "amMoment", "angularMomentConfig", function(b, c, d) {
            function e(d, e, f) {
                var g, h;
                return a(d) ? "" : (d = c.preprocessDate(d), g = b(d), g.isValid() ? (h = b(f), !a(f) && h.isValid() ? g.from(h, e) : g.fromNow(e)) : "")
            }
            return e.$stateful = d.statefulFilters, e
        }]).filter("amSubtract", ["moment", "angularMomentConfig", function(b, c) {
            function d(c, d, e) {
                return a(c) ? "" : b(c).subtract(parseInt(d, 10), e)
            }
            return d.$stateful = c.statefulFilters, d
        }]).filter("amAdd", ["moment", "angularMomentConfig", function(b, c) {
            function d(c, d, e) {
                return a(c) ? "" : b(c).add(parseInt(d, 10), e)
            }
            return d.$stateful = c.statefulFilters, d
        }]).filter("amStartOf", ["moment", "angularMomentConfig", function(b, c) {
            function d(c, d) {
                return a(c) ? "" : b(c).startOf(d)
            }
            return d.$stateful = c.statefulFilters, d
        }]).filter("amEndOf", ["moment", "angularMomentConfig", function(b, c) {
            function d(c, d) {
                return a(c) ? "" : b(c).endOf(d)
            }
            return d.$stateful = c.statefulFilters, d
        }]), "angularMoment"
    }
    var d = window && window.process && window.process.type;
    "function" == typeof define && define.amd ? define(["angular", "moment"], c) : "undefined" != typeof module && module && module.exports && "function" == typeof require && !d ? module.exports = c(require("angular"), require("moment")) : c(angular, ("undefined" != typeof global ? global : window).moment)
}();
//# sourceMappingURL=angular-moment.min.js.map
