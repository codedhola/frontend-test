import { useEffect, useState } from "react";
import supabase from "./supabase";
import { ColorRing } from "react-loader-spinner";

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

function App() {
  const [display, setDisplay] = useState(false);
  const [facts, setFacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("all");

  useEffect(
    function () {
      async function getFacts() {
        setIsLoading(true);
        let query = supabase.from("facts").select("*");

        if (currentCategory !== "all") {
          query = query.eq("category", currentCategory);
        }

        let { data: facts, error } = await query.limit(5);
        // let { data: facts, error } = await supabase.from("facts").select("*");
        if (!error) setFacts(facts);
        else alert("An Error Occured, please try again later");
        setIsLoading(false);
      }
      getFacts();
    },
    [currentCategory]
  );

  return (
    <>
      <Header display={display} setDisplay={setDisplay} />
      {display ? (
        <NewFactForm setFacts={setFacts} setDisplay={setDisplay} />
      ) : null}
      <main>
        <CategoryFilter setCurrentCategory={setCurrentCategory} />
        {isLoading ? <Loader /> : <FactList facts={facts} />}
      </main>{" "}
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

function NewFactForm({ setFacts, setDisplay }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    // const newFact = {
    //   text: text,
    //   source: source,
    //   category: category,
    //   votesInteresting: 0,
    //   votesMindblowing: 0,
    //   votesFalse: 0,
    //   createdIn: new Date().getFullYear(),
    // };

    setIsUploading(true);
    const { data: newFact, error } = await supabase
      .from("facts")
      .insert([{ text, source, category }])
      .select();

    if (error) return alert("An error occured  ===> " + JSON.stringify(error));

    setFacts((facts) => [newFact[0], ...facts]);
    setText("");
    setCategory("");
    setSource("");
    setDisplay(false);
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        disabled={isUploading}
        type="text"
        placeholder="Share A Fact"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <span>{200 - text.length}</span>
      <input
        value={source}
        placeholder="Input Valud Source"
        onChange={(e) => setSource(e.target.value)}
        disabled={isUploading}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value="">Choose Category</option>
        {CATEGORIES.map((cat) => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>
      <button className="btn btn-large" disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

function CategoryFilter({ setCurrentCategory }) {
  return (
    <aside>
      <ul>
        <li>
          <button
            className="btn btn-tag-all"
            onClick={() => setCurrentCategory("all")}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((cat) => (
          <li key={cat.name}>
            <button
              className="btn btn-tag"
              style={{ backgroundColor: cat.color }}
              onClick={() => setCurrentCategory(cat.name)}
            >
              {cat.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}

function FactList({ facts }) {
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

function Loader() {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperStyle={{}}
      wrapperClass="blocks-wrapper"
      colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
    />
  );
}

export default App;
