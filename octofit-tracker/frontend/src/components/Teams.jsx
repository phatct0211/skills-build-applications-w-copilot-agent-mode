import CollectionView from './CollectionView.jsx'

function Teams() {
  return <CollectionView component="teams" eyebrow="Collective energy" title="Teams" description="Find your people, then make the finish line move." renderItem={(team) => <article className="data-card team-card" key={team._id}><span className="team-swatch" style={{ backgroundColor: team.color }} /><div><h2>{team.name}</h2><p>{team.motto}</p></div><small>Captain<br /><strong>{team.captain?.name ?? 'Unassigned'}</strong></small></article>} />
}

export default Teams
