import { SOLUTIONS_CONTENT } from "../constants"

export default function Solutions() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{SOLUTIONS_CONTENT.title}</h1>
      <p className="text-lg mb-12">{SOLUTIONS_CONTENT.intro}</p>
      <div className="space-y-12">
        {SOLUTIONS_CONTENT.solutions.map((solution, index) => (
          <div key={index} className=" bg-card rounded-lg p-6 shadow-lg shadow-blue-900">
            <h2 className="text-2xl font-semibold mb-4">{solution.title}</h2>
            <p className="mb-6">{solution.description}</p>
            {solution.steps && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Implementation Steps:</h3>
                <ol className="list-decimal pl-6 space-y-2">
                  {solution.steps.map((step, idx) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            )}
            {solution.practices && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Best Practices:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {solution.practices.map((practice, idx) => (
                    <li key={idx}>{practice}</li>
                  ))}
                </ul>
              </div>
            )}
            {solution.benefits && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Key Benefits:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {solution.benefits.map((benefit, idx) => (
                    <li key={idx}>{benefit}</li>
                  ))}
                </ul>
              </div>
            )}
            {solution.initiatives && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Current Initiatives:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {solution.initiatives.map((initiative, idx) => (
                    <li key={idx}>{initiative}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

