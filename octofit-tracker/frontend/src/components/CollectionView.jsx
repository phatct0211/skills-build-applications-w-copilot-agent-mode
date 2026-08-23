import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function CollectionView({ component, title, eyebrow, description, renderItem }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let active = true
    fetchCollection(component)
      .then((data) => active && setItems(data))
      .catch((requestError) => active && setError(requestError.message))
      .finally(() => active && setLoading(false))
    return () => { active = false }
  }, [component])

  return (
    <section className="view-section">
      <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="section-description">{description}</p></div><span className="record-count">{loading ? 'Loading' : `${items.length} records`}</span></div>
      {error && <div className="alert alert-warning">{error}. Check that the backend is running on port 8000.</div>}
      {loading && <div className="empty-state">Loading {component}...</div>}
      {!loading && !error && <div className="item-grid">{items.length ? items.map((item) => renderItem(item)) : <div className="empty-state">No {component} yet.</div>}</div>}
    </section>
  )
}

export default CollectionView
