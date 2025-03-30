import AppCard from "../Components/AppCard";
import appData from "../appPortfolio.json";
import Profile from "../Components/Profile"
  
  
export default function Home() {
  return <div className="min-h-screen bg-zinc-900 overflow-x-hidden p-6">
<Profile />
      {appData.map((app, index) => (
        <AppCard
          key={index}
          title={app.appTitle}
          description={app.appDescription}
          tech={app.appTechStack}
          isAppReady={app.isAppReady}
        />
      ))}
  </div>
  
  }
  
  