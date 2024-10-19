let count = 0;

const Message = () => {
  console.log("Message called", count);
  count++;
  return <div>Message {count}</div>;
};

export default Message;

// // PascalCasting
// function Message() {
//   // JSX: JavaScript XML
//   const name = "Olivier";
//   if (name) return <h1>Hello {name}</h1>;
//   return <h1>Hello World</h1>;
// }

// export default Message;
