import React, { ChangeEvent } from 'react';

interface InputWithLabelProps {
  type: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({ type, value, setValue, placeholder }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <input
        className="w-full mt-4 px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder} // Corrected the typo in the prop name
      />
    </>
  );
};

export default InputWithLabel;
