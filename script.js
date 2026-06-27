document.addEventListener("DOMContentLoaded", () => {
    // 1. HARDWARE-LEAN CENTRAL STATE
    const appState = { isTrashFilled: false };

    // 2. DOM APEX TARGETS
    const caretakerStatusCard = document.getElementById("caretaker-status-card");
    const caretakerStatusText = document.getElementById("caretaker-status-text");
    const simulateFillButton = document.getElementById("sim-fill-btn");
    const adminStatusBadge = document.getElementById("admin-status-badge");
    const adminDispatchButton = document.getElementById("admin-dispatch-btn");
    const loginButton = document.getElementById("dummy-login-btn");

    // 3. REACTIVE DOM RENDERING
    function renderSystemState() {
        if (appState.isTrashFilled) {
            caretakerStatusCard.className = "status-card status-filled";
            caretakerStatusText.textContent = "Status: FILLED / NEEDS PICKUP";
            simulateFillButton.textContent = "Report Dispatched to Ops";
            simulateFillButton.disabled = true;

            adminStatusBadge.className = "badge badge-filled";
            adminStatusBadge.textContent = "FILLED";
            adminDispatchButton.disabled = false;
        } else {
            caretakerStatusCard.className = "status-card status-empty";
            caretakerStatusText.textContent = "Status: Empty";
            simulateFillButton.textContent = "Report Bin as Full";
            simulateFillButton.disabled = false;

            adminStatusBadge.className = "badge badge-empty";
            adminStatusBadge.textContent = "EMPTY";
            adminDispatchButton.disabled = true;
        }
    }

    // 4. BINDING COMPONENT EVENT LISTENERS
    simulateFillButton.addEventListener("click", () => {
        appState.isTrashFilled = true;
        renderSystemState();
    });

    adminDispatchButton.addEventListener("click", () => {
        alert("🚨 Klinam Dispatch Hub: Micro-logistics driver routed to Apex Lodge!");
        appState.isTrashFilled = false;
        renderSystemState();
    });

    loginButton.addEventListener("click", () => {
        alert("🔒 Secure Gateway Connection: User authentication profiles and OPay transaction pipelines execute immediately following the selection phase.");
    });
});