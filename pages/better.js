import Head from "next/head"
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika&apos;s Portfolio | Becoming Better</title>
            </Head>
            <div className="content">
                <h1>Chapter 4: Becoming Better</h1>
                <div className="leftright">
                    <p className="content-para">I entered the classroom, fresh out of insti with 3 weeks of teaching experience and mostly practical knowledge. Instead of letting that hold me back. I chose to believe, as it was true, that my training had equipped me to deal with anything that comes my way. And so, I marched on keeping an open mind, a loving heart and welcoming arms. I’ve come a long way from where I was and I have a long way to go still. Each step taken is a step towards becoming better!<br></br><br></br>It’s been a year of teaching them. I’ve watched them from grow from clueless 9th grade grade graduates to confident 10th graders who gave their SSC exams.<br></br><br></br>What are the steps I’ve taken, you ask? Well, turn the page - there’s all the info you need!</p>
                </div>
                <ul className="options">
                    <li><Link href="\leadingself">Leading Self</Link></li>
                    <li><Link href="\leadingothers">Leading Others</Link></li>
                    <li><Link href="\leadingindia">Leading India</Link></li>
                </ul>
            </div>
        </>
    )
}
