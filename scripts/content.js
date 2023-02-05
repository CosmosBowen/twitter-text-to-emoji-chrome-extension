var all_tweet = document.querySelectorAll('[data-testid="tweet"]');


const observer = new MutationObserver(() => {

    start();
});

observer.parent = document.documentElement || document.body;
observer.parameters = {
    childList: true,
    subtree: true
}
observer.observe(observer.parent, observer.parameters);


// module.exports = myModule;
function start() {
    all_tweet = document.querySelectorAll('[data-testid="tweet"]');
    console.log("all_tweet.length: ", all_tweet.length);
    // const all_tweet_text = all_tweet.querySelectorAll('[data-testid="tweetText"]');
    if (all_tweet.length > 0) {
        console.log("tweet texts are prepared! ", all_tweet.length);

        observer.disconnect(); // stop observing
        // do something with all_tweet_text
        add_text();
        observer.observe(observer.parent, observer.parameters);
    }
}

function add_text() {
    for (let i = 0; i < all_tweet.length; i++) {
        const each_tweet = all_tweet[i];
        const time_element = each_tweet.querySelector('time');
        const computedStyles = getComputedStyle(time_element);

        const each_tweet_text = each_tweet.querySelector('[data-testid="tweetText"]');

        if (each_tweet_text == null) continue;

        const lang = each_tweet_text.getAttribute("lang");
        const all_content_for_each_tweet = each_tweet_text.querySelectorAll('.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');
        if (lang == "en" && all_content_for_each_tweet.length > 0) {
            var text_each_tweet = "";
            for (let j = 0; j < all_content_for_each_tweet.length; j++) {
                let each_content_for_each_tweet = all_content_for_each_tweet[j];
                text_each_tweet += each_content_for_each_tweet.textContent;
            }
            console.log("lang: ", lang);
            console.log("text_each_tweet:", text_each_tweet);


            //detect emotion
            // const axios = require('axios');

            // axios({
            //     method: 'post',
            //     url: 'https://api.aylien.com/api/v1/sentiment',
            //     headers: {
            //         'X-AYLIEN-TextAPI-Application-ID': '780d0eaa',
            //         'X-AYLIEN-TextAPI-Application-Key': '021f7b8414e22ea23e9a8c026e46602b'
            //     },
            //     data: {
            //         'text': text_each_tweet
            //     }
            // }).then(response => {
            //     console.log("response.data\n", response.data);
            // }).catch(error => {
            //     console.log(error);
            // });


            //add time
            if (time_element.parentNode.parentElement.getElementsByClassName("watermark").length == 0) {

                const badge = document.createElement("span");
                badge.className = "watermark";
                badge.textContent = " · Detected Mood: " + "😐";
                badge.style.font = computedStyles.font;
                badge.style.color = computedStyles.color;
                badge.style.padding = computedStyles.padding;
                badge.style.margin = computedStyles.margin;

                time_element.parentNode.insertAdjacentElement("afterend", badge);
            }
        }
    }
}



start();