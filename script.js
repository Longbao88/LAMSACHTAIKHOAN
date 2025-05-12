
// Load code list từ codes.js
document.write('<script src="codes.js"><\/script>');

document.addEventListener('DOMContentLoaded', function () {
  const startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('click', startChecking);

  function startChecking() {
    let username = document.getElementById('username').value;
    let code = document.getElementById('code').value;

    if (!username || !code) {
      alert('Vui lòng nhập cả tài khoản và mã code!');
      return;
    }

    if (!validCodes.includes(code.trim().toUpperCase())) {
      alert('Mã code không hợp lệ!');
      return;
    }

    const logDiv = document.getElementById('log');
    logDiv.innerHTML = '';

    const progressBar = document.createElement('div');
    const progressFill = document.createElement('div');
    const progressText = document.createElement('div');

    progressBar.className = 'progress-bar';
    progressFill.className = 'progress-fill';
    progressText.className = 'progress-text';

    progressBar.appendChild(progressFill);
    progressBar.appendChild(progressText);
    logDiv.appendChild(progressBar);

    const logMessages = [
      "ĐANG KIỂM TRA TÀI KHOẢN",
      "ĐANG KIỂM TRA IP HIỆN TẠI : 101.111.2.3",
      "<span class='red-text'>ĐANG KIỂM TRA LỖI ĐĂNG NHẬP NHIỀU TÀI KHOẢN</span>",
      "<span class='red-text'>ĐANG KIỂM TRA LỊCH SỬ THẮNG GẦN NHẤT</span>",
      "<span class='red-text'>PHÁT HIỆN LỖI 404</span>",
      "<span class='red-text'>PHÁT HIỆN LỖI 100</span>",
      "ĐANG THAY THẾ IP MỚI",
      "ĐANG TRÁNH TƯỜNG LỬA SẢNH GAME",
      "ĐANG LÀM MỚI TÀI KHOẢN",
      "ĐANG KHÔI PHỤC TÀI KHOẢN",
      "ĐÃ HOÀN THÀNH....",
      "<strong>HÃY VÔ GAME !</strong>"
    ];

    let index = 0;
    let progress = 0;
    const step = 100 / logMessages.length;

    const interval = setInterval(() => {
      if (index < logMessages.length) {
        const p = document.createElement('p');
        p.innerHTML = logMessages[index];
        logDiv.appendChild(p);
        logDiv.scrollTop = logDiv.scrollHeight;
        index++;

        progress = Math.min(progress + step, 100);
        progressFill.style.width = progress + "%";
        progressText.innerText = Math.round(progress) + "%";
      } else {
        clearInterval(interval);
      }
    }, 1200);
  }
});
