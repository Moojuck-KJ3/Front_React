import React from 'react';

const AddedTag: React.FC = ({ tag, onDelete }) => {
  const handleDelete = () => {
    console.log(tag.id);
    onDelete(tag);
  };

  return (
    <div className="my-1 p-3 flex items-center justify-between border rounded-lg hover:scale-105 transition-all ">
      <div className="flex items-center">
        <div className="leading-snug text-sm text-gray-900 font-bold">{tag.title}</div>
      </div>
      <div className="flex gap-2">
        <button onClick={handleDelete} className="text-xl font-bold hover:scale-105 transition-all">
          ❌
        </button>
      </div>
    </div>
  );
};

export default AddedTag;
