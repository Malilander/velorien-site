import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'serif', backgroundColor: '#0e0e2c', color: '#e4e4f0' }}>
      <h1>Velorien</h1>
      <p><em>Empower Yourself, Elevate Others</em></p>

      <section style={{ marginTop: '2rem' }}>
        <h2>About</h2>
        <p>Welcome to the digital presence of Velorien – the god that forgets to remember. Ideas, reflections, and links.</p>
        <p>Part personal archive, part signal flare to kindred minds. Stay grounded. Stay transcendent.</p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Recent Thoughts</h2>
        <div>
          <h3>Memory as Myth</h3>
          <p>Our memories betray us – not because they lie, but because they evolve. Each forgotten moment is a piece of the divine script.</p>
        </div>
        <div>
          <h3>Memory as Myth</h3>
          <p>To elevate others, one must first recognise yourself in them. The ego that uplifts rather than competes is the foundation of true legacy.</p>
        </div>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2>Mythic Paths</h2>
        <ul>
          <li><Link href="/the-seed-that-refused-to-die">The Seed That Refused to Die</Link></li>
          <li><Link href="/the-war-of-preservation">The War of Preservation</Link></li>
          <li><Link href="/the-wound-is-the-portal">The Wound is the Portal</Link></li>
        </ul>
      </section>
    </div>
  );
}
