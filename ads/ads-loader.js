// Adsterra Ad Loader - Centralized Ad Management
(function() {
    'use strict';
    
    // Configuration
    var config = {
        adsterraScript: '//pl27784461.revenuecpmgate.com/14/49/1b/14491b7427c906f4194cd3d05a94db47.js',
        loadDelay: 500, // Small delay to not block initial page render
        maxRetries: 2,
        retryDelay: 2000
    };
    
    function loadAdsterraScript(retryCount = 0) {
        try {
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = config.adsterraScript;
            script.async = true;
            
            // Success handler
            script.onload = function() {
                console.log('Adsterra: Pop-under ad loaded successfully');
                
                // Track ad load in data layer for analytics (optional)
                if (window.dataLayer) {
                    window.dataLayer.push({
                        'event': 'adsterra_loaded',
                        'adType': 'pop_under'
                    });
                }
            };
            
            // Error handler
            script.onerror = function() {
                console.warn('Adsterra: Failed to load ad script');
                
                // Retry logic
                if (retryCount < config.maxRetries) {
                    console.log(`Adsterra: Retrying in ${config.retryDelay}ms... (${retryCount + 1}/${config.maxRetries})`);
                    setTimeout(function() {
                        loadAdsterraScript(retryCount + 1);
                    }, config.retryDelay);
                } else {
                    console.error('Adsterra: Max retries exceeded, giving up');
                }
            };
            
            // Add to document head
            document.head.appendChild(script);
            
        } catch (error) {
            console.error('Adsterra: Error loading ad script:', error);
        }
    }
    
    // Initialize ad loading with a small delay
    setTimeout(function() {
        loadAdsterraScript();
    }, config.loadDelay);
    
})();