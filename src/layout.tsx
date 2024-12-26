import {  NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="bg-gray-800 text-white shadow-lg">
                <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                    <div className="text-xl font-bold">Books</div>
                    <div className="space-x-4">
                        <NavLink 
                            to="/" 
                            className="text-gray-300 hover:text-white transition-colors">
                            books__
                        </NavLink>
                        <NavLink 
                            to="/add-author" 
                            className="text-gray-300 hover:text-white transition-colors">
                            add author__
                        </NavLink>
                        <NavLink 
                            to="/add-book" 
                            className="text-gray-300 hover:text-white transition-colors">
                            add book
                        </NavLink>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="flex-grow bg-gray-100 p-6">
                {/* Placeholder for the rest of the content */}
                <div className="container mx-auto">
                    <Outlet/> {/*ete outlety chgrenk render chi ani tvyalnery,sa grum enk vor durs mnacac masery gci*/}
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white text-center py-2">
                <p className="text-sm">&copy; 2024 Books App. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Layout;
