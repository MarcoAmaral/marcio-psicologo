document.addEventListener('DOMContentLoaded', (event) => {
  const profileImage = document.querySelector('.profile-image');
  profileImage.addEventListener('mouseover', () => {
      profileImage.style.transform = 'scale(1.05)';
      profileImage.style.transition = 'transform 0.3s ease';
  });
  profileImage.addEventListener('mouseout', () => {
      profileImage.style.transform = 'scale(1)';
  });
});