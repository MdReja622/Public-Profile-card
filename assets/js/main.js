document.addEventListener('DOMContentLoaded', function () {
    const profileCard = document.getElementById('profileCard');

    profileCard.addEventListener('mousemove', function (e) {
        const rect = profileCard.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within the element
        const y = e.clientY - rect.top;  // y position within the element

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = x - centerX;
        const deltaY = y - centerY;

        const angleX = (deltaY / centerY) * 10; // Adjust the divisor to control the effect
        const angleY = (deltaX / centerX) * -10;

        profileCard.style.transform = perspective(1000px) rotateX(${ angleX }deg) rotateY(${ angleY }deg) scale(1.05);
        profileCard.style.boxShadow = ${ angleY * 2 }px ${ angleX * 2 }px 20px rgba(0, 0, 0, 0.2);
    });

    profileCard.addEventListener('mouseleave', function () {
        profileCard.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        profileCard.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
    });
});