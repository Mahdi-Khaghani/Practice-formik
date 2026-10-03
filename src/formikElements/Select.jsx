import { FastField } from "formik";

const Select = (props) => {
  const {name,label,options} = props
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
        as="select"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
      >
        {
            options.map((o) => (
                <option key={o.id} value={o.id}>{o.value}</option>
            ))
        }
      </FastField>
    </div>
  );
};

export default Select;
