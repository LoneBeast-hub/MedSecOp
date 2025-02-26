document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let formData = new FormData(this);
    let mailtoLink = `mailto:medsecop.org@gmail.com?subject=Contact Form Submission&body=Name: ${formData.get("first_name")} ${formData.get("last_name")} %0AEmail: ${formData.get("email")} %0AMessage: ${formData.get("message")}`;
    window.location.href = mailtoLink;
});