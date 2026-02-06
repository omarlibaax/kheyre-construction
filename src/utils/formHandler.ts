// Form submission handler for Email and WhatsApp/CRM integration

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

// Configuration - Update these with your actual details
const CONFIG = {
  email: 'info@kheyreconstruction.com', // Your email address
  whatsappNumber: '+15551234567', // Your WhatsApp number (format: +1234567890)
  crmWebhook: '', // Optional: Your CRM webhook URL (e.g., Zapier, Make.com, etc.)
};

/**
 * Formats form data for email
 */
const formatEmailContent = (data: FormData): string => {
  return `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Subject: ${data.subject}
Message:
${data.message}

---
Submitted from KHEYRE CONSTRUCTION website
  `.trim();
};

/**
 * Formats form data for WhatsApp message
 */
const formatWhatsAppMessage = (data: FormData): string => {
  const subjectMap: Record<string, string> = {
    quote: 'Quote Request',
    project: 'Project Inquiry',
    general: 'General Inquiry',
    partnership: 'Partnership Inquiry',
  };

  return `*New Contact Form Submission*

*Name:* ${data.name}
*Email:* ${data.email}
${data.phone ? `*Phone:* ${data.phone}` : ''}
*Subject:* ${subjectMap[data.subject] || data.subject}
*Message:*
${data.message}

---
From KHEYRE CONSTRUCTION website`;
};

/**
 * Sends email using mailto link
 */
const sendEmail = (data: FormData): void => {
  const subject = encodeURIComponent(`Contact Form: ${data.subject}`);
  const body = encodeURIComponent(formatEmailContent(data));
  const mailtoLink = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  
  window.location.href = mailtoLink;
};

/**
 * Opens WhatsApp with pre-filled message
 */
const sendWhatsApp = (data: FormData): void => {
  const message = encodeURIComponent(formatWhatsAppMessage(data));
  const whatsappLink = `https://wa.me/${CONFIG.whatsappNumber.replace(/[^0-9]/g, '')}?text=${message}`;
  
  window.open(whatsappLink, '_blank');
};

/**
 * Sends data to CRM webhook (if configured)
 */
const sendToCRM = async (data: FormData): Promise<void> => {
  if (!CONFIG.crmWebhook) return;

  try {
    await fetch(CONFIG.crmWebhook, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        timestamp: new Date().toISOString(),
        source: 'KHEYRE CONSTRUCTION Website',
      }),
    });
  } catch (error) {
    console.error('CRM webhook error:', error);
    // Don't throw - CRM is optional
  }
};

/**
 * Main form submission handler
 */
export const handleFormSubmit = async (
  data: FormData,
  options: {
    sendEmail?: boolean;
    sendWhatsApp?: boolean;
    sendToCRM?: boolean;
  } = {}
): Promise<{ success: boolean; message: string }> => {
  const {
    sendEmail: shouldSendEmail = true,
    sendWhatsApp: shouldSendWhatsApp = true,
    sendToCRM: shouldSendToCRM = true,
  } = options;

  try {
    // Send to CRM first (async, non-blocking)
    if (shouldSendToCRM) {
      sendToCRM(data).catch(() => {
        // Silently fail - CRM is optional
      });
    }

    // Send email
    if (shouldSendEmail) {
      sendEmail(data);
    }

    // Send WhatsApp
    if (shouldSendWhatsApp && data.phone) {
      // Small delay to allow email window to open first
      setTimeout(() => {
        sendWhatsApp(data);
      }, 500);
    } else if (shouldSendWhatsApp) {
      // Even without phone, we can still send WhatsApp
      sendWhatsApp(data);
    }

    return {
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: 'There was an error submitting your form. Please try again or contact us directly.',
    };
  }
};

/**
 * Update configuration
 */
export const updateConfig = (newConfig: Partial<typeof CONFIG>): void => {
  Object.assign(CONFIG, newConfig);
};
