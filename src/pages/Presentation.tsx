export default function Presentation() {
  return (
    <section>
      <h2 className="section-title">Présentation</h2>
      <p className="lead">
        Full‑Stack et spécialiste FiveM. J’aide les équipes à livrer des
        expériences robustes et élégantes, avec une obsession pour la qualité,
        la performance et le design.
      </p>
      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Compétences clés</h3>
        <div className="card-grid" style={{ marginTop: 10 }}>
          <div className="card"><strong>Backend</strong><p className="muted">Node.js, TypeScript, REST/GraphQL</p></div>
          <div className="card"><strong>Frontend</strong><p className="muted">React/Vue, animations, DX</p></div>
          <div className="card"><strong>Infra</strong><p className="muted">CI/CD, Docker, monitoring</p></div>
          <div className="card"><strong>FiveM</strong><p className="muted">Ressources, scripts, optimisation</p></div>
        </div>
      </div>
      <div className="card" style={{ marginTop: 16 }}>
        <h3 style={{ marginTop: 0 }}>Valeur ajoutée</h3>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Architecture claire et scalable</li>
          <li>Focus expérience utilisateur et animations premium</li>
          <li>Performances mesurées et optimisées</li>
          <li>Collaboration et communication efficaces</li>
        </ul>
      </div>
    </section>
  )
}
