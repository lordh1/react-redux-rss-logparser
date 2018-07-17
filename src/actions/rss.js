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
    dispatch(receiverss(sortByDate(result.rss.channel.item)))
  }))
}

