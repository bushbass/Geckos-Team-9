import React, { Component } from "react";
import "./App.css";

const quotes = [
  {
    quote:
      "In fact, it comes to this: nobody is capable of really thinking about anyone, even in the worst calamity. For really to think about someone means thinking about that person every minute of the day, without letting ones thoughts be diverted by anything- by meals, by a fly that settles on ones cheek, by household duties, or by a sudden itch somewhere. But there are always flies and itches. Thats why life is difficult to live.\n    \n    Albert Camus,\n    \n      The Plague",
    author: "Albert Camus",
    likes: 95,
    tags: ["life"],
    pk: 60494,
    image: null
  },

  {
    quote: "Diamonds are glorified stones",
    author: "Marilyn Monroe",
    likes: 100,
    tags: ["diamonds"],
    pk: 60494,
    image: null
  }
];

class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: "",
      quotes: quotes
    };
    this.updateSearch = this.updateSearch.bind(this);
    this.displayQuote = this.displayQuote.bind(this);
  }
  displayQuote() {
    return this.state.quotes.map(
      currentQuote =>
        currentQuote.quote.includes(this.state.search) ||
        currentQuote.author.includes(this.state.search) ||
        currentQuote.tags.includes(this.state.search)
          ? currentQuote.quote + currentQuote.author
          : console.log("Sorry, try again")
    );
  }
  updateSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <div>
        {this.state.search !== "" ? this.displayQuote() : null}
        <form>
          <input
            type="text"
            placeholder="Insert a keyword"
            value={this.state.search}
            onChange={this.updateSearch}
          />
        </form>
      </div>
    );
  }
}

export default Search;
