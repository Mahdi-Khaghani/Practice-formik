import { FastField } from "formik";
import { Fragment } from "react/jsx-runtime";

const Checkbox = (props) => {
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
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
      >
        {
            ({field}) => {
                return options.map((o) => (
                    <Fragment key={o.id}>
                        <input type="checkbox"
                        id={o.id}
                        {...field}
                        value={o.value}
                        checked={field.value.includes(o.value)}
                        />
                        <label htmlFor={`radio${o.id}`}>{o.value}</label>
                    </Fragment>
                ))
            }
        }
      </FastField>
    </div>
  );
};

export default Checkbox;
