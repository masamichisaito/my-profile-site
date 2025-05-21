document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('showMembersBtn');
  const members = document.getElementById('members');
  const videoSection = document.querySelector('.video-container');

  button.addEventListener('click', () => {
    videoSection.style.display = 'none';
    members.classList.remove('hidden');
  });
});

// script.js（JSファイルに書くか、直接scriptタグでもOK）
document.querySelectorAll('.transition-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const url = this.getAttribute('href');

    gsap.to("body", {
      duration: 0.6,
      opacity: 0,
      ease: "power2.out",
      onComplete: () => {
        window.location.href = url;
      }
    });
  });
});

// ページ読み込み時のフェードイン
window.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo("body", { opacity: 0 }, { duration: 0.6, opacity: 1, ease: "power2.out" });
});

