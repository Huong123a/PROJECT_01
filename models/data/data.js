// Tạo một mảng chứa thông tin về các sản phẩm
let productsDB = [
  {
    skin: "da dầu ",
    type: "kem dưỡng ẩm",
    ID: "SP_1",
    stock: "4",
    name: "Kem dưỡng ẩm mềm mịn cho da dầu lão hóa Resist",
    imageURL:
      "../img/kem-duong-am-ho-tro-tre-hoa-da-paula-s-choice-resist-anti-aging-clear-skin-hydrator-50ml-63b390bb5f922-03012023091939.jpg",
    price: 1.0,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  {
    skin: "da khô",
    type: "loại bỏ tế bào chết",
    ID: "SP_2",
    stock: "3",
    name: "Skin Perfecting 2% BHA",
    imageURL:
      "../img/2010-skin-perfecting-2-bha-liquid-exfoliant-slide-1-11062020.webp",
    price: 780.0,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  {
    skin: "da mụn",
    type: "tinh chất cải thiện",
    ID: "SP_3",
    stock: "2",
    name: "Tinh chất chống lão hóa từ Retinol và Bakuchiol",
    imageURL:
      "../img/7970-resist-skin-restoring-moisturizer-with-spf-50-slide-1-2882020-1.jpg",
    price: 500.0,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  {
    skin: "da nhạy cảm",
    type: "kem chống nắng",
    ID: "SP_4",
    stock: "1",
    name: "Kem chống nắng chống lão hóa Resist Skin Restoring Moisturizer Broad Spectrum SPF 50 60ml",
    imageURL:
      "../img/7970-resist-skin-restoring-moisturizer-with-spf-50-slide-1-2882020-1.jpg",
    price: 800.0,
    description:
      "Skin Perfecting 2% BHA Liquid Exfoliant là sản phẩm loại bỏ tế bào chết hóa học có công thức dịu nhẹ, không chứa chất làm bào mòn da, dễ dàng thẩm thấu và không làm bít tắc lỗ chân lông. Đồng thời, sản phẩm sẽ giúp giảm thiểu sự xuất hiện của nếp nhăn sâu, cải thiện tông màu da, giúp làn da sáng mịn, rạng rỡ và khỏe mạnh.",
  },
  // Thêm các sản phẩm khác vào đây
];

localStorage.setItem("products", JSON.stringify(productsDB));

//list users
const listUsers = [
  {
    email: "huongle@gmail.com",
    address: "da nang",
    name: "le dieu huong",
    password: "123456",
    phone: "0354909360",
    status: "active",
  },
  {
    email: "linhdn@gmail.com",
    address: "quang nam",
    name: "le linh",
    password: "123456",
    phone: "0354909360",
    status: "block",
  },
  {
    email: "namvn@gmail.com",
    address: "ha noi",
    name: "nguyen van nam",
    password: "123456",
    phone: "0354909360",
    status: "active",
  },
];
localStorage.setItem("listUsers", JSON.stringify(listUsers));
