import Link from "next/link"




type TutorProfile = {
  id: string
  subject: string
  price: string
  isFeatured: boolean
  status: "ACTIVE" | "INACTIVE"
  createdAt: string
  user: {
    name: string
    email: string
    image: string
    role: string
    status: string
  }
}

function Card({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>
      {children}
    </div>
  )
}

function InfoRow({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}

function Badge({
  label,
  highlight,
}: {
  label: string
  highlight?: boolean
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        highlight
          ? "bg-yellow-100 text-yellow-700"
          : "bg-muted text-muted-foreground"
      }`}
    >
      {label}
    </span>
  )
}


export default async function TutorProfilePage({
  tutor,
}: {
  tutor: TutorProfile
}) {
    
       
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Hero Section */}
      <section className="bg-white border-b">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            {/* <Image
              src={tutor.user.image}
              alt={tutor.user.name}
              width={120}
              height={120}
              className="rounded-full object-cover"
            /> */}

            <div className="flex-1">
              <h1 className="text-3xl font-bold capitalize">
                {tutor.user.name}
              </h1>
              <p className="mt-1 text-muted-foreground">
                {tutor.subject} Tutor
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Badge label={`$${tutor.price}/hour`} />
                <Badge label={tutor.status} />
                {tutor.isFeatured && (
                  <Badge label="⭐ Featured Tutor" highlight />
                )}
              </div>
            </div>
             
            <Link href={'/sessions'} className="rounded-xl bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-10 grid gap-8 md:grid-cols-3">
        {/* Left column */}
        <div className="md:col-span-2 space-y-8">
          <Card title="About the Tutor">
            <p className="text-sm leading-relaxed text-muted-foreground">
              {tutor.user.name} is a professional {tutor.subject} tutor,
              offering structured and student-focused lessons tailored to
              individual needs.
            </p>
          </Card>

          <Card title="Teaching Details">
            <InfoRow label="Subject" value={tutor.subject} />
            <InfoRow label="Hourly Rate" value={`$${tutor.price}`} />
            <InfoRow
              label="Member Since"
              value={new Date(tutor.createdAt).toDateString()}
            />
          </Card>
        </div>

        {/* Right column */}
        <div className="space-y-6">
          <Card title="Contact Information">
            <InfoRow label="Email" value={tutor.user.email} />
            <InfoRow label="Role" value={tutor.user.role} />
            <InfoRow label="Account Status" value={tutor.user.status} />
          </Card>

          <div className="rounded-2xl border bg-white p-6">
            <button className="w-full rounded-xl bg-primary py-3 text-white font-medium hover:bg-primary/90 transition">
              Request Booking
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
