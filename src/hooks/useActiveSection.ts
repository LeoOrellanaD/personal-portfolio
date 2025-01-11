import { useState, useEffect } from 'react'

const useActiveSection = (sectionIds: string[]) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0])

  useEffect(() => {
    const observers = new Map()

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      let closestSection = { id: '', distance: Infinity }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const distance = Math.abs(entry.boundingClientRect.top)
          if (distance < closestSection.distance) {
            closestSection = { id: entry.target.id, distance }
          }
        }
      })

      if (closestSection.id) {
        setActiveSection(closestSection.id)
      }
    }

    const observerOptions = {
      threshold: 0,
      rootMargin: '-50% 0px -50% 0px',
    }

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) {
        const observer = new IntersectionObserver(
          observerCallback,
          observerOptions
        )
        observer.observe(element)
        observers.set(id, observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [sectionIds])

  return activeSection
}

export default useActiveSection
