import Container from "../components/Container";

export default function About() {
    const libraries = [
        {
          name: 'React',
          url: 'https://reactjs.org/',
          description: 'A JavaScript library for building user interfaces',
        },
        {
          name: 'Next.js',
          url: 'https://nextjs.org/',
          description: 'The React Framework for Production',
        },
        {
          name: 'Tailwind CSS',
          url: 'https://tailwindcss.com/',
          description: 'A utility-first CSS framework for rapid UI development',
        },
        {
          name: 'FlyonUI',
          url: 'https://flyonui.com/',
          description: 'A collection of UI components for React',
        },
        {
          name: 'Clerk',
          url: 'https://clerk.dev/',
          description: 'The complete authentication stack for your Next.js app',
        },
        {
          name: 'Sonner',
          url: 'https://sonner.io/',
          description: 'A simple and lightweight toast library for React',
        },
        {
          name: 'React Query',
          url: 'https://react-query.tanstack.com/',
          description: 'Hooks for fetching, caching and updating asynchronous data in React',   
        },
        {
            name: 'Geist UI',
            url: 'https://geist-ui.dev/en-us/components/text',
            description: 'Modern and minimalist React UI library',
        },
        {
            name: 'React Icons',
            url: 'https://react-icons.github.io/react-icons/',
            description: 'Include popular icons in your React projects easily with react-icons',
        },
        {
            name: 'React Hook Form',
            url: 'https://react-hook-form.com/',
            description: 'Performant, flexible and extensible forms with easy-to-use validation',
        },
        {
            name: 'React Datepicker',
            url: 'https://reactdatepicker.com/',
            description: 'A simple and reusable datepicker component for React',
        },
        {
            name: 'Swapy',
            logo: (
                <svg className="w-40 rounded-t-2xl" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"> <rect x="19" y="27" width="381.163" height="381.163" rx="80" fill="#19374D"></rect> <rect x="111.715" y="102.975" width="381.163" height="381.163" rx="80" fill="#3A81B4"></rect> </svg>
            ),
            url: 'https://swapy.tahazsh.com/',
            description: 'Meet Swapy, a framework-agnostic tool that converts any layout into a drag-to-swap one with just a few lines of code.',
        },
        {
            name: 'Xata',
            logo: (
               <svg viewBox="0 0 24 24" focusable="false" className="w-40 rounded-t-2xl"><g><path fill="url(#xataLogoHeaderMobileGdTopLeft)" d="M0.500006 6.60213C0.502672 8.8784 1.41054 11.0604 3.02388 12.6681L8.74744 18.3712C8.94576 18.5689 9.26796 18.5694 9.45379 18.36C10.8453 16.792 11.6185 14.7641 11.6161 12.6571C11.6134 10.3808 10.7055 8.19885 9.09219 6.59116L3.863 1.38063C3.39169 0.910967 2.6205 0.907598 2.2208 1.43942C1.10825 2.91967 0.497813 4.72971 0.500006 6.60213Z"></path><path fill="url(#xataLogoHeaderMobileGdTopRight)" d="M20.9762 12.6339C22.5896 11.0262 23.4974 8.84422 23.5001 6.56795C23.5023 4.69553 22.8919 2.88549 21.7793 1.40524C21.3796 0.873419 20.6084 0.876787 20.1371 1.34645L14.9081 6.55711C13.2948 8.1648 12.3867 10.3466 12.384 12.6229C12.3816 14.7298 13.1548 16.7578 14.5463 18.3258C14.7321 18.5352 15.0543 18.5346 15.2527 18.337L20.9762 12.6339Z"></path><path fill="url(#xataLogoHeaderMobileGdBottomRight)" d="M19.1009 22.914C19.5712 23.3849 20.3403 23.3894 20.7607 22.8736C21.9251 21.4455 22.7 19.7984 22.9533 18.1782C23.2301 16.408 22.864 14.8001 21.9329 13.6368C21.758 13.4182 21.4346 13.4193 21.2363 13.617L15.8719 18.9625C15.6732 19.1605 15.6729 19.482 15.871 19.6804L19.1009 22.914Z"></path><path fill="url(#xataLogoHeaderMobileGdBottomLeft)" d="M3.23951 22.9088C3.65998 23.4245 4.42907 23.42 4.89936 22.9492L8.12918 19.7156C8.32737 19.5172 8.32699 19.1956 8.12834 18.9977L2.76398 13.6521C2.56566 13.4545 2.24224 13.4533 2.0673 13.6719C1.13627 14.8353 0.770182 16.4432 1.04694 18.2133C1.30027 19.8336 2.07513 21.4807 3.23951 22.9088Z"></path></g><defs><linearGradient id="xataLogoHeaderMobileGdTopLeft" x1="12" x2="12" y1="1" y2="18.701" gradientUnits="userSpaceOnUse"><stop stop-color="#9F87FF"></stop><stop offset="1" stop-color="#8566FF"></stop></linearGradient><linearGradient id="xataLogoHeaderMobileGdBottomLeft" x1="12" x2="12" y1="13.251" y2="23.264" gradientUnits="userSpaceOnUse"><stop stop-color="#DE99F6"></stop><stop offset="1" stop-color="#D669FC"></stop></linearGradient><linearGradient id="xataLogoHeaderMobileGdTopRight" x1="12" x2="12" y1="1" y2="18.701" gradientUnits="userSpaceOnUse"><stop stop-color="#9F87FF"></stop><stop offset="1" stop-color="#8566FF"></stop></linearGradient><linearGradient id="xataLogoHeaderMobileGdBottomRight" x1="12" x2="12" y1="13.251" y2="23.264" gradientUnits="userSpaceOnUse"><stop stop-color="#DE99F6"></stop><stop offset="1" stop-color="#D669FC"></stop></linearGradient></defs></svg> 
            ),
            url: 'https://xata.io/',
            description: 'Postgres for teamsthat ship fast',
        },
        {
            name: 'react-resizable-panels',
            logo: (
                <svg className="w-40 rounded-t-2xl" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5Z" fill="#FFC107"></path> <path d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5Z" fill="#FFC107"></path> <path d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V19C21 19.5523 20.5523 20 20 20H4C3.44772 20 3 19.5523 3 19V5Z" fill="#FFC107"></path> </svg>
            ),
            url: 'https://www.npmjs.com/package/react-resizable-panels',
            description: 'A resizable panel for React',
        },
        {
            name: 'daypicker',
            url: 'https://daypicker.dev/',
            description: 'A flexible date picker component for React',
        }
      ];

  return (
    <Container>
<div className="flex mx-auto justify-center items-center">
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 m-8">
        {libraries.map((library) => (
            <div key={library.name} className="flex flex-col rounded-2xl w-full xl:w-96 bg-[#ffffff] text-[#374151] shadow-xl">
                <figure className="flex justify-center items-center">
                    {library.logo ?? <img src="https://tailwind-generator.b-cdn.net/images/card-generator/tailwind-card-generator-card-preview.png" alt="Card Preview" className="rounded-t-2xl"/>}
                    </figure>
                    <div className="flex flex-col p-8 h-full">
                        <div className="text-3xl  font-bold pb-6">{library.name}</div>
                        <div className="  text-lg pb-12">{library.description}</div>
                        <div className="flex-grow"></div>
                        <div className="flex pt-10">
                            <a href={library.url} target="_blank" rel="noreferrer" className="w-full bg-[#7e22ce] text-[#ffffff] font-bold text-base p-3 rounded-lg hover:bg-purple-800 active:scale-95 transition-transform transform">Visit Website</a>
                        </div>
                    </div>
                </div>
        ))}
    </div>
</div>
</Container>
  );
}