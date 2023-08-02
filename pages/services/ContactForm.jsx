import React, { useState } from "react";

const services = [
  "App Development",
  "SEO",
  "Marketing",
  "E-Commerce",
  "Event Hosting",
  "Web Development",
  "Blockchain/Web3 Apps",
  "Content Writing",
  "UI/UX Design",
];

const ContactForm = () => {
  const [selectedService, setSelectedService] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your logic to handle form submission
    console.log("Selected Service:", selectedService);
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Clear form fields after submission
    setSelectedService("");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className=" mx-auto p-4 "> <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto blueGlassmorphism p-8    shadow-md"
      >
       
        <div className="mb-4">
          <label
            className="block text-White font-bold mb-2"
            htmlFor="service"
          >
            Select a Service:
          </label>
          <select
            className="w-full border   px-5 py-3 whiteGlassmorphism    focus:outline-none focus:ring bg-transparent focus:border-blue-300"
            id="service"
            name="service"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="" disabled>
              Select a Service
            </option>
            {services.map((service, index) => (
              <option
                key={index}
                value={service}
                className=" whiteGlassmorphism text-black"
              >
                {service}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Your Name:
          </label>
          <input
            className="w-full border   px-5 py-3    focus:outline-none focus:ring whiteGlassmorphism focus:border-blue-300"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Your Email:
          </label>
          <input
            className="w-full border   px-5 py-3    focus:outline-none focus:ring focus:border-blue-300 whiteGlassmorphism"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message:
          </label>
          <textarea
            className="w-full border whiteGlassmorphism   px-5 py-3    focus:outline-none focus:ring focus:border-blue-300"
            id="message"
            name="message"
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2  blueGlassmorphism  hover:bg-yellow-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
