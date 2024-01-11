let leftSide = document.querySelectorAll(".side-link ul li"),
  create = document.getElementById("create"),
  post = document.getElementById("post"),
  searchMessage = document.getElementById("search"),
  postss = document.getElementById("postss");
create.onclick = function () {
  post.focus();
};

// Add Posts to the center Section
let container = document.querySelector(".container-posts"),
  title = [
    "for new Befan",
    "how Become older",
    "thank for support",
    "eldehih",
    "when live become better",
    "when live become better",
    "when live become better",
    "eldehih",
    "when live become better",
    "when live become better",
  ],
  photo = [
    "1.jpeg",
    "2.jpeg",
    "3.jpeg",
    "4.jpeg",
    "5.png",
    "6.jpeg",
    "7.jpg",
    "8.jpg",
    "9.jpeg",
    "10.jpeg",
  ];
Newposts = "";
for (let i = 0; i < photo.length; i++) {
  Newposts += `
<div class="posts-box fff">
<div class="content-post">
  <div class="icon-post">
    <img src="image/9.jpeg">
  </div>
  <div class="text-post">
    <h3>AhmedXXander</h3>
    <p>${title[i]}</p>
  </div>
</div>
<div class="image-box-icon">
  <img src="image/${photo[i]}" >
</div>
<div class="image-footer-icon">
  <div class="icons-footer">
    <div class="left-icon">
    <i class="fa-regular fa-heart pl-3"></i>
    <i class="fa-regular fa-comment pl-3"></i>
    <i class="fa-regular fa-share-from-square pl-3"></i>
    </div>
    <div class="right-icon">
    <i class="fa-regular fa-bookmark"></i>
    </div>
  </div>
</div>
<div class="under-footer">
  <div class="footer-3">
    <div class="image-footer">
      <img src="image/1.jpeg" alt="">
      <img src="image/2.jpeg" alt="">
      <img src="image/3.jpeg" alt="">
    </div>
    <div class="content-footer">
      <p>liked By Ahmed And 2877others</p>
    </div>

  </div>
  <p>View By 23990</p>
</div>
</div>


`;
  container.innerHTML = Newposts;
}
leftSide.forEach((link) => {
  link.addEventListener("click", () => {
    mess.classList.remove("border");
    leftSide.forEach((link) => {
      link.classList.remove("active");
    });
    link.classList.add("active");
  });
});

// change buttons background
let leftSidelink = document.querySelectorAll(".side-link ul li"),
  body = document.getElementById("body"),
  btn = document.querySelectorAll(".button"),
  btnColor = document.querySelectorAll(".color-change .butt");
btn.forEach((btn) => {
  btnColor.forEach((change) => {
    change.addEventListener("click", function () {
      btnColor.forEach((change) => {
        change.classList.remove("active");
      });
      btn.classList.add("active");
      btn.style.backgroundColor = change.dataset.color;
      leftSidelink.forEach((link) => {
        link.style.color = change.dataset.color;
      });
    });
  });
});

btnColor.forEach((change) => {
  change.addEventListener("click", function () {
    btnColor.forEach((change) => {
      change.classList.remove("colors-bullets");
    });
    change.classList.add("colors-bullets");
  });
});
// themes code
let setting = document.querySelector(".model-setting"),
theme = document.getElementById("themes");
theme.addEventListener("click", (e) => {
  setting.classList.toggle("display");
  e.stopPropagation();
});

setting.addEventListener("click", (e) => e.stopPropagation())
document.body.addEventListener("click", () => setting.classList.remove("display"))

// change body background
let light = document.querySelectorAll(".fff"),
  bod = document.querySelectorAll(".eee"),
  back = document.querySelectorAll(".back div"),
  header = document.querySelector(".header");
back.forEach((back) => {
  back.addEventListener("click", () => {
    light.forEach((light) => {
      light.style.background = back.dataset.back;
      body.style.color = back.dataset.text;
    });
    bod.forEach((bod) => {
      bod.style.background = back.dataset.body;
      body.style.color = back.dataset.text;
    });
  });
});
// Add border to the messages component
let mess = document.querySelector(".message"),
  message = document.getElementById("message");
message.onclick = function () {
  mess.classList.add("border");
  searchMessage.focus();
};

// add class bottom to the span
let spans = document.querySelectorAll(".head-message span");
spans.forEach((span) => {
  span.addEventListener("click", () => {
    span.classList.add("bottom");

    spans.forEach((spans) => {
      spans.classList.remove("bottom");
    });
    span.classList.add("bottom");
  });
});

// Add The List Of Friends To the Messengers
let friendMessenger = document.querySelector(".friend-container"),
  friends = ["alex", "moghera", "abeer", "hosham", "xxander"],
  mainProfiloPhoto = ["5.png", "4.jpeg", "3.jpeg", "2.jpeg", "1.jpeg"],
  messageContainer = "";
for (let i = 0; i < 5; i++) {
  messageContainer += `
 <div class="friend-message">
<div class="image-message">
  <img src="image/${mainProfiloPhoto[i]}">
</div>
<div class="information-friend">
  <h3>${friends[i]}</h3>
  <p>Just Now</p>
</div>
</div>  
  `;
  friendMessenger.innerHTML = messageContainer;
}
// Search friends in messenger
function searchData(val) {
  let messageContainer = "";
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].includes(val)) {
      messageContainer += `
     <div class="friend-message">
    <div class="image-message">
      <img src="image/${mainProfiloPhoto[i]}">
    </div>
    <div class="information-friend">
      <h3>${friends[i]}</h3>
      <p>Just Now</p>
    </div>
    </div>  
      `;
    }
  }
  friendMessenger.innerHTML = messageContainer;
}
