/**
 * Người tạo: Phan Anh Vũ
 * Ngày tạo: 25/02/2021
 * Version: 25022021
 */
function getMyEle(ele){
  return document.getElementById(ele);
  // Tối ưu code đẹp cho document.getElementById()
}

function LayLoaiXe() {
  var grabCar = document.getElementById("grabCar").checked;
  var grabSUV = document.getElementById("grabSUV").checked;
  var grabBlack = document.getElementById("grabBlack").checked;

  if (grabCar) {
    ketqua = "grabCar";
  } else if (grabSUV) {
    ketqua = "grabSUV";
  } else if (grabBlack) {
    ketqua = "grabBlack";
  }

  return ketqua;
}

function TinhTien() {
  var inputKM = document.getElementById("inputKM").value;
  inputKM = parseFloat(inputKM); // chuyển chuỗi số thành số thực
  var inputTG = document.getElementById("inputTG").value;
  inputTG = parseFloat(inputTG); // chuyển chuỗi số thành số thực
  var divThanhTien = document.getElementById("divThanhTien");
  divThanhTien.style.display = "block";
  var SpanTien = document.getElementById("xuatTien");

  var loaiXe = LayLoaiXe();
  // console.log(loaiXe);
  // Tính tiền
  /**
   * KHOẢNG CÁCH LOẠI UBER
   * GRABCAR, GRABSUV, GRABBLACK
   * Mở cửa /1 km đầu tiên 8.000 vnđ - 9.000 vnđ - 10.000 vnđ
   * Từ 1 đến 20 km 12.000 vnđ - 14.000 vnđ - 16.000 vnđ
   * Từ 21 trở đi 10.000 vnđ - 12.000 vnđ - 14.000 vnđ
   * Thời gian chờ 2.000 vnđ/ 1 phút - 3.000 vnđ/1 phút - 4.000 vnđ/1 phút
   */
  switch (loaiXe) {
    case "grabCar":
      if (inputKM <= 1) {
        thanhTien = inputKM * 8000 + inputTG * 2000;
      } else if (inputKM > 1 && inputKM <= 20) {
        thanhTien = inputKM * 12000 + inputTG * 2000;
      } else if (inputKM > 20) {
        thanhTien = inputKM * 10000 + inputTG * 2000;
      }
      break;
    case "grabSUV":
      if (inputKM <= 1){
        thanhTien = inputKM * 9000 + inputTG * 3000;
      } else if (inputKM > 1 && inputTG <= 20) {
        thanhTien = inputKM * 14000 + inputTG * 3000;
      }else if (inputKM > 20) {
        thanhTien = inputKM * 12000 + inputTG * 3000;
      }
      break;
    case "grabBlack":
      if (inputKM <= 1){
        thanhTien = inputKM * 10000 + inputTG * 4000;
      }else if (inputKM > 1 && inputTG <= 20) {
        thanhTien = inputKM * 16000 + inputTG * 4000;
      }else if (inputKM > 20) {
        thanhTien = inputKM * 14000 + inputTG * 4000;
      }
      break;
  }

  // var thanhTien = parseFloat(inputKM) * 4000 + parseFloat(inputTG) * 3000;
  SpanTien.innerHTML = thanhTien;
}

