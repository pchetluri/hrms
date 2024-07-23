// Optional: Add JavaScript for interactive elements
// Example: Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // You can add AJAX submission or redirect logic here
    // For example:
    // var formData = new FormData(this);
    // fetch('submit_form.php', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     // Handle success or error messages
    // })
    // .catch(error => {
    //     console.error('Error:', error);
    // });
    alert('Form submitted!'); // Placeholder for demonstration
});
