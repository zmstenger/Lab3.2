var theList = [
  'Bander',
  'Henderson',
  true,
  37,
  null,
  undefined,
  {test: 'one', score: 55},
  ['one', 'two'],
]
theList[0] = 'FIRST'
theList = theList.slice(0, 2)
theList.push('MIDDLE', 'hello world', 'LAST')
console.log(theList)
