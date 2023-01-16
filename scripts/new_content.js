const observer = new MutationObserver(() => {
    const all_tweet = document.querySelectorAll('[data-testid="tweet"]');
    // const all_tweet_text = all_tweet.querySelectorAll('[data-testid="tweetText"]');
    if (all_tweet.length > 0) {
        console.log("tweet texts are prepared! ", all_tweet.length);

        observer.disconnect(); // stop observing
        // do something with all_tweet_text

        for (let i = 0; i < all_tweet.length; i++) {
            const each_tweet = all_tweet[i];

            const emoji_position_element = each_tweet.querySelector('.css-1dbjc4n.r-18u37iz.r-1q142lx');
            const time_element = each_tweet.querySelector('time');
            console.log("time_element: ", time_element);
            console.log("time: ", time_element.textContent);
            const computedStyles = getComputedStyle(time_element);

            console.log("font: ", computedStyles.font);
            console.log("fontStyle: ", computedStyles.fontStyle);
            console.log("color ", computedStyles.color);

            const each_tweet_text = each_tweet.querySelector('[data-testid="tweetText"]');
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
                //         'X-AYLIEN-TextAPI-Application-ID': 'your-application-id',
                //         'X-AYLIEN-TextAPI-Application-Key': 'your-application-key'
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
                const badge = document.createElement("span");//"css-1dbjc4n r-18u37iz r-1q142lx
                // Use the same styling as the publish information in an article's header

                badge.textContent = " · Detected Mood: " + "😐";
                badge.style.font = computedStyles.font;
                badge.style.color = computedStyles.color;
                badge.style.padding = computedStyles.padding;
                badge.style.margin = computedStyles.margin;

                time_element.parentNode.insertAdjacentElement("afterend", badge);
            }
        }
        // all_tweet_text.forEach(function (each_tweet_text) {


        //     var all_content_text_for_each_tweet = "";
        //     all_content_for_each_tweet.forEach(function (each_content_for_each_tweet) {
        //         all_content_text_for_each_tweet += each_content_for_each_tweet.text;
        //     })

        //     console.log("all_content_text_for_each_tweet:", all_content_text_for_each_tweet);
        // });

    }
});

observer.observe(document, { childList: true, subtree: true });
