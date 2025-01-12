import Head from "next/head"
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika's Portfolio | Beginning</title>
            </Head>
            <div className="content bigscreen">
                <h1>Chapter 1: How it all began!</h1>
                <div className="ch01">
                    <div className="bigA">A</div>
                    <div className="content-para ch01p">dream... to teach.<br></br>mind looking to empower.<br></br>person searching for a cause to make a difference;<br></br>lazy day scrolling social media helped me find the answer or rather
                    <h2 className="ch01bold">THE ANSWER FOUND ME</h2></div>
                    <div className="ad">
                        <Image className="answerimg" src="/answerfoundme.webp" width={800} height={800}/>
                        <p>The social media AD that started it all</p>
                    </div>
                    <div className="stops">
                        <Image className="stopsimg" src="/stops.png" width={1534} height={1882}/>
                        <pre><p>                   <b><u>Index</u></b><br></br>
                        <br></br><b>Home:</b> Shirva, Karnataka
                        <br></br><b>Stop 1:</b> The Insti, Pune
                        <br></br><b>Stop 2:</b> The Avengers Classroom, Goregaon, West
                        <br></br><b>Stop 3:</b> A new beginning at Govandi, West</p></pre>
                    </div>
                </div>
            </div>
        </>
    )
}