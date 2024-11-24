
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for booking! We'll be in touch soon.");
});
