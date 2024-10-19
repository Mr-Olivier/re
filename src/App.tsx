import React from "react";
import Message from "./Message";

function App() {
  return (
    <div>
      <Message />
      {/* <Message />
      <Message /> */}
    </div>
  );
}

export default App;

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
