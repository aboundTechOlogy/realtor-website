export default function TopHeader() {
  return (
    <div className="bg-[#171325] py-2">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-white text-sm">
        <div className="italic mb-2 sm:mb-0">
          BEFORE YOU MAKE A MOVE... THINK TWICE!!
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-[#8c86fd] transition-colors" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-[#8c86fd] transition-colors" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-[#8c86fd] transition-colors" aria-label="YouTube">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#" className="hover:text-[#8c86fd] transition-colors" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="hover:text-[#8c86fd] transition-colors" aria-label="WhatsApp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="hover:text-[#8c86fd] transition-colors" aria-label="Telegram">
              <i className="fab fa-telegram"></i>
            </a>
          </div>
          
          <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
          
          <div className="flex items-center gap-4">
            <a href="tel:305-XXX-XXXX" className="flex items-center gap-2 hover:text-[#8c86fd] transition-colors">
              <i className="fas fa-phone"></i>
              <span className="hidden md:inline">(305) XXX-XXXX</span>
            </a>
            <a href="mailto:john@example.com" className="flex items-center gap-2 hover:text-[#8c86fd] transition-colors">
              <i className="fas fa-envelope"></i>
              <span className="hidden md:inline">john@example.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}