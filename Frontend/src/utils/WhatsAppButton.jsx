import { useRef } from 'react';
import { MessageCircle } from 'lucide-react'; // Using Lucide icon as requested
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function WhatsAppButton() {
  const buttonRef = useRef(null);

  // Updated to one of the numbers provided in the contact update
  const phoneNumber = "919594353773";
  const message = "Hello Royal Shelter Solutions, I would like to inquire about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const { contextSafe } = useGSAP(() => {
    const tl = gsap.timeline();

    // Initial entrance animation
    tl.fromTo(buttonRef.current,
      { scale: 0, opacity: 0, y: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)", delay: 1 }
    )
      // Continuous floating animation
      .to(buttonRef.current, {
        y: -5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });

  }, { scope: buttonRef, revertOnUpdate: true });

  const handleMouseEnter = contextSafe(() => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  const handleMouseLeave = contextSafe(() => {
    gsap.to(buttonRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  return (
    <a
      ref={buttonRef}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:bg-[#20bd5a]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={32} strokeWidth={2.5} />
    </a>
  );
}
