import React from 'react';

const Error = () => {
    const primaryColor = '#244D3F';
    
    const styles = {
        container: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: '#ffffff', // Clean white background to make the green pop
            fontFamily: 'system-ui, -apple-system, sans-serif',
            padding: '20px'
        },
        errorCode: {
            fontSize: 'clamp(5rem, 15vw, 10rem)', // Responsive sizing
            fontWeight: '900',
            margin: '0',
            color: primaryColor,
            letterSpacing: '-2px',
            opacity: '0.9'
        },
        title: {
            fontSize: '1.75rem',
            fontWeight: '600',
            color: '#1a1a1a',
            marginTop: '-10px',
        },
        description: {
            fontSize: '1rem',
            color: '#555555',
            maxWidth: '400px',
            margin: '1.5rem 0 2.5rem 0',
            lineHeight: '1.6',
        },
        button: {
            padding: '14px 32px',
            backgroundColor: primaryColor,
            color: '#ffffff',
            border: 'none',
            borderRadius: '4px', // Sharper corners for a modern professional look
            fontSize: '0.9rem',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            textDecoration: 'none',
            boxShadow: '0 10px 15px -3px rgba(36, 77, 63, 0.2)',
        }
    };

    return (
        <div style={styles.container}>
            {/* Minimalist Icon/Graphic */}
            <div style={{ marginBottom: '20px', width: '60px', height: '4px', backgroundColor: primaryColor }}></div>
            
            <h1 style={styles.errorCode}>404</h1>
            <h2 style={styles.title}>Lost in the wilderness</h2>
            
            <p style={styles.description}>
                The page you are looking for doesn't exist or has been moved. 
                Let's get you back on the right path.
            </p>
            
            <a 
                href="/" 
                style={styles.button}
                onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 20px 25px -5px rgba(36, 77, 63, 0.3)';
                }}
                onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 10px 15px -3px rgba(36, 77, 63, 0.2)';
                }}
            >
                Return Home
            </a>
        </div>
    );
};

export default Error;