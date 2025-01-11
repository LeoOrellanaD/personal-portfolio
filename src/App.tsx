import Experience from "@components/Experience/Experience"
import { Presentation } from "@components/Presentation/Presentation"


function App() {
  return (
    <div className='min-h-screen bg-primary-light dark:bg-primary-dark transition-colors'>
      <main>
        <Presentation />
        <Experience />
        
      </main>
    </div>
  )
}

export default App
