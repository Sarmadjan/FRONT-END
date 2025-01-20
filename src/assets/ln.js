import  { useEffect } from 'react';

export const LinkedInBadgesReload = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/in.js';
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (window.IN && window.IN.parse) {
        window.IN.parse();
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="row">
      {/* Badge components */}
    </div>
  );
};

