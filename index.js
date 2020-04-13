const request = require("request-promise");
const fs = require("fs");
const cheerio = require("cheerio");

async function main() {
    const html = await request.get("https://reactnativetutorial.net/css-selectors/lesson2.html");
    fs.writeFileSync("./test.html", html);

    const $ = await cheerio.load(html);

    // const theText = $("h1").text();
    // console.log(theText);

    // $("h2").each((index, element) => {
    //     console.log($(element).text());
    // })

    // const theText = $("#red").text();
    // console.log(theText);

    // $('[data-customer="22293"]').text()
    // $('[data-customer]').text()
}

main();