let burgerMenu  = document.querySelector('.burger-menu');
let navigation = document.querySelector('nav')
burgerMenu.addEventListener('click', function(){
   if(navigation.classList.contains('desktop-only')){
       navigation.classList.remove('desktop-only')
   } else{
       navigation.classList.add('desktop-only')
   }
})