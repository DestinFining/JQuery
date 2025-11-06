const span1 = document.getElementsByClassName("span-1")[0];
const btn = document.getElementsByClassName("btn")[0];
const ul = document.getElementById("postList");
const title = document.getElementById("title");
const sec = document.getElementById("sec");
const post = document.getElementById("post");
const arr = [
  "img/tou01.jpg",
  "img/tou02.jpg",
  "img/tou03.jpg",
  "img/tou04.jpg",
];
// 点击显示表单对话框
span1.onclick = function () {
  post.style.display = "block";
};
// 点击发布按钮隐藏对话框
btn.onclick = function () {
  let firstEl = ul.firstElementChild;
  let li = createLi();
  if (firstEl) {
    ul.insertBefore(li, firstEl);
  } else {
    ul.appendChild(li);
  }
  resetFields();
  post.style.display = "none";
};

// 组装li元素
function createLi() {
  let li = document.createElement("li");
  // 组装div
  let div = document.createElement("div");
  let img = document.createElement("img");
  img.src = getSrc();
  div.appendChild(img);
  li.appendChild(div);
  // 组装h1
  let h1 = document.createElement("h1");
  let titleValue = title.value;
  if (!titleValue || !titleValue.trim()) {
    return alert("标题不能空");
  }
  h1.innerHTML = titleValue;
  li.appendChild(h1);
  // 组装p
  let p = document.createElement("p");
  let span = document.createElement("span");
  let secValue = sec.value;
  if (!secValue || !secValue.trim()) {
    return alert("板块不能空");
  }
  span.innerHTML = `版块：${secValue}`;
  p.appendChild(span);
  span = document.createElement("span");
  let date = formatDate();
  span.innerHTML = `版块：${date}`;
  p.appendChild(span);
  li.appendChild(p);
  return li;
}

// 获得随机图片的src
function getSrc() {
  return arr[Math.floor(Math.random() * arr.length)];
}

// 格式化日期：yyyy-MM-dd hh:mm:ss
function formatDate() {
  let date = new Date();
  let y = pad0(date.getFullYear());
  let m = pad0(date.getMonth() + 1);
  let d = pad0(date.getDate());
  let h = pad0(date.getHours());
  let M = pad0(date.getMinutes());
  let s = pad0(date.getSeconds());
  return [y, m, d].join("-") + " " + [h, M, s].join(":");
}

// 数字不满足2位，在前面加0
function pad0(v) {
  return v < 10 ? "0" + v : v;
}

// 重置表单域
function resetFields() {
  // 标题表单域清空
  title.value = "";
  // 第1个option选中
  sec.getElementsByTagName("option")[0].selected = true;
}
一键获取完整项目代码;
javascript;
