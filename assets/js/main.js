/* BODY ======================================================================================================================== */
/*const body = document.querySelector("body");*/
const body = document.body;
/* BODY ======================================================================================================================== */

/* NAV ELEMENTS ======================================================================================================================== */
const nav = document.querySelector("#nav");

const navMenu   = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose  = document.querySelector('#nav-close');

const navHome      = document.querySelector("#x-home");
const navVentas    = document.querySelector("#x-ventas");
const navGastos    = document.querySelector("#x-gastos");
const navProductos = document.querySelector("#x-productos");
/*const navSeguridad = document.querySelector('#x-seguridad');
/* NAV ELEMENTS ======================================================================================================================== */

/* MAIN ELEMENTS ======================================================================================================================== */
const main = document.querySelector("#main");

const mainHome      = document.querySelector('#home');
const mainVentas    = document.querySelector('#ventas');
const mainGastos    = document.querySelector('#gastos');
const mainProductos = document.querySelector('#productos');
/*const mainSeguridad = document.querySelector('#seguridad');
/* MAIN ELEMENTS ======================================================================================================================== */

/* MENU SHOW & HIDE ======================================================================================================================== */
/* Menu shown */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu');
   })
}
/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
   })
}
/* MENU SHOW & HIDE ======================================================================================================================== */

/* WINDOW.ONLOAD ======================================================================================================================== */
window.onload = function(){
   main.appendChild(mainHome);
   mainVentas.remove();
   mainGastos.remove();
   mainProductos.remove();
   /*mainSeguridad.remove();*/
   setTimeout(() => {
      body.style.opacity = 1;
   }, 1000);
   navHome.classList.add('active');
   mainHome.style.opacity = 1;
}
/* WINDOW.ONLOAD ======================================================================================================================== */

/* SHOW SELECTED WINDOW / HIDE UNSELECTED WINDOWS ======================================================================================================================== */
if(navHome){
   navHome.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
      main.appendChild(mainHome);
      mainVentas.remove();
      mainGastos.remove();
      mainProductos.remove();
      /*mainSeguridad.remove();*/
      navHome.classList.add('active');
      navVentas.classList.remove('active');
      navGastos.classList.remove('active');
      navProductos.classList.remove('active');
      /*navSeguridad.classList.remove('active');*/
      
      setTimeout(() => {
         mainHome.style.opacity = 1;
      }, 400);

      mainVentas.style.opacity = 0;
      mainGastos.style.opacity = 0;
      mainProductos.style.opacity = 0;
      /*mainSeguridad.style.opacity = 0;*/
   })
}

if(navVentas){
   navVentas.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
      main.appendChild(mainVentas);
      mainHome.remove();
      mainGastos.remove();
      mainProductos.remove();
      /*mainSeguridad.remove();*/
      navVentas.classList.add('active');
      navHome.classList.remove('active');
      navGastos.classList.remove('active');
      navProductos.classList.remove('active');
      /*navSeguridad.classList.remove('active');*/
      
      setTimeout(() => {
         mainVentas.style.opacity = 1;
      }, 400);

      mainHome.style.opacity = 0;
      mainGastos.style.opacity = 0;
      mainProductos.style.opacity = 0;
      /*mainSeguridad.style.opacity= 0;*/
   })
}

if(navGastos){
   navGastos.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
      main.appendChild(mainGastos);
      mainHome.remove();
      mainVentas.remove();
      mainProductos.remove();
      /*mainSeguridad.remove();*/
      navGastos.classList.add('active');
      navHome.classList.remove('active');
      navVentas.classList.remove('active');
      navProductos.classList.remove('active');
      /*navSeguridad.classList.remove('active');*/
      
      setTimeout(() => {
         mainGastos.style.opacity = 1;
      }, 400);

      mainHome.style.opacity = 0;
      mainVentas.style.opacity = 0;
      mainProductos.style.opacity = 0;
      /*mainSeguridad.style.opacity = 0;*/
   })
}

if(navProductos){
   navProductos.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
      main.appendChild(mainProductos);
      mainHome.remove();
      mainVentas.remove();
      mainGastos.remove();
      /*mainSeguridad.remove();*/
      navProductos.classList.add('active');
      navHome.classList.remove('active');
      navVentas.classList.remove('active');
      navGastos.classList.remove('active');
      /*navSeguridad.classList.remove('active');*/
      
      setTimeout(() => {
         mainProductos.style.opacity = 1;
      }, 400);

      mainHome.style.opacity = 0;
      mainVentas.style.opacity = 0;
      mainGastos.style.opacity = 0;
      /*mainSeguridad.style.opacity = 0;*/
   })
}

