/**
 * ==========================================================================
 * FICHIER SCRIPT.JS — APPLICATION CITÉPAY
 * --------------------------------------------------------------------------
 * Fonctionnalités principales gérées :
 *   1. Gestion de la barre latérale (Sidebar) : Réduction, expansion et accessibilité.
 *   2. Gestion des infobulles (Tooltips) dynamiques pour la navigation.
 *   3. Marquage des notifications comme lues.
 *   4. Système de filtrage unifié pour les tableaux, sections, et listes.
 * ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    /* ================= 1. SIDEBAR TOGGLE & RESPONSIVE ================= */
    /* Pages rattachées : index.html, biens.html, locataires.html, finances.html, notifications.html, parametres.html */
    
    // Sélection des éléments clés de la barre latérale et des boutons associés
    const sidebar = document.querySelector('.sidebar');
    const toggleButtons = document.querySelectorAll('.sidebar-toggle');
    const logoPlaceholder = document.querySelector('.header-logo-placeholder');

    // Gestion du clic sur les boutons de bascule de la sidebar
    if (sidebar && toggleButtons.length > 0) {
        toggleButtons.forEach((button) => {
            button.addEventListener('click', () => {
                // Bascule de la classe 'collapsed' pour réduire ou étendre la barre
                sidebar.classList.toggle('collapsed');
                const isCollapsed = sidebar.classList.contains('collapsed');
                
                // Mise à jour de l'attribut d'accessibilité aria-expanded sur tous les boutons
                toggleButtons.forEach((btn) => {
                    btn.setAttribute('aria-expanded', String(!isCollapsed));
                });
            });
        });
    }

    /* Action de clic alternative sur le logo pour déplier/replier la sidebar */
    if (logoPlaceholder && sidebar) {
        logoPlaceholder.addEventListener('click', () => {
            sidebar.classList.toggle('collapsed');
            const isCollapsed = sidebar.classList.contains('collapsed');
            
            toggleButtons.forEach((btn) => {
                btn.setAttribute('aria-expanded', String(!isCollapsed));
            });
        });
    }

    /* ================= 2. TOOLTIP DES LIENS ================= */
    /* Pages rattachées : index.html, biens.html, locataires.html, finances.html, notifications.html, parametres.html */
    
    // Génération automatique des info-bulles (titres et data-tooltip) pour les liens de navigation
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach((link) => {
        const label = link.querySelector('.menu-label');
        const text = label ? label.textContent.trim() : link.textContent.trim();
        if (text) {
            link.setAttribute('title', text);
            link.setAttribute('data-tooltip', text);
        }
    });

    /* ================= 3. MARQUER COMME LUE ================= */
    /* Page rattachée : notifications.html */
    
    // Gestion du clic sur le bouton pour marquer une notification spécifique comme lue
    const readButtons = document.querySelectorAll(".mark-read-btn");
    readButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const card = e.target.closest(".notification-card");
            if (card) {
                // Suppression du style non-lu et mise à jour du statut de la carte
                card.classList.remove("unread");
                card.setAttribute("data-status", "read");
                // Suppression du bouton d'action une fois lue
                btn.remove();
            }
        });
    });

    /* ================= 4. SYSTÈMES DE FILTRAGE UNIFIÉ ================= */
    /* Pages rattachées : paiements.html, documents.html, notifications.html, parametres.html */
    
    const filterChips = document.querySelectorAll('.filter-chip');

    // Écouteur d'événement sur chaque puce de filtre pour trier dynamiquement le contenu affiché
    filterChips.forEach((chip) => {
        chip.addEventListener('click', () => {
            // Réinitialisation de la classe active sur l'ensemble des puces de filtre
            filterChips.forEach((c) => c.classList.remove('active'));
            // Activation de la puce sélectionnée
            chip.classList.add('active');

            const filterValue = chip.getAttribute('data-filter');

            // 1. Filtrage des cartes de notifications (notifications.html)
            const notifCards = document.querySelectorAll('.notification-card');
            if (notifCards.length > 0) {
                notifCards.forEach((card) => {
                    const category = card.getAttribute('data-category');
                    const status = card.getAttribute('data-status');

                    if (filterValue === 'all') {
                        card.style.display = '';
                    } else if (filterValue === 'unread' && status === 'unread') {
                        card.style.display = '';
                    } else if (filterValue === category) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }

            // 2. Filtrage des sections (paiements.html / documents.html)
            const sections = document.querySelectorAll('.payment-section, .document-section');
            if (sections.length > 0) {
                sections.forEach((sec) => {
                    const secType = sec.getAttribute('data-section-type');
                    if (filterValue === 'all' || secType === filterValue) {
                        sec.style.display = '';
                    } else {
                        sec.style.display = 'none';
                    }
                });
            }

            // 3. Filtrage des cartes de réglages (parametres.html)
            const settingsCards = document.querySelectorAll('.settings-card');
            if (settingsCards.length > 0) {
                settingsCards.forEach((card) => {
                    const category = card.getAttribute('data-category');
                    if (filterValue === 'all' || category === filterValue) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }

            // 4. Filtrage des lignes de tableaux (finances.html / paiements.html)
            const tableRows = document.querySelectorAll('.data-table tbody tr');
            if (tableRows.length > 0) {
                tableRows.forEach((row) => {
                    const statusBadge = row.querySelector('.status-badge');
                    const category = row.getAttribute('data-category') || row.getAttribute('data-status');

                    if (filterValue === 'all') {
                        row.style.display = '';
                    } else if (statusBadge) {
                        if (filterValue === 'pending' && statusBadge.classList.contains('pending')) {
                            row.style.display = '';
                        } else if (filterValue === 'paid' && statusBadge.classList.contains('paid')) {
                            row.style.display = '';
                        } else {
                            row.style.display = 'none';
                        }
                    } else if (category && category === filterValue) {
                        row.style.display = '';
                    } else if (category) {
                        row.style.display = 'none';
                    }
                });
            }
        });
    });
});


/**
 * CitéPay - Script principal Espace Propriétaire
 * Version : 1.0.0
 * Architecture : Modulaire (ES6+)
 */

'use strict';

// ==========================================
// 1. GESTIONNAIRE D'ÉTAT (STATE MANAGEMENT)
// ==========================================
const AppState = {
    filters: {
        transactions: 'all',
        notifications: 'all',
        settings: 'all'
    },
    ui: {
        isModalOpen: false,
        lastScrollTop: 0,
        isBottomNavVisible: true
    },
    // Données réactives simulées pour les graphiques et indicateurs
    stats: {
        revenueCurrentMonth: 2140000,
        recoveryRate: 95,
        monthlyData: [
            { month: 'Juin', amount: 1500000, percent: 75 },
            { month: 'Juillet', amount: 1650000, percent: 82 },
            { month: 'Août (En cours)', amount: 1800000, percent: 90 }
        ]
    }
};

// ==========================================
// 2. SYSTÈME DE NOTIFICATIONS TOAST
// ==========================================
class ToastNotification {
    constructor() {
        this.container = this._createContainer();
    }

    _createContainer() {
        let container = document.getElementById('toast-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'toast-container';
            container.className = 'toast-container';
            container.setAttribute('aria-live', 'polite');
            document.body.appendChild(container);
        }
        return container;
    }

    /**
     * Affiche un notification toast
     * @param {string} message - Message à afficher
     * @param {'success'|'warning'|'info'|'danger'} type - Type de notification
     * @param {number} duration - Durée en ms (défaut: 3000ms)
     */
    show(message, type = 'info', duration = 3000) {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type} toast-enter`;
        
        const icons = {
            success: 'check_circle',
            warning: 'warning',
            danger: 'error',
            info: 'info'
        };

        toast.innerHTML = `
            <span class="material-symbols-rounded toast-icon">${icons[type] || 'info'}</span>
            <span class="toast-message">${message}</span>
            <button class="toast-close" aria-label="Fermer la notification">
                <span class="material-symbols-rounded">close</span>
            </button>
        `;

        this.container.appendChild(toast);

        // Animation d'entrée
        requestAnimationFrame(() => {
            toast.classList.remove('toast-enter');
            toast.classList.add('toast-visible');
        });

        // Gestion de la fermeture
        const closeToast = () => {
            toast.classList.remove('toast-visible');
            toast.classList.add('toast-exit');
            toast.addEventListener('transitionend', () => toast.remove());
        };

        toast.querySelector('.toast-close').addEventListener('click', closeToast);

        // Auto-dismiss
        if (duration > 0) {
            setTimeout(closeToast, duration);
        }
    }
}

const Toast = new ToastNotification();

// ==========================================
// 3. GESTIONNAIRE DE MODALES INTERACTIVES
// ==========================================
class ModalManager {
    constructor() {
        this.activeModal = null;
        this._bindGlobalEvents();
    }

    _bindGlobalEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && AppState.ui.isModalOpen) {
                this.close();
            }
        });
    }

    /**
     * Ouvre une modale personnalisée
     * @param {Object} options - { title, bodyContent, primaryActionText, onConfirm }
     */
    open({ title, bodyContent, primaryActionText = 'Confirmer', onConfirm }) {
        if (this.activeModal) this.close();

        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';

        const modal = document.createElement('div');
        modal.className = 'modal-card';
        modal.setAttribute('role', 'dialog');
        modal.setAttribute('aria-modal', 'true');

        modal.innerHTML = `
            <div class="modal-header">
                <h3>${title}</h3>
                <button class="modal-close-btn" aria-label="Fermer la fenêtre">
                    <span class="material-symbols-rounded">close</span>
                </button>
            </div>
            <div class="modal-body">${bodyContent}</div>
            <div class="modal-footer">
                <button class="btn-secondary btn-cancel">Annuler</button>
                <button class="btn-primary btn-confirm">${primaryActionText}</button>
            </div>
        `;

        backdrop.appendChild(modal);
        document.body.appendChild(backdrop);
        document.body.style.overflow = 'hidden';

        // Animation d'ouverture
        requestAnimationFrame(() => {
            backdrop.classList.add('active');
            modal.classList.add('active');
        });

        this.activeModal = backdrop;
        AppState.ui.isModalOpen = true;

        // Gestionnaires d'événements
        const close = () => this.close();
        modal.querySelector('.modal-close-btn').addEventListener('click', close);
        modal.querySelector('.btn-cancel').addEventListener('click', close);
        backdrop.addEventListener('click', (e) => {
            if (e.target === backdrop) close();
        });

        modal.querySelector('.btn-confirm').addEventListener('click', async () => {
            if (onConfirm) {
                const btn = modal.querySelector('.btn-confirm');
                btn.disabled = true;
                btn.innerHTML = `<span class="material-symbols-rounded spin">progress_activity</span> Chargement...`;
                await onConfirm();
            }
            close();
        });
    }

    close() {
        if (!this.activeModal) return;

        const backdrop = this.activeModal;
        const modal = backdrop.querySelector('.modal-card');

        backdrop.classList.remove('active');
        modal.classList.remove('active');

        modal.addEventListener('transitionend', () => {
            backdrop.remove();
            document.body.style.overflow = '';
            this.activeModal = null;
            AppState.ui.isModalOpen = false;
        });
    }
}

const Modal = new ModalManager();

// ==========================================
// 4. ANIMATION DES GRAPHIQUES ET STATS
// ==========================================
class DashboardCharts {
    static init() {
        this.animateCounters();
        this.animateChartBars();
    }

    // Effet d'incrémentation fluide des chiffres KPI
    static animateCounters() {
        const values = document.querySelectorAll('.stat-value');
        values.forEach(el => {
            const rawText = el.innerText.trim();
            const match = rawText.match(/([\d,\.]+)/);
            if (!match) return;

            const targetVal = parseFloat(match[0].replace(',', '.'));
            const suffix = rawText.replace(match[0], '');
            let currentVal = 0;
            const duration = 1200; // ms
            const stepTime = 16;
            const steps = duration / stepTime;
            const increment = targetVal / steps;

            const timer = setInterval(() => {
                currentVal += increment;
                if (currentVal >= targetVal) {
                    currentVal = targetVal;
                    clearInterval(timer);
                }
                const formattedNumber = Number.isInteger(targetVal) 
                    ? Math.round(currentVal) 
                    : currentVal.toFixed(1);
                
                el.innerHTML = `${formattedNumber} <small>${suffix}</small>`;
            }, stepTime);
        });
    }

    // Animation au défilement pour les barres de graphique via IntersectionObserver
    static animateChartBars() {
        const bars = document.querySelectorAll('.chart-bar-fill');
        if (!bars.length) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    bar.style.width = '0%';
                    bar.style.transition = 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)';
                    
                    // Récupération des données fictives basées sur la classe de mois
                    let targetWidth = '75%';
                    if (bar.classList.contains('bar-june')) targetWidth = '75%';
                    if (bar.classList.contains('bar-july')) targetWidth = '85%';
                    if (bar.classList.contains('bar-august')) targetWidth = '95%';

                    requestAnimationFrame(() => {
                        bar.style.width = targetWidth;
                    });
                    observer.unobserve(bar);
                }
            });
        }, { threshold: 0.3 });

        bars.forEach(bar => observer.observe(bar));
    }
}

// ==========================================
// 5. FILTRAGE DYNAMIQUE DE DONNÉES
// ==========================================
class FilterController {
    static init() {
        const filterChips = document.querySelectorAll('.filter-chip');
        if (!filterChips.length) return;

        filterChips.forEach(chip => {
            chip.addEventListener('click', (e) => {
                const targetBtn = e.currentTarget;
                const filterValue = targetBtn.dataset.filter;

                // Mise à jour de l'état actif des chips
                filterChips.forEach(c => c.classList.remove('active'));
                targetBtn.classList.add('active');

                // Application du filtre selon le contexte de la page
                this.applyFilter(filterValue);
            });
        });
    }

    static applyFilter(filterValue) {
        // Filtre pour le tableau de transactions (Finances / Accueil)
        const tableRows = document.querySelectorAll('.data-table tbody tr');
        if (tableRows.length) {
            tableRows.forEach(row => {
                const status = row.dataset.status;
                if (filterValue === 'all' || status === filterValue) {
                    row.style.display = '';
                    row.animate([
                        { opacity: 0, transform: 'translateY(6px)' },
                        { opacity: 1, transform: 'translateY(0)' }
                    ], { duration: 250, fill: 'forwards' });
                } else {
                    row.style.display = 'none';
                }
            });
        }

        // Filtre pour la page Notifications
        const notifCards = document.querySelectorAll('.notification-card');
        if (notifCards.length) {
            notifCards.forEach(card => {
                const category = card.dataset.category;
                const status = card.dataset.status;
                
                let isMatch = false;
                if (filterValue === 'all') isMatch = true;
                else if (filterValue === 'unread' && status === 'unread') isMatch = true;
                else if (category === filterValue) isMatch = true;

                card.style.display = isMatch ? 'flex' : 'none';
            });
        }

        // Filtre pour la page Paramètres
        const settingsSections = document.querySelectorAll('.settings-card');
        if (settingsSections.length) {
            settingsSections.forEach(section => {
                const category = section.dataset.category;
                section.style.display = (filterValue === 'all' || category === filterValue) ? 'block' : 'none';
            });
        }
    }
}

// ==========================================
// 6. NAVIGATION MOBILE & RESPONSIVE UX
// ==========================================
class NavigationManager {
    static init() {
        this.sidebarToggle();
        this.setupMobileBottomNav();
        this.setupScrollBehavior();
    }

    // Bascule Sidebar Desktop / Tablette
    static sidebarToggle() {
        const toggles = document.querySelectorAll('.sidebar-toggle');
        const sidebar = document.querySelector('.sidebar');
        
        toggles.forEach(toggle => {
            toggle.addEventListener('click', () => {
                if (sidebar) {
                    sidebar.classList.toggle('collapsed');
                    const isCollapsed = sidebar.classList.contains('collapsed');
                    toggle.setAttribute('aria-expanded', !isCollapsed);
                }
            });
        });
    }

    // Transformer/Adapter la navigation sur Mobile (Bottom Navigation)
    static setupMobileBottomNav() {
        const isMobile = window.innerWidth <= 768;
        const menuList = document.querySelector('.menu-list');

        if (isMobile && menuList) {
            // S'assurer que le premier niveau d'icônes principales est visible en bas
            const activeLink = document.querySelector('.menu-link.active');
            if (activeLink) {
                activeLink.scrollIntoView({ behavior: 'smooth', inline: 'center' });
            }
        }
    }

    // Masquage intelligent de la barre mobile lors du défilement
    static setupScrollBehavior() {
        let lastScrollTop = 0;
        const siteNav = document.querySelector('.site-nav');

        window.addEventListener('scroll', () => {
            if (window.innerWidth > 768) return;

            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop && currentScroll > 60) {
                // Défilement vers le bas : Masquer l'en-tête mobile
                if (siteNav) siteNav.style.transform = 'translateY(-100%)';
            } else {
                // Défilement vers le haut : Afficher
                if (siteNav) siteNav.style.transform = 'translateY(0)';
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        }, { passive: true });
    }
}

// ==========================================
// 7. SKELETON LOADING (CHARGEMENT FICTIF)
// ==========================================
class SkeletonLoader {
    static init() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => card.classList.add('skeleton-active'));

        // Simule le chargement dynamique des données
        setTimeout(() => {
            cards.forEach(card => card.classList.remove('skeleton-active'));
        }, 600);
    }
}

// ==========================================
// 8. ACTIONS RAPIDES & INTERACTION UTILISATEUR
// ==========================================
class QuickActions {
    static init() {
        this.bindReminderButtons();
        this.bindReceiptButtons();
        this.bindNotificationRead();
    }

    // Relancer un locataire en retard
    static bindReminderButtons() {
        document.body.addEventListener('click', (e) => {
            const reminderBtn = e.target.closest('.payment-hero-card button, .btn-relancer');
            if (!reminderBtn) return;

            Modal.open({
                title: 'Relance des loyers impayés',
                bodyContent: `
                    <p style="margin-bottom: 12px; color: var(--color-text-placeholder);">
                        Vous allez envoyer une relance automatique par SMS et notification aux locataires en retard de paiement.
                    </p>
                    <div style="background: var(--color-bg-secondary); padding: 12px; border-radius: 8px; font-size: 0.9rem;">
                        <strong>Locataires concernés :</strong>
                        <ul style="margin-top: 6px; padding-left: 18px;">
                            <li>Fatou Diabaté — 150 000 FCFA</li>
                            <li>Yao Brou — 95 000 FCFA</li>
                        </ul>
                    </div>
                `,
                primaryActionText: 'Envoyer les rappels',
                onConfirm: async () => {
                    // Simulation d'un appel réseau API
                    await new Promise(res => setTimeout(res, 1000));
                    Toast.show('Les rappels de paiement ont été envoyés avec succès !', 'success');
                }
            });
        });
    }

    // Télécharger une quittance PDF
    static bindReceiptButtons() {
        document.body.addEventListener('click', (e) => {
            const downloadBtn = e.target.closest('.btn-download-receipt');
            if (!downloadBtn) return;

            Toast.show('Génération du reçu PDF en cours...', 'info', 2000);
            
            setTimeout(() => {
                Toast.show('Le reçu PDF a été téléchargé avec succès.', 'success');
            }, 2200);
        });
    }

    // Marquer les notifications comme lues
    static bindNotificationRead() {
        const markBtns = document.querySelectorAll('.mark-read-btn');
        markBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const card = e.target.closest('.notification-card');
                if (card) {
                    card.classList.remove('unread');
                    card.dataset.status = 'read';
                    btn.remove();
                    Toast.show('Notification marquée comme lue', 'info', 2000);
                }
            });
        });
    }
}

// ==========================================
// 9. INITIALISATION DE L'APPLICATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    SkeletonLoader.init();
    NavigationManager.init();
    DashboardCharts.init();
    FilterController.init();
    QuickActions.init();
});