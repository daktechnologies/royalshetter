import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds, offset = 100) => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + offset;

            let currentSection = '';

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    // Check if scroll position is within the section
                    if (
                        scrollPosition >= offsetTop &&
                        scrollPosition < offsetTop + offsetHeight
                    ) {
                        currentSection = id;
                    }
                }
            }

            // Fallback for bottom of page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                // Optionally detect the last section if we are at bottom
                // currentSection = sectionIds[sectionIds.length - 1]; 
                // Not always desired if the footer is large, but usually okay.
            }

            setActiveSection(currentSection);
        };

        // Initial check
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
};

export default useScrollSpy;