/*
if(navSeguridad){
   navSeguridad.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu');
      main.appendChild(mainSeguridad);
      mainHome.remove();
      mainVentas.remove();
      mainGastos.remove();
      mainProductos.remove();
      navSeguridad.classList.add('active');
      navHome.classList.remove('active');
      navVentas.classList.remove('active');
      navGastos.classList.remove('active');
      navProductos.classList.remove('active');
      
      setTimeout(() => {
         mainSeguridad.style.opacity = 1;
      }, 400);

      mainHome.style.opacity = 0;
      mainVentas.style.opacity = 0;
      mainGastos.style.opacity = 0;
      mainProductos.style.opacity = 0;
   })
}
*/
/* SHOW SELECTED WINDOW / HIDE UNSELECTED WINDOWS ======================================================================================================================== */






const ch1 = document.getElementById("ch1");
new Chart(ch1, {
   type: 'doughnut',
   data: {
     labels: ['Blanco', 'D$7', 'D$8', 'D$9', 'D$10', 'D$11', 'D$13'],
     datasets: [{
       label: 'Pzas',
       data: [5, 19, 3, 5, 2, 3, 6],
       backgroundColor: [
         '#3921B3',
         '#3A32BF',
         '#5073D9',
         '#58A1D9',
         '#F2E2AA',
         '#F2C070',
         '#808080'
         /*
         '#03045e',
         '#023e8a',
         '#0077b6',
         '#0096c7',
         '#00b4d8',
         '#48cae4',
         '#90e0ef',
         */
         /*
         'rgba(16,53,70,255)',
         'rgba(31,95,99,255)',
         'rgba(52,127,112,255)',
         'rgba(78,155,119,255)',
         'rgba(108,184,129,255)',
         'rgba(144,212,145,255)',
         'rgba(200,240,185,255)'
         */
       ],
       hoverOffset: 4,
       borderColor: 'rgb(30, 30, 30)'
     }]
   },
   options: {
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
          legend: {
              display: false, /* true to show legends */
              labels: {
                  color: 'rgb(255, 255, 255)',
                  font: {
                     size: 18,
                     family: 'Noto Sans',
                     weight: 400
                  }
              }
          },
          title: {
            display: true,
            text: 'Piezas de Pan',
            color: 'rgb(255, 127, 80)',
            font: {
               size: 18,
               family: 'Noto Sans',
               weight: 600
            }
          }
      }
  }
});













const ch2 = document.getElementById("ch2");
new Chart(ch2, {
   type: 'line',
   data: {
     labels: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
     datasets: [{
       label: 'Pan',
       data: [12, 19, 3, 5, 2, 3, 6],
       fill: false,
       borderColor: 'rgb(128, 128, 128)',
       tension: 0.1
     },
     {
      label: 'Frijoles',
      data: [1, 9, 36, 51, 21, 36, 5],
      fill: false,
      borderColor: 'rgb(30, 144, 255)',
      tension: 0.1
    },
    {
      label: 'Salsas',
      data: [5, 6, 7, 3, 6, 9, 12],
      fill: false,
      borderColor: 'rgb(127, 255, 0)',
      tension: 0.1
    }]
   },
   options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
          legend: {
              display: true,
              labels: {
                  color: 'rgb(255, 255, 255)',
                  font: {
                     size: 18,
                     family: 'Noto Sans',
                     weight: 400
                  }
              }
          },
          title: {
            display: true,
            text: '$MXN Vendido',
            color: 'rgb(255, 127, 80)',
            font: {
               size: 18,
               family: 'Noto Sans',
               weight: 600
            }
          }
      }
  }
});





function beforePrintHandler () {
   for (let id in ch1.instances) {
       ch1.instances[id].resize();
   }
}




function beforePrintHandler () {
   for (let id in ch2.instances) {
       ch2.instances[id].resize();
   }
}














const ch3 = document.getElementById("ch3");
new Chart(ch3, {
   type: 'doughnut',
   data: {
     labels: ['Sueldos', 'Fredy', 'Harina', 'Huevo', 'Comida', 'Almuerzos', 'Bolsa'],
     datasets: [{
       label: '$',
       data: [1400, 120, 2800, 1400, 230, 150, 50],
       backgroundColor: [
         '#2b0806',
         '#460809',
         '#5f090a',
         '#7c0b0d',
         '#950d0f',
         '#b10e0f',
         '#ca1011'
         /*
         '#03045e',
         '#023e8a',
         '#0077b6',
         '#0096c7',
         '#00b4d8',
         '#48cae4',
         '#90e0ef',
         */
         /*
         'rgba(16,53,70,255)',
         'rgba(31,95,99,255)',
         'rgba(52,127,112,255)',
         'rgba(78,155,119,255)',
         'rgba(108,184,129,255)',
         'rgba(144,212,145,255)',
         'rgba(200,240,185,255)'
         */
       ],
       hoverOffset: 4,
       borderColor: 'rgb(30, 30, 30)'
     }]
   },
   options: {
      maintainAspectRatio: true,
      responsive: true,
      plugins: {
          legend: {
              display: false, /* true to show legends */
              labels: {
                  color: 'rgb(255, 255, 255)',
                  font: {
                     size: 18,
                     family: 'Noto Sans',
                     weight: 400
                  }
              }
          },
          title: {
            display: true,
            text: 'Gastos por Concepto',
            color: 'rgb(255, 127, 80)',
            font: {
               size: 18,
               family: 'Noto Sans',
               weight: 600
            }
          }
      }
  }
});













