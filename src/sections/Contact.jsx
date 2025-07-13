import React from "react";
import emailjs from "@emailjs/browser";
import { form } from "motion/react-client";
import { toast } from "sonner";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send("service_ee6s8a9", "template_gziyxsk", {
        from_name: formData.name,
        to_name: "Utkarsh",
        from_email: formData.email,
        to_email: "webdevutkarsh@gmail.com",
        message: formData.message,
      }, "druMR7viQXPNDshbf");
      setIsLoading(false);
      toast.success("Email sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send email. Please try again later.");
      setIsLoading(false);
      return;
    }
  };
  return (
    <section className="relative flex items-center c-space section-spacing">
        <Particles 
            className="absolute inset-0 -z-50"
            quantity={100}
            ease={80}
            color={'#ffffff'}
            refresh
        />
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Wheather you're looking to build a new website, improve your
            existing platform, or bring a uinque project to life, I'm here to
            help
          </p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="none"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="johndoe@gmail.com"
              autoComplete="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              maxLength={500}
              className="field-input field-input-focus"
              placeholder="Share your thoughts here..."
              autoComplete="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send Message" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
