![logo](https://i.imgur.com/oe9tq82.png)
# scorebing-api
api package for https://www.scorebing.com/

## introduction


ScoreBing api is a javascript package for requesting data from scorebing.com's internal api.
through it you can request game data in real time from different Bet365 markets and implement them in your project.

## install

> run this:
```sh
~$ npm install scorebing-api
```
> now import for your project
```js
const scoreBing = require('scorebing-api');
```

## how to use?

>- this is a example of usage:

```js
const score = new scoreBing();

score.req(0).then((res) => {
    let data = res.rs;

    console.log(data)
})
```

> this code return this:

```js
[
  {
    id: '737608',
    league: {
      i: '631',
      zc: '1',
      jc: '0',
      bd: '1',
      n: 'SA Copa',
      fn: 'Copa Libertadores',
      ls: 'C',
      sbn: '',
      stn: '',
      ci: '4',
      cn: 'International',
      cs: 'G'
    },
    host: { i: '5877', n: 'Gremio', sbn: '', stn: '' },
    guest: { i: '1641', n: 'Internacional RS', sbn: '', stn: '' },
    heh: 1,
    lvc: 0,
    rcn: 5,
    zhanyi: '0',
    sd: { f: [Object], h: [Object] },
    events: [
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object], [Object], [Object], [Object],
      [Object]
    ],
    events_graph: { events: [Array], ml: '90', status: 99 },
    ss: 'S',
    ss_ta: '0',
    rd: {
      hg: '0',
      gg: '0',
      hc: '5',
      gc: '3',
      hy: '2',
      gy: '3',
      hr: '3',
      gr: '3'
    },
    plus: {
      ha: '80',
      ga: '87',
      hd: '52',
      gd: '53',
      hso: '4',
      gso: '1',
      hsf: '7',
      gsf: '5',
      hqq: '50',
      gqq: '50'
    },
    rh: { hg: '0', gg: '0', hc: '5', gc: '2' },
    status: '99',
    h_ld: {
      hrf: null,
      hrfsp: null,
      grfsp: null,
      rft: '100',
      rf: [Array],
      hdx: null,
      hdxsp: null,
      gdxsp: null,
      dxt: '100',
      dx: [Array],
      hcb: null,
      hcbsp: null,
      gcbsp: null,
      cbt: '100',
      cb: [Array]
    },
    f_ld: {
      hrf: null,
      hrfsp: null,
      grfsp: null,
      rft: '100',
      rf: [Array],
      hdx: null,
      hdxsp: null,
      gdxsp: null,
      dxt: '100',
      dx: [Array],
      hcb: null,
      hcbsp: null,
      gcbsp: null,
      cbt: '100',
      cb: [Array]
    }
  },

```
> For questions, use git inssues or follow me on
  >- @victorRatts (instagram)
  >- @RattsVictor (twitter)
