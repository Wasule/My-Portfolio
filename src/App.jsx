import { useState, useCallback } from 'react'
import portfolio from './data/portfolio'
import NeuralCanvas       from './components/NeuralCanvas'
import Navbar             from './components/Navbar'
import Crosshair          from './components/Crosshair'
import HeroSection        from './components/HeroSection'
import SectionWrapper     from './components/SectionWrapper'
import ExperienceSection  from './components/ExperienceSection'
import ProjectsSection    from './components/ProjectsSection'
import SkillsSection      from './components/SkillsSection'
import EducationSection   from './components/EducationSection'
import AchievementsSection from './components/AchievementsSection'
import ContactSection     from './components/ContactSection'
import FreelancerSection  from './components/FreelancerSection'
import CompetitionsSection from './components/CompetitionsSection'

const SECTION_MAP = {
  experience:   (d) => <ExperienceSection   experience={d.experience} />,
  projects:     (d) => <ProjectsSection     projects={d.projects} publication={d.publication} />,
  skills:       (d) => <SkillsSection       skills={d.skills} />,
  education:    (d) => <EducationSection    education={d.education} />,
  achievements: (d) => <AchievementsSection achievements={d.achievements} />,
  contact:      (d) => <ContactSection      meta={d.meta} />,
  freelancer:   (d) => <FreelancerSection   freelancer={d.freelancer} />,
  competitions: (d) => <CompetitionsSection competitions={d.competitions} />,
}

export default function App() {
  const [activeSections, setActiveSections] = useState([])
  const [cursorPos,      setCursorPos]      = useState(null)

  const handleNodeClick = useCallback((id) => {
    if (!id || id === 'home' || id === null) {
      setActiveSections([])
    } else {
      setActiveSections(prev => 
        prev.includes(id) 
          ? prev.filter(s => s !== id)  // remove if already active
          : [...prev, id]              // add if not active
      )
    }
  }, [])

  const handleHoverChange = useCallback((pos) => {
    setCursorPos(pos)
  }, [])

  const isHome = activeSections.length === 0

  return (
    <>
      {/* Neural background — always rendered */}
      <NeuralCanvas
        navNodes={portfolio.navNodes}
        onNodeClick={handleNodeClick}
        onHoverChange={handleHoverChange}
        activeSections={activeSections}
      />

      {/* Custom crosshair */}
      <Crosshair pos={cursorPos} />

      {/* Navbar */}
      <Navbar meta={portfolio.meta} />

      {/* Home / Hero */}
      {isHome && <HeroSection meta={portfolio.meta} />}

      {/* Section panels */}
      {activeSections.map((sectionId, index) => {
        const renderSection = SECTION_MAP[sectionId]
        const positions = [
          { left: '5%', top: '10%', width: '45%', height: '80%' },
          { left: '50%', top: '10%', width: '45%', height: '80%' },
          { left: '5%', top: '50%', width: '45%', height: '40%' },
          { left: '50%', top: '50%', width: '45%', height: '40%' },
          { left: '25%', top: '30%', width: '50%', height: '60%' },
          { left: '15%', top: '20%', width: '70%', height: '70%' },
        ]
        const pos = positions[index % positions.length]
        
        return renderSection ? (
          <SectionWrapper 
            key={sectionId}
            onClose={() => setActiveSections(prev => prev.filter(s => s !== sectionId))}
            style={{
              ...pos,
              zIndex: 20 + index
            }}
          >
            {renderSection(portfolio)}
          </SectionWrapper>
        ) : null
      })}
    </>
  )
}
