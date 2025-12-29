import { site } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{site.businessName}</h3>
            <p className="text-gray-400 text-sm">
              Servicios profesionales de refrigeración y climatización
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <p className="text-gray-400 text-sm mb-2">{site.phoneInternational}</p>
            <p className="text-gray-400 text-sm">{site.hours}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Zonas</h4>
            <p className="text-gray-400 text-sm">{site.zones}</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} {site.businessName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
