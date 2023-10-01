const productsDB = JSON.parse(localStorage.getItem("products"));
function renderManager(data) {
  const listProduct = document.querySelector("#list-prouct");
  let resurl = "";
  console.log(1111, productsDB);

  for (const product of data) {
    resurl += ` <tr>
    <td>${product.ID}</td>
    <td>${product.skin}</td>
    <td>${product.name}</td>
    <td>${product.price.toLocaleString()}VNĐ</td>
    <td>${product.qantity}</td>
    
    <td class="td-action">
     
      <button class="action  blue-color" id="btn-edit">
        Edit
      </button>
      <button class="action  secondary-color" id="btn-delete" onclick='handleDeleteManage("${
        product.ID
      }")'>
        Delete
      </button>
    </td>
  </tr>`;
  }
  listProduct.innerHTML = resurl;
}
renderManager(productsDB);

function handleDeleteManage(ID) {
  const productsDB = getDataFromLocalStorage("products");
  productsDB.forEach((product, index) => {
    if (product.ID === ID) {
      productsDB.splice(index, 1);
    }
  });
  setDataFromLocalStorage("products", productsDB);
  renderManager(productsDB);
}

function searchProductEl() {
  const searchProduct = document
    .querySelector("#search-product")
    .value.toLowerCase();
  const products = getDataFromLocalStorage("products");
  const newProduct = products.filter((product) => {
    return product.name.toLowerCase().includes(searchProduct);
  });
  renderManager(newProduct);
}
function handleAddProduct() {
  const productsDB = JSON.parse(localStorage.getItem("products"));
  const idProductElement = document.querySelector("#product-id");
  const nameProductElement = document.querySelector("#product-name");
  const skinProductElement = document.querySelector("#product-skin");
  const priceProductElement = document.querySelector("#product-price");
  const qantityProductElement = document.querySelector("#product-qantity");
  const descriptionProductElement = document.querySelector(
    "#product-description"
  );
  const newProduct = {
    ID: idProductElement.value,
    name: nameProductElement.value,
    skin: skinProductElement.value,
    price: Number(priceProductElement.value),
    qantity: Number(qantityProductElement.value),
    description: descriptionProductElement.value,
  };
  productsDB.push(newProduct);
  localStorage.setItem("products", JSON.stringify(productsDB));
  renderManager(productsDB);
  idProductElement.value = "";
  nameProductElement.value = "";
  skinProductElement.value = "";
  priceProductElement.value = "";
  qantityProductElement.value = "";
  descriptionProductElement.value = "";
}
