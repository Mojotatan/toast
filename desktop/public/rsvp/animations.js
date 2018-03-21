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
  var name = document.getElementById('mce-NAME')
  var company = document.getElementById('mce-EMAIL')
  var email = document.getElementById('mce-COMPANY')

  var disable = document.getElementById('disable')
  var enable = document.getElementById('enable')
  
  let onChange = e => {
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

  document.querySelector('.res-btn.yes').onclick = e => {
    yes.checked = true
  }
  document.querySelector('.res-btn.no').onclick = e => {
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
      console.log(JSON.parse(this.responseText))
      document.getElementById('temperature').innerText = Math.round((JSON.parse(this.responseText).main.temp - 273.15) * 9/5 + 32) + '˚'
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