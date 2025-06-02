document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const payload = {};
    formData.forEach((value, key) => payload[key] = value);

    try {
      await fetch("https://hooks.zapier.com/hooks/catch/23110786/2jqd91w/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      alert("Thank you! Your submission has been received.");
      form.reset();
    } catch (err) {
      alert("There was an error submitting the form. Please try again.");
      console.error(err);
    }
  });
});
