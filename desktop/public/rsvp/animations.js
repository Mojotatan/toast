let navInit = function() {
  var top = document.getElementById('top')
  var left = document.getElementById('left')
  var bottom = document.getElementById('bottom')
  var right = document.getElementById('right')

  var topGo = document.getElementById('top-go')
  var leftGo = document.getElementById('left-go')
  var bottomGo = document.getElementById('bottom-go')
  var rightGo = document.getElementById('right-go')

  // on mouseover

  topGo.onmouseover = function() {
    if (topGo.className !== 'go') top.className = 'top ready'
    if (leftGo.className === 'go') left.className = 'left go push-down'
    if (rightGo.className === 'go') right.className = 'right go push-down'
    if (bottomGo.className === 'go') bottom.className = 'bottom go push-down'
  }

  leftGo.onmouseover = function() {
    if (leftGo.className !== 'go') left.className = 'left ready'
    if (topGo.className === 'go') top.className = 'top go push-right'
    if (rightGo.className === 'go') right.className = 'right go push-right'
    if (bottomGo.className === 'go') bottom.className = 'bottom go push-right'
  }

  bottomGo.onmouseover = function() {
    if (bottomGo.className !== 'go') bottom.className = 'bottom ready'
    if (leftGo.className === 'go') left.className = 'left go push-up'
    if (rightGo.className === 'go') right.className = 'right go push-up'
    if (topGo.className === 'go') top.className = 'top go push-up'
  }

  rightGo.onmouseover = function() {
    if (rightGo.className !== 'go') right.className = 'right ready'
    if (leftGo.className === 'go') left.className = 'left go push-left'
    if (topGo.className === 'go') top.className = 'top go push-left'
    if (bottomGo.className === 'go') bottom.className = 'bottom go push-left'
  }

  // on mouseleave

  topGo.onmouseleave = function() {
    if (topGo.className !== 'go') top.className = 'top'
    if (leftGo.className === 'go') left.className = 'left go'
    if (rightGo.className === 'go') right.className = 'right go'
    if (bottomGo.className === 'go') bottom.className = 'bottom go'
  }

  leftGo.onmouseleave = function() {
    if (leftGo.className !== 'go') left.className = 'left'
    if (topGo.className === 'go') top.className = 'top go'
    if (rightGo.className === 'go') right.className = 'right go'
    if (bottomGo.className === 'go') bottom.className = 'bottom go'
  }

  bottomGo.onmouseleave = function() {
    if (bottomGo.className !== 'go') bottom.className = 'bottom'
    if (leftGo.className === 'go') left.className = 'left go'
    if (rightGo.className === 'go') right.className = 'right go'
    if (topGo.className === 'go') top.className = 'top go'
  }

  rightGo.onmouseleave = function() {
    if (rightGo.className !== 'go') right.className = 'right'
    if (leftGo.className === 'go') left.className = 'left go'
    if (topGo.className === 'go') top.className = 'top go'
    if (bottomGo.className === 'go') bottom.className = 'bottom go'
  }

  // on click
  
  topGo.onclick = function() {
    top.className = 'top go'
    left.className = 'left'
    bottom.className = 'bottom'
    right.className = 'right'

    topGo.className = 'go'
    leftGo.className = ''
    bottomGo.className = ''
    rightGo.className = ''
  }

  leftGo.onclick = function() {
    top.className = 'top'
    left.className = 'left go'
    bottom.className = 'bottom'
    right.className = 'right'

    topGo.className = ''
    bottomGo.className = ''
    leftGo.className = 'go'
    rightGo.className = ''
  }

  bottomGo.onclick = function() {
    top.className = 'top'
    left.className = 'left'
    bottom.className = 'bottom go'
    right.className = 'right'

    topGo.className = ''
    leftGo.className = ''
    bottomGo.className = 'go'
    rightGo.className = ''
  }

  rightGo.onclick = function() {
    top.className = 'top'
    left.className = 'left'
    bottom.className = 'bottom'
    right.className = 'right go'

    topGo.className = ''
    leftGo.className = ''
    bottomGo.className = ''
    rightGo.className = 'go'
  }

  var boop = document.getElementById('boop')
  boop.onclick = function() {
    if (boop.parentNode.className === 'go') {
      document.getElementById('secret-static').hidden = false
      document.getElementById('video').play()
    }
  }
}
navInit()

