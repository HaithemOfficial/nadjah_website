import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 flex items-center justify-center px-4 py-32">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <h1 className="text-6xl font-bold text-gray-900">404</h1>
          </div>
          <p className="text-2xl font-semibold text-gray-900 mb-3">
            الصفحة غير موجودة
          </p>
          <p className="text-gray-600 mb-8">
            نعتذر، لم نتمكن من العثور على الصفحة التي تبحث عنها. قد تكون قد نُقلت أو لا توجد بعد الآن.
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              العودة للرئيسية
            </Button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
