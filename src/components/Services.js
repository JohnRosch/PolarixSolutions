import { motion } from "framer-motion";
import {
  FaFileInvoiceDollar,
  FaBalanceScale,
  FaClipboardCheck,
  FaBookOpen,
  FaCalculator,
  FaChartLine,
  FaLightbulb
} from "react-icons/fa";

const services = [
  {
    title: "Tax Services (Individuals, Businesses and Not-for-Profit Organizations)",
    description:
      `Our firm offers comprehensive US tax services, meticulously tailored to meet the diverse needs of individuals, various business entities, and not-for-profit organizations. 
      Our team of seasoned professionals is committed to delivering personalized and efficient tax solutions, ensuring full compliance and optimizing financial outcomes. 
      Whether you require assistance with personal tax returns, navigating complex business tax regulations, or specialized support for not-for-profit organizations, 
      our expertise is at your service. Trust us to manage your tax matters with the utmost diligence and care.`,
    icon: <FaFileInvoiceDollar className="text-6xl text-green-900" />,
    link: "/services/tax"
  },
  {
    title: "Audit & Attest Services",
    description:
      `Our firm offers audit and attest services for profit and not-for-profit entities across multiple industries. 
      Our experienced auditors ensure financial accuracy and compliance, providing reliable support tailored to your needs. 
      Trust us to deliver high-quality audit services with integrity and excellence.`,
    icon: <FaBalanceScale className="text-6xl text-green-900" />,
    link: "/services/audit"
  },
  {
    title: "Compilations and Agreed Upon Procedures",
    description:
      `Our firm offers comprehensive compilations and agreed-upon procedures services. 
      Our team of skilled professionals is dedicated to providing accurate and reliable financial information tailored to your specific needs. 
      Whether you require compilations to present financial data in a clear and organized manner, or agreed-upon procedures to address particular financial concerns, 
      we are equipped to deliver high-quality services with precision and integrity. Trust us to support your financial objectives with expertise and professionalism.`,
    icon: <FaClipboardCheck className="text-6xl text-green-900" />,
    link: "/services/compilations"
  },
  {
    title: "Bookkeeping & Accounting Services",
    description:
      `Our firm offers comprehensive US bookkeeping and US accounting services designed to meet the diverse needs of our clients. 
      Our team of experienced professionals is committed to maintaining accurate financial records and providing insightful accounting solutions. 
      Whether you require day-to-day bookkeeping, financial statement preparation, or strategic accounting advice, we are here to support your financial goals with precision and expertise.
      Our team is highly knowledgeable in the usage of QuickBooks, ensuring efficient and effective management of your financial data. 
      Trust us to manage your financial matters with the highest level of professionalism and care.`,
    icon: <FaBookOpen className="text-6xl text-green-900" />,
    link: "/services/bookkeeping"
  },
 
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white px-6 ">
  <h2 className="text-5xl font-bold text-green-800 text-center mt-20 mb-20">Our Services</h2>
  <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto">
    {services.map((service, i) => (
    <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        whileHover={{ scale: 1.05 }}
        className="bg-white rounded-2xl p-8 border border-gray-200 shadow-md hover:shadow-2xl hover:border-cyan-700 hover:shadow-cyan-400/50 transition-all duration-300 ease-in-out transform"
        style={{
          backgroundImage: "radial-gradient(circle at top left, #f9fafb, #ffffff)",
        }}
      >
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">{service.icon}</div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
          <p className="text-gray-700 text-sm mb-6">{service.description}</p>
          {/* <a
            href={service.link}
            className="inline-block px-4 py-2 text-sm font-semibold text-white bg-cyan-700 rounded hover:bg-cyan-800 transition"
          >
            Learn More
          </a> */}
        </div>
    </motion.div>


    ))}
  </div>
</section>

  );
}
