import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const Page: React.FC = () => {
  return (
    <>
      <Head>
````    <title>Privacy Policy | Clear Outcomes</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
</Head>````


      <div className="flex flex-col items-center min-h-screen py-10 px-6 bg-white text-gray-900">
        <div className="w-full max-w-3xl">
        <div className="mb-12 flex justify-center">
            <Image src="/logo.jpg" alt="Clear Outcomes Logo" width={400} height={111} layout="intrinsic" />
          </div>

          <h1 className="text-4xl font-bold text-center mb-8">Privacy Policy</h1>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Our Contact Details</h2>
            <div className="space-y-2">
              <p><strong>Name:</strong> Ian Dale</p>
              <p><strong>Address:</strong> Carpe Vita 3 Saints Constantine and Helena Varna 9006 Bulgaria</p>
              <p><strong>Phone Number:</strong> 020 4525 2881</p>
              <p><strong>E-mail:</strong> research@clearoutcome.co.uk</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">The Type of Personal Information We Collect and Process</h2>
            <p>From time to time we collect and process the following personal information:</p>
            <ul className="list-disc pl-4 mt-2">
              <li>Personal identifiers and contact details (for example, names, email addresses, and postcodes).</li>
              <li>Personal characteristics such as age and gender.</li>
              <li>Special category personal data such as sexual orientation or ethnic group if they are relevant to the research we are conducting.</li>
              <li>Information which in combination may indirectly identify someone such as education setting or workplace name, employment role, support needs, or Special Educational Needs status.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">How We Get the Personal Information and Why We Have It</h2>
            <p>Some of the personal information we process is provided to us directly by you if you consent to participate in a research or evaluation project – for example, if you consent to completing an online survey. We also receive personal information indirectly from UK based charities for which we provide research performance monitoring and evaluation services.</p>
            <p>We use this information to conduct research, performance monitoring, and evaluation of issues of concern to our clients who are UK based charities. We may share this information with them in condition that they respect the security of the data and to treat it in accordance with the law.</p>
            <p>Under the UK General Data Protection Regulation (UK GDPR), the lawful bases we rely on for processing this information are:</p>
            <ul className="list-disc pl-4 mt-2">
              <li>Your consent. You are able to remove your consent at any time. You can do this by contacting us at research@clearoutcome.co.uk.</li>
              <li>For special category personal data, the lawful bases for processing include your explicit consent for one or more specified purposes.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">How We Store Your Personal Information</h2>
            <p>Your information is stored and transferred securely. We keep the personal information we collect or process for the duration of each project and then for a maximum of 12 months afterward for quality assurance purposes. We then delete it.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Your Data Protection Rights</h2>
            <p>Clear Outcomes Research Ltd is committed to ensuring that your rights are protected. You have the following rights:</p>
            <ul className="list-disc pl-4 mt-2">
              <li>The right to access: You have the right to request copies of your personal data.</li>
              <li>The right to rectification: You have the right to request that we correct any information you believe is inaccurate or incomplete.</li>
              <li>The right to erasure: You have the right to request that we erase your personal data under certain conditions.</li>
              <li>The right to restrict processing: You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li>The right to object to processing: You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li>The right to data portability: You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
            <p>If you make a request, we have one month to respond to you. Please contact us at research@clearoutcome.co.uk if you wish to make a request.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4">How to Complain</h2>
            <p>If you have any concerns about our use of your personal information, you can make a complaint to us at research@clearoutcome.co.uk.</p>
            <p>You can also complain to the ICO if you are unhappy with how we have used your data. The ICO’s address, helpline number, and website are as follows:</p>
            <div className="space-y-2">
              <p>Information Commissioner’s Office</p>
              Wycliffe House<br/>
              Water Lane<br/>
              Wilmslow<br/>
              Cheshire<br/> 
              SK9 5AF<br/>
              <p>Helpline number: 0303 123 1113</p>
              <p><a href="https://www.ico.org.uk" className="hover:underline">ICO website</a></p>
            </div>
          </section>

          <footer className="mt-12 text-center">
            <p>&copy; {new Date().getFullYear()} Clear Outcomes Research Ltd. All rights reserved.</p>
            <p>Contact us at <a href="mailto:research@clearoutcome.co.uk" className="hover:underline">research@clearoutcome.co.uk</a>.</p>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Page;
