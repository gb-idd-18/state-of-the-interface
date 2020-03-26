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

  if (winY >= maxY) {
    // You have definitely hit the bottom
    // document.querySelector('#content').innerHTML += `
    //   <section class="full-viewport">
    //     <h2>Thank you.</h2>
    //   </section>
    //   `
    haveHitBottom = true
  }


  if (document.querySelector('section:nth-child(2)').getBoundingClientRect().top < winH / 2) {
    document.querySelector('section:nth-child(2) h2').classList.add('show')
  } else {
    document.querySelector('section:nth-child(2) h2').classList.remove('show')
  }


  document.querySelector('.panel').innerHTML = `
    <li>The window is <strong>${winH}</strong> px tall, <strong>${winW}</strong> px wide</li>
    <li>The docunment is <strong>${docH}</strong> px tall, <strong>${docW}</strong> px wide</li>
    <li>The window has been scrolled vertically <strong>${winY}</strong> px of <strong>${maxY}</strong> px (<strong>${pctY}</strong> %)</li>
    <li>The window has been scrolled horizontally <strong>${winX}</strong> px of <strong>${maxX}</strong> px (<strong>${pctX}</strong> %)</li>
    <li>Have you scrolled all the way to the bottom? <strong>${haveHitBottom}</strong></li>
  `

}


window.addEventListener('load', theStateOfTheInterface)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)
