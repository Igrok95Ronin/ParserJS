import axios from 'axios';
import * as cheerio from 'cheerio';

axios.get('https://www.citypopulation.de/en/france/yvelines/').then(html => {//введите адрес сайта
    const $ = cheerio.load(html.data)
    let text = ''
    $("tr > td > span > a").each((i, elem) => {//шаблон парсинга
        text += `${$(elem).text()}\n`
    })
    console.log(text)
})