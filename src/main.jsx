import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from '../public/project/home'
import AchievementSection from '../public/project/achievement'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AchievementSection />
  </StrictMode>,
)
