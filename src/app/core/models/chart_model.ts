import { 
    ApexAxisChartSeries, 
    ApexChart, 
    ApexDataLabels, 
    ApexGrid, 
    ApexNonAxisChartSeries, 
    ApexResponsive, 
    ApexStroke, 
    ApexTitleSubtitle, 
    ApexXAxis } from "ng-apexcharts";

export type PieChartOptions = {
    series: ApexNonAxisChartSeries;
    chart: ApexChart;
    responsive: ApexResponsive[];
    labels: any;
};

export type LineChartOptions = {
    series: ApexAxisChartSeries;
    chart: ApexChart;
    xaxis: ApexXAxis;
    dataLabels: ApexDataLabels;
    grid: ApexGrid;
    stroke: ApexStroke;
    title: ApexTitleSubtitle;
};


export type PieChartResModel = {
    catName: string[]
    catCount: number[]
}