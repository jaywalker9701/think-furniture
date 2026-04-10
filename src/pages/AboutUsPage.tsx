import React from 'react';
import Newsletter from '../components/Newsletter';
import './AboutUsPage.css';

const AboutUsPage: React.FC = () => {
  return (
    <div className="about-us-page">
      <div className="breadcrumb-container">
        <p className="breadcrumb-text">Home / About Us</p>
      </div>

      <div className="about-container">
        <section className="about-header">
          <h1 className="page-title">About Us</h1>
        </section>

        {/* Who We Are */}
        <section className="about-section">
          <h2>Who We Are</h2>
          <p>
            Think Furniture is an independent company specialising in the creation of new work environments. 
            Our independent status ensures that our clients can access a vast range of office furniture, 
            from established brand names to the latest design-led ways of working.
          </p>
          <p>
            We work on a consultative basis, so we listen to your needs and requirements first, then research 
            the market to generate the most appropriate solution – tailored to your brief. This independence 
            also means that we have vast experience in dealing with and managing many different manufacturers 
            to ensure the best service levels, pricing and delivery.
          </p>
          <p>
            Think Furniture was established in 2006 and has grown in size and reputation with an enviable list 
            of clients and projects. The owners and staff share a passion to provide the best possible customer 
            service, as we believe that our own commercial success can only be achieved with a happy client. 
            The Directors at Think Furniture have supplied and installed over £40 million worth of furniture 
            to hundreds of different clients.
          </p>
        </section>

        {/* Directors Bios */}
        <section className="about-section bio-section">
          <h2>Directors Bios</h2>
          <div className="bio-item">
            <h3>Tony King</h3>
            <p>
              With 40 years of experience working within the interiors and furniture industry, Tony founded 
              Think Furniture in 2006. The vision then, as now, remains the same: to offer independent advice 
              to our clients as well as maximum choice aligned with high levels of customer service.
            </p>
          </div>
          <div className="bio-item">
            <h3>Nigel Maeda</h3>
            <p>
              Nigel has worked in furniture since 1999, both with leading manufacturers and with the furniture 
              dealer division of the Morgan Sindall Group. He joined Think Furniture as a co-director in 2011 
              and has helped to grow a successful business by expanding our product portfolio and client base 
              with a focus on customer experience and satisfaction.
            </p>
          </div>
          <div className="brochure-container">
            <button className="download-btn">Download Company Brochure</button>
          </div>
        </section>

        {/* How We Can Help */}
        <section className="about-section help-section">
          <h2>How We Can Help</h2>
          <p>Think Furniture offers Furniture Procurement Services; we aim to understand how you work and then evaluate any areas where improvements can be made.</p>
          <p>By consultation, we would look to:</p>
          <ul className="help-list">
            <li>Review current work procedures and better understand company values and culture.</li>
            <li>Help evaluate how this might translate into the new space and consider what furniture and practices could be retained or repeated.</li>
            <li>Work alongside the D&B company to help develop a cohesive GA plan that fulfils both current and future workplace requirements.</li>
            <li>Create a Furniture ideas document for client review. Arrange showroom visits and samples (where required). From there, we develop a working schedule to consider both furniture costs and deadlines.</li>
            <li>Review the Furniture schedule with the client and D&B to ensure we hit the correct budget and lead-time requirements. At the point of the project, oversee the full installation of furniture, including checking for quality /snag issues and ensuring these are resolved quickly.</li>
            <li>Create an accurate O&M Manual for the client that shows all manufacturers and any cleaning /maintenance info.</li>
            <li>Post install (day 2) – help with any smaller requirements and info /training for the correct chair / monitor arms setup.</li>
          </ul>
        </section>

        {/* Recent Clients */}
        <section className="about-section clients-section">
          <h2>Recent Clients</h2>
          <div className="clients-logo-container">
            <img src="https://cdn11.bigcommerce.com/s-0193a/product_images/uploaded_images/customers.png" alt="Recent Clients" className="clients-img" />
          </div>
          <p className="clients-text">
            Previous projects over a variety of industries include Cummins, Allergan, Addison Lee and many small Private Equity and Hedge Fund clients.
          </p>
        </section>

        {/* Who works with us? */}
        <section className="about-section">
          <h2>Who works with us?</h2>
          <p>
            Think Furniture are furniture specialist. We only work with furniture (not stationery/office machines 
            or building works) and have over 40 years of industry experience. We aim for a highly efficient 
            transition from the point of order through to delivery and installation, with the Director of the 
            Company being involved from start to finish. This ensures clear communication and that quick decisions 
            are always made.
          </p>
          <p>
            We understand that any efficient project requires good communication and flexibility in terms of 
            working well with other trades and the main contractor, so the scheme can be delivered on time and 
            within budget. We have a high level of experience working alongside various building and fit-out 
            partners to ensure we integrate our installation smoothly within their main program.
          </p>
          <p>
            We work extremely hard to retain our existing clients, which is why we place so much importance on 
            “day 2” service levels. A furniture O&M manual will be issued to the client upon completion showing 
            a clear spec of all new furniture supplied in each area. This will assist the client with future 
            product enquiries and warranty info.
          </p>
          <p>All requests for information or pricing will be dealt with and responded to by a Director of Think Furniture.</p>
        </section>

        {/* Corporate Info */}
        <section className="about-section corporate-info">
          <div className="info-block">
            <h3>Think Furniture Design Limited</h3>
            <p>Company Registration No: 5761135</p>
          </div>
          <div className="info-block">
            <h3>Registered Address:</h3>
            <p><strong>Head Office/Administration:</strong> 40 Fort Hill, Margate Old Town, Kent CT9 1HD</p>
            <p><strong>Sales/Projects:</strong> 20-22 Wenlock Road, London N1 7GU</p>
          </div>
          <div className="info-block contact-points">
            <h3>Points of Contact</h3>
            <p>Margate: 01843 295198</p>
            <p>London: 020 3773 3222</p>
            <p>Mobile (Tony King): 07949 520566</p>
            <p>Email: <a href="mailto:tony@think-furniture.co.uk">tony@think-furniture.co.uk</a></p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="about-section contact-form-section">
          <p className="form-intro">We'd love to hear from you and discuss how we can improve your work environment.</p>
          <p className="form-sub-intro">Get in touch with us using the form below:</p>
          <form className="about-contact-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="Phone Number" />
              </div>
              <div className="form-group">
                <label>Email Address <span className="required">Required</span></label>
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group full-width">
                <label>Company Name</label>
                <input type="text" placeholder="Company Name" />
              </div>
              <div className="form-group full-width">
                <label>Comments/Questions <span className="required">Required</span></label>
                <textarea placeholder="Enter your comments here" required></textarea>
              </div>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </section>
      </div>

      <Newsletter />
    </div>
  );
};

export default AboutUsPage;
