import Head from "next/head"
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika&apos;s Portfolio | Insti</title>
            </Head>
            <div className="content">
                <h1>Chapter 2: The Insti</h1>
                <div className="leftright">
                    <p className="content-para">
                        In quiet resolve, I packed my bags,<br></br>
                        Leaving home, emotions bittersweet, yet true.<br></br>
                        Pune awaited, 'Insti 1' in sight,<br></br>
                        With uncertainty veiled by unwavering might.<br></br><br></br>

                        Two weeks of rigor, a relentless quest,<br></br>
                        Learning all, in training's intense behest.<br></br>
                        Amidst the toil, camaraderie bloomed,<br></br>
                        During Fellow durbar,  all exhaustion consumed.<br></br><br></br>

                        In Insti's fold, we formed bonds so tight,<br></br>
                        These souls, my ride or die, in their light.<br></br>
                        Part of an LC, a collab was born,<br></br>
                        A kinship enduring, each night to morn.<br></br><br></br>

                        Then came summer school, a journey profound,<br></br>
                        Welcoming the kids, in learning abound.<br></br>
                        Day one, smiles gleamed, hope shimmered bright,<br></br>
                        Day two, harsh truths cast a solemn blight.<br></br>
                    </p>
                    <div>
                        <Image className="mycollab" src="/mycollab.png" width={1166} height={1424}></Image>
                        <p className="content-para">My Collab</p>
                    </div>
                </div>
                <div className="leftright">
                    <div>
                        <Image className="mycollab" src="/instistudents.png" width={462} height={540}></Image>
                        <p className="content-para">My Students</p>
                    </div>
                    <p className="content-para">
                        We faced ed inequities stark and raw,<br></br>
                        Sending some back, a heart-wrenching flaw.<br></br>
                        Yet amidst it all, emerged a grace,<br></br>
                        A promise that each student would be cherished, in a tight embrace.<br></br><br></br>

                        Few students, many teachers in our fold,<br></br>
                        Every soul nurtured, stories untold.<br></br>
                        Summer's end brought tears and farewells dear,<br></br>
                        But lessons learned, a future to steer.<br></br><br></br>

                        This journey of learning, growth's ardent climb,<br></br>
                        Instilled in me, the essence of time.<br></br>
                        For in every challenge, a seed was sown,<br></br>
                        Nourishing roots, my wisdom has grown.<br></br><br></br>

                        So, with heavy bags and resolved grace,<br></br>
                        I carry forth, in life's destined chase.<br></br>
                        From Pune to Mumbai to embrace paths anew,<br></br>
                        This journey of growth, forever true.
                    </p>
                </div>
                <p className="content-para">Summer Showcase</p>
                <div className="leftright">
                    <Image className="showcase show1" src="/showcase1.jpg" width={2448} height={3264}></Image>
                    <Image className="showcase show2" src="/showcase2.jpg" width={2668} height={2128}></Image>
                    <Image className="showcase show1" src="/showcase3.png" width={650} height={860}></Image>
                </div>
            </div>
        </>
    )
}
