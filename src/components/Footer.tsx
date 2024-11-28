const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto px-4 py-8 text-center">
        <p>
          <a className="inline-block px-1" href="/">
            Power Pixel
          </a>
          <span> &copy; {new Date().getFullYear()} All Rights Reserved.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
