const Footer = () => {
  return (
    <footer className="mt-32 py-6 border-t border-gray-700 text-center text-white px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">© {new Date().getFullYear()} Ryan Wiratama</h1>
        <div className="flex gap-6 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#project" className="hover:underline">Project</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
