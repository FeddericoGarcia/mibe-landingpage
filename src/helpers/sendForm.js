import emailjs from "emailjs-com";

export const sendForm = (formRef) => {
  const form = formRef.current;

  const formData = {
    name: form.querySelector("#name").value,
    email: form.querySelector("#email").value,
    telephone: form.querySelector("#telephone").value,
    message: form.querySelector("#message").value,
  };

  console.log("form" , formData)
  console.log(formData.name, formData.email, formData.telephone)

  return emailjs.send(
    "service_9sft93o",
    "templateMB_jkymrp2",
    formData,
    "W5meNDp9qPv2TsDJu"
  );
};
