let inputElement = document.querySelector("#input-search");

// Thêm event listener để bắt sự kiện khi người dùng nhập vào input

// Hàm xử lý khi người dùng nhập vào input

function handleSearch() {
  // Lấy giá trị nhập vào input
  let getInput = inputElement.value.toLowerCase();

  // Sử dụng phương thức filter để lọc các sản phẩm dựa trên giá trị nhập vào
  let resultData = productsDB.filter((product) =>
    product.name.toLowerCase().includes(getInput)
  );

  // Gọi hàm renderProduct để hiển thị kết quả lọc
  renderProduct(resultData);
}

// Hàm hiển thị sản phẩm lên giao diện
function renderProduct(product) {
  // Lấy tham chiếu đến phần tử HTML trong DOM mà bạn muốn hiển thị danh sách sản phẩm
  const productContainer = document.querySelector(
    ".list-product .product-cart1 .row"
  );
  // Tạo một chuỗi HTML để lưu trữ danh sách sản phẩm
  let productHTML = "";
  // Lặp qua mảng sản phẩm và thêm thông tin sản phẩm vào chuỗi HTML
  arr.forEach(function (product) {
    productHTML += `
          <div class="col-md-4 my-2">
              <div class="card">
                  <img src="${product.imageURL}"
                      alt="Sản phẩm 1" class="card-img-top">
                  <div class="card-body">
                      <a href="./detail-product.html">${product.name}</a>

                      <p class="card-price">$${product.price}</p>
                      <a href="#" class="btn btn-warning">Thêm vào giỏ hàng</a>
                  </div>
              </div>
          </div>
  `;
  });
  // localStorage.setItem("product", JSON.stringify(""));
  // Đặt chuỗi HTML vào phần tử chứa sản phẩm trên trang web
  productContainer.innerHTML = productHTML;
}
