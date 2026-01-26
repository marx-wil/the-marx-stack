import { useEffect } from "react";

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

  useEffect(() => {
    // Update document title
    document.title = title;

    // Helper function to update or create meta tag
    const updateMetaTag = (attribute, value, content) => {
      const selector = attribute === "property" ? `meta[property="${value}"]` : `meta[name="${value}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement("meta");
        if (attribute === "property") {
          element.setAttribute("property", value);
        } else {
          element.setAttribute("name", value);
        }
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper function to update or create link tag
    const updateLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Primary Meta Tags
    updateMetaTag("name", "title", title);
    updateMetaTag("name", "description", description);
    updateMetaTag("name", "keywords", keywords);
    updateMetaTag("name", "author", author);
    updateMetaTag("name", "robots", "index, follow");
    updateMetaTag("name", "language", "English");
    updateMetaTag("name", "revisit-after", "7 days");

    // Open Graph / Facebook
    updateMetaTag("property", "og:type", type);
    updateMetaTag("property", "og:url", url);
    updateMetaTag("property", "og:title", title);
    updateMetaTag("property", "og:description", description);
    updateMetaTag("property", "og:image", image);
    updateMetaTag("property", "og:site_name", siteName);
    updateMetaTag("property", "og:locale", "en_US");

    // Twitter
    updateMetaTag("name", "twitter:card", "summary_large_image");
    updateMetaTag("name", "twitter:url", url);
    updateMetaTag("name", "twitter:title", title);
    updateMetaTag("name", "twitter:description", description);
    updateMetaTag("name", "twitter:image", image);

    // Canonical URL
    updateLinkTag("canonical", url);

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add structured data scripts
    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(structuredData);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(websiteStructuredData);
    document.head.appendChild(script2);

    // Cleanup function
    return () => {
      // Note: We don't remove meta tags on cleanup to avoid flickering
      // The next page will update them anyway
    };
  }, [title, description, keywords, image, url, type, author, siteName]);

  // This component doesn't render anything visible
  return null;
};

export default SEO;
