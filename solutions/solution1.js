const solution1 = () => {
  const ul = document.querySelector('.ice-cream-list');
  return window.iceCreamFlavors.forEach(flavor => {
    let li = document.createElement('li');
    li.setAttribute('class', 'ice-cream-flavor');
    li.innerHTML = flavor;
    ul.appendChild(li);
  });
};

solution1();

