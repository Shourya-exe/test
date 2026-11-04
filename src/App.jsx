import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router'
import { MotionConfig } from 'motion/react'
import Layout from './components/Layout'
import { SmoothScroll } from './components/SmoothScroll'
import { IntroProvider } from './components/Intro'
import Home from './pages/Home'

const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Practice = lazy(() => import('./pages/Practice'))
const Inquire = lazy(() => import('./pages/Inquire'))
const NotFound = lazy(() => import('./pages/NotFound'))

const PageFallback = () => <div className="min-h-screen bg-canvas" />

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: <Suspense fallback={<PageFallback />}><Projects /></Suspense> },
      { path: '/projects/:slug', element: <Suspense fallback={<PageFallback />}><ProjectDetail /></Suspense> },
      { path: '/practice', element: <Suspense fallback={<PageFallback />}><Practice /></Suspense> },
      { path: '/inquire', element: <Suspense fallback={<PageFallback />}><Inquire /></Suspense> },
      { path: '*', element: <Suspense fallback={<PageFallback />}><NotFound /></Suspense> },
    ],
  },
])

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        <IntroProvider>
          <RouterProvider router={router} />
        </IntroProvider>
      </SmoothScroll>
    </MotionConfig>
  )
}
