/*
 * Seattle MasterFix scheduling configuration
 * Replace the empty value below with the full Calendly event URL.
 * Example: https://calendly.com/your-account/project-consultation
 */
const MASTERFIX_CALENDLY_URL = 'https://calendly.com/bill-seattlemasterfix';

(() => {
    const bookingLinks = document.querySelectorAll('.js-calendly');
    const schedulerFab = document.getElementById('scheduler-fab');

    if (!MASTERFIX_CALENDLY_URL) return;

    bookingLinks.forEach((link) => {
        link.href = MASTERFIX_CALENDLY_URL;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';

        link.addEventListener('click', (event) => {
            // The direct link remains a reliable fallback if Calendly's script is delayed.
            if (!window.Calendly) return;

            event.preventDefault();

            const firstName = document.getElementById('firstName')?.value.trim() || '';
            const lastName = document.getElementById('lastName')?.value.trim() || '';
            const email = document.getElementById('email')?.value.trim() || '';

            window.Calendly.initPopupWidget({
                url: MASTERFIX_CALENDLY_URL,
                prefill: {
                    name: `${firstName} ${lastName}`.trim(),
                    email
                },
                utm: {
                    utmSource: 'seattle-masterfix-website',
                    utmMedium: 'website',
                    utmCampaign: 'project-consultation'
                }
            });
        });
    });

    if (schedulerFab) schedulerFab.hidden = false;
})();
