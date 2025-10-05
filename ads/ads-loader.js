// Ethical Ad Loader - Multiple Ad Formats
(function() {
    'use strict';
    
    function loadEthicalAds() {
        console.log('Loading ethical ads: Banners and Native ads');
        
        // 1. 728x90 Leaderboard Banner (for header)
        var headerContainer = document.querySelector('.header-banner');
        if (headerContainer) {
            var banner728x90 = document.createElement('script');
            banner728x90.innerHTML = `
                atOptions = {
                    'key' : '1109981b0059043c07684a806b721fc8',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                };
            `;
            headerContainer.appendChild(banner728x90);
            
            var banner728x90Invoke = document.createElement('script');
            banner728x90Invoke.src = '//www.highperformanceformat.com/1109981b0059043c07684a806b721fc8/invoke.js';
            headerContainer.appendChild(banner728x90Invoke);
        }
        
        // 2. 300x250 Medium Rectangle Banner (for between tools)
        var middleContainer = document.querySelector('.middle-banner');
        if (middleContainer) {
            var banner300x250 = document.createElement('script');
            banner300x250.innerHTML = `
                atOptions = {
                    'key' : '136a0725c35889779749bd7cc05c8410',
                    'format' : 'iframe',
                    'height' : 250,
                    'width' : 300,
                    'params' : {}
                };
            `;
            middleContainer.appendChild(banner300x250);
            
            var banner300x250Invoke = document.createElement('script');
            banner300x250Invoke.src = '//www.highperformanceformat.com/136a0725c35889779749bd7cc05c8410/invoke.js';
            middleContainer.appendChild(banner300x250Invoke);
        }
        
        // 3. Footer Banner
        var footerContainer = document.querySelector('.footer-banner');
        if (footerContainer) {
            var bannerFooter = document.createElement('script');
            bannerFooter.innerHTML = `
                atOptions = {
                    'key' : '1109981b0059043c07684a806b721fc8',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                };
            `;
            footerContainer.appendChild(bannerFooter);
            
            var bannerFooterInvoke = document.createElement('script');
            bannerFooterInvoke.src = '//www.highperformanceformat.com/1109981b0059043c07684a806b721fc8/invoke.js';
            footerContainer.appendChild(bannerFooterInvoke);
        }
        
        // 4. Native Ad (blends with content)
        var nativeContainer = document.getElementById('container-c6de0174a84784d1b76c33e22ffe41fd');
        if (!nativeContainer) {
            nativeContainer = document.createElement('div');
            nativeContainer.id = 'container-c6de0174a84784d1b76c33e22ffe41fd';
            // Place native ad at the end of main content
            var mainElement = document.querySelector('main');
            if (mainElement) {
                mainElement.appendChild(nativeContainer);
            } else {
                document.body.appendChild(nativeContainer);
            }
        }
        
        var nativeAd = document.createElement('script');
        nativeAd.async = true;
        nativeAd.setAttribute('data-cfasync', 'false');
        nativeAd.src = '//pl27784699.revenuecpmgate.com/c6de0174a84784d1b76c33e22ffe41fd/invoke.js';
        document.head.appendChild(nativeAd);
        
        console.log('All ethical ads loaded successfully');
    }
    
    // Load ads when page is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadEthicalAds);
    } else {
        loadEthicalAds();
    }
    
})();