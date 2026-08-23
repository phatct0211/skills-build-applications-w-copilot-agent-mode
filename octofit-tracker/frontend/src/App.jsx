import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <aside className="sidebar">
          <div className="brand"><span className="brand-mark">O</span><span>OctoFit<span className="brand-muted"> / tracker</span></span></div>
          <p className="sidebar-label">Workspace</p>
          <nav className="main-nav" aria-label="Main navigation">
            <NavLink to="/" end>Overview</NavLink><NavLink to="/activities">Activities</NavLink><NavLink to="/workouts">Workouts</NavLink><NavLink to="/leaderboard">Leaderboard</NavLink><NavLink to="/teams">Teams</NavLink><NavLink to="/users">Members</NavLink>
          </nav>
          <div className="sidebar-footer"><span className="status-dot" /> API connected<br /><small>Live workspace</small></div>
        </aside>
        <main className="main-content">
          <header className="topbar"><span>Saturday, August 23, 2026</span><span className="profile-chip">OC <strong>Octo Captain</strong></span></header>
          <Routes>
            <Route path="/" element={<Overview />} /><Route path="/activities" element={<Activities />} /><Route path="/leaderboard" element={<Leaderboard />} /><Route path="/teams" element={<Teams />} /><Route path="/users" element={<Users />} /><Route path="/workouts" element={<Workouts />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

function Overview() {
  return <section className="overview view-section"><div className="overview-copy"><p className="eyebrow">Saturday reset</p><h1>Make today<br /><em>count.</em></h1><p className="section-description">Your consistency is a competitive advantage. See what your crew is building.</p><NavLink className="primary-action" to="/activities">View activity <span>↗</span></NavLink></div><div className="overview-panel"><span className="panel-kicker">This week</span><strong>1,280</strong><span className="panel-label">team points earned</span><div className="mini-bars"><i /><i /><i /><i /><i /><i /><i /></div><span className="panel-foot">+18% from last week</span></div><div className="overview-links"><NavLink to="/leaderboard"><span>01</span> See the standings <b>↗</b></NavLink><NavLink to="/workouts"><span>02</span> Find your next workout <b>↗</b></NavLink></div></section>
}

export default App
