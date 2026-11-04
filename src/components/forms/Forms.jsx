import { AnimatePresence, motion } from 'motion/react'
import { brand, formOptions, services } from '../../data/site'
import { Button, Mark } from '../ui'
import { CheckCard, Chip, Honeypot, SelectField, TextArea, TextField } from './fields'
import { useInquiry, validators } from './useInquiry'

const EASE = [0.22, 1, 0.36, 1]

function SuccessPanel({ name, demo, dark, onReset, title = 'Thank you' }) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="flex flex-col items-start gap-6 py-6"
      role="status"
      aria-live="polite"
    >
      <Mark className={`size-14 ${dark ? 'text-brass-bright' : 'text-brass'}`} draw />
      <div>
        <p className={`t-index ${dark ? 'text-brass-bright' : 'text-brass'}`}>Received</p>
        <h3 className={`t-display-md mt-3 ${dark ? 'text-bone' : 'text-ink'}`}>
          {title}
          {name ? `, ${name.split(' ')[0]}` : ''}.
        </h3>
        <p className={`mt-3 max-w-md t-body ${dark ? 'text-bone-muted' : 'text-slate'}`}>
          Your inquiry is with the studio. We reply within two working days — sooner if your timeline is tight. For anything urgent, call{' '}
          <a href={brand.phoneHref} className="link-arch">{brand.phone}</a>.
        </p>
        {demo && (
          <p className="mt-4 inline-block border border-dashed border-brass px-3 py-2 text-[12px] text-brass">
            Demo mode: the Google Sheets endpoint isn’t configured, so this wasn’t saved. See README.
          </p>
        )}
      </div>
      <button onClick={onReset} className={`t-label link-arch ${dark ? 'text-bone' : 'text-ink'}`}>
        Send another inquiry
      </button>
    </motion.div>
  )
}

