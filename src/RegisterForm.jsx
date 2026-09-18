import { useFormik } from "formik";
import * as Yup from 'yup'

const initialValues = {
  fullname: "",
  email: "",
  password: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  fullname :Yup.string().required("لطفا این قسمت را کامل کنید"),
  email :Yup.string().required("لطفا این قسمت را کامل کنید").email("لطفا قالب ایمیل را رعایت کنید"),
  password :Yup.string().required("لطفا این قسمت را کامل کنید").min(8,"حداقل 8 کاراکتر وارد کنید")
})

const RegisterForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  console.log(formik);

  return (
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

        <form className="space-y-5" onSubmit={formik.handleSubmit}>
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              نام و نام خانوادگی
            </label>

            <input
              {...formik.getFieldProps("fullname")}
              id="fullName"
              name="fullname"
              type="text"
              placeholder="مثلاً علی احمدی"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            {formik.errors.fullname && formik.touched.fullname ? (
              <span className="text-red-600 text-center font-medium">
                {formik.errors.fullname}
              </span>
            ) : null}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              ایمیل
            </label>

            <input
              name="email"
              {...formik.getFieldProps("email")}
              id="email"
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />

            {formik.errors.email && formik.touched.email ? (
              <span className="text-red-600 text-center font-medium">
                {formik.errors.email}
              </span>
            ) : null}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              رمز عبور
            </label>

            <input
              name="password"
              {...formik.getFieldProps("password")}
              id="password"
              type="password"
              placeholder="رمز عبور خود را وارد کنید"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
            />
            {formik.errors.password && formik.touched.password ? (
              <span className="text-red-600 text-center font-medium">
                {formik.errors.password}
              </span>
            ) : null}
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
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
