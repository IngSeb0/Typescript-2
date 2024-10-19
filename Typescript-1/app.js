import { series } from './data.js';
// Renderizar la tabla de series
function renderSeriesTable(series) {
    const tableBody = document.getElementById('table-body');
    series.forEach((serie, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
      <td>${index + 1}</td>
      <td><a href="#">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
        row.addEventListener('click', () => showSeriesDetail(serie));
        tableBody.appendChild(row);
    });
    const averageSeasons = calculateAverageSeasons(series);
    const averageRow = document.createElement('tr');
    averageRow.innerHTML = `
    <td colspan="4" style="text-align: right; font-weight: bold;">
      Seasons average: ${averageSeasons}
    </td>
  `;
    tableBody.appendChild(averageRow);
}
// Mostrar el detalle de la serie seleccionada
function showSeriesDetail(serie) {
    const detailCard = document.getElementById('series-detail');
    const detailImage = document.getElementById('detail-image');
    const detailTitle = document.getElementById('detail-title');
    const detailDescription = document.getElementById('detail-description');
    const detailLink = document.getElementById('detail-link');
    detailImage.src = serie.image;
    detailTitle.textContent = serie.name;
    detailDescription.textContent = serie.description;
    detailLink.href = serie.url;
    detailCard.classList.remove('d-none');
}
// Calcular el promedio de temporadas
function calculateAverageSeasons(series) {
    const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
    return Math.round(totalSeasons / series.length);
}
// Renderizar la tabla al cargar la página
renderSeriesTable(series);
