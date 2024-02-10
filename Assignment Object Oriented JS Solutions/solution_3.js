class Temperature{
    constructor(){
        this.celcius = 0;
        this.fahrenheit = 32;
    }
    get getCelsius(){
        return this.celcius;
    }
    get getFahrenheit(){
        return this.fahrenheit = (this.celcius) * 9/5 + 32;
    }

    set setCelsius(value){
        this.celcius = this.celcius + value;
        this.fahrenheit = (this.celcius) * 9/5 + 32 + value;

    }
    set setFahrenheit(value){
        this.fahrenheit = value;
        this.celcius = (this.fahrenheit - 32) / 1.8;
    }
    
}

const temperature = new Temperature();

console.log(`Initial Celcius: ${temperature.getCelsius}°C`);
console.log(`Initial Fahrenheit: ${temperature.getFahrenheit}°F`);

temperature.setCelsius = 25;

console.log(`Celcius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);

temperature.setFahrenheit = 68;
console.log(`Celcius: ${temperature.getCelsius}°C`);
console.log(`Fahrenheit: ${temperature.getFahrenheit}°F`);
