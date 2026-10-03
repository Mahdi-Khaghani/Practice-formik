import { ErrorMessage, FastField, FieldArray, Form, Formik } from "formik";
import * as Yup from "yup";
import PersonalError from "./PersonalError";
import FavoritsField from "./FavoritsField";
import { useEffect, useState } from "react";
import FormikControl from "./formikElements/FormikControl";

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
  education: 1,
  gender: 1,
  skill : []
};

const onSubmit = (values, submitProps) => {
  console.log(values);
  setTimeout(() => {
    submitProps.setSubmitting(false);
    submitProps.resetForm();
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
  education: Yup.string().required("لطفا این قسمت را کامل کنید"),
});

const educations = [
  { id: 1, value: "ابتدایی" },
  { id: 2, value: "سیکل" },
  { id: 3, value: "دیپلم" },
  { id: 4, value: "لیسانس" },
];

const gender = [
  { id: 1, value: "مرد" },
  { id: 2, value: "زن" },
];

const skills = [
  { id: 1, value: "HTML" },
  { id: 2, value: "CSS" },
  { id: 1, value: "REACT" },
  { id: 2, value: "JAVASCRIPT" },
];

const RegisterForm = () => {
  const [savedData, setSavedData] = useState(null);
  const [myValues, setMyValues] = useState(null);
  const handleGetSaveData = () => {
    console.log(savedData);
    setMyValues(savedData);
  };
  const handleSaveData = (formik) => {
    localStorage.setItem("savedData", JSON.stringify(formik.values));
  };
  useEffect(() => {
    const localSavedData = JSON.parse(localStorage.getItem("savedData"));
    setSavedData(localSavedData);
  }, []);
  return (
    <Formik
      initialValues={myValues || initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      enableReinitialize
      // validateOnMount
      // validateOnBlur={false}
      // validateOnChange={false}
    >
      {(formik) => {
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
                <FormikControl
                  control="input"
                  type="text"
                  label="نام و نام خانوادگی"
                  name="fullname"
                />

                {/* Email */}
                <FormikControl
                  control="input"
                  type="email"
                  label="ایمیل"
                  name="email"
                />

                {/* Password */}
                <FormikControl
                  control="input"
                  type="password"
                  label="رمزعبور"
                  name="password"
                />

                <FormikControl control="textarea" label="بیوگرافی" name="bio" />

                <FormikControl
                  control="select"
                  label="تحصیلات"
                  name="education"
                  options={educations}
                />

                <FormikControl
                  control="radio"
                  label="جنسیت"
                  name="gender"
                  options={gender}
                />

                <FormikControl
                  control="checkbox"
                  label="تخصص"
                  name="skill"
                  options={skills}
                />

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
                  disabled={
                    formik.isSubmitting || !(formik.isValid && formik.dirty)
                  }
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
                {formik.isValid && formik.dirty ? (
                  <button
                    type="button"
                    onClick={() => handleSaveData(formik)}
                    className="w-full py-3 bg-blue-600 flex justify-center items-center hover:bg-blue-700 text-white font-medium rounded-lg transition"
                  >
                    ذخیره در این سیستم
                  </button>
                ) : null}

                {savedData ? (
                  <button
                    type="button"
                    onClick={handleGetSaveData}
                    className="w-full py-3 bg-blue-600 flex justify-center items-center hover:bg-blue-700 text-white font-medium rounded-lg transition"
                  >
                    دریافت اخرین اطلاعات
                  </button>
                ) : null}

                {formik.dirty ? (
                  <button
                    type="reset"
                    className="w-full py-3 bg-blue-600 flex justify-center items-center hover:bg-blue-700 text-white font-medium rounded-lg transition"
                  >
                    پاک کردن
                  </button>
                ) : null}
              </Form>
            </div>
          </div>
        );
      }}
    </Formik>
  );
};

export default RegisterForm;
