import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, ShoppingCart, Facebook, Music2 } from 'lucide-react';
import './index.css';

const links = [
  { name: 'Twitter', url: 'https://x.com/dejdraws?s=21', icon: Twitter, id: '01', x: -200, y: -150 },
  { name: 'Instagram', url: 'https://www.instagram.com/lildejix?igsh=MTI2czM5anE5MjNyYQ%3D%3D&utm_source=qr', icon: Instagram, id: '02', x: 200, y: -100 },
  { name: 'TikTok', url: 'https://www.tiktok.com/@dejdraws?_r=1&_t=ZS-92enPqFdJRv', icon: Music2, id: '03', x: -180, y: 150 },
  { name: 'Etsy Store', url: 'https://www.etsy.com/ca/shop/DejDraws', icon: ShoppingCart, id: '04', x: 220, y: 120 },
  { name: 'Facebook', url: 'https://www.facebook.com/share/17ktDh76rP/?mibextid=wwXIfr', icon: Facebook, id: '05', x: 0, y: 220 },
];

function App() {
  const constraintsRef = React.useRef(null);

  return (
    <div className="container" ref={constraintsRef}>
      {/* Central Identity Section */}
      <motion.div
        className="center-title"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div
          className="brutalist-border"
          style={{
            maxWidth: '300px',
            margin: '0 auto',
            padding: '0',
            overflow: 'hidden',
            lineHeight: 0,
            background: 'white'
          }}
        >
          <span className="label">[CORE_IDENTITY]</span>
          <img
            src="/logo.png"
            alt="Dej Logo"
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: 0
            }}
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <h1>DEJ DRAWS</h1>
          <p style={{ fontSize: '0.7rem', opacity: 0.6, letterSpacing: '2px' }}>[ INTERACTIVE_GRID_v2.0 ]</p>
        </div>
      </motion.div>

      {/* Draggable Floating Links */}
      {links.map((link, index) => (
        <motion.div
          key={link.id}
          drag
          dragConstraints={constraintsRef}
          initial={{ opacity: 0, x: link.x, y: link.y }}
          animate={{ opacity: 1, x: link.x, y: link.y }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: index * 0.1 }}
          className="floating-block"
        >
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="brutalist-border brutalist-button"
            style={{ width: 'auto', padding: '0.8rem 1.5rem', minWidth: '160px' }}
          >
            <span className="label">[{link.id}]</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <link.icon size={18} />
              <span style={{ fontSize: '0.9rem' }}>{link.name}</span>
            </div>
          </a>
        </motion.div>
      ))}

      {/* Technical Footer */}
      <footer style={{
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        textAlign: 'center',
        fontSize: '0.6rem',
        opacity: 0.4,
        letterSpacing: '1px'
      }}>
        [ STATUS: DEPLOYED ] | [ COORDS: RELATIVE ] | &copy; {new Date().getFullYear()} DEJ DRAWS
      </footer>
    </div>
  );
}

export default App;
