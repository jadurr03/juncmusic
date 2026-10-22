
(function(){
  var favoriteButton=document.querySelector('[data-favorite]');
  if(favoriteButton){
    favoriteButton.addEventListener('click',function(){
      alert('Press Ctrl+D like it is 2003.');
    });
  }
})();
