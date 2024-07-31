document.addEventListener('DOMContentLoaded', (event) => {
  const profileImage = document.querySelector('.profile-image');
  profileImage.addEventListener('mouseover', () => {
      profileImage.style.transform = 'scale(1.05)';
      profileImage.style.transition = 'transform 0.3s ease';
  });
  profileImage.addEventListener('mouseout', () => {
      profileImage.style.transform = 'scale(1)';
  });
});

  // Phone number to be used
  const phoneNumber = "(12) 98167-2615";

  // Function to create a link to fill the dial on the phone
  function createPhoneLink(phoneNumber, elementId) {
    // Create the anchor element
    const phoneLink = document.createElement("a");

    // Set the href attribute to 'tel:phoneNumber'
    phoneLink.href = `tel:${phoneNumber}`;

    // Set the link text to the phone number
    phoneLink.textContent = phoneNumber;

    // Insert the anchor element into the specified element by ID
    document.getElementById(elementId).appendChild(phoneLink);
  }

  // Constructor for the phone link
  createPhoneLink(phoneNumber, "phone");


// Function Crete Email Link to have a mail to upon clicking
function createEmailLink(email, elementId) {
	
	// Create the anchor element
	const emailLink = document.createElement("a");

	// Set the href attribute to 'mailto:email'
	emailLink.href = `mailto:${email}`;

	// Set the link text to the email address
	emailLink.textContent = email;

	// Insert the anchor element into the specified element by ID
	document.getElementById(elementId).appendChild(emailLink);
}

// Contructor for the email function.
createEmailLink("contato@antoniomarcio.com.br", "email");


// function createWhatsAppLink
function createWhatsAppLink(phoneNumber, message, elementId, buttonText) {
	// Format the phone number by removing any spaces or special characters
	const formattedPhoneNumber = phoneNumber.replace(/[\s()-]/g, '');

	// Create the URL for the WhatsApp link
	const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(message)}`;

	// Create the anchor element
	const whatsappLink = document.createElement("a");

	// Set the href attribute to the WhatsApp URL
	whatsappLink.href = whatsappURL;

	// Set the link text to the provided button text
	whatsappLink.textContent = buttonText;

	// Add the class for styling
	whatsappLink.className = "whatsapp-button";

	// Set the target attribute to open the link in a new tab
	whatsappLink.target = "_blank";

	// Insert the anchor element into the specified element by ID
	document.getElementById(elementId).appendChild(whatsappLink);
}

// Contructor of the function createWhatsAppLink
createWhatsAppLink(
	"5512981672615",
	"Olá Dr. Antonio Marcio, eu gostaria de agendar uma consulta.",
	"whatsapp",
	"Agende sua consulta pelo WhatsApp"
);