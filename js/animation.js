document.addEventListener('DOMContentLoaded', function () {
  const button = document.getElementById('showMembersBtn');
  const members = document.getElementById('members');
  const videoSection = document.querySelector('.video-container');

  button.addEventListener('click', () => {
    videoSection.style.display = 'none';
    members.classList.remove('hidden');
  });
});
