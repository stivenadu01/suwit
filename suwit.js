// range
const range = document.getElementById('range')
range.addEventListener('input', () => {
  document.getElementById('divRange').innerHTML = range.value
})

// ketika di klik
const p = document.querySelectorAll('li img')
p.forEach(function(player){
  player.addEventListener('click', function(){
    const imgP = document.querySelectorAll('li img')
    imgP.forEach(i => i.classList.remove(i.id))

    const pPlayer = player.id
    player.classList += pPlayer
    const [imgCom, hasil] = getHasil(pPlayer, range.value)
    
    pikir()
    
    setTimeout(function(){
      const divImgCom = document.getElementById('com')
      const divHasil = document.querySelector('.hasil')

      divImgCom.setAttribute('src', 'img/'+ imgCom + '.jpeg')
      divHasil.innerHTML = hasil
      addEmot(hasil)
    } , 1000)
  })
})





function pikir(){
  const emot = document.querySelector('.emot')
  emot.style.transform = ''
  const divHasil = document.querySelector('.hasil')
  divHasil.innerHTML = ''
  divHasil.style.transform = ''
  document.getElementById('com').classList.remove('transform')
  document.getElementById('com').classList.remove('transition')
  const gambar = ['gajah', 'semut', 'orang']
  const imgCom = document.getElementById('com')
  let i = 0
  const waktuMulai = new Date().getTime();
  setInterval(function(){
    if(new Date().getTime() - waktuMulai > 1000) {
      clearInterval
      return
    }
    if(i == gambar.length) i = 0
    imgCom.setAttribute('src' , 'img/'+ gambar[i++] +'.jpeg')
    const emot = document.querySelector('.emot')
    emot.innerHTML = '🤔'
    return
  }, 100)
  setTimeout(function(){
    imgCom.classList += 'transform transition'
  },1000)
}

function getImgCom(x, y){
  if(y == 'kalah'){
    x == 'gajah' ? z = 'semut' : ''
    x == 'orang' ? z = 'gajah' : ''
    x == 'semut' ? z = 'orang' : ''
    return z
  }
  if(y == 'menang'){    
    x == 'gajah' ? z = 'orang' : ''
    x == 'orang' ? z = 'semut' : ''
    x == 'semut' ? z = 'gajah' : ''
    return z
  }
  return x
}

function getHasil(pPlayer , range){
  com = Math.random()*100
  if(com > range){
    imgCom = getImgCom(pPlayer , 'kalah')
    return [imgCom , 'kalah']
  }
  if(com > range / 3){
    imgCom = getImgCom(pPlayer, 'menang')
    return [imgCom, 'menang']
  }
  imgCom = getImgCom(pPlayer, null)
  return [imgCom, 'imbang']
}

function addEmot(hasil){
  const emot = document.querySelector('.emot')
  if(hasil == 'kalah'){
    emot.innerHTML = '😂'
    emot.style.transform = 'scale(1.9) translateY(-10px) translateX(25px)'
    divHasil.style.transform = 'scale(1.5) translateY(-10px) translateX(-5px) rotate(40deg)'
  }
  if(hasil == 'imbang'){
    emot.innerHTML = '🥱'
  }
  if(hasil == 'menang'){
    emot.innerHTML = '😒'
  }       
}