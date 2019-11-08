const solution3 = () => {
  const ul = $('.ice-cream-list')[0];
  return window.iceCreamFlavors.forEach(flavor => {
    let li = document.createElement('li');
    $(li).addClass('ice-cream-flavor').append(flavor); 
    $(ul).append(li);
  });
};

solution3();
