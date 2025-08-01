// import React, { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import ScrollTrigger from "react-scroll-trigger";
// import CountUp from "react-countup";
// import { FaBusinessTime } from "react-icons/fa";
// import { PiStudentFill } from "react-icons/pi";
// import Model from "react-modal";
// import { RxCross2 } from "react-icons/rx";
// import emailjs from "@emailjs/browser";
// import Footer from "../components/Footer"; // Adjust path based on where Footer.jsx is

// import "./Home.css";

// const Home = () => {
//   const [counterStart, setcounterStart] = useState(false);
//   // handle form section
//   const [formVisible, setformVisible] = useState(true);
//   //handle form section using emailJS
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         import.meta.env.VITE_SERVICE_ID,
//         import.meta.env.VITE_Default_Template,
//         form.current,
//         import.meta.env.VITE_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           alert("Email has sent Succesfully!");
//         },
//         (error) => {
//           alert("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <section className="home-container">
//       {/* Start form section */}
//       {/* Modal for the first-time form */}
//       <Model
//         isOpen={formVisible}
//         className="custom-modal"
//         overlayClassName="modal-overlay"
//       >
//         <RxCross2 className="closeForm" onClick={() => setformVisible(false)} />
//         <div className="contact-from-info">
//           <h2>Get In Touch</h2>
//           <form ref={form} onSubmit={sendEmail}>
//             <label>
//               <input type="text" placeholder="Your Name" name="name" required />
//             </label>
//             <label>
//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 name="email"
//                 required
//               />
//             </label>
//             <label>
//               <input type="text" placeholder="Address" name="address" />
//             </label>
//             <label>
//               <input
//                 type="tel"
//                 placeholder="Contact Number"
//                 name="contactnumber"
//                 pattern="[0-9]{10}"
//                 required
//               />
//             </label>
//             <label>
//               <textarea name="message" placeholder="Message" required />
//             </label>
//             <button type="submit" value="send">
//               Submit
//             </button>
//           </form>
//         </div>
//       </Model>
//       {/* End form section */}
//       <div className="banner-wrapper">
//         <img
//           src="/images/banner.jpg"
//           alt="Biswas English Academy Banner"
//           className="banner-img"
//         />
//       </div>
//       <div className="home-content-wrapper">
//         <motion.div
//           className="home-content"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <motion.h1
//             className="home-heading"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//           >
//             Welcome to Biswas English Academy
//           </motion.h1>

//           <div className="typing-wrapper-row">
//             <span className="fixed-line">
//               Elevate your English skills with&nbsp;
//             </span>
//             <span className="home-subtext">
//               <TypeAnimation
//                 sequence={[
//                   "expert guidance and personalized instruction.",
//                   2000,
//                   "",
//                   1000,
//                 ]}
//                 wrapper="span"
//                 speed={50}
//                 repeat={Infinity}
//                 className="typing-text"
//               />
//             </span>
//           </div>
//           <motion.button
//             className="cta-button"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             onClick={() => setformVisible(true)}
//           >
//             Get Started
//           </motion.button>
//         </motion.div>

//         <motion.div
//           className="home-image-wrapper"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//         >
//           <img
//             src="/images/pm1.jpg"
//             alt="Students learning English"
//             className="home-image"
//             loading="lazy"
//           />
//         </motion.div>
//       </div>
//       {/* Animated Experience and Students Count */}
//       <span className="animation">
//         <motion.div
//           className="numberAnimation"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <div className="animationIcon">
//             <FaBusinessTime className="icons" />
//           </div>
//           <ScrollTrigger
//             onEnter={() => setcounterStart(true)}
//             onExit={() => setcounterStart(false)}
//             threshold={0.1}
//           >
//             <div className="animationText">
//               <h2>Experience</h2>
//               <h4 className="scrollNumber">
//                 {counterStart && (
//                   <CountUp start={0} end={11} duration={2} delay={0} />
//                 )}
//                 Years+
//               </h4>
//             </div>
//           </ScrollTrigger>
//         </motion.div>

//         <motion.div
//           className="numberAnimation"
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <div className="animationIcon">
//             <PiStudentFill className="icons" />
//           </div>
//           <ScrollTrigger
//             onEnter={() => setcounterStart(true)}
//             onExit={() => setcounterStart(false)}
//             threshold={0.1}
//           >
//             <div className="animationText">
//               <h2>Students</h2>
//               <h4 className="scrollNumber">
//                 {counterStart && (
//                   <CountUp start={0} end={15} duration={2} delay={0} />
//                 )}
//                 K+
//               </h4>
//             </div>
//           </ScrollTrigger>
//         </motion.div>
//       </span>
//       <Footer />
//     </section>
//   );
// };

// export default Home;

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";
import { FaBusinessTime } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import Modal from "react-modal";
import { RxCross2 } from "react-icons/rx";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  const [counterStart, setCounterStart] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_Default_Template,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => alert("Email sent successfully!"))
      .catch((error) => alert("Failed to send email: " + error.text));
  };

  return (
    <motion.section
      className="home-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Contact Modal */}
      <Modal
        isOpen={formVisible}
        onRequestClose={() => setFormVisible(false)}
        className="custom-modal"
        overlayClassName="modal-overlay"
      >
        <RxCross2 className="closeForm" onClick={() => setFormVisible(false)} />
        <div className="contact-from-info">
          <h2>Get In Touch</h2>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
            />
            <input type="text" name="address" placeholder="Address" />
            <input
              type="tel"
              name="contactnumber"
              placeholder="Contact Number"
              pattern="[0-9]{10}"
              required
            />
            <textarea name="message" placeholder="Message" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </Modal>

      {/* Banner */}
      <div className="banner-wrapper">
        <img
          src="/images/banner.jpg"
          alt="Biswas English Academy Banner"
          className="banner-img"
        />
      </div>

      {/* Hero Section */}
      <div className="home-content-wrapper">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="home-heading">Welcome to Biswas English Academy</h1>
          <div className="typing-wrapper-row">
            <span className="fixed-line">
              Elevate your English skills with&nbsp;
            </span>
            <span className="home-subtext">
              <TypeAnimation
                sequence={[
                  "expert guidance and personalized instruction.",
                  2000,
                  "",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="typing-text"
              />
            </span>
          </div>
          <motion.button
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setFormVisible(true)}
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          className="home-image-wrapper"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <img
            src="/images/pm1.jpg"
            alt="Students learning English"
            className="home-image"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Stats Animation */}
      <div className="animation">
        <motion.div
          className="numberAnimation"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="animationIcon">
            <FaBusinessTime className="icons" />
          </div>
          <ScrollTrigger
            onEnter={() => setCounterStart(true)}
            onExit={() => setCounterStart(false)}
            threshold={0.1}
          >
            <div className="animationText">
              <h2>Experience</h2>
              <h4 className="scrollNumber">
                {counterStart && <CountUp start={0} end={11} duration={2} />}{" "}
                Years+
              </h4>
            </div>
          </ScrollTrigger>
        </motion.div>

        <motion.div
          className="numberAnimation"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="animationIcon">
            <PiStudentFill className="icons" />
          </div>
          <ScrollTrigger
            onEnter={() => setCounterStart(true)}
            onExit={() => setCounterStart(false)}
            threshold={0.1}
          >
            <div className="animationText">
              <h2>Students</h2>
              <h4 className="scrollNumber">
                {counterStart && <CountUp start={0} end={15} duration={2} />} K+
              </h4>
            </div>
          </ScrollTrigger>
        </motion.div>
      </div>

      {/* Footer */}
      <Footer />
    </motion.section>
  );
};

export default Home;
