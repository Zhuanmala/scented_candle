(function () {
  const params = new URLSearchParams(window.location.search);
  const source = params.get("utm_source") || params.get("source") || "direct";
  const sourceField = document.getElementById("source-field");
  const form = document.getElementById("waitlist-form");
  const status = document.getElementById("form-status");

  if (sourceField) {
    sourceField.value = source.slice(0, 80);
  }

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", function () {
    status.textContent = "Sending. If this is the first submission, FormSubmit may ask the recipient email to confirm activation.";
  });
})();
