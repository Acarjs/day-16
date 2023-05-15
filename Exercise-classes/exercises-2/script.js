class Bus {
  constructor(direction, seats, passengers) {
    this.direction = direction
    this.stations = ['Praha', 'Jihlava', 'Brno', 'Breclav', 'Vienna']
    this.seats = seats
    this.passengers = passengers
    this.lastStation = 0
  }

  current() {
    return this.stations[this.lastStation]
  }

  next() {
    this.lastStation += direction
    if (this.lastStation < 0) {
      this.lastStation = 0
    }

    if (this.lastStation === this.stations.length) {
      this.lastStation = this.stations.length
    }
  }

  board(count) {
    this.passengers += count
    if (this.passengers > this.seats) {
      this.passengers = this.seats
    }
  }

  deboard(count) {
    this.passengers -= count
    if (this.passenger < 0) {
      this.passenger = 0
    }
  }
}
