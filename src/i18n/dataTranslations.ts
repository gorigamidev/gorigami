// Global data translation handler
import { getLang } from './utils';
import { getLocalizedField } from './helpers';
import { services } from '../data/services';
import { processSteps } from '../data/process';
import { products } from '../data/products';
import { teamMembers } from '../data/team';
import { demos } from '../data/demos';

export function updateAllDataTranslations() {
    const lang = getLang();

    // Update services
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        if (services[index]) {
            const service = services[index];
            const nameEl = card.querySelector('[data-i18n-field="name"]');
            const tagEl = card.querySelector('[data-i18n-field="tag"]');
            const descEl = card.querySelector('[data-i18n-field="description"]');

            if (nameEl) nameEl.textContent = getLocalizedField(service, 'name', lang);
            if (tagEl) tagEl.textContent = getLocalizedField(service, 'tag', lang);
            if (descEl) descEl.textContent = getLocalizedField(service, 'description', lang);
        }
    });

    // Update process steps
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card, index) => {
        if (processSteps[index]) {
            const step = processSteps[index];
            const titleEl = card.querySelector('[data-i18n-field="title"]');
            const descEl = card.querySelector('[data-i18n-field="description"]');

            if (titleEl) titleEl.textContent = getLocalizedField(step, 'title', lang);
            if (descEl) descEl.textContent = getLocalizedField(step, 'description', lang);
        }
    });

    // Update products
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        if (products[index]) {
            const product = products[index];
            const nameEl = card.querySelector('[data-i18n-field="name"]');
            const taglineEl = card.querySelector('[data-i18n-field="tagline"]');
            const descEl = card.querySelector('[data-i18n-field="description"]');

            if (nameEl) nameEl.textContent = getLocalizedField(product, 'name', lang);
            if (taglineEl) taglineEl.textContent = getLocalizedField(product, 'tagline', lang);
            if (descEl) descEl.textContent = getLocalizedField(product, 'description', lang);
        }
    });

    // Update team members
    const teamCards = document.querySelectorAll('.team-member');
    teamCards.forEach((card, index) => {
        if (teamMembers[index]) {
            const member = teamMembers[index];
            const roleEl = card.querySelector('[data-i18n-field="role"]');
            const descEl = card.querySelector('[data-i18n-field="descriptor"]');

            if (roleEl) roleEl.textContent = getLocalizedField(member, 'role', lang);
            if (descEl) descEl.textContent = getLocalizedField(member, 'descriptor', lang);
        }
    });

    // Update case study details (if on case study page)
    const caseStudy = document.querySelector('.case-study-content');
    if (caseStudy) {
        const slug = caseStudy.getAttribute('data-slug');
        const demo = demos.find(d => d.slug === slug);
        if (demo) {
            const overviewEl = caseStudy.querySelector('[data-i18n-field="overview"]');
            const challengeEl = caseStudy.querySelector('[data-i18n-field="challenge"]');
            const approachEl = caseStudy.querySelector('[data-i18n-field="approach"]');
            const resultsEl = caseStudy.querySelector('[data-i18n-field="results"]');
            const featuresList = caseStudy.querySelector('[data-i18n-field="features"]');

            if (overviewEl) overviewEl.textContent = getLocalizedField(demo, 'overview', lang);
            if (challengeEl) challengeEl.textContent = getLocalizedField(demo, 'challenge', lang);
            if (approachEl) approachEl.textContent = getLocalizedField(demo, 'approach', lang);
            if (resultsEl) resultsEl.textContent = getLocalizedField(demo, 'results', lang);

            if (featuresList) {
                const features = getLocalizedField(demo, 'features', lang);
                // Clear and rebuild list items to preserve CSS styling
                featuresList.innerHTML = '';
                features.forEach((feature: string) => {
                    const li = document.createElement('li');
                    li.textContent = feature;
                    featuresList.appendChild(li);
                });
            }
        }
    }
}
