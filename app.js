/**
 * JADE AESTHETIQUE - INTERACTIVE ENGINE
 * High-End Aesthetic Dermatology, Cosmetology & Facial Aesthetics · Ahmedabad
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Dynamic Footer Year
  const yearEl = document.getElementById('currentYear');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // 2. Minimum Date for Booking (Next day onwards)
  const dateInput = document.getElementById('preferredDate');
  if (dateInput) {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const dd = String(tomorrow.getDate()).padStart(2, '0');
    dateInput.min = `${yyyy}-${mm}-${dd}`;
  }

  // 3. Mobile Navigation Drawer Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
      const isOpen = mobileDrawer.classList.contains('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close mobile drawer when link clicked
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        mobileBtn.setAttribute('aria-expanded', false);
      });
    });
  }

  // 4. Jade Aesthetique Treatment Data Dictionary
  const treatmentData = {
    medifacial: {
      category: 'Advanced Medifacial',
      title: 'Hydra-Dermabrasion & Dynamic Oxygenation',
      overview: 'Doctor-supervised vortex exfoliation, gentle suction comedone extraction, dynamic cellular oxygenation (CO2 micro-bubbles), and tailored transdermal peptide infusion.',
      duration: '45 to 60 Minutes',
      downtime: 'Zero downtime; immediate radiant barrier nourishment',
      sessions: 'Monthly maintenance or personalized skin-cycle rhythm',
      suitability: 'Congested pores, environmental dehydration, dullness, pre-event refinement',
      safety: 'Safe across Indian skin tones. Customized active serums based on epidermal sensitivity.',
      pricing: 'Customized based on nutrient infusion blend'
    },
    barrier: {
      category: 'Barrier Nutrition',
      title: 'Customized Barrier-Repair Therapy',
      overview: 'A clinical skin recovery protocol restoring cellular lipids, ceramides, and natural moisturizing factors (NMF). Calms reactive and sensitive skin barriers.',
      duration: '45 Minutes',
      downtime: 'None; immediate soothing relief',
      sessions: '2 to 4 sessions spaced 2 weeks apart',
      suitability: 'Compromised skin barriers, redness, seasonal flaking, post-procedure recovery',
      safety: 'Hypoallergenic and fragrance-free medical formulas.',
      pricing: 'Consultation & assessment plan'
    },
    'laser-toning': {
      category: 'Laser Clarity',
      title: 'Q-Switch Nd:YAG Laser Toning',
      overview: 'Gold-standard 1064nm photo-acoustic laser energy gently shattering dermal and epidermal melanin deposits without thermal surface burning.',
      duration: '30 to 45 Minutes',
      downtime: 'Zero downtime; resume daily routine immediately',
      sessions: '4 to 6 sessions spaced 3–4 weeks apart',
      suitability: 'Epidermal melasma, stubborn tanning, sun spots, post-acne pigmentation',
      safety: 'Mandatory pre-treatment test spot. Strict daily broad-spectrum sun protection recommended.',
      pricing: 'Personalized protocol following assessment'
    },
    biorepeel: {
      category: 'Biphasic Skin Clarification',
      title: 'BioRePeel Biphasic Peeling (Italy)',
      overview: 'Patented 2-phase technology combining lipophilic and hydrophilic active complexes. Stimulates fibroblast activity and cell renewal without aggressive peeling or photosensitivity.',
      duration: '30 Minutes',
      downtime: 'Minimal; mild micro-exfoliation for 24–48 hours',
      sessions: '3 to 4 sessions',
      suitability: 'Uneven texture, active comedones, superficial scarring, dull tone',
      safety: 'All-season biphasic formulation suitable for South Asian skin types.',
      pricing: 'Quoted upon facial assessment'
    },
    injectables: {
      category: 'Perioral & Dynamic Harmony',
      title: 'Conservative Aesthetic Injectables',
      overview: 'Micro-targeted neuromodulator placement and structural hyaluronic acid contouring performed exclusively by Dr. Vinita Karia. Preserves individual animation and natural warmth.',
      duration: '30 to 45 Minutes',
      downtime: 'Zero to subtle pin-point redness for a few hours',
      sessions: 'Single treatment with a 14-day clinical review',
      suitability: 'Forehead lines, crow\'s feet, gummy smile reduction, perioral volume restoration',
      safety: 'USFDA-cleared products only. Conservative micro-dosing approach.',
      pricing: 'Anatomically mapped at consultation'
    },
    microneedling: {
      category: 'Collagen Remodeling',
      title: 'Microneedling & Perioral Rejuvenation',
      overview: 'Medical-grade automated micro-needling generating controlled vertical micro-channels to stimulate endogenous neocollagenesis and elastin formation around smile lines.',
      duration: '45 Minutes',
      downtime: '24–36 hours of mild rosy flush',
      sessions: '3 to 5 sessions spaced 4 weeks apart',
      suitability: 'Textural irregularities, shallow smile creases, acne scar remodeling',
      safety: 'Sterile single-use needle cartridges with topical numbing for total comfort.',
      pricing: 'Personalized treatment roadmap'
    },
    veneers: {
      category: 'Smile Architecture',
      title: 'Porcelain Dental Veneers',
      overview: 'Ultra-thin, handcrafted ceramic laminates designed by Prosthodontist Dr. Vinita Karia to optimize dental proportions, tooth coloration, and light translucency.',
      duration: '2 to 3 appointments',
      downtime: 'None; temporary mockups provided during fabrication',
      sessions: 'Digital design, tooth preparation, and permanent bonding',
      suitability: 'Chipped teeth, intrinsic discoloration, spacing, microdontia, uneven smile arcs',
      safety: 'Minimally invasive enamel preservation techniques with high-magnification precision.',
      pricing: 'Bespoke prosthodontic quote'
    },
    aligners: {
      category: 'Orthodontic Alignment',
      title: 'Clear Aligner Orthodontics',
      overview: 'Sequenced transparent medical-grade aligners delivering gentle, predictable tooth movement. Discreetly aligns teeth without conventional metallic brackets.',
      duration: '6 to 14 months depending on complexity',
      downtime: 'None; fully removable for meals and hygiene',
      sessions: '3D digital scan & bi-monthly progress reviews',
      suitability: 'Crowding, spacing, rotated anterior teeth, bite refinement',
      safety: 'Digital force simulation avoiding excessive orthodontic pressure.',
      pricing: 'Customized orthodontic roadmap'
    },
    makeover: {
      category: 'Holistic Synthesis',
      title: 'Comprehensive Smile Makeovers',
      overview: 'Full smile architecture synthesized with lip line, vermilion border posture, and facial thirds for complete aesthetic harmony.',
      duration: 'Multi-stage treatment plan',
      downtime: 'Varies by chosen procedures',
      sessions: 'Planned collaboratively during consultation',
      suitability: 'Comprehensive restorative and aesthetic smile enhancement',
      safety: 'Rooted in Dr. Karia’s specialized prosthodontic principles.',
      pricing: 'Comprehensive assessment'
    }
  };

  // 5. Treatment Filter Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const treatmentCards = document.querySelectorAll('.treatment-card');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      treatmentCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Treatment Modal Dialog
  const modal = document.getElementById('treatmentModal');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const viewBtns = document.querySelectorAll('.view-treatment-btn');

  function openTreatmentModal(key) {
    const data = treatmentData[key];
    if (!data) return;

    modalBody.innerHTML = `
      <span class="modal-category">${data.category}</span>
      <h3 class="modal-title">${data.title}</h3>
      <p class="modal-overview">${data.overview}</p>
      
      <div class="modal-specs-grid">
        <div class="modal-spec-item">
          <strong>Procedure Duration</strong>
          <span>${data.duration}</span>
        </div>
        <div class="modal-spec-item">
          <strong>Expected Downtime</strong>
          <span>${data.downtime}</span>
        </div>
        <div class="modal-spec-item">
          <strong>Recommended Protocol</strong>
          <span>${data.sessions}</span>
        </div>
        <div class="modal-spec-item">
          <strong>Clinical Approach</strong>
          <span>${data.pricing}</span>
        </div>
      </div>

      <div class="modal-notes-box">
        <h4>Clinical Suitability</h4>
        <p>${data.suitability}</p>
      </div>

      <div class="modal-notes-box">
        <h4>Safety & Precision</h4>
        <p>${data.safety}</p>
      </div>

      <div class="modal-footer">
        <div>
          <span style="font-size:0.75rem; color:#8C7B6B; display:block;">Jade Aesthetique</span>
          <strong style="font-size:0.85rem; color:#5E6F5F;">Sindhu Bhavan Road, Bodakdev</strong>
        </div>
        <a href="#book" class="btn btn-primary btn-sm" onclick="closeModalAndScroll()">Schedule Assessment</a>
      </div>
    `;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeTreatmentModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  window.closeModalAndScroll = function() {
    closeTreatmentModal();
  };

  viewBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const modalKey = btn.getAttribute('data-modal');
      openTreatmentModal(modalKey);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeTreatmentModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeTreatmentModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeTreatmentModal();
    }
  });

  // 7. Consultation Booking Form Submission
  const bookingForm = document.getElementById('consultationForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  const successDetails = document.getElementById('successDetails');

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const requiredInputs = bookingForm.querySelectorAll('[required]');

      requiredInputs.forEach(input => {
        const formGroup = input.closest('.form-group');
        if (!input.value.trim()) {
          isValid = false;
          formGroup.classList.add('has-error');
        } else {
          formGroup.classList.remove('has-error');
        }

        // Email check
        if (input.type === 'email' && input.value.trim()) {
          const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailPattern.test(input.value.trim())) {
            isValid = false;
            formGroup.classList.add('has-error');
          }
        }

        // Phone check
        if (input.type === 'tel' && input.value.trim()) {
          if (input.value.replace(/\D/g, '').length < 10) {
            isValid = false;
            formGroup.classList.add('has-error');
          }
        }
      });

      if (!isValid) {
        const firstError = bookingForm.querySelector('.has-error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      // Collect form data
      const formData = new FormData(bookingForm);
      const name = formData.get('fullName');
      const phone = formData.get('phone');
      const concernText = bookingForm.querySelector('#concern option:checked').textContent;
      const date = formData.get('preferredDate');
      const timeSlotText = bookingForm.querySelector('#preferredTime option:checked').textContent;

      // Populate Success Box
      const refNumber = 'JADE-' + Math.floor(100000 + Math.random() * 900000);
      successDetails.innerHTML = `
        <p><strong>Appointment ID:</strong> ${refNumber}</p>
        <p><strong>Patient Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Primary Focus:</strong> ${escapeHtml(concernText)}</p>
        <p><strong>Requested Slot:</strong> ${escapeHtml(date)} (${escapeHtml(timeSlotText)})</p>
        <p><strong>Location:</strong> 201, Hetdiv Square, Sindhu Bhavan Road, Bodakdev</p>
      `;

      bookingForm.style.display = 'none';
      bookingSuccess.classList.add('active');
      bookingSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  function escapeHtml(text) {
    if (!text) return '';
    return text
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // 8. Mobile Sticky Bar Visibility Logic
  const mobileBar = document.getElementById('mobileStickyBar');
  const heroSection = document.getElementById('hero');

  if (mobileBar && heroSection) {
    window.addEventListener('scroll', () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (window.innerWidth <= 768) {
        if (heroBottom < 100) {
          mobileBar.style.display = 'flex';
        } else {
          mobileBar.style.display = 'none';
        }
      }
    });
  }
});
