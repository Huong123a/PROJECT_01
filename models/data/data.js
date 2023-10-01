// Tạo một mảng chứa thông tin về các sản phẩm
let productsDB = [
  {
    skin: "da dầu ",
    type: "kem dưỡng ẩm",
    ID: "SP_1",
    qantity: 30,
    name: "Kem dưỡng ẩm mềm mịn cho da dầu lão hóa Resist",
    imageURL:
      "/assets/img/kem-duong-am-ho-tro-tre-hoa-da-paula-s-choice-resist-anti-aging-clear-skin-hydrator-50ml-63b390bb5f922-03012023091939.jpg",
    price: 1000000,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  {
    skin: "da khô",
    type: "loại bỏ tế bào chết",
    ID: "SP_2",
    qantity: 15,
    name: "Skin Perfecting 2% BHA",
    imageURL:
      "/assets/img/2010-skin-perfecting-2-bha-liquid-exfoliant-slide-1-11062020.webp",
    price: 780000,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  {
    skin: "da mụn",
    type: "tinh chất cải thiện",
    ID: "SP_3",
    qantity: 20,
    name: "Tinh chất chống lão hóa từ Retinol và Bakuchiol",
    imageURL:
      "/assets/img/7970-resist-skin-restoring-moisturizer-with-spf-50-slide-1-2882020-1.jpg",
    price: 500000,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  {
    skin: "da nhạy cảm",
    type: "kem chống nắng",
    ID: "SP_4",
    qantity: 10,
    name: "Kem chống nắng chống lão hóa Resist Skin Restoring Moisturizer Broad Spectrum SPF 50 60ml",
    imageURL:
      "/assets/img/7970-resist-skin-restoring-moisturizer-with-spf-50-slide-1-2882020-1.jpg",
    price: 800000,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  {
    skin: "da mụn",
    type: "tinh chất cải thiện",
    ID: "SP_5",
    qantity: 20,
    name: "Tinh chất chống lão hóa từ Retinol và Bakuchiol",
    imageURL:
      "/assets/img/7970-resist-skin-restoring-moisturizer-with-spf-50-slide-1-2882020-1.jpg",
    price: 500000,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  {
    skin: "da dầu ",
    type: "kem dưỡng ẩm",
    ID: "SP_6",
    qantity: 30,
    name: "Kem dưỡng ẩm mềm mịn cho da dầu lão hóa Resist",
    imageURL:
      "/assets/img/kem-duong-am-ho-tro-tre-hoa-da-paula-s-choice-resist-anti-aging-clear-skin-hydrator-50ml-63b390bb5f922-03012023091939.jpg",
    price: 1000000,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  // Thêm các sản phẩm khác vào đây
];

if (!localStorage.getItem("products")) {
  localStorage.setItem("products", JSON.stringify(productsDB));
}
// localStorage.setItem("products", JSON.stringify(productsDB));
let userDB = [
  { email: "abc@gmail.com", name: "Thái", password: 123456, address: "Hà Nội", gender: true },
  { email: "abc1@gmail.com", name: "Quyet", password: 123456, address: "Hải Phòng" , gender: true},
  { email: "abc2@gmail.com", name: "Vien", password: 123456, address: "Đà Nẵng" , gender: true},
  { email: "abc3@gmail.com", name: "Minh", password: 123456, address: "Sài Gòn", gender: true },
  { email: "abc3ê@gmail.com", name: "Huong", password: 123456, address: "Sài Gòn", gender: false},

];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(userDB));
}

// localStorage.setItem("users", JSON.stringify(userDB))


