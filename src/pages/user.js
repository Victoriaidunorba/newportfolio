

document.querySelector(function () {
    document.querySelector('.box-menu2 .wrapper4').addEventListener('click', function(){
      document.querySelector('.box-menu2').classList.toggle('full-menu');
      document.querySelector('.hamburger2').classList.toggle('active');
    });
    document.querySelector('a').addEventListener('click', function(){
      document.querySelector(this).siblings('a').classList.remove('active');
      document.querySelector(this).classList.add('active');
    });
  });