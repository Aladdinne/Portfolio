import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [alert, setAlert] = useState({ show: false, message: "", type: "" }); // Alert state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ensure all required fields are filled
        if (
            !formData.firstname ||
            !formData.lastname ||
            !formData.email ||
            !formData.service ||
            !formData.message
        ) {
            showAlert("Veuillez remplir tous les champs requis !", "error");
            return;
        }

        setIsLoading(true);

        const templateParams = {
            from_name: `${formData.firstname} ${formData.lastname}`,
            to_name: "Alaeddine Hammouda",
            message: formData.message,
            service: formData.service,
            reply_to: formData.email,
        };

        emailjs
            .send(
                "service_68a6zlj", // Replace with your EmailJS service ID
                "template_lfbq6x8", // Replace with your EmailJS template ID
                templateParams,
                "KYChEZmh9n3bPifwf" // Replace with your EmailJS user ID
            )
            .then(
                () => {
                    showAlert("Votre message a été envoyé !", "success");
                    setFormData({
                        firstname: "",
                        lastname: "",
                        email: "",
                        phone: "",
                        service: "",
                        message: "",
                    });
                },
                () => {
                    showAlert(
                        "L'envoi du message a échoué. Veuillez réessayer.",
                        "error"
                    );
                }
            )
            .finally(() => setIsLoading(false));
    };

    // Show alert with a message and type
    const showAlert = (message, type) => {
        setAlert({ show: true, message, type });
        setTimeout(() => {
            setAlert({ show: false, message: "", type: "" });
        }, 4000); // Alert will disappear after 4 seconds
    };

    return (
        <section className="contact-section">
            <h2>Let's work together</h2>
            <p>
                We are excited to collaborate with you! Whether you have a project in mind
                or just want to discuss ideas, feel free to reach out. Let’s turn your
                vision into reality together.
            </p>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    {/* First and Last Name */}
                    <div className="form-row">
                        <input
                            type="text"
                            name="firstname"
                            placeholder="Firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="lastname"
                            placeholder="Lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Email and Phone */}
                    <div className="form-row">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Service Selection */}
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="DevOps">DevOps</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Consulting">Consulting</option>
                    </select>

                    {/* Message Field */}
                    <textarea
                        name="message"
                        placeholder="Type your message here."
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    {/* Submit Button */}
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Sending..." : "Send message"}
                    </button>
                </form>

                {/* Alert Component */}
                {alert.show && (
                    <div className={`alert ${alert.type}`}>
                        {alert.message}
                    </div>
                )}

                {/* Contact Details */}
                <div className="contact-details">
                    <p>
                        <span role="img" aria-label="phone" style={{ fontSize: "25px" }}>
                            📞
                        </span>{" "}
                        Phone: <p>(+216) 22 623 703</p>
                    </p>
                    <p>
                        <span
                            className="text-green-400 text-xl"
                            role="img"
                            aria-label="email"
                            style={{ fontSize: "25px" }}
                        >
                            📧
                        </span>{" "}
                        Email: <p>alaeddine.hammouda213@gmail.com</p>
                    </p>
                    <p>
                        <span role="img" aria-label="location" style={{ fontSize: "25px" }}>
                            📍
                        </span>{" "}
                        Address: <p>Tunisia, Ariana 2073</p>
                    </p>
                </div>
            </div>
            <Particle />
        </section>
    );
};

export default ContactForm;
