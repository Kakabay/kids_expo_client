import { useEffect } from 'react';
import { useParticipantsForm } from '../../services/zustand/zusForm';

export const SubmitModal = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => document.body.classList.remove('overflow-hidden');
  }, []);

  const setSuccess = useParticipantsForm((state) => state.setSuccess);
  const success = useParticipantsForm((state) => state.success);

  console.log(success);

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 z-[3000] px-5 backdrop-blur-sm overflow-hidden w-full h-screen bg-purple/50">
      <div className="w-full max-w-[630px] text-white top-[50%] relative translate-y-[-50%] mx-auto my-auto flex flex-col gap-6 text-center">
        <h1 className="font-semibold text-[34px]">Ваша заявка принята</h1>

        <p className="leading-[150%] text-[13px] sm:text-[16px]">
          После отправки правильно заполненной формы с Вами свяжется менеджер, который будет
          курировать все вопросы по участию Вашей компании в выставке.
        </p>

        <button
          onClick={() => setSuccess('error')}
          type="button"
          className="bg-purple text-white transition-all rounded-sm p-4 font-medium text-[14px] w-fit mx-auto shadow-[0_3px_4px_0_rgba(0,0,0,0.2)]">
          Закрыть окно
        </button>
      </div>
    </div>
  );
};
