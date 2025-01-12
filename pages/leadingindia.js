import Head from "next/head"
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika&apos;s Portfolio | Leading India</title>
            </Head>
            <div className="content">
                <h1>Chapter 4.3: Leading India</h1>
                <div className="leftright leadingself">
                    <ul className="content-para nmacc"><li>Daily Class Assembly with National Anthem, Pledge, News Reading and discussion.<br></br><br></br></li><li>Big Questions on Democracy, Equality, Accessibility, War, Peace and more!<br></br><br></br></li><li>Celebration and discussion of festivals of various religions.<br></br><br></br></li><li>Teaching students Indian Sign Language (to the best of my ability) to build inclusivity<br></br><br></br></li><li>100% of students are aware of their interests, career choices and options next year.</li></ul>
                    <Image className="leadingindiaimg" src="/leadingindia.png" width={1584} height={1651}></Image>
                </div>
            </div>
        </>
    )
}
