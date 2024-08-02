import { useEffect } from "react";

const Banner728x90 = () => {
     useEffect(() => {
          window.atOptions = {
            'key': '6db42fbd5ee5c7c8cf3994bc02f3fea2',
            'format': 'iframe',
            'height': 90,
            'width': 728,
            'params': {}
          };
      
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = '//www.topcreativeformat.com/6db42fbd5ee5c7c8cf3994bc02f3fea2/invoke.js';
          script.async = true;
      
          const container = document.getElementById('adsterra-container');
          container.appendChild(script);
        }, []);
      
        return (
          <div className="adsterra-h-banner">
               <div id="adsterra-container" className="adsterra-h-banner"></div>
          </div>
        );
}

export default Banner728x90
