import React from 'react';
import { useParams } from 'react-router-dom';

const SimpleProgramRouter: React.FC = () => {
  const { programSlug } = useParams<{ programSlug: string }>();
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Program: {programSlug}</h1>
      <p>This is a simplified program router to ensure the app loads properly.</p>
      <p>Once the main app is working, we can restore the full program functionality.</p>
    </div>
  );
};

export default SimpleProgramRouter;
