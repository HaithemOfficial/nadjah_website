import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ChevronDown, Menu, Home, MapPin, Flame, HelpCircle, Info, Zap, Calendar } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const destinations = [
    { path: "/destinations/lt", name: "ليتوانيا", flag: "🇱🇹" },
    { path: "/destinations/cz", name: "جمهورية التشيك", flag: "🇨🇿" },
    { path: "/destinations/china", name: "الصين", flag: "🇨🇳" },
    { path: "/destinations/belgium", name: "بلجيكا", flag: "🇧🇪" },
    { path: "/destinations/france", name: "فرنسا", flag: "🇫🇷" },
    { path: "/destinations/usa", name: "الولايات المتحدة", flag: "🇺🇸" },
    { path: "/destinations/lv", name: "لاتفيا", flag: "🇱🇻" },
    { path: "/destinations/germany", name: "ألمانيا", flag: "🇩🇪" },
  ];

  const updateDestinations = () => {
    // Update the destinations array with enhanced template structure
    return destinations.map(destination => ({
      ...destination,
      // Add any new properties or modifications here
    }));
  };

  const updatedDestinations = updateDestinations();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">🎓</span>
          </div>
          <span className="font-semibold text-lg hidden sm:inline">النجاح للدراسة</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition flex items-center gap-2">
            <Home className="h-4 w-4 -mt-0.5" />
            <span>الرئيسية</span>
          </Link>
          {/* destinations dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition">
                <MapPin className="h-4 w-4 -mt-0.5" />
                <span>الوجهات</span>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="bottom" align="end" className="!text-right" style={{ direction: 'rtl' }}>
              {updatedDestinations.map((dest) => (
                <DropdownMenuItem key={dest.path} asChild>
                  <Link to={dest.path} className="flex items-center gap-2">
                    <span>{dest.flag}</span>
                    <span>{dest.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link 
            to="/popular-destinations" 
            className="relative text-sm font-medium text-gray-600 hover:text-gray-900 transition group flex items-center gap-2"
          >
            <Flame className="h-4 w-4 -mt-0.5" />
            <span className="relative">عرض</span>
          </Link>
          <Link to="/quiz" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition flex items-center gap-2">
            <HelpCircle className="h-4 w-4 -mt-0.5" />
            <span>أداة اختيار الوجهة</span>
          </Link>
          <Link to="/about-us" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition flex items-center gap-2">
            <Info className="h-4 w-4 -mt-0.5" />
            <span>نبذة عننا</span>
          </Link>
          <Link to="/vip-fast-track" className="text-sm font-bold text-yellow-600 hover:text-yellow-700 transition flex items-center gap-2">
            <Zap className="h-4 w-4 -mt-0.5" />
            <span>VIP Fast-Track</span>
          </Link>
        </nav>

        {/* Mobile & Desktop CTA */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">فتح القائمة</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] [&>button]:left-4 [&>button]:right-auto overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="text-right">القائمة</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-6 pb-6" dir="rtl">
                <Link 
                  to="/" 
                  className="text-base font-medium text-gray-600 hover:text-gray-900 transition py-2 px-4 rounded hover:bg-gray-100 flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Home className="h-5 w-5 -mt-0.5" />
                  <span>الرئيسية</span>
                </Link>
                
                {/* Destinations in Mobile Menu */}
                <div className="border-t pt-2">
                  <div className="text-sm font-semibold text-gray-500 px-4 mb-2 flex items-center gap-2">
                    <MapPin className="h-4 w-4 -mt-0.5" />
                    <span>الوجهات</span>
                  </div>
                  {updatedDestinations.map((dest) => (
                    <Link
                      key={dest.path}
                      to={dest.path}
                      className="flex items-center gap-2 text-base font-medium text-gray-600 hover:text-gray-900 transition py-2 px-8 rounded hover:bg-gray-100"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{dest.flag}</span>
                      <span>{dest.name}</span>
                    </Link>
                  ))}
                </div>

                <Link 
                  to="/popular-destinations" 
                  className="text-base font-medium text-gray-600 hover:text-gray-900 transition py-2 px-4 rounded hover:bg-gray-100 flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Flame className="h-5 w-5 -mt-0.5" />
                  <span>عرض</span>
                </Link>
                
                <Link 
                  to="/quiz" 
                  className="text-base font-medium text-gray-600 hover:text-gray-900 transition py-2 px-4 rounded hover:bg-gray-100 flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <HelpCircle className="h-5 w-5 -mt-0.5" />
                  <span>أداة اختيار الوجهة</span>
                </Link>
                
                <Link 
                  to="/about-us" 
                  className="text-base font-medium text-gray-600 hover:text-gray-900 transition py-2 px-4 rounded hover:bg-gray-100 flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Info className="h-5 w-5 -mt-0.5" />
                  <span>نبذة عننا</span>
                </Link>
                
                <Link 
                  to="/vip-fast-track" 
                  className="text-base font-bold text-yellow-600 hover:text-yellow-700 transition py-2 px-4 rounded hover:bg-yellow-50 flex items-center gap-3"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Zap className="h-5 w-5 -mt-0.5" />
                  <span>VIP Fast-Track</span>
                </Link>

                <Link 
                  to="/consultation" 
                  className="mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center gap-2">
                    <Calendar className="h-5 w-5 -mt-0.5" />
                    <span>احجز استشارتك</span>
                  </Button>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop CTA Button */}
          <Link to="/consultation" className="hidden md:block">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 flex items-center gap-2">
              <Calendar className="h-4 w-4 -mt-0.5" />
              <span>احجز استشارتك</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
