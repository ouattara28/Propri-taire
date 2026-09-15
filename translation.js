/**
 * ==========================================================================
 * CitéPay - Système de traduction (i18n)
 * --------------------------------------------------------------------------
 * 1. Dictionnaire de traductions (FR / EN) et configurations régionales.
 * 2. Moteur d'application des traductions sur toutes les pages du site.
 * 3. Persistance du choix de langue via localStorage (clé "citepay_lang").
 * ========================================================================== */

const translations = {
    fr: {
        locale: 'fr-FR',
        currency: 'XOF',
        currencySymbol: 'FCFA',

        // Sidebar / Navigation
        profession_owner: "Espace Propriétaire",
        profession_tenant: "Espace Locataire",
        search_placeholder: "Rechercher...",
        nav_home: "Accueil",
        nav_properties: "Biens",
        nav_dashboard: "Tableau de bord",
        nav_finances: "Finances",
        nav_tenants: "Locataires",
        nav_notifications: "Notifications",
        nav_settings: "Paramètres",
        nav_logout: "Déconnexion",
        nav_documents: "Documents",
        nav_payments: "Paiements",
        theme_toggle_label: "Mode sombre",

        // Accueil (index.html)
        greeting_hello: "Bonjour",
        portfolio_subtitle: "Portefeuille · 3 résidences",
        stat_collected_month: "Encaissé ce mois",
        stat_vs_last_month: "+12% vs juil.",
        stat_pending_rents: "Loyers en attente",
        stat_tenants_count_3: "3 locataires",
        stat_occupancy_rate: "Taux d'occupation",
        stat_units_18_20: "18/20 unités",
        badge_bulk_action: "Action groupée",
        hero_title: "Relancez vos paiements en un clic",
        hero_text: "Envoyez des rappels automatiques de loyer par SMS ou notification aux locataires en retard.",
        btn_send_reminders: "Envoyer les rappels de loyer",
        quick_access_title: "Accès rapide",
        quick_my_tenants: "Mes Locataires",
        quick_tenants_active: "18 actifs",
        quick_leases: "Baux",
        quick_leases_renew: "3 à renouveler",
        quick_maintenance: "Maintenance",
        quick_maintenance_ongoing: "2 en cours",
        quick_payments_label: "Paiements",
        quick_payments_history: "Voir historique",
        recent_activity: "Activité récente",
        see_all: "Tout voir",

        // Biens.html
        page_title_properties: "Mes biens",
        btn_add_property: "Ajouter un bien",
        stat_total_residences: "Total résidences",
        unit_word: "unités",
        stat_total_rented_units: "Total unités louées",
        label_collected: "Encaissé",

        // Locataires.html
        page_title_tenants: "Mes Locataires",
        subtitle_tenants: "Gestion et suivi de vos locataires actifs",
        btn_add_tenant: "Ajouter un locataire",
        directory_title: "Annuaire des locataires",
        th_contact: "Contact",
        th_assigned_property: "Bien assigné",
        th_monthly_rent: "Loyer mensuel",
        th_lease_status: "Statut bail",
        th_actions: "Actions",
        status_uptodate: "À jour",
        details_link: "Détails",

        // Finances.html
        page_title_finances: "Finances",
        subtitle_finances: "Vue d'ensemble et transactions",
        stat_paid: "Payé",
        stat_pending: "En attente",
        stat_late: "En retard",
        next_payment_title: "Prochain versement",
        btn_export: "Exporter",
        chart_title: "Évolution des encaissements",
        chart_subtitle: "Derniers mois (en FCFA)",
        filter_all: "Toutes",
        filter_paid: "Payées",
        filter_pending: "En attente",
        filter_late: "En retard",
        recent_transactions: "Transactions récentes",

        // Notifications.html
        page_title_notifications: "Notifications",
        subtitle_notifications: "Centre de rappels, alertes et messages importants",
        filter_all_notif: "Toutes",
        filter_unread: "Non lues",
        filter_payment: "Paiements",
        filter_info: "Information",
        btn_view_finances: "Voir les finances",
        btn_mark_read: "Marquer comme lue",
        btn_manage_property: "Gérer le bien",

        // Parametres.html
        page_title_settings: "Paramètres du compte",
        subtitle_settings: "Gérez vos informations, vos critères de versement et la sécurité",
        filter_all_settings: "Tous les réglages",
        filter_profile: "Profil & Activité",
        filter_payments_settings: "Versements",
        filter_language: "Langue & Région",
        filter_security: "Sécurité",
        section_profile_title: "Profil & Informations Propriétaire",
        profile_photo_label: "Photo de profil",
        btn_change_photo: "Changer la photo",
        btn_delete: "Supprimer",
        photo_format_hint: "Format JPG, PNG ou WEBP. Max 5 Mo.",
        label_fullname: "Nom complet",
        label_phone: "Numéro de téléphone",
        label_email: "Adresse Email",
        label_location: "Localisation / Ville",
        label_portfolio_readonly: "Portefeuille immobilier (Lecture seule)",
        btn_save_changes: "Enregistrer les modifications",
        section_payments_title: "Comptes de versement des loyers",
        btn_add_account: "Ajouter un compte",
        default_badge: "Par défaut",
        btn_set_default: "Définir par défaut",
        settings_lang_title: "Langue & Région",
        settings_lang_label: "Langue de l'interface",
        label_timezone: "Fuseau horaire",
        btn_apply_preferences: "Appliquer les préférences",
        section_security_title: "Sécurité & Connexion",
        change_password_title: "Modifier le mot de passe",
        label_current_password: "Mot de passe actuel",
        label_new_password: "Nouveau mot de passe",
        btn_update_password: "Mettre à jour le mot de passe",

        // Connexion.html
        auth_welcome_title: "Bienvenue !",
        auth_login_subtitle: "Veuillez saisir vos identifiants pour accéder à votre espace",
        label_email_auth: "Adresse e-mail",
        label_password_auth: "Mot de passe",
        remember_me: "Se souvenir de moi",
        forgot_password: "Mot de passe oublié ?",
        btn_login: "Se connecter",
        auth_no_account: "Vous n'avez pas encore de compte ?",
        auth_create_account: "Créer un compte",

        // Inscription.html
        auth_register_subtitle: "Rejoignez CitéPay en tant que propriétaire",
        btn_register: "S'inscrire",
        auth_have_account: "Vous avez déjà un compte ?",
        auth_login_link: "Connectez-vous",

        // Deconnexion.html
        logout_title: "Déconnexion en cours...",
        logout_message_full: "Merci d'avoir utilisé <strong>CitéPay</strong>. Votre session est en cours de fermeture en toute sécurité.",
        btn_reconnect: "Se reconnecter",
        btn_back_home: "Retour à l'accueil",

        // Documents.html
        page_title_documents: "Documents",
        subtitle_documents: "Votre bail, reçus et attestations, toujours accessibles",
        filter_all_docs: "Tous",
        filter_bail: "Bail",
        filter_recu: "Reçus",
        filter_attestation: "Attestations",
        section_bail_title: "Contrat de bail",
        section_recu_title: "Reçus de paiement",
        section_attestation_title: "Attestations",

        // Notifications & Toasts
        toast_lang_changed: "Langue mise à jour avec succès !",

        // Badges de statut (utilisés dans les tableaux : accueil, finances...)
        status_paid: "Payé",
        status_pending: "En attente",
        status_late: "En retard",

        // Tableaux communs
        th_tenant: "Locataire",
        th_amount: "Montant",
        th_status: "Statut",
        th_date: "Date",
        th_property: "Bien / Résidence"
    },
    en: {
        locale: 'en-US',
        currency: 'USD',
        currencySymbol: '$',

        // Sidebar / Navigation
        profession_owner: "Owner Space",
        profession_tenant: "Tenant Space",
        search_placeholder: "Search...",
        nav_home: "Home",
        nav_properties: "Properties",
        nav_dashboard: "Dashboard",
        nav_finances: "Finances",
        nav_tenants: "Tenants",
        nav_notifications: "Notifications",
        nav_settings: "Settings",
        nav_logout: "Log out",
        nav_documents: "Documents",
        nav_payments: "Payments",
        theme_toggle_label: "Dark mode",

        // Home (index.html)
        greeting_hello: "Hello",
        portfolio_subtitle: "Portfolio · 3 properties",
        stat_collected_month: "Collected this month",
        stat_vs_last_month: "+12% vs Jul.",
        stat_pending_rents: "Pending rents",
        stat_tenants_count_3: "3 tenants",
        stat_occupancy_rate: "Occupancy rate",
        stat_units_18_20: "18/20 units",
        badge_bulk_action: "Bulk action",
        hero_title: "Chase your payments in one click",
        hero_text: "Send automatic rent reminders by SMS or notification to late tenants.",
        btn_send_reminders: "Send rent reminders",
        quick_access_title: "Quick access",
        quick_my_tenants: "My Tenants",
        quick_tenants_active: "18 active",
        quick_leases: "Leases",
        quick_leases_renew: "3 to renew",
        quick_maintenance: "Maintenance",
        quick_maintenance_ongoing: "2 ongoing",
        quick_payments_label: "Payments",
        quick_payments_history: "View history",
        recent_activity: "Recent activity",
        see_all: "See all",

        // Properties.html
        page_title_properties: "My properties",
        btn_add_property: "Add a property",
        stat_total_residences: "Total residences",
        unit_word: "units",
        stat_total_rented_units: "Total rented units",
        label_collected: "Collected",

        // Tenants.html
        page_title_tenants: "My Tenants",
        subtitle_tenants: "Management and tracking of your active tenants",
        btn_add_tenant: "Add a tenant",
        directory_title: "Tenant directory",
        th_contact: "Contact",
        th_assigned_property: "Assigned property",
        th_monthly_rent: "Monthly rent",
        th_lease_status: "Lease status",
        th_actions: "Actions",
        status_uptodate: "Up to date",
        details_link: "Details",

        // Finances.html
        page_title_finances: "Finances",
        subtitle_finances: "Overview and transactions",
        stat_paid: "Paid",
        stat_pending: "Pending",
        stat_late: "Late",
        next_payment_title: "Next payout",
        btn_export: "Export",
        chart_title: "Collections trend",
        chart_subtitle: "Recent months (in FCFA)",
        filter_all: "All",
        filter_paid: "Paid",
        filter_pending: "Pending",
        filter_late: "Late",
        recent_transactions: "Recent transactions",

        // Notifications.html
        page_title_notifications: "Notifications",
        subtitle_notifications: "Center for reminders, alerts and important messages",
        filter_all_notif: "All",
        filter_unread: "Unread",
        filter_payment: "Payments",
        filter_info: "Information",
        btn_view_finances: "View finances",
        btn_mark_read: "Mark as read",
        btn_manage_property: "Manage property",

        // Settings.html
        page_title_settings: "Account settings",
        subtitle_settings: "Manage your information, payout details and security",
        filter_all_settings: "All settings",
        filter_profile: "Profile & Activity",
        filter_payments_settings: "Payouts",
        filter_language: "Language & Region",
        filter_security: "Security",
        section_profile_title: "Profile & Owner Information",
        profile_photo_label: "Profile photo",
        btn_change_photo: "Change photo",
        btn_delete: "Delete",
        photo_format_hint: "JPG, PNG or WEBP format. Max 5 MB.",
        label_fullname: "Full name",
        label_phone: "Phone number",
        label_email: "Email address",
        label_location: "Location / City",
        label_portfolio_readonly: "Real estate portfolio (Read only)",
        btn_save_changes: "Save changes",
        section_payments_title: "Rent payout accounts",
        btn_add_account: "Add an account",
        default_badge: "Default",
        btn_set_default: "Set as default",
        settings_lang_title: "Language & Region",
        settings_lang_label: "Interface language",
        label_timezone: "Timezone",
        btn_apply_preferences: "Apply preferences",
        section_security_title: "Security & Login",
        change_password_title: "Change password",
        label_current_password: "Current password",
        label_new_password: "New password",
        btn_update_password: "Update password",

        // Login.html
        auth_welcome_title: "Welcome!",
        auth_login_subtitle: "Please enter your credentials to access your account",
        label_email_auth: "Email address",
        label_password_auth: "Password",
        remember_me: "Remember me",
        forgot_password: "Forgot password?",
        btn_login: "Log in",
        auth_no_account: "Don't have an account yet?",
        auth_create_account: "Create an account",

        // Register.html
        auth_register_subtitle: "Join CitéPay as an owner",
        btn_register: "Sign up",
        auth_have_account: "Already have an account?",
        auth_login_link: "Log in",

        // Logout.html
        logout_title: "Logging out...",
        logout_message_full: "Thank you for using <strong>CitéPay</strong>. Your session is being securely closed.",
        btn_reconnect: "Log back in",
        btn_back_home: "Back to home",

        // Documents.html
        page_title_documents: "Documents",
        subtitle_documents: "Your lease, receipts and certificates, always accessible",
        filter_all_docs: "All",
        filter_bail: "Lease",
        filter_recu: "Receipts",
        filter_attestation: "Certificates",
        section_bail_title: "Lease agreement",
        section_recu_title: "Payment receipts",
        section_attestation_title: "Certificates",

        // Notifications & Toasts
        toast_lang_changed: "Language successfully updated!",

        // Status badges (used in tables: home, finances...)
        status_paid: "Paid",
        status_pending: "Pending",
        status_late: "Late",

        // Common tables
        th_tenant: "Tenant",
        th_amount: "Amount",
        th_status: "Status",
        th_date: "Date",
        th_property: "Property / Residence"
    }
};

