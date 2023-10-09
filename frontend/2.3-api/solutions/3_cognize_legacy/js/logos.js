void function ($$$, w, ready) { // $ is that new library jQuery, so $$$ for document
    var comps = ['google', 'youtube', 'facebook', 'baidu', 'wikipedia.org', 'reddit', 'yahoo', 'qq', 'taobao', 'amazon', 'twitter', 'sohu', 'instagram', 'vk', 'jd', 'sina.com.cn', 'weibo', 'yandex.ru', '360.cn', 'list.tmall.com', 'netflix', 'twitch.tv', 'linkedin', 'yahoo.co.jp', 'microsoft', 'bing', 'ebay', 'alipay', 'mail.ru', 'ok.ru', 'pages.tmall.com', 'msn', 'whatsapp', 'spotify', 'Naver', 'sogou', 'samsung', 'accuweather']
        ,apii = 'https://logo.clearbit.com/'
        ,a
        ,i = 0
        ,prepped = {"data": "", "count": 0}
    ready(function () {
      prepped["data"] = this.map(function (item) { return item + (!/\./.test(item) ? '.com' : '') })

      Prep_Dom_Elements:{
        // REwriten to use new filter (supported with the new IE8)
        with(prepped) with(Math) void 0
          ,data = data.filter(function (item) {
            return (random() > (/\.com?^/i.test(item) ? 0.5 : 0.7))})
          //,break Prep_Dom_Elements
          ,data = data.filter(function () {return ++count < 10})
          ,data = data.map(function (domain) {
              with (a = new Image) src = this + domain
              return a
            }, apii)
      };

      Append_Dom_Nodes:{
        with ($$$.getElementById('logo-mount-point'))
          for(;a = prepped["data"][i++];) void 0
            //,console.log(i, a)
            ,appendChild(a)
      };

    }, comps) // hook / register
}(document, parent, function (callback, context) {
    window.attachEvent && window.attachEvent('onload', callback.bind(context))
        || (window.onload = window.onload ? function () {
            return curronload = window.onload,
            newonload = function(evt) { // netwcape does not work
                curronload(evt)
                with (callback) bind(context)(evt)
            }
        }() : callback.bind(context))
})

