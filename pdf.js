const PDF = require('pdfkit')
const fs = require('fs')
const path = require('path')

function create() {
  let type = 'type'.toUpperCase()
  let category = 'category'
  let style = 'style'.toUpperCase() // inline or cartridge
  let series = 'series'.toUpperCase()
  let shortDescription = 'short description'.toUpperCase()
  let description = 'long description'.toUpperCase()
  let operation = ['place dat shit', 'plug dat shit', 'aww yeah, look at it go'].map(bullet => bullet.toUpperCase())
  let features = ['is a pretty cool guy', "doesn't afraid of anything"].map(bullet => bullet.toUpperCase())
  let specifications = ['this is gonna be an array of either arrays or objects, decide later'].map(bullet => bullet.toUpperCase())

  let doc = new PDF({autoFirstPage: false})
  let temp = fs.createWriteStream(path.resolve(__dirname, './temp.pdf'))
  doc.pipe(temp)
  doc.addPage({
    margin: 15
  })
  doc.info.Title = type
  doc.info.Author = 'Vonberg Valve, inc.'

  // console.log(doc)
  const docWidth = 612
  const docHeight = 792
  
  doc.image(path.resolve(__dirname, './pdf-imgs/vvi-logo.png'), 10, 10, {
    height: 60
  })
  
  doc.fillColor('#00703c')
  doc.font('Helvetica-Bold')
  doc.fontSize(16)
  doc.text(type, 0, 35, {
    align: 'center'
  })

  // default line height for 12px font is 14.4, rounding up to 15
  doc.fontSize(12)
  doc.text(category, 0, 15, {
    align: 'right'
  })
  doc.text(style, 0, 30, {
    align: 'right'
  })
  doc.fillColor('#000000')
  doc.fontSize(10)
  doc.text(series, 0, 45, {
    align: 'right'
  })
  doc.text(shortDescription, 0, 60, {
    align: 'right'
  })

  doc.rect(15, 75, docWidth - 30, 2).fillAndStroke('#00703c')
  
  let colWidth = (docWidth - 30) / 2 - 15
  // colWidth = (docWidth - 30) / 3 - 15

  doc.rect(colWidth + 30, 90, 2, 500).fillAndStroke('#00703c')


  // column 1

  doc.fillColor('#000000')
  doc.text('PRODUCT', 15, 90)
  doc.rect(15, 100, colWidth, 1).fillAndStroke('#00703c')
  // product image
  doc.image(path.resolve(__dirname, './pdf-imgs/schematic_drawing.jpg'), 15, 110, {
    fit: [colWidth, colWidth]
  })

  doc.fillColor('#000000')
  doc.text('SCHEMATIC', 15, 90 + colWidth)
  doc.rect(15, 100 + colWidth, colWidth, 1).fillAndStroke('#00703c')
  // schematic image

  doc.fillColor('#000000')
  doc.text('TYPICAL PERFORMANCE', 15, 90 + colWidth + 100)
  doc.rect(15, 100 + colWidth + 100, colWidth, 1).fillAndStroke('#00703c')
  // performance image

  // column 2
  let extra = 0

  doc.fillColor('#000000')
  doc.text('DESCRIPTION', colWidth + 45, 90)
  doc.rect(colWidth + 45, 100, colWidth, 1).fillAndStroke('#00703c')
  doc.fillColor('#000000')
  doc.font('Helvetica')
  doc.text(description, colWidth + 45, 105)
  // extra += 15

  doc.font('Helvetica-Bold')
  doc.text('OPERATION', colWidth + 45, 120 + extra)
  doc.rect(colWidth + 45, 130 + extra, colWidth, 1).fillAndStroke('#00703c')
  doc.fillColor('#000000')
  doc.font('Helvetica')
  operation.forEach((op, index) => {
    doc.text('• ' + op, colWidth + 45, 135 + extra)
    extra += 15
  })
  extra -= 15

  doc.font('Helvetica-Bold')
  doc.text('FEATURES', colWidth + 45, 150 + extra)
  doc.rect(colWidth + 45, 160 + extra, colWidth, 1).fillAndStroke('#00703c')
  doc.fillColor('#000000')
  doc.font('Helvetica')
  features.forEach((feat, index) => {
    doc.text('• ' + feat, colWidth + 45, 165 + extra)
    extra += 15
  })
  extra -= 15

  doc.font('Helvetica-Bold')
  doc.text('SPECIFICATIONS', colWidth + 45, 180 + extra)
  doc.rect(colWidth + 45, 190 + extra, colWidth, 1).fillAndStroke('#00703c')
  doc.fillColor('#000000')
  doc.font('Helvetica')
  specifications.forEach((spec, index) => {
    doc.text('• ' + spec, colWidth + 45, 195 + extra)
    extra += 15
  })
  extra -= 15

  doc.font('Helvetica-Bold')
  doc.text('ORDERING INFORMATION', colWidth + 45, 210 + extra)
  doc.rect(colWidth + 45, 220 + extra, colWidth, 1).fillAndStroke('#00703c')
  //  ordering info image

  // bottom column


  doc.fillColor('#000000')
  doc.fontSize(6)
  doc.text(
    "This document, as well as all catalogs, price lists and information provided by Vonberg Valve, Inc., is intended to provide product information for further consideration by users having substantial technical expertise due to the variety of operating conditions and applications for these valves, the user, through its own analysis, testing and evaluation, is solely responsible for making the final selection of the products and ensuring that all safety, warning and performance requirements of the application or use are met. The valves described herein, including without limitation, all component features, specifications, designs, pricing and availability, are subject to change at any time at the sole discretion of Vonberg Valve, Inc. without prior notification.",
    15, docHeight - 90
  )

  // footer
  doc.rect(15, docHeight - 55, docWidth - 30, 2).fillAndStroke('#00703c')

  // doc.fontSize(18)
  // doc.text(
  //   'Vonberg Valve, inc.',
  //   15, docHeight - 45
  // )

  doc.fillColor('#000000')
  doc.fontSize(8)
  doc.text(
    '3800 Industrial Avengue • Rolling Meadows, IL 60008-1085 USA © 2015',
    0, docHeight - 45, {align: 'center'}
  )
  doc.text(
    'phone: 847-259-3800 • fax: 847-259-3997 • email: info@vonberg.com',
    0, docHeight - 30, {align: 'center'}
  )
  
  doc.end()
  return temp
}

