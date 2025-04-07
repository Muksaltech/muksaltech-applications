import me from '../assets/images/me.webp'

export default function Profile() {
    return <>
        <article className="max-w-5xl mx-auto p-6 rounded-lg">
                <header className="text-center mb-6">
                <h1 className="text-3xl font-bold text-gray-300">About Me</h1>
                </header>

                <div className="flex flex-col  gap-6">

                {/* Sidebar / Profile  */}
                <aside className = "flex items-start justify-center">
                    <img alt="me" src={me} className="w-[13rem] h-[13rem] object-contain rounded-lg shadow-inner" />
                </aside>
               
           

                    {/* Main content */}
                <main className="w-full rounded-lg shadow text-justify">
                        <p className="text-gray-300 leading-relaxed">
                        Hello, I'm Mukaila — a dedicated and innovative developer with over 20 years of experience in crafting web and mobile applications, as well as contributing to complex open-source projects. I have a deep passion for clean design and creating seamless, intuitive user experiences.

                        Driven by my personal motto — "Constantly creating, constantly developing, constantly revamping, and constantly innovating" — I'm always exploring new ideas and building fresh solutions. Below, you'll find a selection of applications I'm actively developing.

                        Each project has been developed entirely from the ground up. Feel free to explore the source code, and click the burger icon in any app to view the list of demoed features.

                        Throughout my career, I've had the privilege of working with industry-leading clients such as GE Oil & Gas, USAA Bank, PayPal, Avnet, AT&T, APS, PGE, and IHOP — showcasing my versatility across various industries and tech stacks.
                        </p>
                    </main>

                </div>

            </article>
     
    </>

}

























