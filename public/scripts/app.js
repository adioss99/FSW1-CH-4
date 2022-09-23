class App {
  constructor() {
    this.carContainerElement = document.getElementById('cars-container');
  }

  async init() {
    await this.#load();
  }
  _getContainer() {
    return this.carContainerElement;
  }
  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement('div');
      this.carContainerElement.className = 'row mt-2';
      node.className = 'col-xl-4 col-lg-6 mt-3 mb-2';
      node.setAttribute('id', 'found');
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async #load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }
}

class Filter extends App {
  constructor(driver, date, time, seat) {
    super();
    this.driver = driver;
    this.date = date;
    this.time = time;
    this.seat = seat;
  }

  #newData(data) {
    if (data.length == 0) {
      const node = document.createElement('div');
      const container = this._getContainer();
      container.className = 'mx-auto';
      node.className = 'd-flex mx-auto mt-3';
      node.innerHTML = `
      <div class="alert alert-danger d-flex align-items-center" role="alert" style="left: 50%;transform: translate(-50%);">
        <i class="fa-solid fa-triangle-exclamation me-2"></i>
        <div>
          Data mobil tidak ditemukan
        </div>
      </div>`;
      container.appendChild(node);
      let child = document.getElementById('found');
      child.remove();
    } else if (data.length != 0) {
      Car.init(data);
    }
  }

  async filter() {
    this.clear();
    let driver = this.driver.toLowerCase() == 'true' ? true : false;
    const cars = await Binar.listCars();
    let newCar = cars.filter((car) => car.available == driver && car.availableAt.slice(0, 10) + car.availableAt.slice(11, 16) <= this.date + this.time);
    this.#newData(newCar);
    newCar.forEach(element => {
      console.log(element)
    });
  }

  async optionalFilter() {
    this.clear();
    let driver = this.driver.toLowerCase() == 'true' ? true : false;
    let cars = await Binar.listCars();
    let newCar = cars.filter((car) => car.available == driver && car.availableAt.slice(0, 10) + car.availableAt.slice(11, 16) <= this.date + this.time && car.capacity == this.seat);
    console.log('newCar.length', newCar.length);
    this.#newData(newCar);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;
    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}
