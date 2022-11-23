import applyCaseMiddleware from 'axios-case-converter';
import axios from 'axios';
import * as cheerio from 'cheerio';

//type
/* interface PageResult {
    GameTitle: string;
    BlockChain: string;
    NFT: string;
    F2P: string;
    P2E: string;
    Social: string;
}
*/

const address = 'https://playtoearn.net/blockchaingames?sort=socialscore_24h&direction=desc&page=1';

(async () => {
    const client = applyCaseMiddleware(axios.create());
    const Req = await client.get(address)
    const resp = Req.data;
    const $ = cheerio.load(resp);
    const CalledData = $('body > div > div > div > tbody > tr > td > a ');
        
    console.log(CalledData);

})









/*
(async () => {
    let i = 1;
    
        const Req = await axios.get(address)
        const resp = Req.data;
        const $ = cheerio.load(resp);
        const CalledData = $('body > div.container > div.indexmaintable.indexpage > div > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > a > div.dapp_name > span:nth-child(1)').text();
        
        console.log(CalledData);




})();

*/