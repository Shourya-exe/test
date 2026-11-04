import { Button, SectionLabel } from '../components/ui'
import { SplitText } from '../components/motion/primitives'

export default function NotFound() {
  return (
    <section className="pt-[72px]">
      <title>Page not found — Redefining Architecture</title>
      <div className="container-arch flex min-h-[70vh] flex-col items-start justify-center py-24">
        <SectionLabel index="404">Off the drawing</SectionLabel>
        <SplitText as="h1" immediate text="This page isn’t on the *drawings.*" className="t-display-xl mt-6 max-w-[16ch]" />
        <Button to="/" className="mt-10">
          Back to overview
        </Button>
      </div>
    </section>
  )
}
