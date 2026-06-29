document.addEventListener('DOMContentLoaded', () => {
    // --- Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
            // Accessibility & visual feedback toggle
            menuToggle.innerHTML = navLinks.classList.contains('mobile-active') ? '&#10005;' : '&#9776;';
        });
    }

    // --- Interactive Live Metrics Ticker Simulation ---
    const targetCount = 340; // Simulated KG of plastic saved
    const counterElement = document.getElementById('metric-weight');
    
    if (counterElement) {
        let currentCount = 0;
        const duration = 2000; // 2 seconds animation duration
        const increment = targetCount / (duration / 16); // ~60fps recalculation

        const updateCounter = () => {
            currentCount += increment;
            if (currentCount >= targetCount) {
                counterElement.innerText = `${targetCount} KG`;
            } else {
                counterElement.innerText = `${Math.floor(currentCount)} KG`;
                requestAnimationFrame(updateCounter);
            }
        };
        
        // Trigger counter animation
        requestAnimationFrame(updateCounter);
    }
});