import { FastField } from "formik";
import PersonalField from "../PersonalField";

const InputElement = (props) => {
  const {name,label,type} = props
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
           {label}
      </label>

      <FastField
        id={name}
        name={name}
        type={type}
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
      >
        {(props) => {
          return <PersonalField {...props} />;
        }}
      </FastField>
    </div>
  );
};

export default InputElement;
