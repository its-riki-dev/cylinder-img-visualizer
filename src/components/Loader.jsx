import { useProgress } from '@react-three/drei'
import { useEffect } from 'react'

const Loader = () => {
  const { progress } = useProgress()

  useEffect(() => {
    // Inject spinner keyframes only once
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
    document.head.appendChild(style)
  }, [])

  return (
    <div style={styles.overlay}>
      <div style={styles.spinner}></div>
      <p style={styles.text}>Loading {progress.toFixed(0)}%</p>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    zIndex: 9999
  },
  spinner: {
    width: '50px',
    height: '50px',
    border: '6px solid #333',
    borderTop: '6px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '1rem'
  },
  text: {
    color: 'white',
    fontSize: '1.2rem',
    fontFamily: 'sans-serif'
  }
}

export default Loader
