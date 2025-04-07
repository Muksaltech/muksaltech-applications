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
                        Hello! I'm Mukaila — a passionate developer with over 20 years experience in building web and mobile applications, as well as engaging in  challenging open source projects. I have a strong appreciation for clean design and intuitive user experiences.

                        Guided by my personal motto — “Constantly creating, constantly developing, constantly revamping, and constantly innovating” — I'm always working on something new. Below is a list of apps I'm currently developing.

                        Each project has been built entirely from scratch, and you're welcome to explore the code. You can click on the burger icon to see the list of the features I demoed in each app.

                        My past clients include GE Oil and Gas, USAA bank, PayPal, AvNet, AT&T, APS, PGE and Ihop demonstrating my ability to work across different domains.
                        </p>
                    </main>

                </div>

            </article>
     
    </>

}

























