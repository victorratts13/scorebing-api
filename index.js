'use strict'

var unirest = require('unirest');

let api = 'https://www.scorebing.com/ajax/score/data?';


class scoreBingAPI {
    req(mt){
        return new Promise((resolve, reject) => {
            if(!mt) mt = 0
            //console.log(`${api}mt=${mt}`)
            unirest('GET', `${api}mt=${mt}`).end((res) => {
                if (res.error) throw new Error(res.error)
                if (res.statusCode != 200) return reject(res.body)
                let data = res.body;

                return resolve(data);
            })
        })
    }
}

module.exports = scoreBingAPI;
