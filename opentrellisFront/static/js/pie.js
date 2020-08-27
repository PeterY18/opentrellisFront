const pieCharts = document.querySelectorAll('[data-percentage]');

if (pieCharts) {
  for (let i = 0; i < pieCharts.length; i += 1) {
    const slice = pieCharts[i];
    const percentage = slice.getAttribute('data-percentage');
    const circumference = 31.4;
    const strokeDash = ((percentage * circumference) / 100);
    const strokeDashArray = `${strokeDash} ${circumference}`;

    slice.setAttribute('stroke-dasharray', strokeDashArray);
  }
}