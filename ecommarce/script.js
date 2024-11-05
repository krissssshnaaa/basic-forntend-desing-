const url = 'https://dummyjson.com/products';

fetch(url)  
  .then(response => response.json())
  .then(data => {
    const products = data.products;
    const allbox = document.querySelectorAll('.box');

    for (let i = 0; i < allbox.length; i++) { 
      const title = allbox[i].querySelector('.h2');
      const image = allbox[i].querySelector('.myImage');
      const dis = allbox[i].querySelector('.discption');
      const price = allbox[i].querySelector('.price');


      if (products[i]) {
        title.innerHTML = products[i].title;
        price.innerHTML = `$ ${products[i].price}`;
        image.setAttribute('src', products[i].thumbnail);

        dis.innerHTML = products[i].description;
      }
    }
  })
  .catch(err => {
    const allbox = document.querySelectorAll('.box');
    for (let i = 0; i < allbox.length; i++) {
      const title = allbox[i].querySelector('.h2');
      title.innerHTML = `Error: ${err.message}`;
    }
  });




