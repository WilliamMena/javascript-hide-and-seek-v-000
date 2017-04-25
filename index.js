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
  
}