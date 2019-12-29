/**
 * @param {string[]} A
 * @return {string[]}
 */
const { log } = console

var commonChars = function(A = []) {
  const based = A[0]
  const sources = A.slice(1)

  const res = []

  loop(based, s => {
    const t = []
    for (let i = 0; i < sources.length; i++) {
      if (sources[i].indexOf(s) !== -1) {
        sources[i] = sources[i].replace(s, '')
        t.push(s)
      }
    }

    if (t.length === sources.length) {
      res.push(s)
    }
  })

  return res
}

function loop(str, cb = () => {}) {
  for (let i = 0; i < str.length; i++) {
    cb(str[i], i)
  }
}

// log(commonChars(["bella","label","roller"]))
// log(commonChars(["cool","lock","cook"]))
log(commonChars(["acabcddd","bcbdbcbd","baddbadb","cbdddcac","aacbcccd","ccccddda","cababaab","addcaccd"]))