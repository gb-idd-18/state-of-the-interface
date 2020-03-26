let haveHitBottom = false

let theStateOfTheInterface = (event) => { 
  
  let winH = document.documentElement.clientHeight
  let winW = document.documentElement.clientWidth
  let docH = document.documentElement.scrollHeight
  let docW = document.documentElement.scrollWidth
  let winY = window.scrollY
  let winX = window.scrollX
  let maxY = docH - winH
  let maxX = docW - winW
  let pctY = Math.round(winY / Math.max(maxY, 1) * 100)
  let pctX = Math.round(winX / Math.max(maxX, 1) * 100)


  document.querySelector('.panel').innerHTML = `
    <li>The window is <strong>${winH}</strong> px tall, <strong>${winW}</strong> px wide</li>
    <li>The document is <strong>${docH}</strong> px tall, <strong>${docW}</strong> px wide</li>
    <li>The window has been scrolled vertically <strong>${winY}</strong> px of <strong>${maxY}</strong> px (<strong>${pctY}</strong> %)</li>
    <li>The window has been scrolled horizontally <strong>${winX}</strong> px of <strong>${maxX}</strong> px (<strong>${pctX}</strong> %)</li>
  `

}


window.addEventListener('load', theStateOfTheInterface)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)
