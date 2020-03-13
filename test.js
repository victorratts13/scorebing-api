const scoreBing = require('./index');
const score = new scoreBing();

score.req(0).then((res) => {
    let data = res.rs;

    console.log(data)
})


/*
unirest('GET', 'https://www.scorebing.com/ajax/score/data?mt=1584054663')
.end((res) => {
    let data = res.body, x, i, a;
    //console.log(JSON.stringify(res.body, true, 1));
    //console.log(res.body.rs)
    for(x = 0; x < data.rs.length; x++){
        //console.log(x)
        let rs = data.rs[x];
        let id = rs.id,
            ligue = rs.ligue,
            home = rs.host,
            guest = rs.guest,
            sd = rs.sd,
            time = rs.rtime,
            statics = rs.f_ld;
        //console.log(rs)
        try{
            console.log('casa - '+rs.host.n)
            console.log('convid - '+rs.guest.n)
        }catch(err){
            console.log('time desconhecido ou não identificado: '+err)
        }

    }
    
})
*/
