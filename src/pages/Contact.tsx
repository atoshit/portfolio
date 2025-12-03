export default function Contact() {
  return (
    <section>
      <h2 className="section-title">Contact</h2>
      <div className="card" style={{ marginTop: 12 }}>
        <div className="card-grid">
          <div className="card">
            <h3>Discord (DM)</h3>
            <p className="muted">@Atoshi</p>
          </div>
          <div className="card">
            <h3>Email pro</h3>
            <p className="muted"><a className="footer-link" href="mailto:pro@atoshi.dev">pro@atoshi.dev</a></p>
          </div>
          <div className="card">
            <h3>Serveur Discord</h3>
            <p className="muted"><a className="footer-link" href="https://discord.gg/atoshi" target="_blank">discord.gg/atoshi</a></p>
          </div>
          <div className="card">
            <h3>Disponibilités</h3>
            <p className="muted">Réponse rapide (24–48h), projets FiveM / Full‑Stack.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
