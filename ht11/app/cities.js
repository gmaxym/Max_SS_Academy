export class Cities{
    constructor(){
        this.dom = {
            inp : document.querySelector('.inp-city'),
            btn : document.querySelector('.btn-city'),
            table : document.querySelector('.table-cities')
        };

        this.link = 'http://api.weatherapi.com/v1/current.json?key=f87c0c48c2844d0fac871822200304&q='

        
        this.dom.btn.addEventListener('click', this.addCity);
    }

    addCity = () => {
        
        fetch(`${this.link}${this.dom.inp.value}`)
            .then(r => r.json())
            .then(d => {
                console.log(d);
                let out = document.querySelector('.out');
                out.innerHTML = d.current.temp_c + " °C";
            });
    }
}
