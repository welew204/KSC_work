/* SOLUTION  */


/* Challenge #1 - done in index.html*/


/* Challenge #2 - it's element.textContent */
function tryCognize() {
    let element = document.querySelector('#top-title');
    element.textContent = 'Bé Cognizé';
}


/* Challenge #3 */
function toggleLearnMore() {
    console.log('toggling learn more');
    let accordion = document.querySelector('#more-info');
    accordion.classList.toggle('Accordion--collapsed');

    /* Challenge #4 */
    let button = document.querySelector('#more-info-button');
    if (accordion.classList.contains('Accordion--collapsed')) {
        button.textContent = 'Learn More ↓';
    } else {
        button.textContent = 'Learn More ↑';
    }
}

/* Bonus Challenge: jQuery */
var $dialog = $('.dialogcontent').dialog({
  autoOpen: false,
  title: "Sales",
  hide: "explode",
  show: "shake",
  buttons: {'Yes': function () {
    $('img').effect('slide');
  }},
});
$('.button').click(function () {
  $(this).text('Welcome to the Cognizé Family');
  $dialog.dialog('open');
});



/* Advanced Bonus Challenge: Logic simplified, and rewritten */
function addPageLogos() {
    const COMPANIES = [
        'google.com', 'youtube.com', 'facebook.com', 'baidu.com',
        'wikipedia.org', 'reddit.com', 'yahoo.com', 'qq.com', 'taobao.com',
        'amazon.com', 'twitter.com', 'sohu.com', 'instagram.com', 'vk.com',
        'jd.com', 'sina.com.cn', 'weibo.com', 'yandex.ru', '360.cn',
        'list.tmall.com', 'netflix.com', 'twitch.tv', 'linkedin.com',
        'yahoo.co.jp', 'microsoft.com', 'bing.com', 'ebay.com', 'alipay.com',
        'mail.ru', 'ok.ru', 'pages.tmall.com', 'msn.com', 'whatsapp.com',
        'spotify.com', 'Naver.com', 'sogou.com', 'samsung.com',
        'accuweather.com',
    ];

    let count = 0;
    const mountPoint = document.querySelector('#logo-mount-point');
    for (const company of COMPANIES) {
        // Achieve a non-uniform distribution favoring earlier domains
        if (Math.random() > 0.5) {
            continue;
        }

        // Only do a maximum of 10 images
        count += 1;
        if (count > 10) {
            break;
        }

        // Create a new image, add a URL to the clearbit API, then append to
        // the DOM
        const newImg = document.createElement('img');
        newImg.src = `https://logo.clearbit.com/${company}`;
        mountPoint.appendChild(newImg);
    }
}

addPageLogos();

