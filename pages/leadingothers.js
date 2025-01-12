import Head from "next/head"
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika's Portfolio | Leading Others</title>
            </Head>
            <div className="content">
                <h1>Chapter 4.2: Leading Others</h1>
                <p className="content-para postboardtext">In Leading Others, I’ve guided my students. I believe, they have come a long way. They have shown a considerable progress in leading self, others and India through collaboration, teamwork and taking initiatives for self-development.</p>
                <div className="leftright leadingself">
                    <Image className="postboard" src="/leadingothers.png" width={2861} height={1234}></Image>
                </div>
                <h2>Students - Leading Self</h2>
                <p className="content-para postboardtext">Book Reports by students</p>
                <div className="leftright leadingself">
                    <Image className="postboard" src="/bookreport.png" width={4374} height={1457}></Image>
                </div>
                <div className="leftright leadingself">
                    <Image className="postboard" src="/artcareer.png" width={2774} height={1083}></Image>
                </div>
                <div className="leftright leadingself">
                    <Image className="postboard" src="/capturinglife.png" width={1417} height={903}></Image>
                </div>
                <br></br><br></br>
                <div className="leftright leadingself">
                    <Image className="postboard" src="/happiness.png" width={2548} height={1851}></Image>
                </div>
                <br></br><br></br>
                <div className="leftright leadingself">
                    <Image className="marks" src="/marks.png" width={2548} height={1851}></Image>
                </div>
                <h2>Students - Leading Others</h2>
                <div className="leftright leadingstudents">
                    <Image className="studentledleft" src="/studentlesson.jpg" width={1800} height={4000}></Image>
                    <div className="studentledright">
                        <h2>Student Lead Sessions</h2>
                        <Image className="nmaccimg" src="/studentled.jpg" width={3264} height={1468}></Image>
                        <ul className="options studentledoptions">
                            <li><Link target="#" href="https://drive.google.com/drive/folders/1bW3tNsepP4105yK15jSRDoKaSiIpxx2-"> &#9658; Students taking charge of their Hindi/Marathi lessons</Link></li>
                        </ul>
                    </div>
                </div>
                <h2>Students working together</h2>
                <div className="leftright leadingself">
                    <Image className="postboard" src="/workingtogether.png" width={2094} height={1616}></Image>
                </div>
                <h2>Students teaching other classes on Teacher's Day</h2>
                <div className="leftright leadingself">
                    <Image className="postboard" src="/studentsteachers.png" width={1872} height={934}></Image>
                </div>
                <p className="content-para postboardtext"><b>Students hosting, DJ-ing, performing and organising the programme for their farewell</b></p>
                <div className="leftright leadingself">
                    <Image className="farewell" src="/farewell.png" width={2235} height={1090}></Image>
                </div>
                <div className="leftright leadingstudents">
                <Image className="studentledleft" src="/cleaning.png" width={891} height={2182}></Image>
                    <div className="studentledright">
                        <h2>Students Leading India</h2>
                        <ul className="options studentledoptions">
                            <li><Link target="#" href="https://drive.google.com/file/d/1uD7HH_ziJDNzZlc5T45WyY4jLnO74GvZ/view"> &#9658; Students participating in fire drill</Link></li>
                            <li><Link target="#" href="https://www.instagram.com/reel/CuYryZWAdyg/?igshid=MzRlODBiNWFlZA%3D%3D"> &#9658; Student takeaways used as inspiration for other students</Link></li>
                        </ul>
                        <Image className="health" src="/health.png" width={1679} height={984}></Image>
                    </div>
                </div>
            </div>
        </>
    )
}