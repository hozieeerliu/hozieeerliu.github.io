document.addEventListener('DOMContentLoaded', () => {
  const filters = document.querySelectorAll('.writing-filter');
  const entries = document.querySelectorAll('.writing-row[data-tags]');
  if (!filters.length || !entries.length) return;

  filters.forEach((button) => {
    button.addEventListener('click', () => {
      const selected = button.dataset.filter;
      filters.forEach((item) => {
        const active = item === button;
        item.classList.toggle('is-active', active);
        item.setAttribute('aria-pressed', String(active));
      });
      entries.forEach((entry) => {
        const tags = (entry.dataset.tags || '').split(/\s+/).filter(Boolean);
        entry.hidden = selected !== 'all' && !tags.includes(selected);
      });
    });
  });
});
