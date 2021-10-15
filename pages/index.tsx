import SiteHeaderMenu from '../components/SiteHeader';
import SearchFilters from '../components/SearchFilters';
import ElementPicture from '../components/ElementPicture';
import 'tailwindcss/tailwind.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200 antialiased">
      <SiteHeaderMenu />
      <SearchFilters />
      <main className="px-4 py-4">
        <h3 className="text-gray-900 text-xl">Los Angeles</h3>
        <p className="text-gray-600">Live like the stars in these luxurious Southern California estates.</p>
        <div className="mt-6 sm:flex sm:overflow-x-auto sm:pb-8">
          <ElementPicture/>
          <ElementPicture/>
          <ElementPicture/>
          <ElementPicture/>
          <ElementPicture/>
        </div>
      </main>
    </div>
  );
}




