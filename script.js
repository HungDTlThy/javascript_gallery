function upDate(previewPic) {
  /* 1. Kiểm tra sự kiện trigger (Khuyên dùng trong đề bài) */
  console.log("Sự kiện Hover đã hoạt động!");

  /* 2. In ra thuộc tính alt và src của hình ảnh đang hover */
  console.log("Alt text:", previewPic.alt);
  console.log("Source URL:", previewPic.src);

  /* 3. Thay đổi nội dung chữ của div có id="image" thành alt của ảnh */
  document.getElementById("image").innerHTML = previewPic.alt;

  /* 4. Thay đổi hình nền (background-image) của div có id="image" thành src của ảnh */
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
  /* 1. Đưa hình nền của div id="image" về lại ban đầu (url rỗng '') */
  document.getElementById("image").style.backgroundImage = "url('')";

  /* 2. Đưa nội dung chữ của div id="image" về lại văn bản ban đầu */
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}