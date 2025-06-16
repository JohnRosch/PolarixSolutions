import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div id="contact" className="bg-white text-gray-800 pt-20 px-6 pb-20">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-green-800 mt-20 mb-20 pb-10 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-right">
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-2xl text-cyan-700 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email Address</h3>
                <p>info@polarixsolutions.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone className="text-2xl text-cyan-700 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Office Phone Number</h3>
                <p>(02) 8-355-1374</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-2xl text-cyan-700 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Company Address</h3>
                <p>
                  Unit 1609C Regalia Park Tower C<br />
                  150 P Tuazon Boulevard, Cubao, Quezon City, 1109, Philippines
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaLinkedin className="text-2xl text-cyan-700 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/company/polarix-solutions-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 hover:underline"
                >
                  linkedin.com/company/polarix-solutions-inc
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaFacebook className="text-2xl text-cyan-700 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Facebook</h3>
                <a
                  href="https://www.facebook.com/profile.php?id=61576980214329"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 hover:underline"
                >
                  facebook.com/polarix
                </a>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div data-aos="fade-left" className="rounded-xl shadow-xl overflow-hidden">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Regalia%20Park%20Tower,%20150%20P%20Tuazon%20Blvd,%20Cubao,%20Quezon%20City,%20Metro%20Manila&output=embed"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[400px] border-0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
