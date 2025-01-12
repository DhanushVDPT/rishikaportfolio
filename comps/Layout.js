import Footer from "./Footer";
import Navbar from "./Navbar";
import Image from "next/image";

const Layout = ({ children }) => {
    return (
        <div className="layoutcontent">
            <Navbar/>
            <div className="onlymobile">
                <p>We regret to inform that this page is not yet responsive</p>
                <Image src="/wedontdothathere.gif" width={220} height={124}></Image>
                <p>Please be a professional and open this page in a laptop or desktop</p>
            </div>
            { children }
            <Footer/>
        </div>
    );
}

export default Layout