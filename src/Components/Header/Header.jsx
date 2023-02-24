import Image from "../Image/Image";
import NavBar from "./NavBar";
import SearchInput from "../Search/SearchInput";
import Register from "../Register/Register";
import DarkMode from "../DarkMode/DarkMode";
import MobileMenu from "./MobileMenu";

function Header() {
    return (
        <div className="bg-white dark:bg-secondary py-2 border-b dark:border-secondary shadow sticky top-0 w-full z-50">

            <div className="container flex flex-wrap items-center justify-between">

                <div className="flex flex-wrap gap-8 items-center justify-center">

                    <Image width="70" height="41" nameImage={'logo-one.png'} alt="لوگو سایت" />

                    <NavBar />

                </div>

                <dir className="flex flex-wrap gap-2 items-center justify-center m-0">

                    <DarkMode />

                    <SearchInput holder="جستجو ..." />

                    <Register />

                    <MobileMenu />

                </dir>

            </div>

        </div>
    );
}

export default Header;