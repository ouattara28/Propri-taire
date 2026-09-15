// ===== Année automatique dans le footer =====
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// ===== Mise en surbrillance du lien de nav actif =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('nav a[href]').forEach(link => {
    const linkPage = new URL(link.href, window.location.href).pathname.split('/').pop() || 'index.html';
    if (linkPage === currentPage) {
        link.setAttribute('aria-current', 'page');
    }
});

// ===== Page transition légère =====
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const pageBody = document.body;

function revealPage() {
    if (!prefersReducedMotion) {
        pageBody.classList.add('page-transition--visible');
    }
}

function attachLinkTransitions() {
    document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute('href');
        // Skip internal anchors, mail/tel links, external targets, current-page links,
        // and explicit download links (or PDFs) so the browser handles downloads.
        const destinationUrl = new URL(link.href, window.location.href);
        if (!url || url.startsWith('#') || url.startsWith('mailto:') || url.startsWith('tel:') || link.target === '_blank' || destinationUrl.origin !== window.location.origin || destinationUrl.pathname === window.location.pathname || link.hasAttribute('download') || url.toLowerCase().endsWith('.pdf')) {
            return;
        }
        link.addEventListener('click', event => {
            event.preventDefault();
            pageBody.classList.add('page-transition--exit');
            const destination = link.href;
            setTimeout(() => {
                window.location.href = destination;
            }, 260);
        });
    });
}

function closeMobileNav() {
    const nav = document.querySelector('nav#navigation');
    const toggleButton = document.querySelector('.nav-toggle');
    if (!nav || !nav.classList.contains('open')) {
        return;
    }
    nav.classList.remove('open');
    if (toggleButton) {
        toggleButton.setAttribute('aria-expanded', 'false');
    }
}

function initMobileNav() {
    const nav = document.querySelector('nav#navigation') || document.querySelector('nav');
    const toggleButton = document.querySelector('.nav-toggle');
    if (!nav || !toggleButton) return;

    if (!nav.id) {
        nav.id = 'navigation';
    }

    toggleButton.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a[href]').forEach(link => {
        link.addEventListener('click', closeMobileNav);
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 720) {
            closeMobileNav();
        }
    });
}

function handleReducedMotion() {
    if (prefersReducedMotion) {
        document.documentElement.classList.remove('js');
        document.body.classList.add('page-transition--visible');
    }
}

function animateReveals() {
    if (prefersReducedMotion) {
        document.querySelectorAll('.cc, .monblock, .card, ul.hobbies').forEach(el => {
            el.classList.add('reveal-visible');
        });
        return;
    }

    document.documentElement.classList.add('js');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    document.querySelectorAll('.cc, .monblock, .card, ul.hobbies').forEach(el => {
        observer.observe(el);
    });
}

function animateSkillBars() {
    document.querySelectorAll('.skill-progress').forEach(progress => {
        const fill = progress.querySelector('.skill-progress-fill');
        const percent = progress.getAttribute('data-level');
        if (fill) {
            fill.style.width = `${percent}%`;
        }
    });
}

function initSkillFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    if (!filterButtons.length || !skillCards.length) {
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');
            skillCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const hidden = filter !== 'all' && category !== filter;
                card.dataset.hidden = hidden ? 'true' : 'false';
            });
        });
    });
}

// ===== Formulaire de contact =====
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formAction = contactForm.getAttribute('action') || '';
        if (formAction.includes('REMPLACER_PAR_VOTRE_ID')) {
            formStatus.textContent = 'Le formulaire doit encore être configuré. Écrivez-moi directement par email.';
            return;
        }

        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi...';
        }

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                formStatus.textContent = '✅ Message envoyé avec succès, merci !';
                contactForm.reset();
            } else {
                formStatus.textContent = "❌ Une erreur est survenue, réessayez ou contactez-moi par email.";
            }
        } catch (err) {
            formStatus.textContent = "❌ Impossible d'envoyer le message (connexion). Réessayez plus tard.";
        } finally {
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Envoyer';
            }
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    if (!prefersReducedMotion) {
        pageBody.classList.add('page-transition');
    }
    revealPage();
    animateReveals();
    handleReducedMotion();
    attachLinkTransitions();
    initMobileNav();
    animateSkillBars();
    initSkillFilter();
});
