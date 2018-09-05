import React from "react";
//stateless functional component
const Footer = () => {
  return (
    <footer className="mastfoot mt-auto">
      <div className="inner">
        <p>
          <a href="https://github.com/MaciejPara?tab=repositories">MPara</a>
        </p>
        <p>
          Current rate is included from
          <a href="https://www.nbp.pl"> nbp.pl</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
