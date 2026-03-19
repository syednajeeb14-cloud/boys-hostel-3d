import React from 'react';

const ProblemSection = () => {
  return (
    <section className="section-container">
      <div className="glass-card">
        <h2 className="problem-text">The struggle is real.</h2>
        <p style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--color-text)' }}>
          Finding a room as an unmarried boy is tough. You face strict landlords with endless rules, poorly maintained spaces, lack of hygiene, and an environment that feels more like a prison than a home.
        </p>
        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(255,107,107,0.15)', color: 'var(--color-primary)', borderRadius: '30px', fontWeight: 700 }}>No Freedom</span>
          <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(255,107,107,0.15)', color: 'var(--color-primary)', borderRadius: '30px', fontWeight: 700 }}>Unclean Rooms</span>
          <span style={{ padding: '0.6rem 1.2rem', background: 'rgba(255,107,107,0.15)', color: 'var(--color-primary)', borderRadius: '30px', fontWeight: 700 }}>Strict Rules</span>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
