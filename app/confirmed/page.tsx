export default function Confirmed() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0f0f10",
        color: "#f4efe7",
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
        padding: 24,
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: 12 }}>Email confirmed</h1>
      <p style={{ opacity: 0.78, marginBottom: 24, maxWidth: 460 }}>
        You are verified. Return to the Terrestrial app to continue.
      </p>

      <a
        href="exmodating://auth/callback"
        style={{
          padding: "12px 18px",
          background: "#8b4e2f",
          borderRadius: 10,
          textDecoration: "none",
          color: "white",
          fontWeight: 600,
        }}
      >
        Open Terrestrial
      </a>
    </main>
  );
}
