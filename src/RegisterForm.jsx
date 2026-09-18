import { ErrorMessage, FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import PersonalField from "./PersonalField";
import PersonalError from "./PersonalError";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  bio: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("لطفا این قسمت را کامل کنید"),
  email: Yup.string()
    .required("لطفا این قسمت را کامل کنید")
    .email("لطفا قالب ایمیل را رعایت کنید"),
  password: Yup.string()
    .required("لطفا این قسمت را کامل کنید")
    .min(8, "حداقل 8 کاراکتر وارد کنید"),
});

const RegisterForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
              ثبت نام
            </h1>

            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              حساب کاربری جدید خود را ایجاد کنید
            </p>
          </div>

          <Form className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                نام و نام خانوادگی
              </label>

              <FastField
                id="fullName"
                name="fullname"
                type="text"
                placeholder="مثلاً علی احمدی"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                {(props) => {
                  console.log(props);
                  return <PersonalField {...props} />;
                }}
              </FastField>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                ایمیل
              </label>

              <FastField
                name="email"
                id="email"
                type="email"
                placeholder="example@gmail.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />

              <ErrorMessage name="email" component={PersonalError} />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                رمز عبور
              </label>

              <FastField
                name="password"
                id="password"
                type="password"
                placeholder="رمز عبور خود را وارد کنید"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage name="password">
                {(error) => (
                  <span className="text-red-600 font-medium text-center">
                    {error}
                  </span>
                )}
              </ErrorMessage>
            </div>

            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                بیوگرافی
              </label>

              <FastField
                name="bio"
                id="bio"
                type="text"
                placeholder=" بیوگرافی خود را وارد کنید"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                as="textarea"
              />
              <ErrorMessage name="bio" />
            </div>

            {/* Favorite */}
            <div>
              <label
                htmlFor="favorite"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                علاقه‌مندی
              </label>

              <select
                id="favorite"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">انتخاب کنید</option>
                <option value="programming">برنامه نویسی</option>
                <option value="design">طراحی</option>
                <option value="gaming">بازی</option>
                <option value="music">موسیقی</option>
              </select>
            </div>
            {/* Submit */}
            <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition">
              ثبت نام
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default RegisterForm;
