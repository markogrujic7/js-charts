const chartOne = document.getElementById('chart-1');
const chartTwo = document.getElementById('chart-2');
const chartThree = document.getElementById('chart-3');
const chartFour = document.getElementById('chart-4');

    new Chart(chartOne, {
      type: 'polarArea',
      title: 'Test123',
      data: {
        labels: ['Stocks', 'Bonds', 'ETFs', 'Crypto'],
        datasets: [{
          data: [5000, 2000, 3000, 1000],
          backgroundColor: ['#4A90E2','#7B8D93','#C4C4C4','#8B6F47',]
        }]
      },
    });

    new Chart(chartTwo, {
        type: 'pie',
        data: {
            labels: ['Tech', 'Healthcare', 'Energy', 'Finance'],
            datasets: [{
            data: [40, 25, 15, 20],
            backgroundColor: ['#A2B9BC','#B2AD7F','#878F99','#6B4226',]
          }]
        },
      });

      new Chart(chartThree, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
            label: 'Portfolio Growth ($)',
            fill: true,
            data: [10000, 12000, 14000, 13000, 15000, 17000],
            backgroundColor: ['#D5D6DB'],
            borderColor: '#76798E',
          }]
        },
      });

      new Chart(chartFour, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
            label: 'Monthly Expenses ($)',
            data: [500, 600, 700, 800, 900, 1000],
            backgroundColor: ['#FF6F61'],
          }]
        },
      });