module.exports = {create}

// convert svg polygon to friendly input
// let polyfy = str => {
//   let arr = str.split(' ')
//   let len = arr.length
//   if (len % 2 !== 0) return 'odd number of points'
//   let reformatted = []
//   for (let i = 0; i < len; i += 2) {
//     reformatted.push([arr[i], arr[i + 1]])
//   }
//   return reformatted
// }
// doc.polygon(['148.31','20.87'],['138.64','36.38'],['367.25','36.47'],['362.1','53.42'],['362.1','53.42'],['406.6','20.83'],['148.31','20.87']).fillAndStroke('#00703c')
// doc.polygon(['212.16','56.11'],['232.76','56.11'],['266.19','113.02'],['266.19','56.11'],['289.05','56.11'],['289.05','150.07'],['266.45','150.07'],['234.84','92.92'],['234.84','150.07'],['212.16','150.07'],['212.16','56.11']).fillAndStroke('#00703c')
// doc.polygon([ '370.07', '56.24' ],[ '423.33', '56.24' ],[ '423.33', '77.59' ],[ '394.06', '77.59' ],[ '394.06', '92.17' ],[ '422.33', '92.17' ],[ '422.33', '113.02' ],[ '393.82', '113.02' ],[ '393.82', '129.22' ],[ '423.33', '129.22' ],[ '423.33', '150.45' ],[ '370.07', '150.45' ],[ '370.07', '56.24' ]).fillAndStroke('#00703c')
// doc.path('M591.25,97.31H541.94v19.37h26.11c-3.88,9.41-12,15.91-21.43,15.91-13.2,0-23.9-12.7-23.9-28.38s10.7-28.38,23.9-28.38c8.17,0,15.37,4.9,19.66,12.35h23C583.33,68.91,566.6,55,546.83,55,522.06,55,502,76.8,502,103.68s20.08,48.66,44.85,48.66,44.85-21.79,44.85-48.66a51.9,51.9,0,0,0-.28-5.32l-.15-1Z').fillAndStroke('#00703c')
// doc.path('M483.08,116C493.7,110.77,501,100.28,501,88.19,501,71,486.24,57,468.07,57l-.66,0v0h-38v93.08H453v-46l25,46H502.6Zm-8.18-22.1c-2.73,1.76-7.7,2.64-14.94,2.64h-7.12V73.76h6.23c6.05,0,10.21.38,12.47,1.17A11.16,11.16,0,0,1,477,78.78a10.18,10.18,0,0,1,2,6.31Q479,91.21,474.9,93.85Z').fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')
// doc.path().fillAndStroke('#00703c')