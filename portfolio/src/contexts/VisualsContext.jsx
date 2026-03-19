import React, { createContext, useContext, useEffect, useState } from 'react'

const VisualsContext = createContext({
  visualsEnabled: true,
  setVisualsEnabled: () => {}
})

export const VisualsProvider = ({ children }) => {
  const [visualsEnabled, setVisualsEnabled] = useState(true)

  // Load saved preference
  useEffect(() => {
    try {
      const saved = localStorage.getItem('visualsEnabled')
      if (saved !== null) setVisualsEnabled(saved === 'true')
    } catch {
      // ignore
    }
  }, [])

  // Persist preference
  useEffect(() => {
    try {
      localStorage.setItem('visualsEnabled', visualsEnabled.toString())
    } catch {
      // ignore
    }
  }, [visualsEnabled])

  return (
    <VisualsContext.Provider value={{ visualsEnabled, setVisualsEnabled }}>
      {children}
    </VisualsContext.Provider>
  )
}

export const useVisuals = () => useContext(VisualsContext)
