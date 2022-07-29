import "./App.css";
import Ex1 from "./components/Ex1";
import Example1 from "./components/Example1";
import Example2 from "./components/Example2";
import Example3 from "./components/Example3";
import First from "./components/First";

function App() {
  // Example 1
  const name = "Ichigo";
  const surname = "Kurosaki";
  const image =
    "https://upload.wikimedia.org/wikipedia/en/1/1e/IchigoKurosakiBleach.jpg";

  // 2 part - Example 2
  const age = 17;
  const job = "student";
  const gender = "male";

  // 3 part - Example 3
  const user = {
    name: "Gojo",
    surname: "Snow",
    image:
      "https://64.media.tumblr.com/818118fd6a1bf973decb14f18c3ddfc6/fb5a5c7922a2518f-b1/s1280x1920/8ba6591171fe116dfcfdcfaafcd8e1403ba278d7.jpg",
    age: 28,
    job: "teacher",
    gender: "male",
  };

  // 4 part - Example 4, 5
  const one = 45;
  const two = 15;
  const result = 60;
  return (
    <div className="App">
      {/* <Example1 name={name} surname={surname} image={image} />
      <Example2 age={age} job={job} gender={gender} />
      <hr />
      <Example3 user={user} /> */}

      <First one={one} two={two} result={result} />
      <hr />
      <Ex1 first={23} second={53} third={76} />
    </div>
  );
}

export default App;

// dark theme, show image
