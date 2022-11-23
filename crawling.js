"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var cheerio_1 = require("cheerio");
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
var address = 'https://playtoearn.net/blockchaingames?sort=socialscore_24h&direction=desc&page=1';
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var i, Req, resp, $, CalledData;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = 1;
                return [4 /*yield*/, axios_1["default"].get(address)];
            case 1:
                Req = _a.sent();
                resp = Req.data;
                $ = cheerio_1["default"].load(resp);
                CalledData = $('body').text();
                console.log(CalledData);
                return [2 /*return*/];
        }
    });
}); })();
/* main() {
    await axios.get(
        'https://playtoearn.net/blockchaingames?sort=socialscore_24h&direction=desc&page=1')
        .then(Resp => {
            const $ = cheerio.load(Resp.data);
            const bodyList = $('body > div.container > div.indexmaintable.indexpage')
            .map(
                function (i, element){
                    const GameInfo: PageResult = {
                        GameTitle: String($(element)
                        .find('div > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(3) > a > div.dapp_name > span:nth-child(1)')
                        .text()),
                        BlockChain: String($(element)
                        .find('body > div.container > div.indexmaintable.indexpage > div > table:nth-child(2) > tbody > tr.sponsored_tr > td:nth-child(5) > a:nth-child(1)')
                        .text()),
                        NFT: String($(element)
                        .find('body > div.container > div.indexmaintable.indexpage > div > table:nth-child(2) > tbody > tr.sponsored_tr > td:nth-child(8) > a')
                        .text()),
                        F2P: String($(element)
                        .find('body > div.container > div.indexmaintable.indexpage > div > table:nth-child(2) > tbody > tr.sponsored_tr > td:nth-child(9) > a')
                        .text()),
                        P2E: String($(element)
                        .find('body > div.container > div.indexmaintable.indexpage > div > table:nth-child(2) > tbody > tr.sponsored_tr > td:nth-child(10)')
                        .text()),
                        Social: String($(element)
                        .find('body > div.container > div.indexmaintable.indexpage > div > table:nth-child(2) > tbody > tr.sponsored_tr > td:nth-child(11) > span.dailychangepercentage')
                        .text()),
                    }
                    console.log(GameInfo);
                });
            })
        .catch(err => {
            console.error(err);
    
        });
    }


main();

/* */ 
