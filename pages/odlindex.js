// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Privacy Policy | Clear Outcomes</title>
        <meta name="description" content="Privacy Policy for Clear Outcomes. Learn about our data collection practices and your rights." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      
      <header className="relative py-10 w-full">
        {/* Container made relative for absolute positioning of the child */}
        <div className="absolute left-1/2 transform -translate-x-1/2" style={{ maxWidth: '400px', width: '100%' }}>
          <Image src="/logo.jpg" alt="Clear Outcomes Logo" width={400} height={111} layout="intrinsic" />
        </div>
        <h1 className="text-4xl font-bold mt-20 mb-4 text-center">Privacy Policy</h1>
      </header>

      <main>
        <article className="mt-8">
          {/* Content sections remain unchanged */}
          <section className="my-5">
            <h2 className="text-2xl font-semibold">Our contact details</h2>
            {/* Contact information */}
            <p><strong>Name:</strong> Ian Dale</p>
            <p><strong>Address:</strong> Carpe Vita 3 Saints Constantine and Helena Varna 9006 Bulgaria</p>
            <p><strong>Phone Number:</strong> 020 4525 2881</p>
            <p><strong>E-mail:</strong> research@clearoutcome.co.uk</p>
          </section>
          {/* More sections follow with their respective headings and contents */}
        </article>
      </main>
    </div>
  )
}
