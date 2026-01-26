import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "Wilmarx - Full Stack Developer & IT Professional | Portfolio",
  description = "Wilmarx is a systems developer and tech enthusiast specializing in full-stack web development, mobile apps, and IT infrastructure. Explore projects in React, Node.js, Python, and more.",
  keywords = "Wilmarx, full stack developer, systems developer, React developer, Node.js developer, Python developer, IT professional, web developer, mobile developer, portfolio, software engineer, TypeScript, Next.js, FastAPI, PostgreSQL, AWS, Docker",
  image = "https://the-marx-stack.vercel.app/logo512.png",
  url = "https://the-marx-stack.vercel.app",
  type = "website",
  author = "Wilmarx",
  siteName = "Wilmarx Portfolio",
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Wilmarx",
    jobTitle: "Full Stack Developer & IT Professional",
    description: description,
    url: url,
    image: image,
    sameAs: [
      // Add your social media profiles here when available
      "https://github.com/marx-wil",
      "https://www.facebook.com/err.marx",
      "https://www.instagram.com/err.marx/",
    ],
    knowsAbout: [
      "Full Stack Development",
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Mobile Development",
      "React Native",
      "Next.js",
      "IT Infrastructure",
      "System Administration",
    ],
    alumniOf: {
      "@type": "Organization",
      name: "Chief Information Officer",
      url: "https://www.facebook.com/err.marx",
      logo: "https://the-marx-stack.vercel.app/logo512.png",
      description: "Chief Information Officer",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Casa Living, KMC",
        addressLocality: "Makati City",
        addressRegion: "Philippines",
        postalCode: "1200",
        addressCountry: "Philippines",
      },
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Marx Stack",
    url: "https://the-marx-stack.vercel.app",
    description: "The Marx Stack is a portfolio website for Wilmarx Cayabyab, a full stack developer and IT professional.",
    author: {
      "@type": "Person",
      name: "Wilmarx Cayabyab",
    },
    publisher: {
      "@type": "Organization",
      name: "The Marx Stack",
      url: "https://the-marx-stack.vercel.app",
      logo: "https://the-marx-stack.vercel.app/logo512.png",
    },
    isPartOf: {
      "@type": "WebSite",
      name: "The Marx Stack",
      url: "https://the-marx-stack.vercel.app",
      logo: "https://the-marx-stack.vercel.app/logo512.png",
    },
    hasPart: {
      "@type": "WebPage",
      name: "Home",
      url: "https://the-marx-stack.vercel.app",
      logo: "https://the-marx-stack.vercel.app/logo512.png",
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://the-marx-stack.vercel.app/logo512.png",
      width: 512,
      height: 512,
    },
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
