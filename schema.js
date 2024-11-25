function getLanguageFromURL(url) {
  const urlObj = new URL(url);
  const pathSegments = urlObj.pathname.split('/');
  return pathSegments[2]; 
}

function generateSlug(name){
  const slug = name
        .toLowerCase()               
        .trim()                      
        .replace(/[^a-z0-9\s-]/g, '') 
        .replace(/\s+/g, '-')        
        .replace(/-+/g, '-');        
  return slug
}
function generateArticleSchema() {
  const locationObj = window.location
  const pageLang = getLanguageFromURL(locationObj.href);
  const authorSlug = generateSlug(getMetadata('author') || '')
  const authorPath = `${locationObj.origin}/blogs/${pageLang}/authors/${authorSlug}`
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': window.location.href,
    },
    headline: document.querySelector('title')?.innerText || 'No Title',
    description: getMetadata('description') || '',
    image: getMetadata('og:image') || '',
    author: {
      '@type': 'Person',
      name: getMetadata('author') || '',
      url: authorPath
    },
    publisher: {
      '@type': 'Organization',
      name: 'Keysight',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.keysight.com/content/dam/keysight/en/img/gnav/keysight-logo.svg',
      },
    },
    datePublished: getMetadata('publication-date') || '',
    dateModified: getMetadata('last-modified') || ''
  };
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schema);
  document.head.appendChild(script);
}
generateArticleSchema();
