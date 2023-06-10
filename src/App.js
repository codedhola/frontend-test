import { useState } from "react";
import "./styles.css";

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <Header display={display} setDisplay={setDisplay} />
      {display ? <NewFactForm /> : null}
      <main>
        <CategoryFilter />
        <FactList />
      </main>
    </>
  );
}

function Header({ display, setDisplay }) {
  const title = "Factual";
  return (
    <header>
      <div className="logo">
        <img src="/assets/img/logo.png" alt="Factual Logo" width="50px" />
        <h1>{title}</h1>
      </div>
      <button
        className="btn btn-large btn-share"
        onClick={() => setDisplay((show) => !show)}
      >
        {display ? "Close" : "Share A Form"}
      </button>
    </header>
  );
}

function NewFactForm() {
  return <form className="fact-form">fact form</form>;
}

function CategoryFilter() {
  return (
    <aside>
      <ul>
        <li>
          <button className="btn btn-tag-all">All</button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name}>
            <button
              className="btn btn-tag"
              style={{ backgroundColor: cat.color }}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

// function CategoryList({ cat }) {
//   return (
//     <li className="">
//       <button className="btn btn-tag" style={{ backgroundColor: cat.color }}>
//         {cat.name}
//       </button>
//     </li>
//   );
// }

function FactList() {
  const facts = initialFacts;
  return (
    <section>
      <ul className="ul">
        {facts.map((fact) => (
          <Fact key={fact.id} fact={fact} />
        ))}
      </ul>
    </section>
  );
}

function Fact(props) {
  const { fact } = props;
  return (
    <li className="fact">
      <p>
        {fact.text}
        <a className="source_link" href={fact.source} target="_blank">
          (source)
        </a>
      </p>
      <span
        className="tag"
        style={{
          backgroundColor: CATEGORIES.find((cat) => cat.name === fact.category)
            .color,
        }}
      >
        {fact.category}
      </span>
      <div className="vote-btn">
        <button> 👍 {fact.votesInteresting}</button>
        <button> 🤯 {fact.votesMindblowing}</button>
        <button> ⛔️ {fact.votesFalse}</button>
      </div>
    </li>
  );
}

export default App;
