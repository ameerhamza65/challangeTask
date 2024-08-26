const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white p-4 text-center">
        <p>&copy; 2024 NewsAggregator. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <a href="/terms" className="hover:text-gray-300">Terms of Service</a>
          <a href="/privacy" className="hover:text-gray-300">Privacy Policy</a>
          <a href="/about" className="hover:text-gray-300">About</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  