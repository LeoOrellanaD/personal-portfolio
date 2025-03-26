import Experience from '@sections/Experience'
import { Presentation } from '@sections/Presentation'
import Projects from '@sections/Projects'
import Layout from './layouts/Layout'
import About from '@sections/About'

function App() {
  return (
    <div className='min-h-screen bg-primary-light dark:bg-primary-dark transition-colors'>
      <Layout>
        <Presentation />
        <Experience />
        <Projects />
        <About />
      </Layout>
    </div>
  )
}

export default App
