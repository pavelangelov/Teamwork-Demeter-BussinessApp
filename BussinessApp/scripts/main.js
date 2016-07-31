var canvasLogo = document.getElementById('logo'),
    ctx = canvasLogo.getContext('2d');

canvasLogo.width = '1000';
canvasLogo.height = '200';

ctx.beginPath();
ctx.fillStyle = 'yellowgreen';
ctx.fillRect(0, 0, canvasLogo.width, canvasLogo.height);
ctx.fillStyle = '#134A60';
ctx.font = '48px serif';
ctx.fillText('DemeterNet',350, 100);

/* Fill field for statistic just for example
 Implement the logic later*/

var statisticCanvas = document.getElementById("stat"),
    statCtx = statisticCanvas.getContext('2d'),
    image = document.getElementById("stat-img");

statisticCanvas.width = '600';
statisticCanvas.height = '300';

statCtx.drawImage(image, 0, 0, 600, 300);




//Show context by clicking options from the nav

var nav = document.getElementById('nav');

nav.addEventListener('click', function (ev) { 
    var target = ev.target,
        contextId,
        element;

    if(target.getAttribute('data-id')) {
        contextId = target.getAttribute('data-id');
        element = document.getElementById(contextId);
        if (element.getAttribute('class') === 'hide') {
            element.setAttribute('class', '');
        } else if (element.getAttribute('class') === '') {
            element.setAttribute('class', 'hide');
        }
    }



    
 })