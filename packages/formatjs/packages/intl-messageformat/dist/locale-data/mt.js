IntlMessageFormat.__addLocaleData({"locale":"mt","pluralRuleFunction":function (n) {n=Math.floor(n);if(n===1)return"one";if(n===0||n%100===Math.floor(n%100)&&n%100>=2&&n%100<=10)return"few";if(n%100===Math.floor(n%100)&&n%100>=11&&n%100<=19)return"many";return"other";}});