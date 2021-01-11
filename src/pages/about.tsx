import { Layout } from '../components'

export default function About() {
    return (
        <Layout>
            <header className="aboutHeader">
                <div className="container tc">
                    <h1>Victoria is a UX/UI Designer</h1>
                    <h1>Who loves to make dreams into reality</h1>
                </div>
            </header>

            <section id="aboutSection" className="container">
                <div className="aboutGrid">
                    <div className="profileWrapper">
                        <img src="/images/profile-pic.png" alt="profile" />

                        <div className="linkGrid">
                            <span>
                                <a
                                    href="https://www.figma.com/proto/7f2XqeoU9l272g8aY5up2K/UX%2FUI-Resume?node-id=1%3A3&scaling=min-zoom"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        width="24"
                                        height="32"
                                        viewBox="0 0 24 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.7631 16.0002C14.3362 16.0002 13.9136 16.0818 13.5204 16.24C13.1271 16.3982 12.7712 16.6299 12.4735 16.9213L12.0019 17.3842L11.5256 16.9213C11.2279 16.6299 10.8719 16.3983 10.4787 16.2401C10.0854 16.082 9.66287 16.0005 9.23599 16.0005C8.80912 16.0005 8.38658 16.082 7.99333 16.2401C7.60008 16.3983 7.2441 16.6299 6.94643 16.9213C6.33941 17.5182 6 18.3166 6 19.1476C6 19.9785 6.33941 20.7769 6.94643 21.3738L12.0019 26.2858L17.0527 21.3738C17.6597 20.7769 17.9991 19.9785 17.9991 19.1476C17.9991 18.3166 17.6597 17.5182 17.0527 16.9213C16.755 16.6299 16.3991 16.3982 16.0058 16.24C15.6126 16.0818 15.19 16.0002 14.7631 16.0002V16.0002Z"
                                            fill="#8C1A81"
                                        />
                                        <path
                                            d="M23.6396 8.34316L15.2397 0.343256C15.1341 0.23159 15.0043 0.1431 14.8593 0.0839032C14.7143 0.0247067 14.5575 -0.00378345 14.3997 0.000402741H2.39996C1.76403 0.00221155 1.1547 0.243605 0.705029 0.671863C0.255361 1.10012 0.00189924 1.68044 0 2.28609V29.7143C0.00189924 30.32 0.255361 30.9003 0.705029 31.3285C1.1547 31.7568 1.76403 31.9982 2.39996 32H21.5996C22.2355 31.9982 22.8449 31.7568 23.2945 31.3285C23.7442 30.9003 23.9977 30.32 23.9996 29.7143V9.14315C24.004 8.99293 23.9741 8.84359 23.9119 8.70547C23.8497 8.56734 23.7568 8.44372 23.6396 8.34316V8.34316ZM14.3997 2.74323L21.1196 9.14315H14.3997V2.74323ZM21.5996 29.7143H2.39996V2.28609H11.9998V9.14315C12.0017 9.74879 12.2551 10.3291 12.7048 10.7574C13.1545 11.1856 13.7638 11.427 14.3997 11.4288H21.5996V29.7143Z"
                                            fill="#8C1A81"
                                        />
                                    </svg>
                                    <p>Resume</p>
                                </a>
                            </span>

                            <span>
                                <a
                                    href="https://www.figma.com/proto/o6aTAlC8qh00Zr1dhqfJVh/CoverLetter?node-id=1%3A2&scaling=min-zoom"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg
                                        width="24"
                                        height="32"
                                        viewBox="0 0 24 32"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M14.7631 16.0002C14.3362 16.0002 13.9136 16.0818 13.5204 16.24C13.1271 16.3982 12.7712 16.6299 12.4735 16.9213L12.0019 17.3842L11.5256 16.9213C11.2279 16.6299 10.8719 16.3983 10.4787 16.2401C10.0854 16.082 9.66287 16.0005 9.23599 16.0005C8.80912 16.0005 8.38658 16.082 7.99333 16.2401C7.60008 16.3983 7.2441 16.6299 6.94643 16.9213C6.33941 17.5182 6 18.3166 6 19.1476C6 19.9785 6.33941 20.7769 6.94643 21.3738L12.0019 26.2858L17.0527 21.3738C17.6597 20.7769 17.9991 19.9785 17.9991 19.1476C17.9991 18.3166 17.6597 17.5182 17.0527 16.9213C16.755 16.6299 16.3991 16.3982 16.0058 16.24C15.6126 16.0818 15.19 16.0002 14.7631 16.0002Z"
                                            fill="#722EC9"
                                        />
                                        <path
                                            d="M23.6396 8.34315L15.2397 0.343256C15.1341 0.23159 15.0043 0.1431 14.8593 0.0839032C14.7143 0.0247067 14.5575 -0.00378345 14.3997 0.000402741H2.39996C1.76403 0.00221155 1.1547 0.243605 0.705029 0.671863C0.255361 1.10012 0.00189924 1.68044 0 2.28609V29.7143C0.00189924 30.32 0.255361 30.9003 0.705029 31.3285C1.1547 31.7568 1.76403 31.9982 2.39996 32H21.5996C22.2355 31.9982 22.8449 31.7568 23.2945 31.3285C23.7442 30.9003 23.9977 30.32 23.9996 29.7143V9.14315C24.004 8.99293 23.9741 8.84359 23.9119 8.70547C23.8497 8.56734 23.7568 8.44372 23.6396 8.34315ZM14.3997 2.74323L21.1196 9.14315H14.3997V2.74323ZM21.5996 29.7143H2.39996V2.28609H11.9998V9.14315C12.0017 9.74879 12.2551 10.3291 12.7048 10.7574C13.1545 11.1856 13.7638 11.427 14.3997 11.4288H21.5996V29.7143Z"
                                            fill="#722EC9"
                                        />
                                    </svg>
                                    <p>CoverLetter</p>
                                </a>
                            </span>
                        </div>
                    </div>

                    <div className="infoBlock">
                        <div>
                            <h2>About</h2>
                            <p>
                                Hello, my name is Victoria Bigsby, I am a student enrolled in Springboard UX/UI
                                intensive Bootcamp curriculum, a User Experience Research for the UX community group
                                known as Iterate UX, and I am an Intern as a UX Designer for Smarsh. I am currently
                                based in Portland, Oregon with six months of Design Experience.
                            </p>
                        </div>

                        <div>
                            <h2>From Humble Beginnings</h2>
                            <p>
                                After I graduated from the University of Oregon with a double major in Japanese and
                                Communication Disorder Science. I was immediately employed at a Translation company
                                known as LanguageLine Solutions. There I built my professional skills for Project
                                Management for the last three years. During the COVID pandemic, I took the time to
                                revaluate my current work situation and found out that I wanted to do so much more with
                                my creative side and also wanted to continually learn. That is where I truly found my
                                passion as a Designer and went down the rabbit hole to the world of a UX/UI Designer.
                            </p>
                        </div>

                        <div>
                            <h2>My Passion for Design</h2>
                            <p>
                                I started my journey by attending a Bootcamp curriculum from SpringBoard. I have gained
                                so much insight from this program and was a great starting place for someone brand new
                                into this field. I then started to branch off to meetup communities to solidify the
                                concepts that I have learned from my Bootcamp. The one meetup community that I found
                                that helped me grow as a designer was Iterate UX. A community founded in Vancouver,
                                Canada by Leticia Serrano. I began just attending the meetups every week, then I
                                participated in one of their Design Challenges, and then was offered to work part-time
                                as a User Experience Researcher for this community. I am truly thankful for this
                                community for being able to support me as a designer and allowing me to learn more from
                                this community and to support them as well. I believe that this opportunity has allowed
                                me to build my confidence as a designer.
                            </p>
                        </div>

                        <div>
                            <h2>All my hard work paid off!</h2>
                            <p>
                                Multi-tasking my work as a Project Manager, a student from SpringBoard, and doing
                                part-time work for Iterate UX as a User Experience Researcher was tiring, to say the
                                least. But I enjoyed this journey so much and it truly paid off. Although I have not
                                finished my Bootcamp I was given the great opportunity to intern for a company known as
                                Smarsh. Excitedly I start on January 11th as a UX designer. I am so excited about where
                                this journey takes me and so happy to work with a new group of designers. I am excited
                                to learn, struggle, and of course Design!
                            </p>
                        </div>
                    </div>
                </div>

                <blockquote className="tc">
                    “A future is something that you make yourself. You have to believe in it.” – Sailor Mercury
                </blockquote>
            </section>
        </Layout>
    )
}
