import Head from "next/head"
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika&apos;s Portfolio | Reflections</title>
            </Head>
            <div className="content">
                <h1>Chapter 5: Reflections</h1>
                <Image className="reflections" src="/reflections.png" height={1495} width={3055}></Image>
                <p className="content-para">
                    Being a part of Teach for India, has been an enriching experience. One of the most important things that I learnt was - you think you know something - but unless you get first-hand experience, what you know barely scratches the  surface.<br></br><br></br>
                    In the past 7 months, I’ve seen tremendous growth in myself.<br></br><br></br>
                    I grew as a Leader<br></br>
                    I grew to be better<br></br>
                    I grew to learn to expect, prepare, plan and execute<br></br>
                    I grew to be stronger<br></br>
                    I grew to love harder<br></br>
                    I grew to learn what it means to be a Teacher!<br></br><br></br>
                    Learning what it means to be a teacher wasn’t easy:<br></br><br></br>
                    I’ve despaired and then I’ve hoped.<br></br>
                    I’ve cried and then I’ve coped.<br></br>
                    I’ve been tired and powered through.<br></br>
                    I’ve given my all and will continue to pursue...<br></br><br></br>
                    To summarise:<br></br><br></br>
                    I enjoy teaching and everything that comes with it. As a Teach For India fellow, I’ve gained further clarity on what teaching means to me -<br></br><br></br>
                    A classroom with no fear,<br></br>
                    A classroom with room for error<br></br>
                    A classroom where emotions are welcome<br></br>
                    A classroom where play and work go hand in hand<br></br>
                    A classroom built on trust - not just the students, but all stakeholders<br></br>
                    A classroom that is safe<br></br>
                    A classroom that students want to come back to every single day!<br></br>
                </p>
            </div>
        </>
    )
}
