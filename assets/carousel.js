/**
 * Taniti Island Website Functionality
 * Handles carousel, tab, preview card, and accordion interactions across the site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize carousel functionality
    initCarousel();
    
    // Initialize preview card functionality
    initPreviewCards();
    
    // Initialize tab functionality
    initTabs();
    
    // Initialize accordion functionality
    initAccordions();
});

/**
 * Initialize carousel functionality for info cards
 */
function initCarousel() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    
    if (carouselItems.length === 0) return;
    
    let currentIndex = 0;
    
    function showSlide(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselDots.forEach(dot => dot.classList.remove('active'));
        
        carouselItems[index].classList.add('active');
        carouselDots[index].classList.add('active');
        currentIndex = index;
    }
    
    // Automatic carousel rotation
    const carouselInterval = setInterval(() => {
        let nextIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(nextIndex);
    }, 5000);
    
    // Click on dots to navigate
    carouselDots.forEach(dot => {
        dot.addEventListener('click', () => {
            let index = parseInt(dot.getAttribute('data-index'));
            showSlide(index);
            
            // Reset the interval when manually navigating
            clearInterval(carouselInterval);
            setInterval(() => {
                let nextIndex = (currentIndex + 1) % carouselItems.length;
                showSlide(nextIndex);
            }, 5000);
        });
    });
}

/**
 * Initialize preview cards functionality
 */
function initPreviewCards() {
    const previewCards = document.querySelectorAll('.preview-card');
    
    previewCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            previewCards.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked card
            card.classList.add('active');
            
            // Get and scroll to target section if data-target attribute exists
            const targetId = card.getAttribute('data-target');
            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({behavior: 'smooth'});
                }
            }
        });
    });
}

/**
 * Initialize tab functionality
 */
function initTabs() {
    const tabs = document.querySelectorAll('.tab');
    const contentSections = document.querySelectorAll('.content-section');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetId = tab.getAttribute('data-tab');
            
            // Update active tab
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Show selected content
            contentSections.forEach(section => {
                section.style.display = 'none';
            });
            
            const targetContent = document.getElementById(`${targetId}-content`);
            if (targetContent) {
                targetContent.style.display = 'block';
            }
        });
    });
}

/**
 * Initialize accordion functionality
 */
function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            accordion.classList.toggle('active');
        });
    });
}