/**
 * ==========================================================================
 * MOTEUR DE TRADUCTION (i18n Engine)
 * --------------------------------------------------------------------------
 * - Clé de persistance : localStorage["citepay_lang"] ("fr" ou "en")
 * - Applique les traductions à tout élément portant :
 *     data-i18n="cle"              -> remplace le textContent
 *     data-i18n-html="cle"         -> remplace l'innerHTML (autorise le HTML, ex: <strong>)
 *     data-i18n-placeholder="cle"  -> remplace l'attribut placeholder
 *     data-i18n-title="cle"        -> remplace l'attribut title
 * - Chaque page relit localStorage à son chargement, ce qui garantit que la
 *   langue choisie dans Paramètres reste appliquée partout sur le site.
 * ========================================================================== */

const LANG_STORAGE_KEY = 'citepay_lang';

const I18N = {
    // Langue actuellement active
    current: 'fr',

    // Récupère la langue sauvegardée (ou 'fr' par défaut)
    getSavedLang() {
        try {
            const saved = localStorage.getItem(LANG_STORAGE_KEY);
            if (saved && translations[saved]) return saved;
        } catch (e) {
            // localStorage indisponible (mode privé, etc.) -> on retombe sur le français
        }
        return 'fr';
    },

    // Sauvegarde la langue choisie
    saveLang(lang) {
        try {
            localStorage.setItem(LANG_STORAGE_KEY, lang);
        } catch (e) {
            // Silencieux si le stockage n'est pas disponible
        }
    },

    // Applique la traduction demandée à toute la page courante
    apply(lang) {
        if (!translations[lang]) lang = 'fr';
        this.current = lang;
        const dict = translations[lang];

        // Texte simple
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        // Texte avec balises HTML (ex: <strong>CitéPay</strong>)
        document.querySelectorAll('[data-i18n-html]').forEach((el) => {
            const key = el.getAttribute('data-i18n-html');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Attribut placeholder (champs de recherche, formulaires...)
        document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        // Attribut title (infobulles)
        document.querySelectorAll('[data-i18n-title]').forEach((el) => {
            const key = el.getAttribute('data-i18n-title');
            if (dict[key] !== undefined) {
                el.setAttribute('title', dict[key]);
            }
        });

        // Mise à jour de l'attribut lang sur la balise <html>
        document.documentElement.setAttribute('lang', lang);

        // Recalcul des infobulles générées à partir des libellés de menu
        document.querySelectorAll('.menu-link').forEach((link) => {
            const label = link.querySelector('.menu-label');
            const text = label ? label.textContent.trim() : link.textContent.trim();
            if (text) {
                link.setAttribute('title', text);
                link.setAttribute('data-tooltip', text);
            }
        });

        // Synchronisation du sélecteur de langue s'il est présent sur la page (parametres.html)
        const langSelect = document.getElementById('languageSelect');
        if (langSelect) langSelect.value = lang;
    },

    // Change la langue active, la persiste, l'applique et notifie l'utilisateur
    setLanguage(lang, { notify = false } = {}) {
        if (!translations[lang]) return;
        this.saveLang(lang);
        this.apply(lang);

        if (notify && typeof Toast !== 'undefined' && Toast && typeof Toast.show === 'function') {
            Toast.show(translations[lang].toast_lang_changed, 'success');
        }
    },

    // Initialisation au chargement de chaque page
    init() {
        const savedLang = this.getSavedLang();
        this.apply(savedLang);

        // Branchement du sélecteur de langue (présent uniquement sur parametres.html)
        const langSelect = document.getElementById('languageSelect');
        if (langSelect) {
            langSelect.value = savedLang;
            langSelect.addEventListener('change', (e) => {
                this.setLanguage(e.target.value, { notify: true });
            });
        }

        // Branchement du bouton "Appliquer les préférences" (soumission du formulaire langue)
        const langForm = document.getElementById('languageForm');
        if (langForm) {
            langForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const select = document.getElementById('languageSelect');
                if (select) this.setLanguage(select.value, { notify: true });
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    I18N.init();
});
