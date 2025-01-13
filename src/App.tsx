import Experience from "@components/Experience/Experience"
import { Presentation } from "@components/Presentation/Presentation"
import Projects from "@components/Projects/Projects"


function App() {
  return (
    <div className='min-h-screen bg-primary-light dark:bg-primary-dark transition-colors'>
      <main>
        <Presentation />
        <Experience />
        <Projects/>
        
      </main>
    </div>
  )
}

export default App
