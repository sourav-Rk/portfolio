
        document.getElementById("contactForm").addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting by default
        
            // Get the input values and trim spaces
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const subject = document.getElementById("subject").value.trim();
            const message = document.getElementById("message").value.trim();
        
            // Regular expression to validate the name (letters and spaces only)
            const namePattern = /^[A-Za-z\s]+$/;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
        
            // Reset error messages
            document.getElementById("nameError").textContent = "";
            document.getElementById("emailError").textContent = "";
            document.getElementById("subjectError").textContent = "";
            document.getElementById("messageError").textContent = "";
        
            let valid = true;
        
            // Validate name
            if (name === "" || !namePattern.test(name)) {
                document.getElementById("nameError").textContent = "Invalid name. Only letters and spaces are allowed.";
                valid = false;
            }
        
            // Validate email
            if (email === "" || !emailPattern.test(email)) {
                document.getElementById("emailError").textContent = "Please enter a valid email address.";
                valid = false;
            }
        
            // Validate subject
            if (subject === "") {
                document.getElementById("subjectError").textContent = "Subject cannot be empty.";
                valid = false;
            }
        
            // Validate message
            if (message === "") {
                document.getElementById("messageError").textContent = "Message cannot be empty.";
                valid = false;
            }
        
            // If all fields are valid, send the email and reset the form
            if (valid) {
                sendMail(); // Call the email sending function
            }
        });
        
        function sendMail(){
            let parms = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
            };
        
            emailjs.send("service_d3lmbl8", "template_j0yfzup", parms)
            .then(function(response) {
                alert("Email Sent Successfully!");
                // Reset the form after successful email sending
                document.getElementById("contactForm").reset();
                // Clear error messages (optional, but a good practice)
                document.getElementById("nameError").textContent = "";
                document.getElementById("emailError").textContent = "";
                document.getElementById("subjectError").textContent = "";
                document.getElementById("messageError").textContent = "";
            })
            .catch(function(error) {
                alert("Failed to send email: " + error);
            });
        }
          