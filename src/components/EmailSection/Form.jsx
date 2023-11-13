import React,{useState} from "react";

const Form = () =>{
const [emailSubmmited, setEmailSubmmited] = useState();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        email: e.target.email.value,
        subject: e.target.subject.value,
        message: e.target.message.value,
      };

      const endpoint = "/api/send";

      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setEmailSubmmited(true);
      if (response.status === 200) {
        console.log("--> ENVIADO!");
      }
    };

  return (
    <form className="flex flex-col " onSubmit={handleSubmit}>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-white block  text-sm mb-2 font-medium"
        >
          Email
        </label>
        <input
          name="email"
          type="email"
          id="email"
          required
          className="placeholder-[#9CA2A9] text-gray-100 text-sm block w-full p-2.5 shadow-inner  shadow-black  border-4 bg-[#170b3b3c] border-[#1c1c1c] focus:bg-[#2E2E2E] focus:none"
          placeholder="tuEmail@ejemplo.com"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="subject"
          className="text-white block  mb-2 text-sm font-medium"
        >
          Asunto
        </label>
        <input
          name="subject"
          type="text"
          id="subject"
          required
          className="placeholder-[#9CA2A9] text-gray-100 text-sm  block w-full p-2.5 shadow-inner  shadow-black  border-4 bg-[#170b3b3c] border-[#1c1c1c] focus:bg-[#2E2E2E] focus:none"
          placeholder="Búsquedas abiertas"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          {" "}
          Mensaje
        </label>
        <textarea
          name="message"
          id="message"
          className="placeholder-[#9CA2A9] text-gray-100 text-sm  block w-full p-2.5 shadow-inner  shadow-black  border-4 bg-[#170b3b3c] border-[#1c1c1c] focus:bg-[#2E2E2E] focus:none"
          placeholder="Hola! ¿Cómo estás?"
        />
      </div>
      <button
        type="submit"
        className="shadow-black shadow  cursor-pointer px-6 py-3 text-xl w-full font-medium hover:text-[#BFFF00]"
      >
        Enviar
      </button>
      {emailSubmmited && (
        <p class=" text-green text-sm mt-2">Mensaje enviado! 😊</p>
      )}
    </form>
  );
}

export default Form;