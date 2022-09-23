class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({ id, plate, manufacture, model, image, rentPerDay, capacity, description, transmission, available, type, year, options, specs, availableAt }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }
  formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(money);
  };
  render() {
    return `
            <div class="card" style="width: 23rem">
              <div class="card-body">
                <img src="${this.image}" class="card-img-top rounded mb-2"  height="350px" style="object-fit: cover;"  alt="${this.manufacture}" />
                <p class="card-title">${this.manufacture}/${this.model}</p>
                <h5 class="card-sub">${this.formatRupiah(this.rentPerDay)} / hari</h5>
                <p class="card-text">${this.description}</p>
                 <div class="spec">
                  <section class="mb-3"><img src="./assets/fi_users.png" alt="user" class="me-2" />${this.capacity} Orang</section>
                  <section class="mb-3"><img src="./assets/fi_settings.png" alt="settings" class="me-2" />${this.transmission}</section>
                  <section class="mb-3"><img src="./assets/fi_calendar.png" alt="calendar" class="me-2" />Tahun ${this.year}</section>
                </div>
                <div class="d-grid gap-2 mt-1">
                  <a href="#" id="car-btn" class="btn btn-success">Pilih Mobil</a>
                </div>
              </div>
            </div>
      `;
  }
}
