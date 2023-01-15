const observer = new MutationObserver(() => {
    const all_tweet_text = document.querySelectorAll('[data-testid="tweetText"]');
    if (all_tweet_text.length > 0) {
        console.log("tweet texts are prepared! ", all_tweet_text.length);

        observer.disconnect(); // stop observing
        // do something with all_tweet_text

        for (let i = 0; i < all_tweet_text.length; i++) {
            let each_tweet_text = all_tweet_text[i];
            const all_content_for_each_tweet = each_tweet_text.querySelectorAll('.css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0');
            if (all_content_for_each_tweet.length > 0) {
                console.log("it has ", all_content_for_each_tweet.length, "span!");
                for (let j = 0; j < all_content_for_each_tweet.length; j++) {
                    let each_content_for_each_tweet = all_content_for_each_tweet[j];
                    console.log("small text:", each_content_for_each_tweet.textContent);
                }
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
