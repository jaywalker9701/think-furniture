import Newsletter from '../components/Newsletter';
import './ServicesPage.css';

const servicesData = [
  {
    title: 'OFFICE PLANNING & DESIGN',
    content: 'We provide a comprehensive office planning and design service to help you create a workspace that is both functional and aesthetically pleasing. Our team of experts will work with you to understand your needs and develop a customized solution that meets your specific requirements.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-office-planning-and-design.jpg'
  },
  {
    title: 'FURNITURE PROCUREMENT',
    content: 'We offer a wide range of office furniture from leading manufacturers, ensuring that you have access to the best products at competitive prices. Our procurement team will work with you to identify the right furniture for your space and manage the entire purchasing process from start to finish.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-procurement.jpg'
  },
  {
    title: 'PROJECT MANAGEMENT',
    content: 'Our dedicated project managers will oversee every aspect of your office fit-out or refurbishment, ensuring that your project is completed on time, within budget, and to the highest standards. We handle everything from initial planning and coordination to final installation and handover.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-project-management.jpg'
  },
  {
    title: 'DELIVERY & INSTALL SERVICES',
    content: 'Our professional delivery and installation team will ensure that your new office furniture is delivered and installed efficiently and with minimal disruption to your business. We handle all aspects of the logistics, including assembly and placement of furniture according to your plan.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-delivery-and-installation.jpg'
  },
  {
    title: 'ERGONOMIC ASSESSMENT',
    content: 'We provide ergonomic assessments to help you improve the health and well-being of your employees. Our experts will evaluate your workspace and provide recommendations on how to optimize your office setup for comfort and productivity, reducing the risk of work-related injuries.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-ergonomic-assessment.jpg'
  },
  {
    title: 'ACOUSTIC CONSULTATION',
    content: 'We offer acoustic consultation services to help you create a more productive and comfortable office environment. Our team will assess the acoustic properties of your space and provide solutions to reduce noise levels and improve speech privacy, such as acoustic panels and partitions.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-acoustic-consultation.jpg'
  },
  {
    title: 'STORAGE AUDIT',
    content: 'Our storage audit service will help you optimize your office storage and improve efficiency. We will assess your current storage needs and provide recommendations on how to rationalize your storage solutions, reducing clutter and freeing up valuable office space.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-storage-audit.jpg'
  },
  {
    title: 'WAREHOUSING & MOVES MANAGEMENT',
    content: 'We provide comprehensive warehousing and moves management services to help you manage your office assets and transitions. Whether you are moving to a new office or need to store furniture temporarily, our team will handle all aspects of the logistics and coordination.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-warehousing-moves-management.jpg'
  },
  {
    title: 'FURNITURE RENTAL & FINANCE',
    content: 'We offer flexible furniture rental and finance solutions to help you manage your budget and cash flow. Our rental programs allow you to access the furniture you need without a large upfront investment, while our finance options provide flexible payment terms to suit your requirements.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-rental-and-finance.jpg'
  },
  {
    title: 'BESPOKE FURNITURE SOLUTIONS',
    content: 'We provide bespoke furniture solutions to help you create a unique and customized workspace. Our team will work with you to design and manufacture custom furniture that meets your specific needs and reflects your brand identity, ensuring that your office is truly one-of-a-kind.',
    image: 'https://cdn1.bigcommerce.com/server800/0193a/images/stencil/original/image-manager/think-furniture-bespoke-furniture-solutions.jpg'
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="services-page">
      <div className="breadcrumb-container">
        <p className="breadcrumb-text">Home / Services</p>
      </div>

      <div className="services-header">
        <h1 className="page-title">Services</h1>
        <p className="page-intro">
          Think Furniture provides a full range of services to support your business workstation needs. 
          From initial planning and design to final installation and ongoing maintenance.
        </p>
      </div>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div key={index} className={`service-row ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="service-image-box">
              <img src={service.image} alt={service.title} className="service-page-img" />
            </div>
            <div className="service-content-box">
              <h2 className="service-title-large">{service.title}</h2>
              <div className="title-underline"></div>
              <p className="service-description-text">{service.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="services-footer-cta">
        <div className="cta-content-inner">
          <p className="cta-main-text">
            To find out more about our services here at Think Furniture and how we can help you with your project or indeed your own office, please get in touch for a no-obligation discussion.
          </p>
          <p className="cta-sub-text">
            Alternatively feel free to view our previous work in our project portfolio.
          </p>
          <div className="cta-button-group">
            <button className="cta-white-btn">CONTACT OUR TEAM</button>
            <button className="cta-white-btn">VIEW OUR PROJECTS</button>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
};

export default ServicesPage;
