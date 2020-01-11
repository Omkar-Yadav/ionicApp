import { Component, ViewChild, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-stats-page",
  templateUrl: "./stats-page.page.html",
  styleUrls: ["stats-page.page.css"]
})
export class StatsPagePage implements OnInit {
  @ViewChild("barCanvas", { static: true }) barCanvas;
  @ViewChild("doughnutCanvas", { static: true }) doughnutCanvas;
  @ViewChild("lineCanvas", { static: true }) lineCanvas;

  barChart: any;
  doughnutChart: any;
  lineChart: any;

  constructor() {}

  ngOnInit() {
    this.barChartMethod();
    this.doughnutChartMethod();
    this.lineChartMethod();
  }

  barChartMethod() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      //     type: "bar",
      type: "horizontalBar",
      data: {
        labels: ["BJP", "INC", "AAP", "CPI", "CPI-M", "NCP"],
        datasets: [
          {
            label: "# of Votes",
            data: [1000, 50, 30, 15, 20],
            backgroundColor: [
              "rgba(69, 165, 35, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  doughnutChartMethod() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["BJP", "Congress", "AAP", "CPM", "SP"],
        datasets: [
          {
            label: "# of Votes",
            data: [50, 29, 15, 10, 7],
            backgroundColor: [
              "rgba(255, 159, 64, 0.2)",
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)"
            ],
            hoverBackgroundColor: [
              "#FFCE56",
              "#FF6384",
              "#36A2EB",
              "#FFCE56",
              "#FF6384"
            ]
          }
        ]
      }
    });
  }

  lineChartMethod() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"],
        datasets: [
          {
            spanGaps: false,
            label: "Sell per week",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                responsive: true,
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  returnValueForKitchen(ele) {
    if (ele.name === "one") {
      return true;
    }
  }

  returnValueForHall(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForBedroom(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForBathroom(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForRooftop(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForBalcony(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForPorch(ele) {
    if (ele.name === "one") {
      return true;
    }
  }

  returnValueForFan(ele) {
    if (ele.name === "one") {
      return true;
    }
  }

  returnValueForBulb(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForAC(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForTV(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForAirPurifier(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForWaterPurifier(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
  returnValueForWaterHeater(ele) {
    if (ele.name === "one") {
      return true;
    }
  }
}
