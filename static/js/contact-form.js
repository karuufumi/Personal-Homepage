document.querySelectorAll("[data-contact-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const name = data.get("name").trim();
    const email = data.get("email").trim();
    const message = data.get("message").trim();
    const subject = `Message from ${name}`;
    const body = `Hi Khang,\n\n${message}\n\n---\nName: ${name}\nEmail: ${email}`;
    const status = form.querySelector("[data-contact-status]");

    window.location.href = `mailto:khang.nt.cswork@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    status.textContent = "Your email app should open with the message ready to send.";
  });
});
