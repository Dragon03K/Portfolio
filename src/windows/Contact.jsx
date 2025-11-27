import { WindowControls } from "#components";
import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Mail } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>
      <div className="p-5 space-y-5">
        <img
          src="/images/adrian.jpg"
          alt="Arbaz"
          className="w-20 rounded-full"
        />
        <h3>Let's connect</h3>
        <p>Send me a message and I'll get back to you as soon as possible.</p>
        <a
          href="mailto:mohammadarbaz320@gmail.com"
          className="flex items-center gap-2 hover:underline"
        >
          <Mail size={20} />
          <p>mohammadarbaz320@gmail.com</p>
        </a>

        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li key={id} style={{ backgroundColor: bg }}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={text}
              >
                <img src={icon} alt={text} className="size-5" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