const ch4 = document.getElementById("ch4");
new Chart(ch4, {
   type: 'line',
   data: {
     labels: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
     datasets: [{
       label: 'Harina',
       data: [1200, 0, 0, 0, 1200, 0, 0],
       fill: false,
       borderColor: '#950d0f',
       tension: 0.1
     },
     {
      label: 'Sueldos',
      data: [1400, 1400, 1400, 1400, 1400, 1400, 1400],
      fill: false,
      borderColor: '#b10e0f',
      tension: 0.1
    },
    {
      label: 'Fredy',
      data: [120, 120, 120, 120, 120, 120, 120],
      fill: false,
      borderColor: '#ca1011',
      tension: 0.1
    }]
   },
   options: {
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
          legend: {
              display: true,
              labels: {
                  color: 'rgb(255, 255, 255)',
                  font: {
                     size: 18,
                     family: 'Noto Sans',
                     weight: 400
                  }
              }
          },
          title: {
            display: true,
            text: '$MXN Gastado',
            color: 'rgb(255, 127, 80)',
            font: {
               size: 18,
               family: 'Noto Sans',
               weight: 600
            }
          }
      }
  }
});





function beforePrintHandler () {
   for (let id in ch3.instances) {
       ch3.instances[id].resize();
   }
}




function beforePrintHandler () {
   for (let id in ch4.instances) {
       ch4.instances[id].resize();
   }
}





















/*
const myDiv = document.querySelector('#myDiv')



var data = [{
   values: [16, 15, 12, 6, 5, 4, 42],
   labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
   domain: {column: 0},
   name: 'GHG Emissions',
   hoverinfo: 'label+percent+name',
   hole: .4,
   type: 'pie'
},{
   values: [27, 11, 25, 8, 1, 3, 25],
   labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
   text: 'CO2',
   textposition: 'inside',
   domain: {column: 1},
   name: 'CO2 Emissions',
   hoverinfo: 'label+percent+name',
   hole: .4,
   type: 'pie'
}];
 
var layout = {
   title: 'Global Emissions 1990-2011',
   annotations: [
     {
       font: {
         size: 20
       },
       showarrow: false,
       text: 'GHG',
       x: 0.17,
       y: 0.5
     },
     {
       font: {
         size: 20
       },
       showarrow: false,
       text: 'CO2',
       x: 0.82,
       y: 0.5
     }
   ],
   height: 400,
   width: 90%,
   showlegend: false,
   grid: {rows: 1, columns: 2}
 };
 
Plotly.newPlot('myDiv', data, layout);
 
*/

















/*
<div id="venta-home">
   <canvas id="venta-chart-1"></canvas>
</div>



const data = {
   labels: [
     'Red',
     'Blue',
     'Yellow'
   ],
   datasets: [{
     label: 'My First Dataset',
     data: [300, 50, 100],
     backgroundColor: [
       'rgb(255, 99, 132)',
       'rgb(54, 162, 235)',
       'rgb(255, 205, 86)'
     ],
     hoverOffset: 4
   }]
};


const ct1 = document.querySelector('#c1');
new Chart(ct1, {
   type: 'doughnut',
   data: data,
})

const ct2 = document.querySelector('#c2');
new Chart(ct2, {
   type: 'doughnut',
   data: data,
})
*/
















const d = new Date();
const options = {
   weekday: 'long', // full day of the week name (e.g., "Monday")
   day: '2-digit', // two-digit day of the month (e.g., "29")
   month: 'short', // abbreviated month name (e.g., "Apr")
   year: 'numeric' // full numeric year (e.g., "2024")
}

// const formattedDate = d.toLocaleString('es-ES', options);
//document.querySelector('#today').innerHTML = formattedDate;


const formattedDate = d.toLocaleString('es-ES', options);
// Manually capitalize the first character of the day name
const firstCharUpperCase = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
// Display the formatted date with the first character of the day name capitalized
document.getElementById("today0").innerHTML = firstCharUpperCase;
document.getElementById("today1").innerHTML = firstCharUpperCase;
document.getElementById("today2").innerHTML = firstCharUpperCase;









