export default function GetStarted() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Get Started</h1>
      <p className="mb-6">Ready to make a difference? Here's how you can get started with coral reef conservation:</p>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <h2 className="text-2xl font-semibold inline">Learn</h2>
          <p className="mt-2">
            Educate yourself about coral reefs and the challenges they face. Check out our resources and take our
            quizzes.
          </p>
        </li>
        <li>
          <h2 className="text-2xl font-semibold inline">Volunteer</h2>
          <p className="mt-2">
            Join our local or international volunteer programs. We have opportunities for all skill levels.
          </p>
        </li>
        <li>
          <h2 className="text-2xl font-semibold inline">Donate</h2>
          <p className="mt-2">Support our conservation efforts through a one-time or recurring donation.</p>
        </li>
        <li>
          <h2 className="text-2xl font-semibold inline">Spread the Word</h2>
          <p className="mt-2">Share our mission with your friends, family, and social networks.</p>
        </li>
      </ol>
      <div className="mt-8">
        <a
          href="/contact"
          className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg transition-colors inline-block"
        >
          Contact Us to Get Started
        </a>
      </div>
    </div>
  )
}

