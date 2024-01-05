
export default function FormTextArea({ textarea, inputListStyles, textAreaStyles, register}) {
    return (
        <div className={inputListStyles}>
            <label htmlFor={textarea.id} className="base-text block">
                {textarea.label}
            </label>
            <textarea
                id={textarea.id}
                autoComplete={textarea.autoComplete}
                placeholder={textarea.placeholder}
                aria-label={textarea.aria}
                className={`resize-none ${textAreaStyles}`}
                    {...register(textarea.formData)}
            ></textarea>
        </div>
    )
}
