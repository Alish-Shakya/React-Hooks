// function BlogPost({ title, author, content }) {
//   return (
//     <div className="blog-post p-10 ">
//       <h2 className="text-red-400">{title}</h2>
//       <p>
//         <strong>By:</strong> {author}
//       </p>
//       <p>{content}</p>
//     </div>
//   );
// }

// export default function PassingProps() {
//   return (
//     <div>
//       <BlogPost
//         title="React Props Explained"
//         author="Alish"
//         content="Props are like function arguments..."
//       />
//       <BlogPost
//         title="Learning Tailwind CSS"
//         author="Sita"
//         content="Tailwind makes styling easy..."
//       />

//       <BlogPost
//         title="Lern Mern"
//         author="Gyan"
//         content="learn full stack web development"
//       />
//     </div>
//   );
// }
import React from "react";

// 1️⃣ Child Component
const UserCard = ({ name, age, address }) => {
  return (
    <div className="p-4 m-2 border-2 border-blue-400 rounded">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Address: {address}</p>
    </div>
  );
};

// 2️⃣ Parent Component
const PassingProps = () => {
  const data = [
    { name: "Alish", age: 20, address: "Kapan" },
    { name: "Ram", age: 22, address: "Chabel" },
  ];

  return (
    <div className="p-10 flex justify-center items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Learning Props</h1>

      {/* Map through data and pass props to child */}
      {data.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          age={user.age}
          address={user.address}
        />
      ))}
    </div>
  );
};

export default PassingProps;
