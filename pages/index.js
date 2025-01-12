import Head from "next/head"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika's Portfolio</title>
            </Head>
            <div className="home">
                <div className="homeleft">
                    <ul className="homelist">
                        <li><Link href="/acknowledgements">Acknowledgements</Link></li>
                        <li><Link href="/beginning">The Beginning</Link></li>
                        <li><Link href="/insti">The Insti</Link></li>
                        <li><Link href="/reflection">Reflection</Link></li>
                        <li><Link href="/whatnext">What's Next?</Link></li>
                        <li><Link href="/gallery">Gallery</Link></li>
                    </ul>
                </div>
                <Image className="cover" src="/cover.png" width={1434} height={1078}></Image>
                <div className="homeright">
                    <ul className="homelist">
                        <li><Link href="/preface">Preface</Link></li>
                        <li><Link href="/mithanagar">Mitha Nagar MPS</Link></li>
                        <li><Link href="/better">Becoming Better</Link></li>
                            <ul className="nested">
                                <li><Link href="/leadingself">Leading Self</Link></li>
                                <li><Link href="/leadingothers">Leading Others</Link></li>
                                <li><Link href="/leadingindia">Leading India</Link></li>
                            </ul>
                    </ul>
                </div>
            </div>
        </>
    )
}