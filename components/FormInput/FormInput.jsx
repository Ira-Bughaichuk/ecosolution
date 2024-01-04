
export default function FormInput({ inputInfo, inputStyles, inputListStyles, errorStyle,
  register,
  errors}) {
    const options = {
      required: inputInfo.required,
      pattern: inputInfo.pattern,
  }
  return (
    <div className={`${inputListStyles} font-firasans`}>
      <label
        htmlFor={inputInfo.id}
        className='base-text block'
      >
        {inputInfo.label}
      </label>
      <input
        id={inputInfo.id}
        type={inputInfo.type}
        autoComplete={inputInfo.autoComplete}
        placeholder={inputInfo.placeholder}
        aria-label={inputInfo.aria}
        className={`${inputStyles} font-firasans  ${errors[inputInfo.formData]  ? 'border-errorColor'  : 'border-secondary'}`}
        {...register(inputInfo.formData, options)}
      />
      {inputInfo.required && errors[inputInfo.formData] && (
                <div className={`${errorStyle} font-firasans`}>
                    {inputInfo.error}
                </div>
            )}
    </div>
  );
}
