<canvas id="bar-chart" width="800" height="450"></canvas>
// Bar chart
new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Happy", "Sad", "Fear", "Anger", "Surprise"],
      datasets: [
        {
          label: "Score (%)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [0.1,0.3,0.3,0.1,0.2]
        }
      ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ''
      }
    }
});
<canvas id="line-chart" width="800" height="450"></canvas>
new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [0, 1, 2, 3, 4, 5, 6],
    datasets: [{ 
        data: [0.2, 0.2, 0.1, 0.3, 0.4, 0.5, 0.4],
        label: "Happy",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [0.4, 0.1, 0.4, 0.3, 0.4, 0.2, 0.4],
        label: "Sad",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [0.0, 0.0, 0.1, 0.3, 0.0, 0.1, 0.2],
        label: "Fear",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [0.1, 0.2, 0.0, 0.2, 0.4, 0.6, 0.3],
        label: "Anger",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [0.0, 0.0, 0.1, 0.3, 0.7, 0.4, 0.2],
        label: "Surprise",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    title: {
      display: true,
      text: 'Mood Scores over the last 7 days'
    }
  }
});

<canvas id="pie-chart" width="800" height="450"></canvas>
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Happy", "Sad", "Fear", "Anger", "Surprise"],
      datasets: [{
        label: "Score (%)",
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [0.1,0.3,0.3,0.1,0.2]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Mood Scores (Aggregated)'
      }
    }
});

<canvas id="doughnut-chart" width="800" height="450"></canvas>
new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
        labels: ["Happy", "Sad", "Fear", "Anger", "Surprise"],
        datasets: [{
          label: "Score (%)",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [0.1,0.3,0.3,0.1,0.2]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Mood Scores (Individual)'
      }
    }
});

<canvas id="bubble-chart" width="800" height="800"></canvas>
new Chart(document.getElementById("bubble-chart"), {
    type: 'bubble',
    data: {
      labels: "Happy",
      datasets: [
        {
          label: ["Sad"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 0.7,
            y: 1,
            r: 15
          }]
        }, {
          label: ["Anger"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 0.2,
            y: 2,
            r: 10
          }]
        }, {
          label: ["Fear"],
          backgroundColor: "rgba(0,0,0,0.2)",
          borderColor: "#000",
          data: [{
            x: 0.4,
            y: 3,
            r: 15
          }]
        }, {
          label: ["Surprise"],
          backgroundColor: "rgba(193,46,12,0.2)",
          borderColor: "rgba(193,46,12,1)",
          data: [{
            x: 0.2,
            y: 4,
            r: 15
          }]
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Mood Scores'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Score %"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: ""
          }
        }]
      }
    }
});