import React from 'react';

export default function EmailApp() {
  const emails = [
    { subject: 'Projeto Aprovado!', from: 'cliente@empresa.com', preview: 'Parabéns! Seu projeto foi aprovado...', unread: true },
    { subject: 'Nova Mensagem do Time', from: 'equipe@empresa.com', preview: 'Temos novidades sobre o projeto...', unread: true },
    { subject: 'Confirmação de Reunião', from: 'contato@empresa.com', preview: 'Sua reunião está confirmada para...', unread: false },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-3">
      {emails.map((email, i) => (
        <div key={i} className={`bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition cursor-pointer ${email.unread ? 'border-l-4 border-l-purple-500' : ''}`}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
              {email.from[0].toUpperCase()}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-white font-bold">{email.subject}</h4>
                {email.unread && <span className="w-2 h-2 bg-purple-500 rounded-full"></span>}
              </div>
              <p className="text-white/70 text-sm mb-1">{email.from}</p>
              <p className="text-white/50 text-sm">{email.preview}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}