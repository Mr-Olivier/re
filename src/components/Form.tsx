////////////////////////////////////////////////////////
// Disabling the Submit Button

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 character" }),
  age: z
    .number({ invalid_type_error: "Age field is required." })
    .min(18, { message: "Age must be at least 18." }),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;

////////////////////////////////////////////////////////
// Schema based Validation with Zod

// import { useForm } from "react-hook-form";

// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// const schema = z.object({
//   name: z.string().min(3, { message: "Name must be at least 3 character" }),
//   age: z
//     .number({ invalid_type_error: "Age field is required." })
//     .min(18, { message: "Age must be at least 18." }),
// });

// type FormData = z.infer<typeof schema>;

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({ resolver: zodResolver(schema) });

//   const onSubmit = (data: FormData) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           {...register("name")}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//         {errors.name && <p className="text-danger">{errors.name.message}</p>}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           {...register("age", { valueAsNumber: true })}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//         {errors.age && <p className="text-danger">{errors.age.message}</p>}
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

////////////////////////////////////////////////////////
// Applying Validation

// import React, { FormEvent, useState } from "react";
// import { FieldValues, useForm } from "react-hook-form";

// interface FormData {
//   name: string;
//   age: number;
// }

// const Form = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit = (data: FieldValues) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           {...register("name", { required: true, minLength: 3 })}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//         {errors.name?.type === "required" && (
//           <p className="text-danger">The name field is required.</p>
//         )}
//         {errors.name?.type === "minLength" && (
//           <p className="text-danger">The name must be at least 3 characters.</p>
//         )}
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           {...register("age", { required: true, min: 18 })}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//         {errors.age?.type === "required" && (
//           <p className="text-danger">The age field is required.</p>
//         )}
//         {errors.age?.type === "min" && (
//           <p className="text-danger">Age must be at least 18.</p>
//         )}
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

///////////////////////////////////////////////////////
// Managing Forms with React Hook Form

// import React, { FormEvent, useState } from "react";
// import { FieldValues, useForm } from "react-hook-form";

// const Form = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data: FieldValues) => console.log(data);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           {...register("name")}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           {...register("age")}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

///////////////////////////////////////////////////////
// Controlled Components

// import React, { FormEvent, useState } from "react";

// const Form = () => {
//   const [person, setPerson] = useState({
//     name: "",
//     age: "",
//   });

//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     console.log(person);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="mb-3">
//         <label htmlFor="name" className="form-label">
//           Name
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, name: event.target.value })
//           }
//           value={person.name}
//           id="name"
//           type="text"
//           className="form-control"
//         />
//       </div>
//       <div className="mb-3">
//         <label htmlFor="age" className="form-label">
//           Age
//         </label>
//         <input
//           onChange={(event) =>
//             setPerson({ ...person, age: parseInt(event.target.value) })
//           }
//           value={person.age}
//           id="age"
//           type="number"
//           className="form-control"
//         />
//       </div>
//       <button className="btn btn-primary" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// export default Form;

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
