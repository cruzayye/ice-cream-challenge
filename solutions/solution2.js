const solution2 = () => {
  const ul = document.getElementsByTagName('ul')[0];
  for(let i = 0; i < window.iceCreamFlavors.length; i++){
    let li = document.createElement('li');
    li.setAttribute('class', 'ice-cream-flavor');
    li.innerHTML = iceCreamFlavors[i];
    ul.appendChild(li);
    
  }
};


solution2();
