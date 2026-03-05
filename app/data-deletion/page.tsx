export default function DataDeletionPage() {
  return (
    <main style={{ maxWidth: 860, margin: "0 auto", padding: "32px 20px", lineHeight: 1.65 }}>
      <h1>Data Deletion</h1>
      <p><strong>Effective date:</strong> March 5, 2026</p>

      <h2>Delete Your Account In-App</h2>
      <p>
        You can delete your account directly in Terrestrial:
        <br />
        <strong>Settings → Delete account</strong>
      </p>

      <h2>What Is Deleted</h2>
      <ul>
        <li>Authentication account and profile data.</li>
        <li>Swipes, messages, blocks, and related account records.</li>
      </ul>

      <h2>What May Be Retained</h2>
      <p>
        Limited records may be retained when required for legal compliance, fraud prevention,
        or trust and safety operations.
      </p>

      <h2>Processing Time</h2>
      <p>
        Deletion is initiated immediately after confirmation. Backup systems may retain data temporarily.
      </p>

      <h2>Need Help?</h2>
      <p>
        If you cannot access your account, email
        {' '}
        <a href="mailto:support@terrestrial.live">support@terrestrial.live</a>.
      </p>
    </main>
  );
}
