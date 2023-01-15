// const alltime = document.querySelectorAll("main .section .alltime .time");
const all_tweet_text = document.querySelectorAll('[data-testid="tweetText"]');
console.log("prepared! ", all_tweet_text.length);


// `document.querySelector` may return null if the selector doesn't match anything.

[...all_tweet_text].forEach(function (each_tweet_text) {
    all_content_for_each_tweet = each_tweet_text.querySelectorAll("span");

    var all_content_text_for_each_tweet = "";
    all_content_for_each_tweet.forEach(function (each_content_for_each_tweet) {
        all_content_text_for_each_tweet += each_content_for_each_tweet.text;
    })

    console.log("all_content_text_for_each_tweet:", all_content_text_for_each_tweet);
    // const text = eachtime.textContent;
    // const addtime = text;
    // const badge = document.createElement("span");
    // badge.classList.add("css-901oao", "css-16my406", "r-poiln3", "r-bcqeeo", "r-qvutc0");
    // badge.textContent = `⏱️ ${addtime} min read`;

    // eachtime?.parentNode.insertAdjacentElement("afterend", badge);
});
// for (let eachtime of alltime) {
//     console.log("each time:", eachtime?.text);
//     const text = eachtime.textContent;
//     const addtime = text;
//     const badge = document.createElement("span");
//     badge.classList.add("css-901oao", "css-16my406", "r-poiln3", "r-bcqeeo", "r-qvutc0");
//     badge.textContent = `⏱️ ${addtime} min read`;

//     eachtime?.parentNode.insertAdjacentElement("afterend", badge);
// }
