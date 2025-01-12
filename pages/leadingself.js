import Head from "next/head"
import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <Head>
                <title>Rishika&apos;s Portfolio | Leading Self</title>
            </Head>
            <div className="content">
                <h1>Chapter 4.1: Leading Self</h1>
                <ul className="options">
                    <li><Link target="#" href="https://docs.google.com/spreadsheets/d/1F5qllJNrVweSx39hwTbS2gfeNYXS3-mT1EoZY_8H2zE/edit?usp=drive_link">Enlgish Lesson Plan</Link></li>
                    <li><Link target="https://docs.google.com/spreadsheets/d/1TIxxa8-8rINLOrw45mOTLAHFY-AqEN6d71aKtuXvJxo/edit" href="\leadingothers">SST Lesson Plan</Link></li>
                    <li><Link target="#" href="https://wetransfer.com/downloads/8ab4afd1f54d1cdbc6677864e169cdd820231118084301/e8956e">Lesson Recording</Link></li>
                </ul>
                <h2>June-Oct</h2>
                <div className="leftright leadingself">
                    <p className="content-para nmacc">Taking students to the Neeta Mukesh Ambani Cultural Centre to watch the musical ‘The Sound of Music’. What I learned: Talking to stakeholders for permission, accountability, making tough decisions and more.</p>
                    <Image className="nmaccimg" src="/nmacc.png" width={864} height={785}></Image>
                </div>
                <div className="leftright leadingself">
                    <Image className="teachersdayimg" src="/teachersday.png" width={1107} height={1104}></Image>
                    <p className="content-para nmacc">Building a good bond with the HM, teachers and staff of the school.</p>
                </div>
                <div className="leftright leadingself">
                    <p className="content-para nmacc">Conducting self-study sessions for 31 students, from 12:30 PM - 4 PM by myself. I learned patience. I bonded with students better. I solved doubts (all subjects). I pushed myself to learn and grow.</p>
                    <Image className="nmaccimg" src="/crossword.png" width={864} height={785}></Image>
                </div>
                <h2>Exploring New Avenues</h2>
                <div className="leftright leadingself">
                    <Image className="newavenue" src="/bookworm.png" width={1290} height={793}></Image>
                    <Image className="newavenue" src="/kermail.png" width={1290} height={739}></Image>
                    <Image className="newavenue" src="/kerclass.png" width={1194} height={986}></Image>
                </div>
                <h2>Nov-Apr</h2>
                <div className="leftright leadingself">
                    <p className="content-para nmacc">Conducting various career awareness sessions for students as well as for both parents and students together.<br></br><br></br>Conducting revision classes + solving doubts (all subjects) for all students during and post their prelims.</p>
                    <Image className="nmaccimg" src="/career.png" width={618} height={596}></Image>
                </div>
                <div className="leftright leadingself">
                    <Image className="nmaccimg" src="/boardcenter.png" width={899} height={672}></Image>
                    <p className="content-para nmacc">Visited students at their Board exam centres<br></br><br></br>Worked with and guided a volunteer to help out in class.<br></br><br></br>Visited my new placement school, interacted with fellows, school staff and students to get a better idea.</p>
                </div>
                <p className="content-para postboardtext">Kept in contact with students post their board exams and encouraged them with next steps and other plans.</p>
                <div className="leftright leadingself">
                    <Image className="postboard" src="/postboard.png" width={2817} height={904}></Image>
                </div>
                <div className="leftright leadingself">
                    <p className="content-para nmacc">Continued with KER and The Bookworm Society.<br></br><br></br>Curated Poetry workshops, summer reading packs etc. for The Bookworm Society.</p>
                    <Image className="nmaccimg" src="/kershowcase.png" width={1346} height={1753}></Image>
                </div>
                <p className="content-para postboardtext">Visited another TFI lower grade school to learn more about different teaching methods</p>
                <div className="leftright leadingself">
                    <Image className="postboard" src="/anotherschool.png" width={1776} height={661}></Image>
                </div>
            </div>
        </>
    )
}
