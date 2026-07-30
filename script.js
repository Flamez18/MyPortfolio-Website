// =========================================
//   Mobile Navigation Toggle
// =========================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// =========================================
//   Navbar Background on Scroll
// =========================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// =========================================
//   Smooth Scroll (anchor links)
// =========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// =========================================
//   Skill Bars — Index Page (.progress)
// =========================================
const skillObserverIndex = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.progress').forEach(bar => {
                bar.style.width = bar.getAttribute('data-width') || '0%';
            });
            skillObserverIndex.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.skill-category').forEach(cat => skillObserverIndex.observe(cat));

// =========================================
//   Skill Bars — About Page (.skill-bar-fill)
// =========================================
const skillObserverAbout = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-bar-fill').forEach(fill => {
                fill.style.width = fill.getAttribute('data-width') || '0%';
            });
            skillObserverAbout.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.skill-full-card').forEach(card => skillObserverAbout.observe(card));

// =========================================
//   3. Scroll Reveal — Generic .reveal
// =========================================
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// =========================================
//   4. Stagger Cards / Items
// =========================================
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.stagger-item').forEach(item => {
                item.classList.add('visible');
            });
            staggerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.stagger-container').forEach(container => staggerObserver.observe(container));

// =========================================
//   5. Count-Up Numbers (stats)
// =========================================
function animateCountUp(el, target, suffix, duration) {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
        start += step;
        if (start >= target) {
            start = target;
            clearInterval(timer);
        }
        el.textContent = start + suffix;
    }, 16);
}

const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statEl  = entry.target;
            const h3      = statEl.querySelector('h3');
            const target  = parseInt(statEl.getAttribute('data-count')) || 0;
            const suffix  = statEl.getAttribute('data-suffix') || '';
            if (h3) animateCountUp(h3, target, suffix, 1200);
            countObserver.unobserve(statEl);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.stat[data-count]').forEach(stat => countObserver.observe(stat));

// =========================================
//   6. Timeline Fade-Up (Mobile & Desktop Safe)
// =========================================
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            timelineObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

timelineItems.forEach(item => timelineObserver.observe(item));

// =========================================
//   7. Skill Tag Pop-in
// =========================================
document.querySelectorAll('.skill-tag-pop').forEach((tag, i) => {
    tag.style.transitionDelay = (i * 0.05) + 's';
});

const tagObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelectorAll('.skill-tag-pop').forEach(tag => {
                tag.classList.add('visible');
            });
            tagObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.skill-category, .skills-grid').forEach(el => tagObserver.observe(el));