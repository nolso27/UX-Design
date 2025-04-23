let hasScrolledPast70 = false;
let visibilityTimeout = null; // Add this to track the timeout

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.navbar');
    
    if (window.scrollY > 70 && !hasScrolledPast70) {
        // Only add classes and set timeout if we haven't already
        
        nav.classList.add('scrolled');
         // Only remove unscrolled after scrolled is added
        // Clear any existing timeout first
        if (visibilityTimeout) {
            clearTimeout(visibilityTimeout);
        }
        
        // Set new timeout and store its ID
        visibilityTimeout = setTimeout(() => {
            nav.classList.add('visible');
            visibilityTimeout = null; // Clear the reference
        }, 100);
        
        hasScrolledPast70 = true;
    } else if (window.scrollY <= 70 && hasScrolledPast70) {
        
        // Clear the timeout if we scroll back up before it fires
        if (visibilityTimeout) {
            clearTimeout(visibilityTimeout);
            visibilityTimeout = null;
        }
        
        nav.classList.remove('visible');
        nav.classList.add('unscrolled'); // Add unscrolled when scrolling back up
        nav.classList.remove('scrolled');
        setTimeout(() => {
            nav.classList.remove('unscrolled'); // Remove unscrolled after a short delay
        }, 500); // Adjust the delay as needed
        
        hasScrolledPast70 = false;
    }
});