void function ($$$, w, ready) { // $ is that new library jQuery, so $$$ for document
    var comps = ['google', 'youtube', 'facebook', 'baidu', 'wikipedia.org', 'reddit', 'yahoo', 'qq', 'taobao', 'amazon', 'twitter', 'sohu', 'instagram', 'vk', 'jd', 'sina.com.cn', 'weibo', 'yandex.ru', '360.cn', 'list.tmall.com', 'netflix', 'twitch.tv', 'linkedin', 'yahoo.co.jp', 'microsoft', 'bing', 'ebay', 'alipay', 'mail.ru', 'ok.ru', 'pages.tmall.com', 'msn', 'whatsapp', 'spotify', 'Naver', 'sogou', 'samsung', 'accuweather']
        ,prepared =
          {
          "data": ""
          ,"counter": ""
          ,"count": ""
          ,"randomCheck": ""
          }
        ,a
        ,args = arguments
        ;load = 'https://logo.clearbit.com/'
        ;b = 0


    new ready(function () {
      // REwriten to use new map filter (supported with the new Internet Explorer)
      prepared["data"] = this
        .map(function (item) { return item + (!/\./.test(item) ? '.com' : '') })

      Prep_Dom_Elements:
        with(prepared) with(Math) with (event) void 1
          ,randomCheck = function (item) {
              return random() > (/\.com?^/i.test(item) ? 0.5 : 0.7);
            }
          ,counter = function (item) {
              return ++ count < 10
            }
          ,data = data.filter(randomCheck)
          //,break Prep_Dom_Elements
          ,data = data.filter(counter)
          ,data = data.map(function (domainName) {
              with (a = new Image) src = this + domainName
              return a
            }, currentTarget [type])


      Append_Dom_Nodes:
        with ($$$.getElementById('logo-mount-point')) //with(args)
          for(  ;a=prepared ["data"] [w [(1), (typeof a) [counter]] ++];  ) void 1
            //,console.log(HTMLModElement)
            //,console.log(event)
            //,console.log(b, a)
            //,console.log(callee.caller)
            ,normalize()
            ,firstChild
            ?insertBefore(a, firstChild)
            :appendChild(a)


      return
    }, comps) // hook / register


    return
}(document, parent, function (callback, context) {
    window.attachEvent && window.attachEvent('onload', callback.bind(context))
        || (window.onload = window.onload ? function () {
            return curronload = window.onload,
            newonload = function(evt) { // netscape does not work
                curronload(evt)
                with (callback) bind(context)(evt)
            }
        }() : callback.bind(context))
})

/*refactr
(function ($$$, w, ready) {
    var comps = ['google', 'youtube', 'facebook', 'baidu', 'wikipedia.org', 'reddit', 'yahoo', 'qq', 'taobao', 'amazon', 'twitter', 'sohu', 'instagram', 'vk', 'jd', 'sina.com.cn', 'weibo', 'yandex.ru', '360.cn', 'list.tmall.com', 'netflix', 'twitch.tv', 'linkedin', 'yahoo.co.jp', 'microsoft', 'bing', 'ebay', 'alipay', 'mail.ru', 'ok.ru', 'pages.tmall.com', 'msn', 'whatsapp', 'spotify', 'Naver', 'sogou', 'samsung', 'accuweather']
        ,apii = 'https://logo.clearbit.com/'
        ,a
        ,count=0;
    ready(function () {
        this // .com
            .map(function (item) { return item + (!/\./.test(item) ? '.com' : '') })
        .filter((item) =>
        Math.random() >
        (/\.com?^/i.test(item) ? 0.5 : 0.7))
                .filter(() => ++count < 10)
            .map(function (domain) { return (a = $$$.createElement('img')) &&
                (a.src = this + domain)
                 && a}, apii)
            .forEach($$$.getElementById('logo-mount-point').appendChild, $$$.getElementById('logo-mount-point'))
    }, comps);
})(document, window, function (callback, context) {
    window.attachEvent && window.attachEvent('onload', callback.bind(context))
        || (window.onload = window.onload ? function () {
            var curronload = window.onload;
            var newonload = function(evt) { // netwcape does not work
                curronload(evt);
                callback.bind(context)(evt);
            };
            return newonload;
        }() : callback.bind(context));
});
*/

counter = 1





