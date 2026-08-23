import CollectionView from './CollectionView.jsx'

function Users() {
  return <CollectionView component="users" eyebrow="The roster" title="Members" description="The people turning small habits into serious momentum." renderItem={(user) => <article className="data-card" key={user._id}><div className="avatar">{user.avatar}</div><div><h2>{user.name}</h2><p>{user.email}</p></div><strong>{user.totalPoints ?? 0}<small> pts</small></strong></article>} />
}

export default Users
