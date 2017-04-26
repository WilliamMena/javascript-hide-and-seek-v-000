function getFirstSelector(selector) {
 return document.querySelector(`${selector}`)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rank = document.querySelectorAll('.ranked-list')
  for (let i = 0, l = rank.length; i < l; i++) {
    // rank[i].innerHTML += parseInt(n, 10)
    // rank[i].innerHTML = (i + 1).toString()
    rank[i].innerHTML = parseInt(n, 10) + rank[i]
  }
}

function deepestChild() {
  var outmost = document.querySelector('div#grand-node')

  let current = outmost
  // let next = []
  let next = current.querySelector('div')

  // let length = outmost.querySelectorAll('div')

  while (current) {
    if (next) {
      current = next
      next = current.querySelector('div')
    }
  }

  return current

}