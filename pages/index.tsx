import SiteHeader from '../components/SiteHeader';
import SearchFilters from '../components/SearchFilters';
import ElementPicture from '../components/ElementPicture';
import 'tailwindcss/tailwind.css';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col">
      <div >
        <SiteHeader />
      </div>
      <div className="xl:flex-1 xl:flex">
        <SearchFilters />
        <main className="px-4 py-4 xl:flex-1 xl:overflow-x-hidden">
          <h3 className="text-gray-900 text-xl">Los Angeles</h3>
          <p className="text-gray-600">Live like the stars in these luxurious Southern California estates.</p>
          <div className="mt-6 sm:flex sm:overflow-x-auto sm:pb-8">
            <ElementPicture />
            <ElementPicture />
            <ElementPicture />
            <ElementPicture />
            <ElementPicture />
          </div>
        </main>
      </div>
    </div>
  );
}





