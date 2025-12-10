import React from 'react';

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-emerald-400/80">Em breve</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Estamos finalizando os detalhes para abrir este site ao publico.
        </h1>
        <p className="text-slate-400 leading-relaxed">
          Neste momento estamos cuidando de etapas legais e registrais antes do lancamento. Assim que concluirmos, liberaremos o acesso completo.
        </p>
        <div className="space-y-2 text-sm text-slate-500">
          <p>Se precisar falar com a equipe, entre em contato por e-mail:</p>
          <p className="text-slate-200 font-semibold">contato@migreimle.com.br</p>
        </div>
        <p className="text-xs text-slate-500">Nenhuma informacao esta armazenada aqui durante este periodo.</p>
      </div>
    </div>
  );
};

export default ComingSoon;
