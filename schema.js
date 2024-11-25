function generateArticleSchema() {
  const schema =  {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Kishan Gopal Modi",
  "description": "I am a FrontEnd Developer, based in Bikaner, Rajasthan. Working as a professional web developer from last 5+ years. Worked with international clients from various origins. Having expertise in trending JavaScript frameworks.",
  "url": "https://kishan3127.github.io/resume",
  "image": "https://kishan3127.github.io/resume/images/myProfile.jpeg",
  "email": "kishangopalmodi@gmail.com",
  "telephone": "+91-9057280689",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Near Minerwa Cinema, Chotina Well, K.E.M. Road",
    "addressLocality": "Bikaner, Rajasthan",
    "addressRegion": "RJ",
    "postalCode": "334001",
    "addressCountry": "In"
  },
  "jobTitle": "Lead Technical Consultant",
  "worksFor": {
    "@type": "Organization",
    "name": "Perficient",
    "url": "https://www.perficient.com/"
  },
  "alumniOf": {
    "@type": "EducationalOrganization",
    "name": "Rajasthan Technical University",
    "url": "https://www.rtu.ac.in"
  },
  "skills": [
    "JavaScript",
    "React",
    "Node.js",
    "AEM UI"
  ],
  "hasOccupation": {
    "@type": "Occupation",
    "name": "Software Developer",
    "estimatedSalary": {
      "@type": "MonetaryAmount",
      "currency": "INR",
      "value": {
        "@type": "QuantitativeValue",
        "value": "2000000",
        "unitText": "YEAR"
      }
    }
  },
  "sameAs": [
    "https://www.linkedin.com/in/kishangopalmodi",
    "https://github.com/kishan3127"
  ]
};
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
generateArticleSchema();
