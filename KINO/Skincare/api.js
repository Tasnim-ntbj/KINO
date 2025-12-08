//load products
const loadProducts = () => {
  fetch("products.json")
    .then((res) => res.json())
    .then((data) => displayProducts(data));
}
const displayProducts = (data) => {
  const products = document.getElementById("products-container")
  products.innerHTML = ""
  for (const i of data) {
    console.log(i);
    const div = document.createElement("div")
    div.innerHTML = `


<div class="flex">
      <div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src=${i.image}
      alt="Movie" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${i.name}</h2>
    <p class="font-bold">Size:${i.size}</p>
    <p class="font-bold">Quality:${i.quality}</p>
    <p class="font-bold">Guarentee:${i.guarentee}</p>
    <p class="font-bold">warrenty:${i.warrenty}</p>
    <p class="font-bold">Color:${i.color}</p>
    <p class="font-bold">Price:${i.price}</p>
    <p class="font-bold">Rating:${i.rating}</p>
    <div class="card-actions">
      <button class="flex items-center btn btn-primary px-28 py-3 text-white bg-red-400">Add To Cart</button>
    </div>
   </div>
  </div>

`
    products.appendChild(div);

  }
}
loadProducts();

//load products
const load_Products = () => {
  fetch("skin.json")
    .then((res) => res.json())
    .then((data) => display_Products(data));
}
const display_Products = (data) => {
  const skin = document.getElementById("products-container")
  skin.innerHTML = ""
  for (const i of data) {
    console.log(i);
    const div = document.createElement("div")
    div.innerHTML = `


<div class="flex">
      <div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src=${i.image}
      alt="Movie" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${i.name}</h2>
    <p class="font-bold">Size:${i.size}</p>
    <p class="font-bold">Quality:${i.quality}</p>
    <p class="font-bold">Guarentee:${i.guarentee}</p>
    <p class="font-bold">warrenty:${i.warrenty}</p>
    <p class="font-bold">Color:${i.color}</p>
    <p class="font-bold">Price:${i.price}</p>
    <p class="font-bold">Rating:${i.rating}</p>
    <div class="card-actions">
      <button class="flex items-center btn btn-primary px-28 py-3 text-white bg-red-400">Add To Cart</button>
    </div>
   </div>
  </div>

`
    skin.appendChild(div);

  }
}
//load products
const load_drySkin = () => {
  fetch("drySkin.json")
    .then((res) => res.json())
    .then((data) => display_drySkin(data));
}
const display_drySkin = (data) => {
  const drySkin = document.getElementById("products-container")
  drySkin.innerHTML = ""
  for (const i of data) {
    console.log(i);
    const div = document.createElement("div")
    div.innerHTML = `


<div class="flex">
      <div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src=${i.image}
      alt="Movie" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${i.name}</h2>
    <p class="font-bold">Size:${i.size}</p>
    <p class="font-bold">Quality:${i.quality}</p>
    <p class="font-bold">Guarentee:${i.guarentee}</p>
    <p class="font-bold">warrenty:${i.warrenty}</p>
    <p class="font-bold">Color:${i.color}</p>
    <p class="font-bold">Price:${i.price}</p>
    <p class="font-bold">Rating:${i.rating}</p>
    <div class="card-actions">
      <button class="flex items-center btn btn-primary px-28 py-3 text-white bg-red-400">Add To Cart</button>
    </div>
   </div>
  </div>

`
    drySkin.appendChild(div);

  }
}