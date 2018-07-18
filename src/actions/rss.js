import xml2js from 'xml2js'

export const RECEIVE_rss = 'RECEIVE_rss'

const apiUrl = 'https://www.vg.no/rss/feed/forsiden/?frontId=1'

export const receiverss = (json) => ({
  type: RECEIVE_rss,
  rss: json
})

const sortByDate = (array) => {
  return array.sort(function(a,b){
    return new Date(b.pubDate) - new Date(a.pubDate);
  });
}

const convertDate = (array) => {
  array.forEach((item) => {
    let date = new Date(item.pubDate)
    let yyyy = date.getFullYear()
    let mm = date.getMonth() + 1
    let dd = date.getDay()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()

    let dateHuman = yyyy + '-' +
                    (mm>9 ? '' : '0') + mm + '-' +
                    (dd>9 ? '' : '0') + dd + ' ' +
                    (h>9 ? '' : '0') + h + ':' +
                    (m>9 ? '' : '0') + m + ':' +
                    (s>9 ? '' : '0') + s

    item.pubDate = dateHuman
  })

  return array
}

export const fetchrss = () => dispatch => {
  let header = new Headers({
    'Access-Control-Allow-Origin':'*'
  });
  let sentData={
      method: 'GET',
      mode: 'cors',
      header: header
  };

  fetch(apiUrl, sentData)
  .then(response => response.text())
  .then(xml => xml2js.parseString(xml, { explicitArray: false }, (err, result) => {
    dispatch(receiverss(convertDate(sortByDate(result.rss.channel.item))))
  }))
}

