import Head from "next/head"
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika's Portfolio | What Next?</title>
            </Head>
            <div className="content">
                <h1>Chapter 6: What Next</h1>
                <div className="leftright">
                    <ol className="content-para whatnext">
                        <li>Continue with The Bookworm Society in Y2</li>
                        <li>Create my own BTCP ( WIP)</li>
                        <li>Do my best as part of the ASLT track in Y2</li>
                        <li>Learn about my new school, students and prepare them for 10th grade to the best of my ability.</li>
                        <li>Figure out my next steps post the fellowship</li>
                    </ol>
                </div>
            </div>
        </>
    )
}