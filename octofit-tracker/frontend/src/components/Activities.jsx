import CollectionView from './CollectionView.jsx'

function Activities() {
  return <CollectionView component="activities" eyebrow="Recent motion" title="Activity feed" description="A living record of every rep, run, and reset." renderItem={(activity) => <article className="data-card" key={activity._id}><div className="activity-mark">{activity.type?.slice(0, 1)}</div><div><h2>{activity.type}</h2><p>{activity.user?.name ?? 'OctoFit member'} · {activity.durationMinutes} min</p></div><strong>+{activity.points}<small> pts</small></strong></article>} />
}

export default Activities
