///////////////////////////////////////////////////////
// Controlled Components

import React, { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

//////////////////////////////////////////////////////
// Accessing Input Fields

// import React, { FormEvent, useRef } from "react";

// const Form = () => {
//   const nameRef = useRef<HTMLInputElement>(null);
//   const ageRef = useRef<HTMLInputElement>(null);
//   const person = { name: "", age: 0 };

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (nameRef.current !== null) person.name = nameRef.current.value;

//     if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);

//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input ref={nameRef} id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input ref={ageRef} id="age" type="number" className="form-control" />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

////////////////////////////////////////////////////
// Handling Form Submission

// import React, { FormEvent } from "react";

// const Form = () => {
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log("Submitted");
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input id="age" type="number" className="form-control" />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

////////////////////////////////////////////////////
// Form Building

// // div.mb.3>label.form-label+input.form-control
// //       div.mb-3>label.form-label+input[type=number].form-control
// // button.btn.btn-primary
// import React from "react";

// const Form = () => {
//   return (
//     <form>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input id="name" type="text" className="form-control" />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input id="age" type="number" className="form-control" />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

//////////////////////////////////////////////////////
// // The best Exercise
// import React, { useState } from "react";

// const Form = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const [errors, setErrors] = useState({
//     name: false,
//     email: false,
//     password: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let isValid = true;
//     const newErrors = { name: false, email: false, password: false };

//     if (!formData.name.trim()) {
//       newErrors.name = true;
//       isValid = false;
//     }
//     if (!formData.email.includes("@")) {
//       newErrors.email = true;
//       isValid = false;
//     }
//     if (formData.password.length < 6) {
//       newErrors.password = true;
//       isValid = false;
//     }

//     setErrors(newErrors);
//     return isValid;
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (validate()) {
//       alert("Form submitted successfully!");
//       // Add your submission logic here (e.g., sending data to an API)
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card shadow p-4">
//         <h3 className="text-center mb-4">Registration Form</h3>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className={`form-control ${errors.name ? "is-invalid" : ""}`}
//               value={formData.name}
//               onChange={handleChange}
//             />
//             {errors.name && (
//               <div className="invalid-feedback">Name is required</div>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">
//               Email
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className={`form-control ${errors.email ? "is-invalid" : ""}`}
//               value={formData.email}
//               onChange={handleChange}
//             />
//             {errors.email && (
//               <div className="invalid-feedback">Enter a valid email</div>
//             )}
//           </div>

//           <div className="mb-3">
//             <label htmlFor="password" className="form-label">
//               Password
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               className={`form-control ${errors.password ? "is-invalid" : ""}`}
//               value={formData.password}
//               onChange={handleChange}
//             />
//             {errors.password && (
//               <div className="invalid-feedback">
//                 Password must be at least 6 characters
//               </div>
//             )}
//           </div>

//           <div className="d-grid">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Form;
