import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  jsonLdSchema?: Record<string, any>;
}

export const useSEO = ({ title, description, canonicalUrl, jsonLdSchema }: SEOProps) => {
  useEffect(() => {
    // 1. Update Title
    window.document.title = `${title} | Think Furniture`;

    // 2. Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);

    // 3. Update Canonical Tag
    if (canonicalUrl) {
      let linkCanonical = document.querySelector('link[rel="canonical"]');
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.setAttribute('href', canonicalUrl);
    }

    // 4. Inject JSON-LD Schema
    if (jsonLdSchema) {
      let scriptTag = document.querySelector('script[id="seo-schema"]') as HTMLScriptElement;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.setAttribute('id', 'seo-schema');
        scriptTag.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(jsonLdSchema);
    }

    // Cleanup Schema on unmount to prevent dupes across routes
    return () => {
      const scriptTag = document.querySelector('script[id="seo-schema"]');
      if (scriptTag) scriptTag.remove();
    };
  }, [title, description, canonicalUrl, jsonLdSchema]);
};
