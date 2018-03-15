let navInit = () => {
  var top = document.getElementById('top')
  var left = document.getElementById('left')
  var bottom = document.getElementById('bottom')
  var right = document.getElementById('right')

  var topGo = document.getElementById('top-go')
  var leftGo = document.getElementById('left-go')
  var bottomGo = document.getElementById('bottom-go')
  var rightGo = document.getElementById('right-go')

  // on mouseover

  topGo.onmouseover = e => {
    if (topGo.className !== 'go') top.className = 'top ready'
  }

  leftGo.onmouseover = e => {
    if (leftGo.className !== 'go') left.className = 'left ready'
  }

  bottomGo.onmouseover = e => {
    if (bottomGo.className !== 'go') bottom.className = 'bottom ready'
  }

  rightGo.onmouseover = e => {
    if (rightGo.className !== 'go') right.className = 'right ready'
  }

  // on mouseleave

  topGo.onmouseleave = e => {
    if (topGo.className !== 'go') top.className = 'top'
  }

  leftGo.onmouseleave = e => {
    if (leftGo.className !== 'go') left.className = 'left'
  }

  bottomGo.onmouseleave = e => {
    if (bottomGo.className !== 'go') bottom.className = 'bottom'
  }

  rightGo.onmouseleave = e => {
    if (rightGo.className !== 'go') right.className = 'right'
  }

  // on click
  
  topGo.onclick = e => {
    top.className = 'top go'
    left.className = 'left'
    bottom.className = 'bottom'
    right.className = 'right'

    topGo.className = 'go'
    leftGo.className = ''
    bottomGo.className = ''
    rightGo.className = ''
  }

  leftGo.onclick = e => {
    top.className = 'top'
    left.className = 'left go'
    bottom.className = 'bottom'
    right.className = 'right'

    topGo.className = ''
    bottomGo.className = ''
    leftGo.className = 'go'
    rightGo.className = ''
  }

  bottomGo.onclick = e => {
    top.className = 'top'
    left.className = 'left'
    bottom.className = 'bottom go'
    right.className = 'right'

    topGo.className = ''
    leftGo.className = ''
    bottomGo.className = 'go'
    rightGo.className = ''
  }

  rightGo.onclick = e => {
    top.className = 'top'
    left.className = 'left'
    bottom.className = 'bottom'
    right.className = 'right go'

    topGo.className = ''
    leftGo.className = ''
    bottomGo.className = ''
    rightGo.className = 'go'
  }

}
navInit()

let timeInit = () => {
  var date = new Date('April 12, 2018 18:00:00').getTime()
  var weeks = document.getElementById('weeks')
  var days = document.getElementById('days')
  var hours = document.getElementById('hours')
  var minutes = document.getElementById('minutes')
  var seconds = document.getElementById('seconds')
  function addLeadingZero(int) {
    return (int < 10) ? '0' + int : int
  }
  function gotTheTime() {
    var now = new Date().getTime()
    var dif = date - now
    
    weeks.innerText = addLeadingZero(Math.floor(dif / (1000 * 60 * 60 * 24 * 7)))
    days.innerText = addLeadingZero(Math.floor(dif / (1000 * 60 * 60 * 24)))
    hours.innerText = addLeadingZero(Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    minutes.innerText = addLeadingZero(Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60)))
    seconds.innerText = addLeadingZero(Math.floor((dif % (1000 * 60)) / 1000))
  }
  gotTheTime()
  setInterval(gotTheTime, 1000)
}
timeInit()

let formInit = () => {
  var name = document.getElementById('name')
  var company = document.getElementById('company')
  var email = document.getElementById('email')
  var btns = document.querySelectorAll('.res-btn')
  
  let onChange = e => {
    if (name.value && company.value && email.value) {
      btns.forEach(btn => btn.disabled = false)
    } else {
      btns.forEach(btn => btn.disabled = true)
    }
  }

  name.oninput = onChange
  company.oninput = onChange
  email.oninput = onChange
}
formInit()