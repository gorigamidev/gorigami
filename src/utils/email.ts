/**
 * EmailJS Configuration and Sending Utility
 * Decoupled from UI components for better security and maintainability.
 */

// Configuration - In a real production environment, use import.meta.env
// For now, these are the client-side keys required for the browser API
const CONFIG = {
    SERVICE_ID: import.meta.env.PUBLIC_EMAILJS_SERVICE_ID,
    TEMPLATE_ID: import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID,
    USER_ID: import.meta.env.PUBLIC_EMAILJS_USER_ID,
    API_URL: import.meta.env.PUBLIC_EMAILJS_API_URL
};

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
    company?: string;
    projectType?: string;
}

/**
 * Sends an email using the EmailJS REST API
 * @param data - The form data to send
 * @returns Promise resolving to boolean success status
 */
export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
    const template_params = {
        name: data.name,
        email: data.email,
        detail: `Message: ${data.message}\nCompany: ${data.company || 'Not specified'}`,
        options: data.projectType || 'Not specified',
    };

    try {
        const response = await fetch(CONFIG.API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                service_id: CONFIG.SERVICE_ID,
                template_id: CONFIG.TEMPLATE_ID,
                user_id: CONFIG.USER_ID,
                template_params: template_params,
            }),
        });

        if (response.ok) {
            return true;
        } else {
            console.error("EmailJS Error:", await response.text());
            return false;
        }
    } catch (error) {
        console.error("Network Error:", error);
        return false;
    }
}
