const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 10 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
  }
  
  setInterval(() => {
    getHours()
  }, 1000)



  window.addEventListener('resize', function () {
    if (window.innerWidth >= 768) {
        var imagem = document.getElementById('img1');
        if (window.innerWidth < 1024) {
            imagem.src = 'microsoft-excel-2019.png'; 
        } else if (window.innerWidth < 1280) {
            imagem.src = 'Microsoft-Excel-Logo.png';
        } else {
            imagem.src = 'aaaaa.jpg';
        }
    }

    if (window.innerWidth >= 768) {
      var imagem = document.getElementById('img2');
      if (window.innerWidth < 1024) {
          imagem.src = 'SQL-Server-2019-600x256.jpg';
      } else if (window.innerWidth < 1280) {
          imagem.src = 'SQL1.png'; 
      } else {
          imagem.src = 'maxresdefault.jpg'; 
      }
  }

  if (window.innerWidth >= 768) {
    var imagem = document.getElementById('img3');
    if (window.innerWidth < 1024) {
        imagem.src = 'zmvh7l9r0nt71.png'; 
    } else if (window.innerWidth < 1280) {
        imagem.src = '5bf76d725e05c11756dd6e23d9d7f9e4.png'; 
    } else {
        imagem.src = '12aa768s7gs71.jpg';
    }
}

});