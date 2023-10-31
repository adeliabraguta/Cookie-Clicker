let intervalCookieClicker = null;
document.getElementById('cookieClicker').addEventListener('click', function() {
    if (intervalCookieClicker === null) {
        document.getElementById('cookieClicker').innerHTML = 'Stop Clicking Cookies'
        document.getElementById('cookieClicker').classList.add('active')
        document.getElementById('cookieClicker').classList.toggle('inactive')

        intervalCookieClicker = setInterval(function() {
            chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { action: 'startClickCookie' });
            });
        }, 20);
    } else {
        document.getElementById('cookieClicker').innerHTML = 'Start Clicking Cookies'
        document.getElementById('cookieClicker').classList.toggle('active')
        document.getElementById('cookieClicker').classList.add('inactive')


        clearInterval(intervalCookieClicker);
        intervalCookieClicker = null;
    }
});
let intervalProductsClicker=null;
document.getElementById('productsClicker').addEventListener('click', function (){
    if(intervalProductsClicker === null){
        document.getElementById('productsClicker').innerHTML = 'Stop Clicking Products'
        document.getElementById('productsClicker').classList.add('active')
        document.getElementById('productsClicker').classList.toggle('inactive')
        intervalProductsClicker = setInterval(function (){
            chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
                chrome.tabs.sendMessage(tabs[0].id,{action: 'startClickProducts'})
            })
        },100)
    }
    else {
        document.getElementById('productsClicker').innerHTML = 'Start Clicking Products'
        document.getElementById('productsClicker').classList.toggle('active')
        document.getElementById('productsClicker').classList.add('inactive')

        clearInterval(intervalProductsClicker)
        intervalProductsClicker = null
    }
})