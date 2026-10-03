import { ErrorMessage, FastField } from "formik";
import PersonalError from "../PersonalError";

const TextArea = (props) => {
  const { name, label } = props;
  const validateBio = (value) => {
    let error;
    if (!value) {
      error = "ورود این فیلد اجباری است";
    } else if (!/^[\u0600-\u06FF\s0-9a-zA-Z]+$/.test(value)) {
      error = "لطفا قالب نوشتاری را رعایت کنید";
    }
    return error;
  };
  return (
    <div>
      <label
        htmlFor="bio"
        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
      >
        {label}
      </label>

      <FastField
        validate={validateBio}
        name={name}
        id={name}
        as="textarea"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ErrorMessage name={name} component={PersonalError} />
    </div>
  );
};

export default TextArea;
