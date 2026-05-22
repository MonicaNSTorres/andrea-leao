export const siteConfig = {
  name: "Andréa Leão",
  title: "Andréa Leão | Psicóloga em São José dos Campos e Online",
  description:
    "Psicóloga em São José dos Campos, com atendimento presencial no Jardim Aquarius e atendimento online para todo o Brasil.",
  url: "https://www.seudominio.com.br",
  whatsappNumber: "5512981788004",
  address:
    "Av. Alfredo Ignácio Nogueira Penido, 255 - Jardim Aquarius, São José dos Campos - SP, 12246-000",
  city: "São José dos Campos",
  state: "SP",
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  "Olá, Andréa. Gostaria de agendar uma consulta."
)}`;