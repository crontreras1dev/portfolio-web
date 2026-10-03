export const EMAIL = "crontreras1dev@gmail.com";

export const sendEmail = (t) => {
  const subject = encodeURIComponent(t("email.subject"));
  const body = encodeURIComponent(t("email.body"));

  window.location.href = `mailto:${ EMAIL }?subject=${ subject }&body=${ body }`;
};
