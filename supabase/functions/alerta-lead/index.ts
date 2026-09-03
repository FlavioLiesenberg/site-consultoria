import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const resendApiKey = Deno.env.get("RESEND_API_KEY");

serve(async (req) => {
  const payload = await req.json();
  const lead = payload.record; 

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: "onboarding@resend.dev", 
      to: "flavio@l2consultorias.com.br", // <-- COLOQUE SEU E-MAIL AQUI
      subject: `🚨 Novo Lead: ${lead.name}`,
      html: `
        <h2>Novo pedido de Diagnóstico de Caixa!</h2>
        <p><strong>Nome:</strong> ${lead.name}</p>
        <p><strong>WhatsApp:</strong> ${lead.whatsapp}</p>
        <p><strong>E-mail corporativo:</strong> ${lead.email}</p>
        <p><strong>Faturamento:</strong> ${lead.revenue}</p>
        <p><strong>Principal Desafio:</strong> ${lead.challenge}</p>
      `,
    }),
  });

  const data = await res.json();
  return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
});