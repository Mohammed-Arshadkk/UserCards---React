import React from 'react'

function Card({ user }) {
  return (
    <div className="bg-blue-500 text-white w-96 h-64 flex flex-col justify-center items-center border rounded-md shadow-lg">
      <img
        src={`https://source.unsplash.com/200x200/?${user.name}`}
        alt={user.name}
        className="w-20 h-20 rounded-full mb-4"
      />
      <div className="text-xl font-bold mb-2">{user.name}</div>
      <p className="text-gray-300">{user.email}</p>
      <div className="mt-4 flex space-x-2">
        <span className="bg-gray-800 text-white px-2 py-1 rounded-md text-sm">
        ID: {user.id}
        </span>
      </div>
    </div>
  );
}


export default Card
