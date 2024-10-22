////////////////////////////////////////////////
// Project - Expense Tracker

import React, { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "bbb", amount: 10, category: "Utilities" },
    { id: 3, description: "ccc", amount: 10, category: "Utilities" },
    { id: 4, description: "ddd", amount: 10, category: "Utilities" },
  ]);

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;

///////////////////////////////////////////////
// Building a Form

// import Form from "./components/Form";

// function App() {
//   return (
//     <div>
//       <Form />
//     </div>
//   );
// }

// export default App;

///////////////////////////////////////////////
// Exercise - Building Expandable Text Component
// import React from "react";
// import ExpandableText from "./components/ExpandableText";

// function App() {
//   return (
//     <div>
//       <ExpandableText>
//         Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel beatae
//         similique laborum dolor iste porro. Tempore provident autem maxime
//         reiciendis voluptate earum repudiandae consectetur recusandae ea fuga
//         unde, qui totam deserunt, sed et quisquam amet distinctio fugiat.
//         Aliquid velit quod et qui incidunt harum sequi minus, saepe quam,
//         placeat sunt expedita soluta veniam voluptatem deleniti accusamus?
//         Tempore deserunt dolor fugit enim exercitationem sunt excepturi a
//         architecto ipsam cum neque totam perspiciatis omnis, corporis iusto
//         vitae provident illo deleniti rem cumque quisquam, sed praesentium! At
//         pariatur nobis, quibusdam libero vitae voluptatem illum amet reiciendis,
//         vero nemo numquam dicta animi! Ipsam, quidem?
//       </ExpandableText>
//     </div>
//   );
// }

// export default App;

//////////////////////////////////////////////
// Exercise - Updating State

// Exercise 1

// import React, { useState } from "react";

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });

//   const handleClick = () => {
//     setGame({ ...game, player: { ...game.player, name: "Bob" } });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

// // Exercise 2

// import React, { useState } from "react";

// function App() {
//   const [pizza, setPizza] = useState({
//     name: "Spicy Pepperoni",
//     toppings: ["Mushroom"],
//   });

//   const handleClick = () => {
//     setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

// // Exercise 3

// import React, { useState } from "react";

// function App() {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//   });

//   const handleClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////
// Sharing State between components

// import React, { useState } from "react";
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";

// function App() {
//   const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
//   return (
//     <div>
//       <NavBar cartItemsCount={cartItems.length} />
//       <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////
// Simplifying Update Logic with Immer

// import React, { useState } from "react";
// import produce from "immer";

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));

//     setBugs(
//       produce((draft) => {
//         const bug = draft.find((bug) => bug.id === 1);
//         if (bug) bug.fixed = true;
//       })
//     );
//   };

//   return (
//     <div>
//       {bugs.map((bug) => (
//         <p key={bug.id}>
//           {bug.title} {bug.fixed ? "Fixed" : "New"}
//         </p>
//       ))}
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default App;

/////////////////////////////////////////////
// Updating Array of objects

// import React, { useState } from "react";

// function App() {
//   const [bugs, setBugs] = useState([
//     { id: 1, title: "Bug 1", fixed: false },
//     { id: 2, title: "Bug 2", fixed: false },
//   ]);

//   const handleClick = () => {
//     setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
//   };

//   return <div>
//       <button onClick={handleClick}>Click Me</button></div>;
// }

// export default App;

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
