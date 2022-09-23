class Binar {

  static async listCars(filterer) {
    let cars;
    let cachedCarsString = localStorage.getItem('CARS');
    if (!!cachedCarsString) {
      cars = JSON.parse(cachedCarsString);
    } else {
      const response = await fetch('https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json');
      const body = await response.json();
      cars = this.populateCars(body);

      localStorage.setItem('CARS', JSON.stringify(cars));
    }

    if (filterer instanceof Function) return cars.filter(filterer);
    return cars;
  }
}