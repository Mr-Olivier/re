/////////////////////////////////////////////
// Updating Array of objects

import React, { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return <div></div>;
}

export default App;

/////////////////////////////////
// Updating arrays

// import React, { useState } from "react";

// function App() {
//   const [tags, setTags] = useState(["happy", "cheerful"]);

//   const handleClick = () => {
//     // Add
//     setTags([...tags, "exciting"]);

//     // Remove
//     setTags(tags.filter((tag) => tag !== "happy"));

//     // Update
//     setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

///////////////////
// Updating nested objects
// import React, { useState } from "react";

// function App() {
//   const [customer, setCustomer] = useState({
//     name: "John",
//     address: {
//       city: "San Francisco",
//       zipCode: 94111,
//     },
//   });

//   const handleClick = () => {
//     setCustomer({
//       ...customer,
//       address: { ...customer.address, zipCode: 94112 },
//     });
//   };

//   return <div></div>;
// }

// export default App;

///////////////////////////////////////////
// updating Objects

// import { useState } from "react";

// function App() {
//   const [drink, setDrink] = useState({
//     title: "Americano",
//     price: 5,
//   });

//   const handleClick = () => {
//     setDrink({ ...drink, price: 6 });
//   };

//   return (
//     <div>
//       {drink.price}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

///////////////////////////////
// understanding the strict mode
// import React from "react";
// import Message from "./Message";

// function App() {
//   return (
//     <div>
//       <Message />
//       {/* <Message />
//       <Message /> */}
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////
// Keeping component pure

// import React from "react";
// import { useState } from "react";

// function App() {
//   const [person, setPerson] = useState({
//     firstName: "",
//     lastName: "",
//     contact: {
//       address: {
//         street: "",
//       },
//     },
//   });

//   const [isLoading, setLoading] = useState(false);

//   return <div></div>;
// }

// export default App;

// import Like from "./components/Like";
// import Button from "./components/Like";
// function App() {
//   return <Like onClick={() => console.log("clicked")} />;
// }

// export default App;

// import Button from "./components/Button/Button";
// function App() {
//   return (
//     <div>
//       <Button onClick={() => console.log("Clicked")}>My Button</Button>
//     </div>
//   );
// }

// export default App;

// import { BsCalendarFill } from "react-icons/bs";

// function App() {
//   return (
//     <div>
//       <BsCalendarFill color="red" size={40} />
//     </div>
//   );
// }

// export default App;

// import ListGroup from "./components/ListGroup";

// import Alert from "./components/Alert";

// function App() {
//   let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

//   const handleSelectItem = (item: string) => {
//     console.log(item);
//   };

//   return (
//     <div>
//       <ListGroup
//         items={items}
//         heading="Cities"
//         onSelectItem={handleSelectItem}
//       />
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div>
//       <Alert>
//         Hello <span>World</span>
//       </Alert>
//     </div>
//   );
// }

// export default App;

// import Button from "./components/Button";
// function App() {
//   return (
//     <div>
//       <Button onClick={() => console.log("Clicked")}>My Button</Button>
//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// function App() {
//   const [alertVisible, setAlertVisibility] = useState(false);

//   return (
//     <div>
//       {alertVisible && (
//         <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
//       )}
//       <Button onClick={() => setAlertVisibility(true)}>My Button</Button>
//     </div>
//   );
// }

// export default App;
