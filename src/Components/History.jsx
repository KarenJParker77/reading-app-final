import React from "react";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";

import Results from "./History/Results";

const History = () => {
  const allBooks = useSelector((state) => state.allBooks);
  const user = useSelector((state) => state.user);

  const results = allBooks.filter((book) => {
    return user.finishedBooks.includes(book.id);
  });

  return (
    <>
    <div className="main-body">
      <nav>
        <Navigation />
      </nav>
      {/* <h1>Reading history</h1> */}
      <div className="display-grid">
        {results.length > 0 ? (
          <Results results={results} />
        ) : (
          <p>You haven't finished any books yet!</p>
        )}
      </div>
      </div>
    </>
  );
};

export default History;
