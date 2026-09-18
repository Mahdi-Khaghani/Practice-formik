const PersonalField = ({field,form,meta}) => {
  return (
    <>
      <input
        type="text"
        name="fullname"
        id="fullname"
        {...field}
        placeholder="نام  خود را وارد کنید"
        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-800 dark:text-white outline-none focus:ring-2 focus:ring-blue-500"
      />
      {meta.error && form.touched ? (
        <span className="text-red-600 text-center">{meta.error}</span>
      ) : null}
    </>
  );
};

export default PersonalField;
