export default function Experiences() {
  return (
    <section>
      <h2 className="section-title">Expériences</h2>
      <div className="card" style={{ marginTop: 12 }}>
        <h3 style={{ marginTop: 0 }}>Lead Full‑Stack · 2023–2025</h3>
        <p className="muted">Pilotage de features critiques côté serveur et client.</p>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Conception de ressources FiveM avancées et performantes</li>
          <li>Optimisation réseau et profilage mémoire CPU</li>
          <li>UI réactive avec animations fluides et accessibles</li>
          <li>Mentoring et revues de code structurées</li>
        </ul>
      </div>
      <div className="card" style={{ marginTop: 12 }}>
        <h3 style={{ marginTop: 0 }}>Développeur Full‑Stack · 2021–2023</h3>
        <p className="muted">Livraison de fonctionnalités de bout en bout.</p>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>APIs REST/GraphQL sécurisées, tests et monitoring</li>
          <li>Front moderne avec transitions, micro‑interactions</li>
          <li>Automatisation CI/CD, containerisation</li>
        </ul>
      </div>
      <div className="card" style={{ marginTop: 12 }}>
        <h3 style={{ marginTop: 0 }}>Développeur Web · 2019–2021</h3>
        <p className="muted">Fondations JavaScript, composants et performances.</p>
        <ul style={{ margin: 0, paddingLeft: 18 }}>
          <li>Composants UI réutilisables et accessibles</li>
          <li>Optimisation bundle et temps de rendu</li>
          <li>Intégration continue et qualité logicielle</li>
        </ul>
      </div>
    </section>
  )
}
