
export default function FormInput({ inputInfo, inputStyles, inputListStyles, errorStyle,
  register,
  errors}) {
    const options = {
      required: inputInfo.required,
      pattern: inputInfo.pattern,
  }
  return (
    <div className={inputListStyles}>
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
        className={`${inputStyles}  ${errors[inputInfo.formData]  ? 'border-errorColor'  : 'border-secondary'}`}
        {...register(inputInfo.formData, options)}
      />
      {inputInfo.required && errors[inputInfo.formData] && (
                <div className={errorStyle}>
                    {inputInfo.error}
                </div>
            )}
    </div>
  );
}
