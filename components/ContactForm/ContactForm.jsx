'use client';
import { useForm } from 'react-hook-form';
import useFormPersist from 'react-hook-form-persist';
import toast from "react-hot-toast";
import { contactForm } from '@/utils/Data/contactForm';
import FormInput from '../FormInput/FormInput';
import FormTextArea from '../FormTextArea/FormTextArea';
import BtnContact from '../BtnContact/BtnContact';
import s from './ContactForm.module.css';


export default function ContactForm() {
   const {inputs, textarea} = contactForm;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch, 
    setValue,
    reset,
  } = useForm({ mode: "onBlur" });
  useFormPersist('contactsForm', {watch, setValue});

  const onSubmit = (data) => {
    toast.success(`
        Full Name:${data.fullName},
        Email:${data.email},
        Email:${data.phone},
        Message:${data.message || ""}`);
    reset();
  };
  return (
    <form action="#"  onSubmit={handleSubmit(onSubmit)} className={s.form__container}>
          {inputs.map(inputInfo => 
                        <div className={s.input__list} key={inputInfo.id}>
                            <FormInput 
                                inputInfo={inputInfo}
                                register={register}
                                errors={errors}
                                inputStyles={s.input} 
                                inputListStyles={s.input__item}
                                errorStyle={s.error__message}
                            />
                        </div>          
            )}
            <div>
                 <FormTextArea textarea={textarea} register={register}
                    inputListStyles={s.input__item}
                    textAreaStyles={s.textarea}
                  />
                  <div className={s.form__btn}>
                    <BtnContact title={'Send'}/>
                  </div>
             </div>
    </form>
  )
}
