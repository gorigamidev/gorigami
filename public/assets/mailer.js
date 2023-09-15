import {sendEmailContact} from "../../src/modules/mailService.js"

const formContact = document.getElementById("form-contact");

function mailer(data){
formContact.addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent page refresh
    try {
      const rawData = await Astro.request.formData();
      const data = {
        name: rawData.get("name"),
        email: rawData.get("email"),
        options: rawData.get("options"),
        details: rawData.get("details")
      }
  
      await sendEmailContact(data);
  
      // Show success notification
      const successNotification = document.getElementById("success-notification");
      successNotification.classList.remove("hidden");
  
      // Reset the form fields
      document.getElementById("form-contact").reset();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  });
}

