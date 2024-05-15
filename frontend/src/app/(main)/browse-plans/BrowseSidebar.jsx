import React from 'react'

const BrowseSidebar = ({ children }) => {
    return (
        <>
            <div
                id="application-sidebar-dark"
                className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-gray-900 border-e border-gray-800 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
                <div className="px-6">
                    <a
                        className="flex-none text-xl font-semibold text-white focus:outline-none focus:ring-1 focus:ring-gray-600"
                        href="#"
                        aria-label="Brand"
                    >
                        Brand
                    </a>
                </div>
                <nav
                    className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
                    data-hs-accordion-always-open=""
                >
                    <div>
                        <p>Provider</p>
                    </div>
                </nav>
            </div>
            {/* End Sidebar */}
            {/* Content */}
            <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:ps-72">
                {children}
            </div>
            {/* End Content */}
        </>

    )
}

export default BrowseSidebar