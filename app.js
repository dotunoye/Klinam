document.addEventListener('DOMContentLoaded', () => {
  // Global state tracker
  const systemState = { isTrashFilled: false };

  // Cache DOM elements
  const caretakerStatusCard = document.getElementById('caretaker-status-card');
  const simFillBtn = document.getElementById('sim-fill-btn');
  const adminStatusBadge = document.getElementById('admin-status-badge');
  const adminDispatchBtn = document.getElementById('admin-dispatch-btn');
  const loginControl = document.getElementById('dummy-login-btn');
  const seeRealityBtn = document.getElementById('see-reality-btn');

  function updateInterfaceDom() {
    if (systemState.isTrashFilled) {
      // Caretaker view -> filled
      caretakerStatusCard.classList.remove('status-empty');
      caretakerStatusCard.classList.add('status-filled');
      caretakerStatusCard.textContent = 'Status: FILLED / NEEDS PICKUP';
      simFillBtn.disabled = true;
      simFillBtn.classList.add('disabled');

      // Admin view -> filled
      adminStatusBadge.classList.remove('badge-empty');
      adminStatusBadge.classList.add('badge-filled');
      adminStatusBadge.textContent = 'FILLED';
      adminDispatchBtn.disabled = false;
      adminDispatchBtn.classList.remove('disabled');
    } else {
      // Caretaker view -> empty
      caretakerStatusCard.classList.remove('status-filled');
      caretakerStatusCard.classList.add('status-empty');
      caretakerStatusCard.textContent = 'Status: Empty';
      simFillBtn.disabled = false;
      simFillBtn.classList.remove('disabled');

      // Admin view -> empty
      adminStatusBadge.classList.remove('badge-filled');
      adminStatusBadge.classList.add('badge-empty');
      adminStatusBadge.textContent = 'EMPTY';
      adminDispatchBtn.disabled = true;
      adminDispatchBtn.classList.add('disabled');
    }
  }

  // initial render
  updateInterfaceDom();

  // caretaker button click -> report full
  simFillBtn.addEventListener('click', () => {
    systemState.isTrashFilled = true;
    updateInterfaceDom();
  });

  // admin dispatch click -> deploy truck
  adminDispatchBtn.addEventListener('click', () => {
    if (!systemState.isTrashFilled) return;
    alert('🚨 Klinam Dispatch Hub: Agile micro-logistics truck deployed via local corridor navigation paths to Apex Lodge!');
    systemState.isTrashFilled = false;
    updateInterfaceDom();
  });

  // Mock login control -> show instructions about OPay
  loginControl.addEventListener('click', (e) => {
    e.preventDefault();
    const msg = `Klinam OPay Integration (Demo):\n\nThis mock login demonstrates how landlords authorize the OPay Recurrent Billing mandate. On production, users are redirected to an OPay merchant consent flow, which returns a mandate token via webhook to keep subscription statuses in sync.`;
    alert(msg);
  });

  // Smooth scroll for hero CTA
  if (seeRealityBtn) {
    seeRealityBtn.addEventListener('click', () => {
      document.getElementById('story-1').scrollIntoView({ behavior: 'smooth' });
    });
  }
});