let timeInit = function() {
  var date = new Date('June 7, 2018 18:00:00').getTime()
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
    days.innerText = addLeadingZero(Math.floor((dif % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)))
    hours.innerText = addLeadingZero(Math.floor((dif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    minutes.innerText = addLeadingZero(Math.floor((dif % (1000 * 60 * 60)) / (1000 * 60)))
    seconds.innerText = addLeadingZero(Math.floor((dif % (1000 * 60)) / 1000))
  }
  gotTheTime()
  setInterval(gotTheTime, 1000)
}
timeInit()

let formInit = function() {
  var name = document.getElementById('mce-NAME')
  var first = document.getElementById('mce-FIRST')
  var last = document.getElementById('mce-LAST')
  var company = document.getElementById('mce-EMAIL')
  var email = document.getElementById('mce-COMPANY')

  var disable = document.getElementById('disable')
  var enable = document.getElementById('enable')
  
  let onChange = function() {
    if (first.value && last.value) name.value = first.value + ' ' + last.value
    if (name.value && company.value && email.value) {
      disable.hidden = true
      enable.hidden = false
    } else {
      disable.hidden = false
      enable.hidden = true
    }
  }

  name.oninput = onChange
  company.oninput = onChange
  email.oninput = onChange

  var yes = document.getElementById('mce-ATTENDING-0')
  var no = document.getElementById('mce-ATTENDING-1')

  document.querySelector('.res-btn.yes').onclick = function() {
    yes.checked = true
  }
  document.querySelector('.res-btn.no').onclick = function() {
    no.checked = true
  }
}
formInit()

function tempInit() {
  var xhttp = new XMLHttpRequest()
  xhttp.open("GET", "http://api.openweathermap.org/data/2.5/weather?id=4887398&APPID=cf229bba05091c9ab1016bd0336e9faa", true)
  xhttp.send()
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // console.log(JSON.parse(this.responseText))
      let temp = document.getElementById('temperature')
      temp.innerHTML = Math.round((JSON.parse(this.responseText).main.temp - 273.15) * 9/5 + 32) + temp.innerHTML
   }
};
}
tempInit()

// Google maps
function initMap() {
  // var uluru = '125+South+Clark+Street,Chicago,Illinois';
  var impact = {lat: 41.879655, lng: -87.630323};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: impact,
    styles: [
      {
          "featureType": "all",
          "elementType": "labels",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#c4c4c4"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#707070"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 21
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "poi.business",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#be2026"
              },
              {
                  "lightness": "0"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "off"
              },
              {
                  "hue": "#ff000a"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#575757"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "color": "#2c2c2c"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#999999"
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "saturation": "-52"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#000000"
              },
              {
                  "lightness": 17
              }
          ]
      }
  ]
  });
  var marker = new google.maps.Marker({
    position: impact,
    map: map,
    title: '125 S Clark St'
  });
}

// document.querySelector('h1').innerText = window.innerHeight
var moved = false
document.onclick = function() {moved = true}
window.setTimeout(function(){
  if (!moved) {
    document.getElementById('top').className = 'top go'
    document.getElementById('left').className = 'left'
    document.getElementById('bottom').className = 'bottom'
    document.getElementById('right').className = 'right'

    document.getElementById('top-go').className = 'go'
    document.getElementById('left-go').className = ''
    document.getElementById('bottom-go').className = ''
    document.getElementById('right-go').className = ''
  }
  document.onclick = null
}, 8000)