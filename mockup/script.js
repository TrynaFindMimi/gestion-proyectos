(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initNavToggle();
    initSteps();
    initPills();
    initModals();
  });

  function initNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var list = document.querySelector(".navbar .nav__list");
    if (!toggle || !list) return;
    toggle.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        list.classList.remove("open");
      });
    });
  }

  function initSteps() {
    var form = document.querySelector(".form-card");
    if (!form) return;
    var steps = form.querySelectorAll(".step[data-step]");
    var progress = form.querySelector(".progress");
    var current = 1;

    function showStep(step) {
      steps.forEach(function (el) {
        el.classList.toggle("hide", el.getAttribute("data-step") !== String(step));
      });
      if (!progress) return;
      progress.querySelectorAll(".progress__step").forEach(function (el, i) {
        var done = i < step;
        el.classList.toggle("active", i + 1 === step);
        el.classList.toggle("done", done && i + 1 !== step);
      });
      var fill = progress.querySelector(".progress__step.active .progress__bar i");
      if (fill) fill.style.width = (step / steps.length) * 100 + "%";
      var firstField = steps[step - 1].querySelector("input, select, textarea");
      if (firstField) firstField.focus();
    }

    function markInvalid(field) {
      var wrap = field.closest(".field");
      if (wrap) wrap.classList.add("invalid");
      else field.classList.add("invalid");
    }

    form.querySelectorAll("[data-next]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var valid = true;
        steps.forEach(function (el) {
          if (el.getAttribute("data-step") !== String(current)) return;
          var fields = el.querySelectorAll("input, select, textarea");
          fields.forEach(function (f) {
            if (f.hasAttribute("required") && !f.value.trim()) {
              markInvalid(f);
              valid = false;
            } else {
              var wrap = f.closest(".field");
              if (wrap) wrap.classList.remove("invalid");
            }
          });
        });
        if (valid && current < steps.length) {
          current += 1;
          showStep(current);
        }
      });
    });

    form.querySelectorAll("[data-prev]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        if (current > 1) {
          current -= 1;
          showStep(current);
        }
      });
    });

    form.querySelectorAll("[data-submit]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var valid = true;
        steps.forEach(function (el) {
          if (el.getAttribute("data-step") !== String(current)) return;
          var fields = el.querySelectorAll("input, select, textarea");
          fields.forEach(function (f) {
            if (f.hasAttribute("required") && !f.value.trim()) {
              markInvalid(f);
              valid = false;
            }
          });
        });
        if (!valid) return;
        var doneStep = form.querySelector('.step[data-step="done"]');
        if (doneStep) {
          steps.forEach(function (el) {
            el.classList.add("hide");
          });
          doneStep.classList.remove("hide");
        }
      });
    });

    showStep(current);
  }

  function initPills() {
    var pills = document.querySelectorAll(".pills");
    pills.forEach(function (group) {
      var buttons = group.querySelectorAll(".pill");
      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          buttons.forEach(function (b) {
            b.classList.remove("active");
          });
          btn.classList.add("active");
        });
      });
    });
  }

  function initModals() {
    document.querySelectorAll("[data-open-modal]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var modal = document.querySelector('[data-modal="' + btn.getAttribute("data-open-modal") + '"]');
        if (modal && typeof modal.showModal === "function") modal.showModal();
      });
    });
    document.querySelectorAll("[data-modal]").forEach(function (modal) {
      modal.addEventListener("click", function (e) {
        if (e.target === modal) modal.close();
      });
    });
  }
})();
