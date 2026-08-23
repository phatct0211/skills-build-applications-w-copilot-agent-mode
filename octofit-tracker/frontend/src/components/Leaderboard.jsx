import CollectionView from './CollectionView.jsx'

function Leaderboard() {
  return <CollectionView component="leaderboard" eyebrow="All-time standings" title="Leaderboard" description="The scoreboard is a snapshot. The habit is the real win." renderItem={(entry) => <article className="data-card rank-card" key={entry._id}><span className="rank">{String(entry.rank).padStart(2, '0')}</span><div><h2>{entry.user?.name ?? 'Unknown member'}</h2><p>{entry.team?.name ?? 'Independent'}</p></div><strong>{entry.points}<small> pts</small></strong></article>} />
}

export default Leaderboard
