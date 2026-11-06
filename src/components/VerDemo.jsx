import { useState } from 'react';
import '../css/VerDemo.css';

function VerDemo() {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="ver-demo-container">
      <button className="ver-demo" onClick={handleClick}>
        Ver demo
      </button>

      {showToast && (
        <div className="toast-notification" role="status" aria-live="polite">
          <span className="toast-icon">ℹ️</span>
          <span>El demo aún no está disponible (ruta no configurada).</span>
        </div>
      )}
    </div>
  );
}

export default VerDemo;