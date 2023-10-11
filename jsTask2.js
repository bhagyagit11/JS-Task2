class Theatre{
    constructor(theatreName){
        this.theaterName = theatreName
        this.shows = []
    }
    addshows(show){
        
        this.shows.push(show.title)
        console.log(`${show.title}`)
    }

      bookedTickets(seats, show) {
        const bookedSeats = show.bookSeats(seats);
        if (bookedSeats.length > 0) {
          console.log(`Tickets Booked with seat numbers ${bookedSeats} for a movie ${show.movie.title} at ${show.timing}`);
        } else {
          console.log(`All selected seats are already booked for ${show.movie.title} at ${show.timing}`);
        }
      }
    
      cancelledTickets(seats, show) {
        const cancelledSeats = show.cancelSeats(seats);
        if (cancelledSeats.length > 0) {
          console.log(`Tickets cancelled with seat numbers ${cancelledSeats} for a movie ${show.movie.title} at ${show.timing}`);
        } else {
          console.log(`No booked seats to cancel for ${show.movie.title} at ${show.timing}.`);
        }
      }
    }


class Movie{
    constructor(movieId,title,actors,duration){
        this.movieId = movieId
        this.title = title
        this.actors = actors
        this.duration = duration
    }
 
}
class Show{
    constructor(movie,timing,seatnumbers,ticketprice){
    this.movie = movie
    this.timing = timing
    this.seatnumbers = seatnumbers
    this.ticketprice = ticketprice
    this.bookedSeats = []
    }

    getAvailableSeats() {
        return this.seatnumbers - this.bookedSeats.length;
      }
    
      bookSeats(seats) {
        const booked = seats.filter(seat => !this.bookedSeats.includes(seat));
        this.bookedSeats.push(...booked);
        return booked;
      }
    
      cancelSeats(seats) {
        const cancelled = seats.filter(seat => this.bookedSeats.includes(seat));
        this.bookedSeats = this.bookedSeats.filter(seat => !seats.includes(seat));
        return cancelled;
      }
    getShowDetails(){
        console.log(`Title:${this.movie.title}`)
        console.log(`Duration:${this.movie.duration}`)
        console.log(`Timings:${this.timing}`)
        console.log(`Seatnumber:${this.getAvailableSeats()}`)
        console.log(`Ticket Price:${this.ticketprice}`)
    
    }
}
let theatre = new Theatre('Shankar Theatre')
let movie1= new Movie('M1','Jawan','Sharukhan & Nayanathara','2hr-30min')
let show1 = new Show(movie1,'2PM',100,'200Rs')
let movie2= new Movie('M2','Avathar','actors','2hr-30min')
let show2 = new Show(movie2,'6PM',130,'200Rs')

console.log(theatre.theaterName)

console.log('Movies:')
theatre.addshows(movie1)
theatre.addshows(movie2)

console.log('Show1 Details:')
show1.getShowDetails()
console.log('Show2 Details:')
show2.getShowDetails()



const seatsBooked =['M1-1','M1-3','M1-5','M1-6','M1-9']
theatre.bookedTickets(seatsBooked,show1)
console.log('Show1 Details:')
show1.getShowDetails()

const seatsCancelled = ['M1-1','M1-5']
theatre.cancelledTickets(seatsCancelled,show1)

console.log('Show1 Details:')
show1.getShowDetails()












