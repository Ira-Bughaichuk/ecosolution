import s from './ContactForm.module.css';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    alert(`
        Full Name:${data.fullName},
        Email:${data.email},
        Message:${data.message || ""}`);
    reset();
  };
  return (
    <form action=""  onSubmit={handleSubmit(onSubmit)}>
       <div className="flex flex-col tablet:w-[221px] desktop:w-full relative">
            <label className="label" htmlFor="contact-name">
               Full name:
            </label>
            <input
              id="contact-name"
              autoComplete="name"
              aria-label="Name"
              className="input"
              placeholder="John Rosie"
              {...register("fullName", {
                required: "Incorrect name",
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Enter only words",
                },
              })}
            />
            <div className="flex justify-end absolute bottom-[-22px] right-0">
              {errors?.fullName && (
                  <p className="text-errorColor text-xs leading-6 tracking-[2.4px] ml-1">
                    {errors?.fullName?.message}
                  </p>
              )}
            </div>
          </div>
    </form>
  )
}
