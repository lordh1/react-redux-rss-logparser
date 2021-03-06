export const GET_TOP5 = 'GET_TOP5'

const fileUrl = 'varnish.log'

export const gettop5 = (top5) => ({
  type: GET_TOP5,
  top5: top5
})

const generateTop5 = (array) => {
  let statIp = {}
  let statFile = {}
  array.forEach(item => {
    let splited = item.split(' ')
    let ip = splited[0]
    let file = top5getFile(splited[6])

    statIp[ip] = (parseInt(statIp[ip], 10) || 0) + 1
    if(file) statFile[file] = (parseInt(statFile[file], 10) || 0) + 1
  })
  statIp = sortObject(statIp).slice(0, 5)
  statFile = sortObject(statFile).slice(0, 5)

  return { statIp: statIp, statFile: statFile }
}

const top5getFile = (item) => {
  if(!item) return;
  let splited = item.split('/')
  let file = splited[splited.length-1].match(/^([0-9a-zA-Z_-])+.([0-9a-zA-Z_-])+$/)
  if(file) return file.input
}

const sortObject = (obj) => {
  let arr = []
  let prop
  for (prop in obj) {
      if (obj.hasOwnProperty(prop)) {
          arr.push({
              'key': prop,
              'value': obj[prop]
          })
      }
  }
  arr.sort((b, a) => {
      return a.value - b.value
  })
  return arr
}

export const fetchlogs = () => dispatch => {
  fetch(fileUrl)
  .then(response => response.text())
  .then(text => text.split(/\r\n|\n/))
  .then(array => {
    dispatch(gettop5(generateTop5(array)))
  })
}


