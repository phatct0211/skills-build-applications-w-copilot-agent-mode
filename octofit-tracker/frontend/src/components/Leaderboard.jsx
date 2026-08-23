import CollectionView from './CollectionView.jsx'

function Leaderboard() {
  return <CollectionView component="leaderboard" endpoint="/api/leaderboard/" eyebrow="All-time standings" title="Leaderboard" description="The scoreboard is a snapshot. The habit is the real win." renderItem={(entry) => <article className="data-card rank-card" key={entry._id ?? entry.id ?? entry.rank}><span className="rank">{String(entry.rank ?? 0).padStart(2, '0')}</span><div><h2>{entry.user?.name ?? 'Unknown member'}</h2><p>{entry.team?.name ?? 'Independent'}</p></div><strong>{entry.points ?? 0}<small> pts</small></strong></article>} />
}

export default Leaderboard
