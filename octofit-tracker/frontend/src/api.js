export const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
export const apiOrigin = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export const apiBaseUrl = `${apiOrigin}/api`

function collectionItems(payload) {
  if (Array.isArray(payload)) return payload
  if (!payload || typeof payload !== 'object') return []

  for (const key of ['data', 'results', 'items', 'docs']) {
    if (key in payload) {
      const items = collectionItems(payload[key])
      if (items.length || Array.isArray(payload[key])) return items
    }
  }

  return []
}

export async function fetchCollection(component) {
  const response = await fetch(`${apiBaseUrl}/${component}/`)
  if (!response.ok) throw new Error(`Unable to load ${component}`)
  return collectionItems(await response.json())
}
