import Head from "next/head"
import Image from "next/image";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika&apos;s Portfolio | What Next?</title>
            </Head>
            <div className="content">
                <h1>Gallery</h1>
                <Image className="gallery" src="/gallery1.png" width={2787} height={933}></Image>
                <br></br><br></br><Image className="gallery" src="/gallery2.png" width={2787} height={933}></Image>
                <br></br><br></br><Image className="gallery" src="/gallery3.png" width={2349} height={828}></Image>
                <br></br><br></br><Image className="gallery" src="/gallery4.png" width={2605} height={1833}></Image>
                <br></br><br></br><Image className="gallery" src="/gallery5.png" width={3000} height={1287}></Image>
                <br></br><br></br><Image className="gallery" src="/gallery6.png" width={2787} height={933}></Image>
                <br></br><br></br>
            </div>
        </>
    )
}
