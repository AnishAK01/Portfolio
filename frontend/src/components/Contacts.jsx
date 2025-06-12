import React from 'react';
import { Mail, PhoneCall } from 'lucide-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contacts = () => {
  return (
    <div className="w-11/12 md:w-9/12 m-auto my-10 p-6 border border-[#4e54ff] rounded-2xl
      bg-[#0f172a]/30 backdrop-blur-md ">

      {/* Heading */}
      <h2 className="text-center text-[3rem] font-extrabold text-transparent bg-gradient-to-r from-[#ff4ecf] via-[#00ffc3] to-[#4e54ff] bg-clip-text mb-6 tracking-widest">
        CONTACTS
      </h2>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 place-items-center text-[#ff4ecf]">

        {/* Phone */}
        <div className="hover:text-[#4e54ff] transition duration-300 text-center">
          <a
            href="tel:+918743896614"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <PhoneCall size={36} />
            <p className="text-white text-sm mt-2">+91 87438 96614</p>
          </a>
        </div>

        {/* WhatsApp */}
        <div className="hover:text-[#4e54ff] transition duration-300 text-center">
          <a
            href="https://wa.me/918743896614"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <WhatsAppIcon style={{ fontSize: 36 }} />
            <p className="text-white text-sm mt-2">+91 87438 96614</p>
          </a>
        </div>

        {/* Email */}
        <div className="hover:text-[#4e54ff] transition duration-300 text-center">
          <a
            href="mailto:kumaranish2210@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <Mail size={36} />
            <p className="text-white text-sm mt-2">kumaranish2210@gmail.com</p>
          </a>
        </div>

        {/* LinkedIn */}
        <div className="hover:text-[#4e54ff] transition duration-300 text-center">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <LinkedInIcon style={{ fontSize: 36 }} />
            <p className="text-white text-sm mt-2">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
