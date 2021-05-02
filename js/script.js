let burgerMenu  = document.querySelector('.burger-menu');
let navigation = document.querySelector('nav')
burgerMenu.addEventListener('click', function(){
   if(navigation.classList.contains('desktop-only')){
       navigation.classList.remove('desktop-only')
       burgerMenu.style.transform = 'rotate(90deg)'
       burgerMenu.style.transitionDuration= '500ms'

   } else{
       navigation.classList.add('desktop-only')
       burgerMenu.style.transform = 'rotate(0deg)'

   }
})