function ErrorBanner({ message, dark }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="overflow-hidden"
          role="alert"
        >
          <p className={`border-l-2 border-error py-2 pl-4 text-[13px] ${dark ? 'text-bone' : 'text-ink'}`}>
            {message} You can also call <a href={brand.phoneHref} className="link-arch">{brand.phone}</a>.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function SubmitButton({ status, children, variant = 'primary' }) {
  const busy = status === 'submitting'
  return (
    <Button type="submit" variant={variant} disabled={busy} arrow={!busy} aria-busy={busy}>
      {busy ? (
        <span className="flex items-center gap-3">
          <motion.span
            className="block size-3 border border-current border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
            aria-hidden="true"
          />
          Sending…
        </span>
      ) : (
        children
      )}
    </Button>
  )
}

function PartHeading({ no, children }) {
  return (
    <div className="mb-6 flex items-center gap-3 border-b border-mortise pb-3">
      <span className="t-index text-brass">Part {no}</span>
      <span className="t-index text-slate">{children}</span>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Full commission brief (Inquire page)                                        */
/* -------------------------------------------------------------------------- */

const BRIEF_INITIAL = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  projectTypes: [],
  services: [],
  location: '',
  plotArea: '',
  builtUpArea: '',
  authority: '',
  timeline: '',
  message: '',
  source: '',
  hp_field: '',
}

const BRIEF_RULES = {
  name: validators.name,
  email: validators.email,
  phone: validators.phoneRequired,
  projectTypes: (v) => (!v.length ? 'Pick at least one project type.' : ''),
  message: validators.message,
}

export function CommissionForm() {
  const f = useInquiry(BRIEF_INITIAL, BRIEF_RULES, 'Project brief')
  const field = { onChange: f.setField, onBlur: f.blur }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {f.status === 'success' ? (
          <SuccessPanel name={f.values.name} demo={f.demo} onReset={f.reset} />
        ) : (
          <motion.form
            key="form"
            onSubmit={f.submit}
            noValidate
            exit={{ opacity: 0, y: -16, transition: { duration: 0.4 } }}
            className="relative space-y-12"
            aria-describedby="brief-required-note"
          >
            <Honeypot value={f.values.hp_field} onChange={f.setField} />

            <fieldset>
              <legend className="sr-only">About you</legend>
              <PartHeading no="1">About you</PartHeading>
              <div className="grid gap-5 md:grid-cols-2">
                <TextField label="Full name" name="name" value={f.values.name} error={f.errors.name} required autoComplete="name" placeholder="e.g. Ananya Sen" {...field} />
                <TextField label="Organisation / company" name="organisation" value={f.values.organisation} autoComplete="organization" placeholder="Optional" {...field} />
                <TextField label="Email" name="email" type="email" value={f.values.email} error={f.errors.email} required autoComplete="email" placeholder="you@example.com" {...field} />
                <TextField label="Phone" name="phone" type="tel" value={f.values.phone} error={f.errors.phone} required autoComplete="tel" placeholder="+91 98xxx xxxxx" {...field} />
              </div>
            </fieldset>

            <fieldset>
              <legend className="sr-only">Project type</legend>
              <PartHeading no="2">Project type</PartHeading>
              <p className="-mt-2 mb-4 t-body text-slate">Select all that apply.</p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {formOptions.projectTypes.map((o) => (
                  <CheckCard
                    key={o.value}
                    label={o.value}
                    hint={o.hint}
                    checked={f.values.projectTypes.includes(o.value)}
                    onToggle={() => {
                      f.toggle('projectTypes', o.value)
                      f.blur('projectTypes')
                    }}
                  />
                ))}
              </div>
              <AnimatePresence>
                {f.errors.projectTypes && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="mt-2 text-[12px] text-error" role="alert">
                    {f.errors.projectTypes}
                  </motion.p>
                )}
              </AnimatePresence>
            </fieldset>

            <fieldset>
              <legend className="sr-only">Services needed</legend>
              <PartHeading no="3">Services needed</PartHeading>
              <div className="flex flex-wrap gap-2.5">
                {services.map((s) => (
                  <Chip key={s.title} label={s.title} checked={f.values.services.includes(s.title)} onToggle={() => f.toggle('services', s.title)} />
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="sr-only">Site and timeline</legend>
              <PartHeading no="4">Site & timeline</PartHeading>
              <div className="grid gap-5 md:grid-cols-3">
                <TextField label="Site location" name="location" value={f.values.location} placeholder="Area, city" {...field} />
                <TextField label="Plot area" name="plotArea" value={f.values.plotArea} placeholder="e.g. 4 cottah / 0.5 acre" {...field} />
                <TextField label="Approx. built-up area" name="builtUpArea" value={f.values.builtUpArea} placeholder="e.g. 12,000 sq ft" {...field} />
                <SelectField label="Approval authority" name="authority" value={f.values.authority} options={formOptions.authorities} {...field} className="md:col-span-1" />
                <SelectField label="When do you want to start?" name="timeline" value={f.values.timeline} options={formOptions.timelines} {...field} className="md:col-span-2" />
              </div>
            </fieldset>

            <fieldset>
              <legend className="sr-only">The brief</legend>
              <PartHeading no="5">The brief</PartHeading>
              <div className="grid gap-5">
                <TextArea
                  label="Tell us about the project"
                  name="message"
                  value={f.values.message}
                  error={f.errors.message}
                  required
                  rows={6}
                  placeholder="What you want to build, who it is for, anything about the site — orientation, road, existing structures — and any approvals already in hand."
                  {...field}
                />
                <SelectField label="How did you hear about us?" name="source" value={f.values.source} options={formOptions.sources} placeholder="Optional" {...field} className="md:max-w-sm" />
              </div>
            </fieldset>

            <div className="space-y-5 border-t border-mortise pt-8">
              <ErrorBanner message={f.status === 'error' ? f.serverError : ''} />
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p id="brief-required-note" className="flex items-center gap-2 text-[12px] text-slate">
                  <svg viewBox="0 0 12 14" className="h-3.5 w-3" aria-hidden="true">
                    <rect x="1" y="6" width="10" height="7" fill="none" stroke="currentColor" />
                    <path d="M3 6V4a3 3 0 016 0v2" fill="none" stroke="currentColor" />
                  </svg>
                  Fields marked * are required. Your details are used only to respond to this inquiry.
                </p>
                <SubmitButton status={f.status}>Submit project brief</SubmitButton>
              </div>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Short inquiry (Practice page, project pages)                                */
/* -------------------------------------------------------------------------- */

const QUICK_RULES = {
  name: validators.name,
  email: validators.email,
  phone: validators.phone,
  message: validators.message,
}

export function QuickInquiryForm({ dark = false, context = '', defaultType = '' }) {
  const f = useInquiry(
    { name: '', email: '', phone: '', projectTypes: defaultType, message: context ? `Regarding ${context}: ` : '', hp_field: '' },
    QUICK_RULES,
    'Quick inquiry',
  )
  const field = { onChange: f.setField, onBlur: f.blur, dark }

  return (
    <AnimatePresence mode="wait">
      {f.status === 'success' ? (
        <SuccessPanel name={f.values.name} demo={f.demo} onReset={f.reset} dark={dark} />
      ) : (
        <motion.form key="form" onSubmit={f.submit} noValidate exit={{ opacity: 0, y: -16, transition: { duration: 0.4 } }} className="relative grid gap-5 md:grid-cols-2">
          <Honeypot value={f.values.hp_field} onChange={f.setField} />
          <TextField label="Full name" name="name" value={f.values.name} error={f.errors.name} required autoComplete="name" placeholder="Your name" {...field} />
          <TextField label="Email" name="email" type="email" value={f.values.email} error={f.errors.email} required autoComplete="email" placeholder="you@example.com" {...field} />
          <TextField label="Phone" name="phone" type="tel" value={f.values.phone} error={f.errors.phone} autoComplete="tel" placeholder="Optional" {...field} />
          <SelectField
            label="Project type"
            name="projectTypes"
            value={f.values.projectTypes}
            options={formOptions.projectTypes.map((o) => o.value)}
            placeholder="Select (optional)"
            {...field}
          />
          <TextArea label="Message" name="message" value={f.values.message} error={f.errors.message} required rows={4} placeholder="The site, the brief, the timeline…" className="md:col-span-2" {...field} />
          <div className="md:col-span-2">
            <ErrorBanner message={f.status === 'error' ? f.serverError : ''} dark={dark} />
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between md:col-span-2">
            <p className={`text-[12px] ${dark ? 'text-bone-muted' : 'text-slate'}`}>We reply within two working days.</p>
            <SubmitButton status={f.status} variant={dark ? 'light' : 'primary'}>
              Send inquiry
            </SubmitButton>
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
