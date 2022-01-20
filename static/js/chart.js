var ctx = document.getElementById('ChartKelembaban').getContext('2d');
var config = {
  "type": "line",
  "data": {
    "labels": [],
    "datasets": [
      {
        "label": "Kelembaban",
        "data": [],
        "backgroundColor": "rgba(1, 22, 39, 1)",
        "borderColor": "rgba(1, 22, 39, 1)",
        "fill": false,
        "pointBorderWidth": [],
        "cubicInterpolationMode": "monotone"
      }, {
        "label": "Suhu_Tanah",
        "data": [],
        "backgroundColor": "rgba(46, 196, 182, 1)",
        "borderColor": "rgba(46, 196, 182, 1)",
        "fill": false,
        "pointBorderWidth": [],
        "cubicInterpolationMode": "monotone"
      }, {
        "label": "Suhu_Permukaan",
        "data": [],
        "backgroundColor": "rgba(231, 29, 54, 1)",
        "borderColor": "rgba(231, 29, 54, 1)",
        "fill": false,
        "pointBorderWidth": [],
        "cubicInterpolationMode": "monotone"
      }, {
        "label": "Curah_Hujan",
        "data": [],
        "backgroundColor": "rgba(255, 159, 28, 1)",
        "borderColor": "rgba(255, 159, 28, 1)",
        "fill": false,
        "pointBorderWidth": [],
        "cubicInterpolationMode": "monotone"
      }, {
        "label": "P-Kelembaban",
        "data": [],
        "backgroundColor": "rgba(1, 22, 39, 0.3)",
        "borderColor": "rgba(1, 22, 39, 0.3)",
        "fill": false,
        "pointBorderWidth": [],
        "cubicInterpolationMode": "monotone"
      }, {
        "label": "P-Suhu_Tanah",
        "data": [],
        "backgroundColor": "rgba(46, 196, 182, 0.3)",
        "borderColor": "rgba(46, 196, 182, 0.3)",
        "fill": false,
        "pointBorderWidth": [],
        "cubicInterpolationMode": "monotone"
      }, {
        "label": "P-Suhu_Permukaan",
        "data": [],
        "backgroundColor": "rgba(231, 29, 54, 0.3)",
        "borderColor": "rgba(231, 29, 54, 0.3)",
        "fill": false,
        "pointBorderWidth": [],
        "cubicInterpolationMode": "monotone"
      }, {
        "label": "P-Curah_Hujan",
        "data": [],
        "backgroundColor": "rgba(255, 159, 28, 0.3)",
        "borderColor": "rgba(255, 159, 28, 0.3)",
        "fill": false,
        "pointBorderWidth": [],
        "cubicInterpolationMode": "monotone"
      }
    ]
  }
}

var chart = new Chart(ctx, config);
