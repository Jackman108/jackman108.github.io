(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) return;

  const nodes = document.querySelectorAll(".section, .job, .projects li");
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("in");
        io.unobserve(e.target);
      });
    },
    { threshold: 0.12 },
  );

  nodes.forEach((n) => {
    n.classList.add("reveal");
    io.observe(n);
  });
})();
