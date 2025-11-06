// 购物车功能实现
function minus(index) {
  // 减少商品数量
  let amountInput = document.getElementsByName("amount")[index];
  let amount = parseInt(amountInput.value);
  if (amount > 1) {
    amountInput.value = amount - 1;
    updatePrice(index);
  }
}

function plus(index) {
  // 增加商品数量
  let amountInput = document.getElementsByName("amount")[index];
  let amount = parseInt(amountInput.value);
  if (amount < 99) {
    // 限制最大购买数量为99
    amountInput.value = amount + 1;
    updatePrice(index);
  } else {
    alert("单件商品最大购买数量为99");
  }
}

function updatePrice(index) {
  // 更新单个商品总价
  let amount = parseInt(document.getElementsByName("amount")[index].value);
  let unitPrice = parseFloat(
    document.getElementById("price" + index).textContent.substring(1)
  );
  let total = (amount * unitPrice).toFixed(2);
  document.getElementsByName("price")[index].value = total;
  calculateTotal();
}

function del() {
  // 删除商品
  if (confirm("确定要删除这个商品吗？")) {
    let item = event.target.closest(".cart-item");
    item.remove();
    calculateTotal();
  }
}

function collection() {
  // 移入收藏
  let item = event.target.closest(".cart-item");
  let productName = item.querySelector(".item-price").textContent;
  let favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  if (!favorites.includes(productName)) {
    favorites.push(productName);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("商品已添加到收藏夹");
  } else {
    alert("该商品已在收藏夹中");
  }

  // 可选：删除商品项
  // item.remove();
  // calculateTotal();
}

function accounts() {
  // 结算
  calculateTotal();
  let total = parseFloat(
    document.getElementById("totalPrice").textContent.substring(1)
  );

  if (total <= 0) {
    alert("购物车中没有商品");
    return;
  }

  if (confirm(`确认结算，总金额：¥${total.toFixed(2)}`)) {
    // 模拟结算成功
    alert("结算成功！感谢您的购买");
    // 清空购物车
    document.querySelectorAll(".cart-item").forEach((item) => item.remove());
    document.getElementById("totalPrice").textContent = "¥0.00";
  }
}

function calculateTotal() {
  // 计算购物车总价
  let prices = document.getElementsByName("price");
  let total = 0;
  for (let i = 0; i < prices.length; i++) {
    total += parseFloat(prices[i].value);
  }
  document.getElementById("totalPrice").textContent = "¥" + total.toFixed(2);
}

// 初始化计算总价
document.addEventListener("DOMContentLoaded", function () {
  calculateTotal();
});

//关闭页面
function close_plan() {
  window.close();
}
