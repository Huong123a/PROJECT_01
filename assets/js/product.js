// Lấy tham chiếu đến phần tử HTML trong DOM mà bạn muốn hiển thị danh sách sản phẩm
const productContainer = document.querySelector(
  ".list-product .product-cart1 .row"
);
const products = JSON.parse(localStorage.getItem("products"));

// Tạo một chuỗi HTML để lưu trữ danh sách sản phẩm
function renderProducts(data) {
  let productHTML = "";

  // Lặp qua mảng sản phẩm và thêm thông tin sản phẩm vào chuỗi HTML
  data.forEach(function (product) {
    

    productHTML += `
          <div class="col-md-4 my-2">
              <div class="card" >
                  <img src="${product.imageURL}"
                      alt="Sản phẩm 1" class="card-img-top">
                  <div class="card-body">
                  <a href="#">${product.name}</a>

                      <p class="card-price">$${product.price.toLocaleString()}VND</p>
                      <a href="#" class="btn btn-warning" onclick="handleView('${product.ID}')">Xem chi tiết sản phẩm</a>
                  </div>
              </div>
          </div>
   
  `;
  });
  // localStorage.setItem("product", JSON.stringify(""));
  // Đặt chuỗi HTML vào phần tử chứa sản phẩm trên trang web
  productContainer.innerHTML = productHTML;
}
renderProducts(products); // render lần đầu
//tìm kiếm thông tin sản phẩm khi click vào tên 1 sp
function handleView(id) {
   navigationParam('detail-product.html',`id=${id}` )
}


function searchProduct(){
  console.log(222222);
  const searchProduct = document.querySelector('#input-search').value.toLowerCase();
   const products =getDataFromLocalStorage('products');
   console.log(111,products);
  const newProduct = products.filter((product)=>{
    return product.name.toLowerCase().includes(searchProduct)
  });
  renderProducts(newProduct)
}