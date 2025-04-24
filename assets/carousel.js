/**
 * Taniti Island Website Functionality
 * Handles carousel, tab, preview card, and accordion interactions across the site
 */

document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const carouselItems = document.querySelectorAll('.carousel-item');
    const carouselDots = document.querySelectorAll('.carousel-dot');
    let currentIndex = 0;
    
    function showSlide(index) {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselDots.forEach(dot => dot.classList.remove('active'));
        
        carouselItems[index].classList.add('active');
        carouselDots[index].classList.add('active');
        currentIndex = index;
    }
    
    // Automatic carousel rotation
    setInterval(() => {
        let nextIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(nextIndex);
    }, 5000);
    
    // Click on dots to navigate
    carouselDots.forEach(dot => {
        dot.addEventListener('click', () => {
            let index = parseInt(dot.getAttribute('data-index'));
            showSlide(index);
        });
    });

    // Tab functionality (only initialize if tabs exist)
    const tabs = document.querySelectorAll('.tab');
    if (tabs.length > 0) {
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
                document.getElementById(`${targetId}-content`).style.display = 'block';
            });
        });
    }
    
    // Accordion functionality (only initialize if accordions exist)
    const accordions = document.querySelectorAll('.accordion');
    if (accordions.length > 0) {
        accordions.forEach(accordion => {
            const header = accordion.querySelector('.accordion-header');
            
            header.addEventListener('click', () => {
                accordion.classList.toggle('active');
            });
        });
    }
});