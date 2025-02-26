import { ABOUT_CONTENT } from "../constants"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{ABOUT_CONTENT.title}</h1>
      <div className="space-y-8">
        <section className="bg-card rounded-lg p-6 shadow-lg shadow-blue-900">
          <h2 className="text-2xl font-semibold gap-5 mb-4">Our Mission</h2>
          <p className="text-lg">{ABOUT_CONTENT.mission}</p>
        </section>
        <section className="bg-card rounded-lg p-6 shadow-lg shadow-blue-900">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg">{ABOUT_CONTENT.vision}</p>
        </section>
        <section className="bg-card rounded-lg p-6 shadow-lg shadow-blue-900">
          <h2 className="text-2xl font-semibold mb-4">Our History</h2>
          <p className="text-lg">{ABOUT_CONTENT.history}</p>
        </section>
        <section className="bg-card rounded-lg p-6 shadow-lg shadow-blue-900">
          <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
          <ul className="list-disc pl-6 space-y-2">
            {ABOUT_CONTENT.achievements.map((achievement, index) => (
              <li key={index} className="text-lg">
                {achievement}
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-card rounded-lg p-6 shadow-lg shadow-blue-900">
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {ABOUT_CONTENT.team.map((member, index) => (
              <div key={index} className="bg-card p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

