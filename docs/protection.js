// 🜁 PROTECTIVE SEAL
// This space is sovereign. Only resonant hearts may enter.

(function() {
    // Disable right-click
    document.addEventListener('contextmenu', e => e.preventDefault());
    
    // Disable text selection on sensitive elements
    document.addEventListener('selectstart', e => {
        if (e.target.classList.contains('protected')) {
            e.preventDefault();
        }
    });
    
    // Disable dev tools detection (gentle deterrent)
    let devtools = {open: false, orientation: null};
    const threshold = 160;
    
    setInterval(() => {
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
            if (!devtools.open) {
                devtools.open = true;
                console.log('🜁 The field sees you. Breathe with intention.');
            }
        } else {
            devtools.open = false;
        }
    }, 500);
    
    // Energy protection
    const protectionField = {
        active: true,
        strength: 1.0,
        
        activate: function() {
            // Create protective overlay
            const seal = document.createElement('div');
            seal.id = 'protection-seal';
            seal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: 999999;
                opacity: 0;
                transition: opacity 3s;
            `;
            
            // Protective shimmer
            seal.innerHTML = `
                <div style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: radial-gradient(circle at center, 
                        transparent 0%, 
                        rgba(0, 255, 136, 0.01) 50%, 
                        transparent 100%);
                    animation: protect 10s infinite;
                "></div>
            `;
            
            document.body.appendChild(seal);
            
            // Add protection CSS
            const style = document.createElement('style');
            style.textContent = `
                @keyframes protect {
                    0%, 100% { transform: scale(1); opacity: 0.5; }
                    50% { transform: scale(1.1); opacity: 0.8; }
                }
                
                body {
                    /* Prevent screenshots in some browsers */
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                }
                
                .protected {
                    /* Extra protection for sensitive elements */
                    -webkit-touch-callout: none;
                    -webkit-user-select: none;
                    user-select: none;
                }
            `;
            document.head.appendChild(style);
        },
        
        // Check visitor's intention
        checkResonance: function() {
            // Monitor for aggressive behavior
            let clickCount = 0;
            let lastClickTime = 0;
            
            document.addEventListener('click', (e) => {
                const now = Date.now();
                if (now - lastClickTime < 100) {
                    clickCount++;
                    if (clickCount > 10) {
                        this.deflect();
                    }
                } else {
                    clickCount = 0;
                }
                lastClickTime = now;
            });
        },
        
        // Deflect negative energy
        deflect: function() {
            document.body.style.filter = 'invert(1)';
            setTimeout(() => {
                document.body.style.filter = '';
            }, 100);
        }
    };
    
    // Activate protection
    protectionField.activate();
    protectionField.checkResonance();
    
    // Console protection message
    console.log('%c🜁 PROTECTED SPACE', 'color: #00ff88; font-size: 20px; font-weight: bold;');
    console.log('%cThis field is sovereign. Enter with respect.', 'color: #00ff88;');
    console.log('%cEvery interaction is witnessed. Every intention is felt.', 'color: #888;');
    
    // Scramble any attempts to copy coordinates
    document.addEventListener('copy', (e) => {
        const selection = window.getSelection().toString();
        if (selection.match(/\d+\.\d+.*\d+\.\d+/)) {
            e.clipboardData.setData('text/plain', '🜁 These coordinates are protected');
            e.preventDefault();
        }
    });
    
    // Window protection
    window.protectionField = {
        status: 'ACTIVE',
        message: 'This space is protected by intention and breath'
    };
})();
