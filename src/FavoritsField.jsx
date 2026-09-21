import { ErrorMessage, Field } from "formik";
import PersonalError from "./PersonalError";

const FavoritsField = (props) => {
  const { form, push, remove } = props;
  const { faivorits } = form.values;
  console.log(props);
  return (
    <>
      <button
        type="button"
        className="text-2xl text-green-500 mx-3 my-1 cursor-pointer"
        onClick={() => push("")}
      >
        +
      </button>
      <label
        htmlFor="faivorits"
        className=" text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        علاقه‌مندی
      </label>
      {faivorits.map((f, i) => (
        <div className="relative">
          <Field
            type="text"
            id="faivorits"
            name={`faivorits[${i}]`}
            className="w-full px-4 py-3 my-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
          />
          {faivorits.length > 1 ? (
            <button
              type="button"
              className="text-3xl cursor-pointer text-red-600 absolute top-1.75 left-2"
              onClick={() => remove(i)}
            >
              ×
            </button>
          ) : null}

          <ErrorMessage name={`faivorits[${i}]`} component={PersonalError} />
        </div>
      ))}
    </>
  );
};

export default FavoritsField;
