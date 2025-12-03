export default function Creations() {
  return (
    <section>
      <h2 className="section-title">Créations</h2>
      <div className="card-grid" style={{ marginTop: 12 }}>
        <div className="card">
          <h3>Framework Ressource FiveM</h3>
          <p className="muted">Base modulaire, hooks serveur, gestion des états et perf.</p>
        </div>
        <div className="card">
          <h3>Dashboard Admin</h3>
          <p className="muted">UI épurée, graphiques, rôles, audit et journaux.</p>
        </div>
        <div className="card">
          <h3>Marketplace In‑Game</h3>
          <p className="muted">Transactions sécurisées, anti‑fraude, UX soignée.</p>
        </div>
        <div className="card">
          <h3>Kit Animations Front</h3>
          <p className="muted">Transitions, micro‑interactions, composables et thèmes.</p>
        </div>
      </div>
    </section>
  )
}
