import { ErrorMessage, FastField, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import PersonalField from "./PersonalField";
import PersonalError from "./PersonalError";
import FavoritsField from "./FavoritsField";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  bio: "",
  address: {
    city: "",
    postalCode: "",
  },
  phone: ["", ""],
  faivorits: [""],
};

const onSubmit = (values, submitProps) => {
  console.log(values);
  setTimeout(() => {
    submitProps.setSubmitting(false);
  }, 5000);
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("لطفا این قسمت را کامل کنید"),
  email: Yup.string()
    .required("لطفا این قسمت را کامل کنید")
    .email("لطفا قالب ایمیل را رعایت کنید"),
  password: Yup.string()
    .required("لطفا این قسمت را کامل کنید")
    .min(8, "حداقل 8 کاراکتر وارد کنید"),
  address: Yup.object({
    city: Yup.string().required("لطفا این قسمت را کامل کنید"),
    postalCode: Yup.string().required("لطفا این قسمت را کامل کنید"),
  }),
  phone: Yup.array().of(Yup.string().required("لطفا این قسمت را کامل کنید")),
  faivorits: Yup.array().of(
    Yup.string().required("لطفا این قسمت را کامل کنید"),
  ),
});

const validateBio = (value) => {
  let error;
  if (!value) {
    error = "ورود این فیلد اجباری است";
  } else if (!/^[\u0600-\u06FF\s0-9a-zA-Z]+$/.test(value)) {
    error = "لطفا قالب نوشتاری را رعایت کنید";
  }
  return error;
};

const RegisterForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      // validateOnMount
      // validateOnBlur={false}
      // validateOnChange={false}
    >
      {(formik) => {
        console.log(formik);
        return (
          <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-7">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                  ثبت نام
                </h1>

                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  حساب کاربری جدید خود را ایجاد کنید
                </p>
              </div>

              <Form className="space-y-4">
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
                    validate={validateBio}
                    name="bio"
                    id="bio"
                    type="text"
                    placeholder=" بیوگرافی خود را وارد کنید"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                    as="textarea"
                  />
                  <ErrorMessage name="bio" component={PersonalError} />
                </div>
                <div className="w-full flex items-center gap-2.5">
                  <div className="w-[49%]">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      شهر
                    </label>

                    <FastField
                      name="address.city"
                      id="city"
                      type="text"
                      placeholder="شهر خود را وارد کنید"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <ErrorMessage
                      name="address.city"
                      component={PersonalError}
                    />
                  </div>

                  <div className="w-[49%]">
                    <label
                      htmlFor="postalCode"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      کد پستی
                    </label>

                    <FastField
                      name="address.postalCode"
                      id="poatalCode"
                      type="text"
                      placeholder="کدپستی خود را وارد کنید"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <ErrorMessage
                      name="address.postalCode"
                      component={PersonalError}
                    />
                  </div>
                </div>

                <div className="w-full flex items-center gap-2.5">
                  <div className="w-[49%]">
                    <label
                      htmlFor="mobilePhone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      شماره همراه
                    </label>

                    <FastField
                      name="phone[0]"
                      id="mobilePhone"
                      type="text"
                      placeholder="شهر خود را وارد کنید"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <ErrorMessage name="phone[0]" component={PersonalError} />
                  </div>

                  <div className="w-[49%]">
                    <label
                      htmlFor="telePhone"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                    >
                      شماره ثابت
                    </label>

                    <FastField
                      name="phone[1]"
                      id="telePhone"
                      type="text"
                      placeholder="کدپستی خود را وارد کنید"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <ErrorMessage name="phone[1]" component={PersonalError} />
                  </div>
                </div>
                {/* Favorite */}
                <div>
                  <FieldArray type="text" name="faivorits">
                    {(props) => <FavoritsField {...props} />}
                  </FieldArray>
                </div>
                {/* Submit */}
                <button
                  className="w-full py-3 bg-blue-600 flex justify-center items-center hover:bg-blue-700 text-white font-medium rounded-lg transition"
                  disabled={formik.isSubmitting || !(formik.isValid && formik.dirty)}
                >
                  {formik.isSubmitting ? (
                    <svg
                      className="size-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-25"
                      />
                      <path
                        d="M4 12a8 8 0 018-8"
                        stroke="currentColor"
                        strokeWidth="4"
                        className="opacity-75"
                      />
                    </svg>
                  ) : (
                    "ثبت نام"
                  )}
                </button>
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
