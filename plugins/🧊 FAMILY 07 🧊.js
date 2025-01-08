[08/01, 16:02] > KING YAKUZA: const url = `https://firemovieshub.com/?s=${q}`;

    // Launch Puppeteer browser
    const browser = await puppeteer.launch({ headless: true }); // headless: true means the browser will run in the background
    const page = await browser.newPage();

    // Set a user-agent and go to the page
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the results to load (adjust the selector to the page's content)
    await page.waitForSelector('div.title a'); // This waits for the movie titles to appear

    // Get the page content after it has loaded
    const pageContent = await page.content();

    // Use Cheerio to parse the page content
    const $ = cheerio.load(pageContent);

    // Extract movie titles and links from the page
    const data = [];
    $("div.result-item").each((c, d) => {

        data.push({
             
         title: $(d).find("div.title > a").text(),
         ntitle: $(d).find("span.movies").text(),
         year: $(d).find("span.year").text(),
         link: $(d).find("a").attr("href"),
         image: $(d).find("img").attr("src")
         
         
        })
    })

await browser.close();
[08/01, 16:02] > KING YAKUZA: const url = `${q}`

    // Launch Puppeteer browser
    const browser = await puppeteer.launch({ headless: true }); // headless: true means the browser will run in the background
    const page = await browser.newPage();

    // Set a user-agent and go to the page
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the results to load (adjust the selector to the page's content)
    await page.waitForSelector('div.data > h1'); // This waits for the movie titles to appear

    // Get the page content after it has loaded
    const pageContent = await page.content();

    // Use Cheerio to parse the page content
    const $ = cheerio.load(pageContent);

    // Extract movie titles and links from the page
   
  
const title = $("div.data > h1").text()
const image = $("div.poster > img").attr("src")
const theme = $("span.tagline").text()
const date = $("span.date").text()
const duration = $("span.runtime").text()
const generos = $("div.sgeneros > a:nth-child(1)").text()
const generos1 = $("div.sgeneros > a:nth-child(2)").text()
const generos2 = $("div.sgeneros > a:nth-child(3)").text()
const desc = $("div.wp-content > p").text()
const imdb = $("span.valor > strong").text()
    // Output the results
   
    
   

      const $1 = cheerio.load(pageContent)
      const data = [];
      $1("tbody > tr").each((c, d) => {
          data.push({            
           link: $1(d).find("a").attr("href"),
           quality: $1(d).find("strong.quality").text(),
           size: $1(d).find("td:nth-child(3)").text()      
          })      
      })
 
    // Close the browser after scraping
    await browser.close();
[08/01, 16:02] > KING YAKUZA: const url = 'https://firemovieshub.com/links/qw1ajhai6t/';

    // Launch Puppeteer browser
    const browser = await puppeteer.launch({ headless: true }); // headless: true means the browser will run in the background
    const page = await browser.newPage();

    // Set a user-agent and go to the page
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
    await page.goto(url, { waitUntil: 'domcontentloaded' });

    // Wait for the results to load (adjust the selector to the page's content)
    await page.waitForSelector('small.text a'); // This waits for the movie titles to appear

    // Get the page content after it has loaded
    const pageContent = await page.content();

    // Use Cheerio to parse the page content
    const $ = cheerio.load(pageContent);

    // Extract movie titles and links from the page
   
  
  
   
    const title = $('small.text a').text();      
     const dllink = $("a#link.btn").attr("href")
 
    // Close the browser after scraping
    await browser.close();
