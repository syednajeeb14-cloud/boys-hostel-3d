import React from 'react';

const SolutionSection = () => {
  const features = [
    { icon: "🏠", text: "Home-like amenities & delicious meals" },
    { icon: "✨", text: "Impeccable cleanliness and daily hygiene" },
    { icon: "🕊️", text: "Absolute freedom to live your life" },
    { icon: "🤝", text: "Community of like-minded individuals" },
    { icon: "🛡️", text: "Safe, secure, and fully managed spaces" }
  ];

  return (
    <section className="section-container">
      <div className="glass-card" style={{ background: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(15px)' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--color-secondary)', marginBottom: '1rem', fontWeight: 800 }}>
          Your Perfect Solution.
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', color: 'var(--color-text-light)' }}>
          We've flipped the script. Welcome to a space designed exclusively for you.
        </p>
        
        <div className="solution-list">
          {features.map((item, index) => (
            <div key={index} className="solution-item">
              <span className="solution-icon" style={{ fontSize: '2rem' }}>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
