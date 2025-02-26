import { GET_INVOLVED_CONTENT } from "../constants"

export default function GetInvolved() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">{GET_INVOLVED_CONTENT.title}</h1>
      <p className="text-lg mb-12">{GET_INVOLVED_CONTENT.intro}</p>
      <div className="grid gap-8 md:grid-cols-2">
        {GET_INVOLVED_CONTENT.ways.map((way, index) => (
          <div key={index} className="bg-card rounded-lg p-6 shadow-lg shadow-blue-900">
            <h2 className="text-2xl font-semibold mb-4">{way.title}</h2>
            <p className="mb-6">{way.description}</p>
            {way.opportunities && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Opportunities:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {way.opportunities.map((opportunity, idx) => (
                    <li key={idx}>{opportunity}</li>
                  ))}
                </ul>
              </div>
            )}
            {way.impactAreas && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Impact Areas:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {way.impactAreas.map((area, idx) => (
                    <li key={idx}>{area}</li>
                  ))}
                </ul>
              </div>
            )}
            {way.channels && (
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Channels:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {way.channels.map((channel, idx) => (
                    <li key={idx}>{channel}</li>
                  ))}
                </ul>
              </div>
            )}
            {way.actions && (
              <div>
                <h3 className="text-xl font-semibold mb-2">Actions:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {way.actions.map((action, idx) => (
                    <li key={idx}>{action}</li>
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

