export const contactForm = {
    inputs: [
        {
            id: "contact-name",
            type: "text",
            autoComplete: "name",
            placeholder: "John Rosie",
            aria: "Name",
            error: "Wrong Fullname",
            required: true,
            label: "Full name",
            formData: "name"
        },
        {
            id: "contact-mail",
            type: "email",
            autoComplete: "email",
            placeholder: "johnrosie@gmail.com",
            aria: "Email",
            error: "Wrong Email",
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            label: "E-mail",
            formData: "email"
        },
        {
            id: "contact-phone",
            type: "tell",
            autoComplete: "phone",
            placeholder: "380961234567",
            aria: "Phone",
            error: "Wrong Phone",
            required: true,
            pattern: /^\+380\d{9}$/,
            label: "Phone",
            formData: "phone"
        }
    ],
    textarea: {
        id: "contact-message",
        autoComplete: "off",
        placeholder: "Your message",
        aria: "Text message",
        label: "Message",
        formData: "message"
    } 
}