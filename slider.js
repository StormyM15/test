document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const image2 = document.querySelector('.image-2');
    const handle = document.querySelector('.slider-handle');

    let isDragging = false;

    const onMouseMove = (e) => {
        if (!isDragging) return;

        const sliderRect = slider.getBoundingClientRect();
        let offsetX = e.clientX - sliderRect.left;

        if (offsetX < 0) offsetX = 0;
        if (offsetX > sliderRect.width) offsetX = sliderRect.width;

        const percentage = (offsetX / sliderRect.width) * 100;

        handle.style.left = `${percentage}%`;
        image2.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    };

    const onMouseUp = () => {
        isDragging = false;
    };

    handle.addEventListener('mousedown', () => {
        isDragging = true;
    });

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
});