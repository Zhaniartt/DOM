function solve (params) {
  let result = []

  params.slice(1).forEach(param => {
    let [Town, Latitude, Longitude] = param
      .split('|')
      .filter(x => x !== '')
      .map(x => x.trim(' '))

    result.push({ Town, Latitude: +Latitude, Longitude: +Longitude })
  })

  console.log(JSON.stringify(result))
}
solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])