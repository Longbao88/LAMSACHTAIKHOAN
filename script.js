
document.getElementById('startBtn').addEventListener('click', startChecking);

function startChecking() {
  let username = document.getElementById('username').value;
  let code = document.getElementById('code').value;

  if (!username || !code) {
    alert('Vui lòng nhập cả tài khoản và mã code!');
    return;
  }

  let logDiv = document.getElementById('log');
  logDiv.innerHTML = "";  // Clear previous logs

  // New log sequence as requested with error messages in red
  let logMessages = [
    "ĐANG KIỂM TRA TÀI KHOẢN...",
    "<span class='red-text'>LỖI TÀI KHOẢN...404</span>",
    "LỖI 501",
    "<span class='red-text'>LỖI 300</span>",
    "LỖI NHIỀU TÀI KHOẢN 404",
    "ĐANG KHÔI PHỤC IP TÀI KHOẢN.............",
    "ĐANG THAY THẾ IP MỚI................",
    "ĐANG XÓA CACHE..................",
    "ĐANG LÀM MỚI SẢNH GAME.............",
    "ĐANG TIỀN HÀNH XÓA...............",
    "ĐÃ XÓA XONG...",
    "ĐANG TIẾN HÀNH KHÔI PHỤC TÀI KHOẢN CỦA BẠN...",
    "1.100.233.1",
    "900.444.112.333",
    "100.1.2.6",
    "ĐÃ KHÔI PHỤC....",
    "<span class='red-text'>TÀI KHOẢN CỦA BẠN ĐÃ SẠCH HÃY VÔ GAME !</span>"
  ];

  let index = 0;

  function showNextLog() {
    if (index < logMessages.length) {
      logDiv.innerHTML += logMessages[index] + '\n';
      logDiv.scrollTop = logDiv.scrollHeight;  // Scroll to bottom
      index++;
      setTimeout(showNextLog, 1500);  // Wait 1.5 seconds between logs
    }
  }

  showNextLog();
}
