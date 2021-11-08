const puppeteer = require('puppeteer')

const getByQuery = async (req, res) => {
  const { id } = req.params;
  console.log(id);
	try {
		const URL = `https://www.buscape.com.br/search?q=${id}`
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
		await page.goto(URL);
    await page.waitForSelector('#pageSearchResultsBody');
    console.log('results body');
    await page.waitForTimeout(10000)
    console.log('article search');

    const firtsProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[0].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[0].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[0].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[0].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
    const secondProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[1].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[1].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[1].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[1].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
    const thirdProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[2].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[2].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[2].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[2].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
    const fourthProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[3].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[3].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[3].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[3].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
        
    const fifthProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[4].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[4].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[4].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[4].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
        
        
    const results = [firtsProduct, secondProduct, thirdProduct, fourthProduct, fifthProduct];

    await browser.close()
    console.log('finalizada');

    return res.status(200).json(results)

  } catch (error) {
		console.error(error)
	}
}

const getById = async (req, res) => {
  const { id } = req.params;

	try {
		const URL = `https://www.buscape.com.br/${id}`
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
		await page.goto(URL);
    await page.waitForSelector('#pageSearchResultsBody');
    console.log('results body');
    await page.waitForTimeout(5000)
    console.log('article search');

    const firtsProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[0].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[0].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[0].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[0].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
    const secondProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[1].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[1].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[1].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[1].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
    const thirdProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[2].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[2].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[2].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[2].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
    const fourthProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[3].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[3].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[3].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[3].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
        
    const fifthProduct = await page.evaluate(() => {    
      return {
        title: document.getElementsByTagName('article')[4].children[0].children[0].children[1].children[1].children[0].children[0].textContent,
        image: document.getElementsByTagName('article')[4].children[0].children[0].children[1].children[0].children[0].children[0].src,
        link:  document.getElementsByTagName('article')[4].children[0].children[0].href,
        price:  document.getElementsByTagName('article')[4].children[0].children[0].children[1].children[1].children[2].children[0].children[1].innerText
      };
    });
        
        
    const results = [firtsProduct, secondProduct, thirdProduct, fourthProduct, fifthProduct];

    await browser.close()
    console.log('finalizada');

    return res.status(200).json(results)

  } catch (error) {
		console.error(error)
	}
}

module.exports = {
  getById,
  getByQuery,
};
