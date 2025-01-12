import Head from "next/head"
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika&apos;s Portfolio | Mitha Nagar MPS</title>
            </Head>
            <div className="content">
                <h1>Chapter 3: Mitha Nagar MPS</h1>
                <div className="leftright">
                    <p className="content-para warmwelcome">I left Insti 1 to continue my journey at <b>MITHA NAGAR MPS</b>, Goregaon West teaching <b>English</b> and <b>Social Studies</b> to <b>33 students</b>.<br></br><br></br>I entered the classroom with apprehension and resolve. My determination was fueled when these 33 students seemed just as excited as I was to meet them.<br></br><br></br>Their aim was to <b>reach for the stars</b><br></br>
                    Mine?  <b>To be their biggest cheerleader!</b><br></br><span className="smaller">Being stagnant wasn’t an option - I had to develop so that I could help my students and myself better.</span></p>
                    <Image className="welcomeimg" src="/warmwelcome.png" width={1356} height={1818}></Image>
                </div>
            </div>
        </>
    )
}
