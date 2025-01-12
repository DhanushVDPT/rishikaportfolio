import Link from "next/link";
import Image from "next/image";


const Navbar = () => {
    return (
        <nav>
            <div className="sidebar">
                <h2 className="mobiletitle">Towards Tomorrow</h2>
                    <input type="checkbox" id="sidebar-active"></input>
                    <label for="sidebar-active" className="open-sidebar">
                        <Image className="hamburger" src="/icons8-xbox-menu-100.png" width={40} height={40}/>
                    </label>
                    <label id="overlay" for="sidebar-active"></label>
                <nav className="nav-bar">
                    <label for="sidebar-active" className="close-sidebar">
                        <Image className="hamburger" src="/close-icon.svg" width={40} height={40}/>
                    </label>
                    <ul>
                        <li>
                        <Link href="/">Home</Link>
                        </li>
                        <li>
                        <Link href="/acknowledgements">Acknowledgements</Link>
                        </li>
                        <li>
                        <Link href="/preface">Preface</Link>
                        </li>
                        <li>
                        <Link href="/beginning">The Beginning</Link>
                        </li>
                        <li>
                        <Link href="/insti">The Insti</Link>
                        </li>
                        <li>
                        <Link href="/mithanagar">Mitha Nagar MPS</Link>
                        </li>
                        <li>
                        <Link href="/better">Becoming Better</Link>
                        <ul className="nested">
                            <li><Link href="/leadingself">Leading Self</Link></li>
                            <li><Link href="/leadingothers">Leading Others</Link></li>
                            <li><Link href="/leadingindia">Leading India</Link></li>
                        </ul>
                        </li>
                        <li>
                        <Link href="/reflection">Reflection</Link>
                        </li>
                        <li>
                        <Link href="/whatnext">What's Next?</Link>
                        </li>
                        <li>
                        <Link href="/gallery">Gallery</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </nav>
    )
}

export default Navbar;