import React from "react";

export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.card} aria-label="Todo Manager">
        <h1 style={styles.title}>Todo Manager</h1>
        <p style={styles.subtitle}>
          React scaffold created so lint/build checks can run.
        </p>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#f9fafb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24
  },
  card: {
    width: "100%",
    maxWidth: 640,
    background: "#ffffff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 24,
    color: "#111827"
  },
  title: { margin: 0, fontSize: 28, fontWeight: 700 },
  subtitle: { marginTop: 12, marginBottom: 0, color: "#64748b" }
};
